# 학교공성장마케팅 콘텐츠 운영 포털

학원 마케팅 대행 업무를 위한 MVP입니다.

## 주요 기능

- 업체별 관리
- 키워드/블로그 콘텐츠 관리
- OpenAI 블로그 초안 생성
- OpenAI 썸네일 생성
- 캡처본 업로드
- 원장님 공유 화면
- 원장님 피드백: 발행, 사진추가예정, 문구수정요청, 원하는 발행시기

## Vercel 배포 구조

- `index.html`, `styles.css`, `app.js`: 정적 프론트엔드
- `api/openai-content.js`: Vercel 서버리스 API
- `vercel.json`: Vercel 배포 설정

## 환경변수

Vercel 프로젝트 Settings > Environment Variables에 아래 값을 추가해야 OpenAI 기능이 동작합니다.

```text
OPENAI_API_KEY=sk-...
```

선택 환경변수:

```text
OPENAI_TEXT_MODEL=gpt-4.1-mini
OPENAI_IMAGE_MODEL=gpt-image-1
```
