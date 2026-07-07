const DEFAULT_TEXT_MODEL = "gpt-4.1-mini";
const DEFAULT_IMAGE_MODEL = "gpt-image-1";

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function buildBlogPrompt(payload) {
  const client = payload.client || {};
  const content = payload.content || {};
  const tone = payload.tone || "전문적이고 신뢰감 있게";
  const goal = payload.goal || "없음";

  return `업체명: ${client.name || ""}
원장님: ${client.owner || ""}
분야/지역: ${client.area || ""}
운영 기간: ${client.period || ""}
콘텐츠 키워드: ${content.keyword || ""}
현재 제목: ${content.title || ""}
기존 초안: ${content.body || ""}
이미지 방향: ${content.image || ""}
발행 예정: ${content.due || ""}
톤: ${tone}
추가 요청: ${goal}

위 정보를 바탕으로 학원 마케팅용 네이버 블로그 글 초안을 작성해줘.
요구사항:
- 제목 후보 3개를 먼저 제안
- 본문은 학부모가 읽기 쉬운 한국어
- 과장 광고처럼 보이지 않게 신뢰감 있게 작성
- 상담 전환 문단 포함
- 마지막에 이미지/썸네일에 넣으면 좋은 짧은 문구 3개 포함`;
}

function buildThumbnailPrompt(payload) {
  const client = payload.client || {};
  const content = payload.content || {};
  const tone = payload.tone || "전문적이고 신뢰감 있게";
  const goal = payload.goal || "없음";

  return `학원 마케팅 블로그 썸네일용 이미지.
업체명: ${client.name || ""}
키워드: ${content.keyword || ""}
글 제목: ${content.title || ""}
이미지 콘셉트: ${content.image || ""}
톤: ${tone}
추가 요청: ${goal}

시각 요구사항:
- 교육 콘텐츠 느낌의 신뢰감 있는 16:9 썸네일
- 학습 노트, 문제 풀이, 수업 자료, 체크리스트 같은 실제적인 교육 오브젝트 중심
- 복잡한 장식 없이 깔끔한 구성
- 과한 광고 배너 느낌 금지
- 워터마크, 로고, 읽기 어려운 작은 글자 금지
- 텍스트는 꼭 필요할 때만 짧게 사용`;
}

function getResponseText(data) {
  if (data.output_text) return data.output_text;
  const parts = [];
  for (const output of data.output || []) {
    for (const content of output.content || []) {
      if (content.text) parts.push(content.text);
    }
  }
  return parts.join("\n").trim();
}

async function generateBlog(payload) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TEXT_MODEL || DEFAULT_TEXT_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: "너는 학원 마케팅 대행사의 시니어 콘텐츠 라이터다. 결과는 한국어로 작성한다.",
            },
          ],
        },
        {
          role: "user",
          content: [{ type: "input_text", text: buildBlogPrompt(payload) }],
        },
      ],
      max_output_tokens: 2600,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || `OpenAI Responses API 오류: ${response.status}`);
  }

  const text = getResponseText(data);
  return {
    body: text,
    text,
    model: process.env.OPENAI_TEXT_MODEL || DEFAULT_TEXT_MODEL,
  };
}

async function generateThumbnail(payload) {
  const prompt = buildThumbnailPrompt(payload);
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_IMAGE_MODEL || DEFAULT_IMAGE_MODEL,
      prompt,
      size: "1536x1024",
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || `OpenAI Images API 오류: ${response.status}`);
  }

  const first = data.data?.[0] || {};
  const imageUrl = first.b64_json ? `data:image/png;base64,${first.b64_json}` : first.url || "";
  return {
    thumbnailPrompt: prompt,
    prompt,
    imageUrl,
    model: process.env.OPENAI_IMAGE_MODEL || DEFAULT_IMAGE_MODEL,
  };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return json(res, 204, {});
  if (req.method !== "POST") return json(res, 405, { error: "POST 요청만 지원합니다." });

  if (!process.env.OPENAI_API_KEY) {
    return json(res, 500, {
      error: "Vercel 환경변수 OPENAI_API_KEY가 설정되어 있지 않습니다.",
    });
  }

  try {
    const payload = req.body || {};
    if (payload.type === "blog") return json(res, 200, await generateBlog(payload));
    if (payload.type === "thumbnail") return json(res, 200, await generateThumbnail(payload));
    return json(res, 400, { error: "지원하지 않는 type입니다. blog 또는 thumbnail을 사용하세요." });
  } catch (error) {
    return json(res, 500, { error: error.message || "OpenAI API 요청 중 오류가 발생했습니다." });
  }
}
