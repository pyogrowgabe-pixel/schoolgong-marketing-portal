param(
  [int]$Port = 8787
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$TextModel = if ($env:OPENAI_TEXT_MODEL) { $env:OPENAI_TEXT_MODEL } else { "gpt-5.5" }
$ImageModel = if ($env:OPENAI_IMAGE_MODEL) { $env:OPENAI_IMAGE_MODEL } else { "gpt-image-2" }

function Write-JsonResponse {
  param(
    [System.Net.HttpListenerResponse]$Response,
    [int]$StatusCode,
    [object]$Body
  )
  $Response.StatusCode = $StatusCode
  $Response.ContentType = "application/json; charset=utf-8"
  $Response.Headers.Add("Access-Control-Allow-Origin", "*")
  $Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")
  $Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
  $json = $Body | ConvertTo-Json -Depth 20
  $bytes = [Text.Encoding]::UTF8.GetBytes($json)
  $Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $Response.Close()
}

function Get-RequestJson {
  param([System.Net.HttpListenerRequest]$Request)
  $reader = [IO.StreamReader]::new($Request.InputStream, [Text.Encoding]::UTF8)
  try {
    $raw = $reader.ReadToEnd()
    if ([string]::IsNullOrWhiteSpace($raw)) { return @{} }
    return $raw | ConvertFrom-Json
  } finally {
    $reader.Close()
  }
}

function Get-TextFromResponse {
  param($Response)
  if ($Response.output_text) { return [string]$Response.output_text }

  $parts = New-Object System.Collections.Generic.List[string]
  foreach ($item in @($Response.output)) {
    foreach ($content in @($item.content)) {
      if ($content.text) { [void]$parts.Add([string]$content.text) }
      if ($content.type -eq "output_text" -and $content.text) { [void]$parts.Add([string]$content.text) }
    }
  }
  return ($parts -join "`n").Trim()
}

function Invoke-OpenAIResponse {
  param(
    [string]$SystemPrompt,
    [string]$UserPrompt,
    [int]$MaxOutputTokens = 2200
  )
  $body = @{
    model = $TextModel
    input = @(
      @{ role = "system"; content = @(@{ type = "input_text"; text = $SystemPrompt }) },
      @{ role = "user"; content = @(@{ type = "input_text"; text = $UserPrompt }) }
    )
    max_output_tokens = $MaxOutputTokens
  }

  $headers = @{
    Authorization = "Bearer $env:OPENAI_API_KEY"
    "Content-Type" = "application/json"
  }

  return Invoke-RestMethod `
    -Uri "https://api.openai.com/v1/responses" `
    -Method Post `
    -Headers $headers `
    -Body ($body | ConvertTo-Json -Depth 20) `
    -TimeoutSec 120
}

function Invoke-OpenAIImage {
  param([string]$Prompt)
  $body = @{
    model = $ImageModel
    prompt = $Prompt
    size = "1536x1024"
  }

  $headers = @{
    Authorization = "Bearer $env:OPENAI_API_KEY"
    "Content-Type" = "application/json"
  }

  return Invoke-RestMethod `
    -Uri "https://api.openai.com/v1/images/generations" `
    -Method Post `
    -Headers $headers `
    -Body ($body | ConvertTo-Json -Depth 20) `
    -TimeoutSec 180
}

function New-BlogPrompt {
  param($Payload)
  $client = $Payload.client
  $content = $Payload.content
  $tone = if ($Payload.tone) { $Payload.tone } else { "전문적이고 신뢰감 있게" }
  $goal = if ($Payload.goal) { $Payload.goal } else { "없음" }

  return @"
업체명: $($client.name)
원장님: $($client.owner)
분야/지역: $($client.area)
운영 기간: $($client.period)
콘텐츠 키워드: $($content.keyword)
현재 제목: $($content.title)
기존 초안: $($content.body)
이미지 방향: $($content.image)
발행 예정: $($content.due)
톤: $tone
추가 요청: $goal

위 정보를 바탕으로 학원 마케팅용 네이버 블로그 글 초안을 작성해줘.
요구사항:
- 제목 후보 3개를 먼저 제안
- 본문은 학부모가 읽기 쉬운 한국어
- 과장 광고처럼 보이지 않게 신뢰감 있게 작성
- 상담 전환 문단 포함
- 마지막에 이미지/썸네일에 넣으면 좋은 짧은 문구 3개 포함
"@
}

function New-ThumbnailPrompt {
  param($Payload)
  $client = $Payload.client
  $content = $Payload.content
  $tone = if ($Payload.tone) { $Payload.tone } else { "전문적이고 신뢰감 있게" }
  $goal = if ($Payload.goal) { $Payload.goal } else { "없음" }

  return @"
학원 마케팅 블로그 썸네일용 이미지.
업체명: $($client.name)
키워드: $($content.keyword)
글 제목: $($content.title)
이미지 콘셉트: $($content.image)
톤: $tone
추가 요청: $goal

시각 요구사항:
- 교육 콘텐츠 느낌의 신뢰감 있는 16:9 썸네일
- 학습 노트, 문제 풀이, 수업 자료, 체크리스트 같은 실제적인 교육 오브젝트 중심
- 복잡한 장식 없이 깔끔한 구성
- 과한 광고 배너 느낌 금지
- 워터마크, 로고, 읽기 어려운 작은 글자 금지
- 텍스트는 꼭 필요할 때만 짧게 사용
"@
}

function Handle-OpenAIContent {
  param(
    [System.Net.HttpListenerRequest]$Request,
    [System.Net.HttpListenerResponse]$Response
  )

  if (-not $env:OPENAI_API_KEY) {
    Write-JsonResponse $Response 500 @{
      error = "OPENAI_API_KEY 환경변수가 설정되어 있지 않습니다. PowerShell에서 `$env:OPENAI_API_KEY='sk-...' 설정 후 server.ps1을 다시 실행해주세요."
    }
    return
  }

  try {
    $payload = Get-RequestJson $Request
    $type = [string]$payload.type

    if ($type -eq "blog") {
      $system = "너는 학원 마케팅 대행사의 시니어 콘텐츠 라이터다. 결과는 한국어로 작성한다."
      $prompt = New-BlogPrompt $payload
      $result = Invoke-OpenAIResponse -SystemPrompt $system -UserPrompt $prompt -MaxOutputTokens 2600
      $text = Get-TextFromResponse $result
      Write-JsonResponse $Response 200 @{
        body = $text
        text = $text
        model = $TextModel
      }
      return
    }

    if ($type -eq "thumbnail") {
      $prompt = New-ThumbnailPrompt $payload
      $result = Invoke-OpenAIImage -Prompt $prompt
      $first = @($result.data)[0]
      $imageUrl = $null
      if ($first.b64_json) { $imageUrl = "data:image/png;base64,$($first.b64_json)" }
      elseif ($first.url) { $imageUrl = $first.url }

      Write-JsonResponse $Response 200 @{
        thumbnailPrompt = $prompt
        prompt = $prompt
        imageUrl = $imageUrl
        model = $ImageModel
      }
      return
    }

    Write-JsonResponse $Response 400 @{ error = "지원하지 않는 type입니다. blog 또는 thumbnail을 사용하세요." }
  } catch {
    Write-JsonResponse $Response 500 @{
      error = $_.Exception.Message
    }
  }
}

function Serve-StaticFile {
  param(
    [System.Net.HttpListenerRequest]$Request,
    [System.Net.HttpListenerResponse]$Response
  )

  $localPath = [Uri]::UnescapeDataString($Request.Url.AbsolutePath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($localPath)) { $localPath = "index.html" }

  $fullPath = [IO.Path]::GetFullPath((Join-Path $Root $localPath))
  $rootPath = [IO.Path]::GetFullPath($Root)
  if (-not $fullPath.StartsWith($rootPath, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
    $Response.StatusCode = 404
    $bytes = [Text.Encoding]::UTF8.GetBytes("Not found")
    $Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $Response.Close()
    return
  }

  $ext = [IO.Path]::GetExtension($fullPath).ToLowerInvariant()
  $contentType = switch ($ext) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".webp" { "image/webp" }
    default { "application/octet-stream" }
  }

  $bytes = [IO.File]::ReadAllBytes($fullPath)
  $Response.StatusCode = 200
  $Response.ContentType = $contentType
  $Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $Response.Close()
}

$listener = [System.Net.HttpListener]::new()
$prefix = "http://127.0.0.1:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "학교공성장마케팅 API 서버 실행 중: $prefix"
Write-Host "OpenAI text model: $TextModel / image model: $ImageModel"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    if ($request.HttpMethod -eq "OPTIONS") {
      Write-JsonResponse $response 204 @{}
      continue
    }

    if ($request.Url.AbsolutePath -eq "/api/openai-content" -and $request.HttpMethod -eq "POST") {
      Handle-OpenAIContent -Request $request -Response $response
      continue
    }

    Serve-StaticFile -Request $request -Response $response
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
