const STORAGE_KEY = "schoolgong-marketing-mvp-workflow-v2";
const AI_CONFIG_KEY = "schoolgong-openai-proxy-v2";

const notionLink =
  "https://candle-licorice-39c.notion.site/301c3667c16480cb9a3fce3a5d1169bc?v=301c3667c16481fe85b5000cd1a69667&source=copy_link";

const seedClients = [
  {
    id: "oh-ssam",
    name: "OH 쌤 Principle & Practice 2025",
    area: "학습 원리 · 실전 적용 콘텐츠",
    owner: "OH 쌤",
    period: "2025 운영 현황",
    summary:
      "OH 쌤의 교육 철학과 실전 수업 가치를 콘텐츠로 정리하고, 키워드·글·이미지·발행 현황을 한 화면에서 관리합니다.",
    requests: ["발행 현황과 검수 요청을 한 화면에서 확인하고 싶어요."],
    publishDates: ["7월 2주차 화요일", "7월 3주차 목요일", "7월 4주차 금요일"],
    publications: [
      {
        id: "pub-1",
        companyName: "OH 쌤 Principle & Practice 2025",
        publishDate: "2026-07-14",
        title: "OH 쌤 Principle & Practice 2025 운영 소개",
        url: "",
      },
    ],
    contents: [
      {
        id: "content-1",
        keyword: "OH 쌤 Principle & Practice",
        title: "OH 쌤 Principle & Practice 2025 운영 소개",
        body:
          "OH 쌤의 Principle & Practice 운영 방향을 소개하는 콘텐츠입니다. 원리 이해와 실전 적용이 어떻게 연결되는지 학부모와 학생이 쉽게 이해할 수 있도록 구성합니다.",
        image:
          "강의 노트, 수업 원리 카드, 실전 문제 풀이 자료가 정돈된 교육 콘텐츠 이미지",
        url: "",
        status: "검수 대기",
        due: "1차 정리",
        capture: null,
        feedback: null,
      },
      {
        id: "content-2",
        keyword: "원리 중심 학습법",
        title: "문제를 외우지 않고 원리로 푸는 학습 구조",
        body:
          "학생이 문제 유형만 암기하지 않고 원리를 이해한 뒤 실전에 적용하는 과정을 설명합니다. 수업 방식의 차별점을 보여주는 신뢰형 글로 작성합니다.",
        image: "개념 흐름도, 문제 풀이 단계, 체크리스트가 보이는 깔끔한 학습 이미지",
        url: "",
        status: "글 작성중",
        due: "2차 작성",
        capture: null,
        feedback: null,
      },
      {
        id: "content-3",
        keyword: "실전 적용 훈련",
        title: "배운 원리를 실전 문제에 적용하는 훈련법",
        body:
          "원리 학습 후 실전 문제에서 막히는 지점을 어떻게 점검하고 교정하는지 보여줍니다. 상담 전환을 고려해 수업의 구체성을 강조합니다.",
        image: "실전 문제지, 피드백 메모, 학습 루틴표가 함께 놓인 콘텐츠 썸네일",
        url: "",
        status: "이미지 제작중",
        due: "3차 이미지",
        capture: null,
        feedback: null,
      },
    ],
  },
];

const statusOrder = [
  "키워드 선정",
  "글 작성중",
  "이미지 제작중",
  "검수 대기",
  "발행 예정",
  "발행 완료",
  "수정 요청",
];

let clients = loadClients();
let aiConfig = loadAiConfig();
let currentClientId = clients[0].id;
let currentContentIndex = 0;
let currentView = "admin";
let lastAiMode = "body";

const $ = (selector) => document.querySelector(selector);

function clone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function loadClients() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : clone(seedClients);
    return parsed.map(normalizeClient);
  } catch {
    return clone(seedClients).map(normalizeClient);
  }
}

function normalizeClient(client) {
  return {
    ...client,
    requests: client.requests || [],
    publishDates: normalizePublishDates(client.publishDates),
    publications: normalizePublications(client),
    contents: (client.contents || []).map((item, index) => ({
      id: item.id || `content-${Date.now()}-${index}`,
      keyword: item.keyword || "새 키워드",
      title: item.title || "새 콘텐츠 제목",
      body: item.body || "",
      image: item.image || "",
      url: item.url || "",
      status: item.status || "키워드 선정",
      due: item.due || "일정 미정",
      capture: item.capture || null,
      feedback: item.feedback || null,
    })),
  };
}

function normalizePublishDates(dates = []) {
  const normalized = Array.isArray(dates) ? dates.slice(0, 3) : [];
  while (normalized.length < 3) normalized.push("");
  return normalized;
}

function normalizePublications(client) {
  const rows = Array.isArray(client.publications)
    ? client.publications
    : (client.contents || []).filter((item) => item.title || item.url || item.due).slice(0, 3).map((item, index) => ({
        id: `pub-${Date.now()}-${index}`,
        companyName: client.name || "업체명",
        publishDate: item.due || "",
        title: item.title || "",
        url: item.url || "",
      }));

  return rows.map((row, index) => ({
    id: row.id || `pub-${Date.now()}-${index}`,
    companyName: row.companyName || client.name || "업체명",
    publishDate: row.publishDate || "",
    title: row.title || "",
    url: row.url || "",
  }));
}

function loadAiConfig() {
  try {
    return JSON.parse(window.localStorage.getItem(AI_CONFIG_KEY)) || { proxyUrl: "/api/openai-content" };
  } catch {
    return { proxyUrl: "/api/openai-content" };
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}

function saveAiConfig() {
  window.localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(aiConfig));
}

function activeClient() {
  return clients.find((client) => client.id === currentClientId) || clients[0];
}

function activeContent() {
  const client = activeClient();
  if (!client.contents.length) addKeyword(false);
  return client.contents[currentContentIndex] || client.contents[0];
}

function progressFor(client) {
  if (!client.contents.length) return 0;
  const total = client.contents.length * 5;
  const score = client.contents.reduce((sum, item) => {
    const index = statusOrder.indexOf(item.status);
    return sum + Math.min(Math.max(index, 0), 5);
  }, 0);
  return Math.round((score / total) * 100);
}

function feedbackCount(client) {
  return client.contents.filter((item) => item.feedback?.decision).length;
}

function statusClass(status) {
  if (status === "발행 완료" || status === "발행") return "done";
  if (status === "검수 대기" || status === "수정 요청" || status === "문구수정요청") return "review";
  return "";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderClients() {
  const list = $("#clientList");
  list.innerHTML = clients
    .map(
      (client) => `
        <button class="client-card ${client.id === currentClientId ? "active" : ""}" data-client="${client.id}" type="button">
          <strong>${escapeHtml(client.name)}</strong>
          <span>${escapeHtml(client.area)}</span>
        </button>
      `
    )
    .join("");

  list.querySelectorAll(".client-card").forEach((button) => {
    button.addEventListener("click", () => {
      currentClientId = button.dataset.client;
      currentContentIndex = 0;
      renderAll();
    });
  });
}

function renderAdmin() {
  const client = activeClient();
  const progress = progressFor(client);
  const published = client.contents.filter((item) => item.status === "발행 완료").length;

  $("#clientHeadline").textContent = `${client.name} 콘텐츠 운영`;
  $("#clientSummary").textContent = client.summary;
  $("#progressMetric").textContent = `${progress}%`;
  $("#progressBar").style.width = `${progress}%`;
  $("#publishedMetric").textContent = published;
  $("#feedbackMetric").textContent = feedbackCount(client);
  $("#pageTitle").textContent =
    currentView === "admin" ? "콘텐츠 대행 대시보드" : `${client.name} 공유 현황`;

  renderDashboardSummary(client);

  $("#pipeline").innerHTML = client.contents
    .map(
      (item, index) => `
        <button class="content-card ${index === currentContentIndex ? "active" : ""}" data-index="${index}" type="button">
          <div>
            <h3>${escapeHtml(item.keyword)}</h3>
            <p>${escapeHtml(item.title)}</p>
          </div>
          <span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
        </button>
      `
    )
    .join("");

  $("#pipeline").querySelectorAll(".content-card").forEach((button) => {
    button.addEventListener("click", () => {
      currentContentIndex = Number(button.dataset.index);
      renderAll();
    });
  });

  renderEditor();
  renderClientForm();
  renderPublicationEditor(client);
  renderAiPanel();
  renderCapturePanel();
}

function renderDashboardSummary(active) {
  $("#companyOverview").innerHTML = clients
    .map((client) => {
      const published = client.publications.filter((row) => row.title || row.url).length;
      return `
        <button class="company-row ${client.id === active.id ? "active" : ""}" data-company-id="${client.id}" type="button">
          <span><strong>${escapeHtml(client.name)}</strong><small>${escapeHtml(client.owner || "원장님")} · ${escapeHtml(client.area || "분야 미입력")}</small></span>
          <b>${published}건</b>
        </button>
      `;
    })
    .join("");

  $("#companyOverview").querySelectorAll(".company-row").forEach((button) => {
    button.addEventListener("click", () => {
      currentClientId = button.dataset.companyId;
      currentContentIndex = 0;
      renderAll();
    });
  });

  $("#weeklyOverview").innerHTML = clients
    .map((client) => {
      const dates = normalizePublishDates(client.publishDates).filter(Boolean);
      const dateText = dates.length ? dates.join(" / ") : "발행일자 미입력";
      return `
        <article class="weekly-row ${client.id === active.id ? "active" : ""}">
          <strong>${escapeHtml(client.name)}</strong>
          <span>${escapeHtml(dateText)}</span>
        </article>
      `;
    })
    .join("");

  normalizePublishDates(active.publishDates).forEach((value, index) => {
    $(`#publishDateInput${index + 1}`).value = value;
  });
}

function renderPublicationEditor(client) {
  const editor = $("#publicationEditor");
  if (!client.publications.length) {
    editor.innerHTML = `<p class="empty-note">아직 발행현황 행이 없습니다. 행 추가를 눌러 입력하세요.</p>`;
    return;
  }

  editor.innerHTML = client.publications
    .map((row, index) => `
      <article class="publication-row" data-publication-index="${index}">
        <label>업체명<input class="publication-company" type="text" value="${escapeHtml(row.companyName)}" /></label>
        <label>발행날짜<input class="publication-date" type="text" value="${escapeHtml(row.publishDate)}" placeholder="예: 2026-07-14" /></label>
        <label>제목<input class="publication-title" type="text" value="${escapeHtml(row.title)}" /></label>
        <label>링크<input class="publication-url" type="url" value="${escapeHtml(row.url)}" placeholder="https://..." /></label>
        <div class="publication-actions">
          <button class="secondary-button save-publication" type="button">저장</button>
          <button class="text-danger delete-publication" type="button">삭제</button>
        </div>
      </article>
    `)
    .join("");

  editor.querySelectorAll(".publication-row").forEach((row) => {
    row.querySelector(".save-publication").addEventListener("click", () => savePublicationRow(row));
    row.querySelector(".delete-publication").addEventListener("click", () => deletePublicationRow(row));
  });
}

function renderEditor() {
  const item = activeContent();
  $("#editorTitle").textContent = item.title;
  $("#editorStatus").textContent = item.status;
  $("#editorStatus").className = `status-pill ${statusClass(item.status)}`;
  $("#keywordInput").value = item.keyword;
  $("#titleInput").value = item.title;
  $("#dueInput").value = item.due;
  $("#bodyInput").value = item.body;
  $("#imageInput").value = item.image;
  $("#urlInput").value = item.url;
  $("#statusSelect").value = item.status;
}

function renderClientForm() {
  const client = activeClient();
  $("#clientNameInput").value = client.name || "";
  $("#clientOwnerInput").value = client.owner || "";
  $("#clientAreaInput").value = client.area || "";
  $("#clientPeriodInput").value = client.period || "";
  $("#clientSummaryInput").value = client.summary || "";
}

function renderAiPanel() {
  $("#aiProxyInput").value = aiConfig.proxyUrl || "";
}

function renderCapturePanel() {
  const item = activeContent();
  const preview = $("#capturePreview");
  const state = $("#captureState");
  const feedback = item.feedback;

  if (item.capture?.dataUrl) {
    state.textContent = "등록됨";
    state.className = "status-pill done";
    preview.innerHTML = `<img src="${item.capture.dataUrl}" alt="업로드된 캡처본" /><p>${escapeHtml(item.capture.name || "캡처본")}</p>`;
  } else {
    state.textContent = "미등록";
    state.className = "status-pill";
    preview.innerHTML = `<p class="empty-note">현재 선택한 콘텐츠에 등록된 캡처본이 없습니다.</p>`;
  }

  $("#feedbackSummary").innerHTML = feedback?.decision
    ? `<div class="feedback-card"><strong>원장님 피드백</strong><p>${escapeHtml(feedback.decision)} · ${escapeHtml(feedback.publishDate || "시기 미정")}</p><p>${escapeHtml(feedback.note || "추가 메모 없음")}</p></div>`
    : `<p class="empty-note">원장님 피드백이 아직 없습니다.</p>`;
}

function renderPortalPublication(client) {
  const rows = client.publications || [];
  if (!rows.length) {
    $("#portalPublication").innerHTML = `<p class="empty-note">아직 공유된 발행현황이 없습니다.</p>`;
    return;
  }

  $("#portalPublication").innerHTML = `
    <div class="publication-head"><span>업체명</span><span>발행날짜</span><span>제목</span><span>링크</span></div>
    ${rows
      .map((row) => `
        <article class="publication-line">
          <span>${escapeHtml(row.companyName)}</span>
          <span>${escapeHtml(row.publishDate || "일정 미정")}</span>
          <strong>${escapeHtml(row.title || "제목 미입력")}</strong>
          ${row.url ? `<a href="${escapeHtml(row.url)}" target="_blank" rel="noreferrer">열기</a>` : `<em>준비중</em>`}
        </article>
      `)
      .join("")}
  `;
}

function renderPortal() {
  const client = activeClient();
  const progress = progressFor(client);

  $("#portalTitle").textContent = `${client.name} ${client.period || "마케팅 진행 현황"}`;
  $("#portalSummary").textContent = `${client.owner}, ${client.area} 기준으로 키워드 선정, 글 작성, 이미지 제작, 발행 현황을 순차적으로 공유합니다.`;
  $("#portalProgress").textContent = `${progress}%`;

  renderPortalPublication(client);

  $("#portalContent").innerHTML = client.contents
    .map((item) => {
      const link = item.url
        ? `<a class="portal-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">현황 보기</a>`
        : `<span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status)}</span>`;

      return `
        <article class="portal-item">
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.keyword)} · ${escapeHtml(item.due)} · ${escapeHtml(item.status)}</p>
          </div>
          ${link}
        </article>
      `;
    })
    .join("");

  renderPortalFeedback(client);
  $("#requestLog").innerHTML = client.requests.map((request) => `<p>${escapeHtml(request)}</p>`).join("");
}

function renderPortalFeedback(client) {
  const list = $("#portalFeedback");
  list.innerHTML = client.contents
    .map((item, index) => {
      const feedback = item.feedback || {};
      const captureHtml = item.capture?.dataUrl
        ? `<img src="${item.capture.dataUrl}" alt="검수용 캡처본" />`
        : `<div class="capture-placeholder">캡처본 준비 전</div>`;
      return `
        <article class="review-card" data-review-index="${index}">
          <div class="review-media">${captureHtml}</div>
          <div class="review-form">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.keyword)} · ${escapeHtml(item.due)}</p>
            <div class="segmented" role="radiogroup" aria-label="피드백 선택">
              ${["발행", "사진추가예정", "문구수정요청"].map(
                (decision) => `
                  <label class="segment ${feedback.decision === decision ? "active" : ""}">
                    <input type="radio" name="decision-${index}" value="${decision}" ${feedback.decision === decision ? "checked" : ""} />
                    ${decision}
                  </label>
                `
              ).join("")}
            </div>
            <label>원하는 발행시기<input class="publish-date-input" type="text" value="${escapeHtml(feedback.publishDate || "")}" placeholder="예: 다음 주 화요일 오전" /></label>
            <label>메모<textarea class="feedback-note-input" rows="3" placeholder="수정할 문구, 추가 사진 방향, 발행 요청사항을 남겨주세요.">${escapeHtml(feedback.note || "")}</textarea></label>
            <button class="primary-button save-feedback" type="button">피드백 저장</button>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".review-card").forEach((card) => {
    card.querySelectorAll("input[type='radio']").forEach((radio) => {
      radio.addEventListener("change", () => {
        card.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("active"));
        radio.closest(".segment").classList.add("active");
      });
    });

    card.querySelector(".save-feedback").addEventListener("click", () => {
      const index = Number(card.dataset.reviewIndex);
      const item = activeClient().contents[index];
      const decision = card.querySelector("input[type='radio']:checked")?.value || "";
      item.feedback = {
        decision,
        publishDate: card.querySelector(".publish-date-input").value.trim(),
        note: card.querySelector(".feedback-note-input").value.trim(),
        updatedAt: new Date().toISOString(),
      };
      if (decision === "발행") item.status = "발행 예정";
      if (decision === "문구수정요청") item.status = "수정 요청";
      if (decision === "사진추가예정") item.status = "이미지 제작중";
      saveState();
      renderAll();
      showToast("피드백이 저장되었습니다.");
    });
  });
}

function savePublishDates() {
  const client = activeClient();
  client.publishDates = [1, 2, 3].map((number) => $(`#publishDateInput${number}`).value.trim());
  saveState();
  renderAll();
  showToast("발행일자가 저장되었습니다.");
}

function addPublication() {
  const client = activeClient();
  client.publications.push({
    id: `pub-${Date.now()}`,
    companyName: client.name,
    publishDate: "",
    title: "",
    url: "",
  });
  saveState();
  renderAll();
  showToast("발행현황 행을 추가했습니다.");
}

function savePublicationRow(rowElement) {
  const client = activeClient();
  const index = Number(rowElement.dataset.publicationIndex);
  const row = client.publications[index];
  if (!row) return;
  row.companyName = rowElement.querySelector(".publication-company").value.trim() || client.name;
  row.publishDate = rowElement.querySelector(".publication-date").value.trim();
  row.title = rowElement.querySelector(".publication-title").value.trim();
  row.url = rowElement.querySelector(".publication-url").value.trim();
  saveState();
  renderAll();
  showToast("발행현황이 저장되었습니다.");
}

function deletePublicationRow(rowElement) {
  const client = activeClient();
  const index = Number(rowElement.dataset.publicationIndex);
  client.publications.splice(index, 1);
  saveState();
  renderAll();
  showToast("발행현황 행을 삭제했습니다.");
}

function saveCurrentContent() {
  const item = activeContent();
  item.keyword = $("#keywordInput").value.trim() || item.keyword;
  item.title = $("#titleInput").value.trim() || item.title;
  item.due = $("#dueInput").value.trim() || "일정 미정";
  item.body = $("#bodyInput").value.trim();
  item.image = $("#imageInput").value.trim();
  item.url = $("#urlInput").value.trim();
  item.status = $("#statusSelect").value;
  saveState();
  renderAll();
  showToast("콘텐츠가 저장되었습니다.");
}

function addKeyword(withToast = true) {
  const client = activeClient();
  client.contents.push({
    id: `content-${Date.now()}`,
    keyword: "새 키워드",
    title: "새 콘텐츠 제목",
    body: "",
    image: "",
    url: "",
    status: "키워드 선정",
    due: "일정 미정",
    capture: null,
    feedback: null,
  });
  currentContentIndex = client.contents.length - 1;
  saveState();
  if (withToast) showToast("새 키워드를 추가했습니다.");
  renderAll();
}

function addClient() {
  const id = `client-${Date.now()}`;
  clients.push({
    id,
    name: "새 업체",
    area: "지역 · 과목",
    owner: "원장님",
    period: "운영 현황",
    summary: "업체의 마케팅 운영 방향을 입력하세요.",
    requests: [],
    publishDates: ["", "", ""],
    publications: [],
    contents: [
      {
        id: `content-${Date.now()}`,
        keyword: "대표 키워드",
        title: "첫 콘텐츠 제목",
        body: "",
        image: "",
        url: "",
        status: "키워드 선정",
        due: "일정 미정",
        capture: null,
        feedback: null,
      },
    ],
  });
  currentClientId = id;
  currentContentIndex = 0;
  saveState();
  renderAll();
  showToast("새 업체를 추가했습니다.");
}

function saveClient() {
  const client = activeClient();
  client.name = $("#clientNameInput").value.trim() || client.name;
  client.owner = $("#clientOwnerInput").value.trim() || client.owner;
  client.area = $("#clientAreaInput").value.trim() || client.area;
  client.period = $("#clientPeriodInput").value.trim() || client.period;
  client.summary = $("#clientSummaryInput").value.trim() || client.summary;
  saveState();
  renderAll();
  showToast("업체 정보가 저장되었습니다.");
}

async function handleCaptureUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("이미지 파일만 업로드할 수 있습니다.");
    return;
  }
  const dataUrl = await readFileAsDataUrl(file);
  const item = activeContent();
  item.capture = {
    name: file.name,
    dataUrl,
    uploadedAt: new Date().toISOString(),
  };
  item.status = "검수 대기";
  saveState();
  renderAll();
  showToast("캡처본을 등록했습니다.");
  event.target.value = "";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function buildBlogDraft(client, item, tone, goal) {
  return `${item.title}\n\n${client.name} 콘텐츠 초안\n\n핵심 키워드: ${item.keyword}\n대상: ${client.area}\n톤: ${tone}\n\n1. 문제 제기\n학부모와 학생이 ${item.keyword}를 검색할 때 가장 궁금해하는 지점은 단순한 정보보다 실제 수업에서 어떤 변화가 만들어지는지입니다.\n\n2. 학교공 관점의 설명\n${item.body || "이 콘텐츠에서는 업체의 수업 방식, 상담 포인트, 차별화된 관리 흐름을 구체적으로 설명합니다."}\n\n3. 상담 전환 문단\n${client.name}은 원리 이해와 실전 적용 과정을 함께 점검하며, 학생의 현재 상태에 맞춰 다음 학습 단계를 제안합니다.\n\n4. 마무리\n자세한 상담은 현재 학습 상황을 먼저 확인한 뒤 방향을 잡는 것이 좋습니다.\n\n추가 요청 반영: ${goal || "없음"}`;
}

function buildThumbnailPrompt(client, item, tone, goal) {
  return `썸네일 제작 프롬프트\n\n업체: ${client.name}\n키워드: ${item.keyword}\n제목: ${item.title}\n이미지 방향: ${item.image || "학습 자료, 수업 노트, 실전 문제 풀이 장면을 깔끔하게 구성"}\n톤: ${tone}\n구성: 상단에는 핵심 키워드가 바로 읽히고, 중앙에는 학습 자료와 상담/수업 분위기가 보이게 배치. 과한 장식보다 신뢰감 있는 교육 콘텐츠 느낌.\n피해야 할 것: 과도한 광고 느낌, 복잡한 배경, 알아보기 어려운 작은 글자.\n추가 요청: ${goal || "없음"}`;
}

async function callOpenAiProxy(type) {
  const client = activeClient();
  const item = activeContent();
  const tone = $("#aiToneSelect").value;
  const goal = $("#aiGoalInput").value.trim();
  aiConfig.proxyUrl = $("#aiProxyInput").value.trim();
  saveAiConfig();

  if (!aiConfig.proxyUrl) {
    lastAiMode = type === "blog" ? "body" : "image";
    const localResult =
      type === "blog" ? buildBlogDraft(client, item, tone, goal) : buildThumbnailPrompt(client, item, tone, goal);
    $("#aiOutput").value = localResult;
    showToast("로컬 초안을 생성했습니다.");
    return;
  }

  $("#aiOutput").value = "OpenAI 프록시로 요청 중입니다...";
  try {
    const response = await fetch(aiConfig.proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, client, content: item, tone, goal }),
    });
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData.error) errorMessage = errorData.error;
      } catch {}
      throw new Error(errorMessage);
    }
    const data = await response.json();
    if (type === "blog") {
      lastAiMode = "body";
      $("#aiOutput").value = data.body || data.text || "응답에 본문이 없습니다.";
      if (data.title) $("#titleInput").value = data.title;
    } else {
      lastAiMode = data.imageUrl ? "capture" : "image";
      $("#aiOutput").value = data.thumbnailPrompt || data.prompt || data.imageUrl || "응답에 썸네일 결과가 없습니다.";
      if (data.imageUrl) {
        item.capture = { name: "OpenAI 썸네일", dataUrl: data.imageUrl, uploadedAt: new Date().toISOString() };
        item.status = "검수 대기";
        saveState();
        renderAll();
      }
    }
    showToast("OpenAI 생성 결과를 받았습니다.");
  } catch (error) {
    $("#aiOutput").value = `연동 오류: ${error.message}\n\n프록시 API URL이 맞는지 확인해주세요. 브라우저에 OpenAI API 키를 직접 넣지 않는 구조를 권장합니다.`;
    showToast("OpenAI 연동 요청이 실패했습니다.");
  }
}

function applyAiOutput() {
  const value = $("#aiOutput").value.trim();
  if (!value) return;
  if (lastAiMode === "image") {
    $("#imageInput").value = value;
  } else {
    $("#bodyInput").value = value;
  }
  saveCurrentContent();
}

function switchView(view) {
  currentView = view;
  $("#adminView").classList.toggle("active", view === "admin");
  $("#clientView").classList.toggle("active", view === "client");
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  renderAll();
}

function bindEvents() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $("#openClientView").addEventListener("click", () => switchView("client"));
  $("#addKeyword").addEventListener("click", () => addKeyword(true));
  $("#addClient").addEventListener("click", addClient);
  $("#savePublishDates").addEventListener("click", savePublishDates);
  $("#addPublication").addEventListener("click", addPublication);
  $("#saveClient").addEventListener("click", saveClient);
  $("#saveContent").addEventListener("click", saveCurrentContent);
  $("#captureInput").addEventListener("change", handleCaptureUpload);
  $("#generateBlog").addEventListener("click", () => callOpenAiProxy("blog"));
  $("#generateThumb").addEventListener("click", () => callOpenAiProxy("thumbnail"));
  $("#applyAiOutput").addEventListener("click", applyAiOutput);

  $("#copyShareLink").addEventListener("click", async () => {
    const shareUrl = `${window.location.href.split("#")[0]}#client-${activeClient().id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast("공유 링크를 복사했습니다.");
    } catch {
      showToast(shareUrl);
    }
  });

  $("#sendRequest").addEventListener("click", () => {
    const input = $("#requestInput");
    const value = input.value.trim();
    if (!value) return;
    activeClient().requests.unshift(value);
    saveState();
    input.value = "";
    renderPortal();
    showToast("요청사항이 등록되었습니다.");
  });
}

function applyHash() {
  const hash = window.location.hash.replace("#client-", "");
  if (!hash) return;
  const matchedClient = clients.find((client) => client.id === hash);
  if (matchedClient) {
    currentClientId = matchedClient.id;
    switchView("client");
  }
}

function renderAll() {
  renderClients();
  renderAdmin();
  renderPortal();
}

bindEvents();
renderAll();
applyHash();





