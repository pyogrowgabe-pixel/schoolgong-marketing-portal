# OpenAI API 연결 방법

이 프로젝트는 브라우저에 OpenAI API 키를 직접 저장하지 않습니다. `server.ps1`이 로컬 프록시 서버 역할을 하며, 환경변수 `OPENAI_API_KEY`를 읽어 OpenAI API를 호출합니다.

## 1. API 키 설정

PowerShell에서 현재 창에만 설정하려면:

```powershell
$env:OPENAI_API_KEY="sk-..."
```

Windows에 계속 저장하려면:

```powershell
setx OPENAI_API_KEY "sk-..."
```

`setx`를 사용한 경우 새 PowerShell 창을 열어야 적용됩니다.

## 2. 서버 실행

```powershell
cd D:\학교공코덱스
powershell -NoProfile -ExecutionPolicy Bypass -File .\server.ps1 -Port 8787
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:8787/
```

## 3. 모델 변경

필요하면 서버 실행 전에 모델 환경변수를 바꿀 수 있습니다.

```powershell
$env:OPENAI_TEXT_MODEL="gpt-5.5"
$env:OPENAI_IMAGE_MODEL="gpt-image-2"
```

## 4. 사이트에서 사용하는 API 경로

관리자 화면의 `OpenAI 제작실`에서 기본 API URL은 아래입니다.

```text
/api/openai-content
```

같은 서버에서 사이트를 열면 이 경로가 자동으로 동작합니다.
