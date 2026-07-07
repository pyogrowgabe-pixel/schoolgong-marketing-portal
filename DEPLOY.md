# GitHub + Vercel 배포 방법

현재 PC에는 `git`, `gh`, `vercel`, `npm` 명령이 PATH에서 확인되지 않았습니다. 그래서 가장 쉬운 방법은 GitHub 웹 업로드 후 Vercel에서 Import 하는 방식입니다.

## 1. GitHub 저장소 만들기

1. GitHub에 로그인합니다.
2. New repository를 누릅니다.
3. 저장소 이름 예시: `schoolgong-marketing-portal`
4. Public 또는 Private 선택
5. Create repository를 누릅니다.

## 2. 파일 업로드

GitHub 저장소에서 `Add file` > `Upload files`를 누르고 아래 파일/폴더를 업로드합니다.

```text
api/
assets/
index.html
styles.css
app.js
package.json
vercel.json
README.md
.gitignore
API_SETUP.md
```

로컬 개발용 파일인 `server.ps1`, `server.log`, `server.err.log`는 Vercel 배포에는 필요 없습니다.

## 3. Vercel에서 GitHub 저장소 연결

1. Vercel에 로그인합니다.
2. Add New > Project를 누릅니다.
3. GitHub 저장소 `schoolgong-marketing-portal`을 Import 합니다.
4. Framework Preset은 `Other` 또는 자동 감지 그대로 둡니다.
5. Build Command는 비워둡니다.
6. Output Directory도 비워둡니다.

## 4. OpenAI 환경변수 설정

Vercel 프로젝트의 Settings > Environment Variables에서 추가합니다.

```text
OPENAI_API_KEY=sk-...
```

선택으로 모델도 바꿀 수 있습니다.

```text
OPENAI_TEXT_MODEL=gpt-4.1-mini
OPENAI_IMAGE_MODEL=gpt-image-1
```

환경변수를 추가한 뒤 반드시 Redeploy 해야 반영됩니다.

## 5. 배포 후 확인

배포 URL 예시:

```text
https://schoolgong-marketing-portal.vercel.app
```

관리자 화면의 OpenAI 제작실에서 API URL은 기본값 `/api/openai-content` 그대로 두면 됩니다.

## CLI가 설치된 PC에서 배포하는 방법

Git과 Vercel CLI가 설치되어 있다면 아래 흐름도 가능합니다.

```powershell
git init
git add .
git commit -m "Initial marketing portal"
git branch -M main
git remote add origin https://github.com/계정명/schoolgong-marketing-portal.git
git push -u origin main
```

Vercel CLI 사용 시:

```powershell
vercel
vercel env add OPENAI_API_KEY
vercel --prod
```
