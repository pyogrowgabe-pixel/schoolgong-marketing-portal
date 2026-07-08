const STORAGE_KEY = "schoolgong-marketing-mvp-workflow-v2";
const WEEK_LABEL_KEY = "schoolgong-dashboard-week-label-v1";
const COMMUNITY_KEY = "schoolgong-director-community-v1";

const notionLink =
  "https://candle-licorice-39c.notion.site/301c3667c16480cb9a3fce3a5d1169bc?v=301c3667c16481fe85b5000cd1a69667&source=copy_link";

const sheetSeedCompanies = [
  { name: "해법수학영어학원", category: "academy", memo: "주2회" },
  { name: "남쌤ERC", category: "academy", memo: "" },
  { name: "드림리더스", category: "academy", memo: "" },
  { name: "링키영어 월배점", category: "academy", memo: "" },
  { name: "메타플러스수학학원", category: "academy", memo: "주1회" },
  { name: "봄봄", category: "academy", memo: "" },
  { name: "송도책통클럽", category: "academy", memo: "" },
  { name: "송파위례 책통문해력센터", category: "academy", memo: "" },
  { name: "아담리즈화정센터", category: "academy", memo: "주1회" },
  { name: "영인창의수학", category: "academy", memo: "" },
  { name: "오쌤수학", category: "academy", memo: "" },
  { name: "원탑학원", category: "academy", memo: "" },
  { name: "제주 BLI", category: "academy", memo: "" },
  { name: "한울학원", category: "academy", memo: "" },
  { name: "써니영어", category: "academy", memo: "자체발행" },
  { name: "권지호영수클래스", category: "academy", memo: "" },
  { name: "잉글리시아이 송화초점", category: "academy", memo: "" },
  { name: "프라임보습학원", category: "academy", memo: "" },
  { name: "켈리젤리", category: "academy", memo: "" },
  { name: "메텔영어", category: "academy", memo: "주1회" },
  { name: "이팩트영어학원", category: "academy", memo: "주1회 / 갱신" },
  { name: "늘푸름과외방", category: "academy", memo: "주1회" },
  { name: "아이비영어학원-인천", category: "academy", memo: "3개" },
  { name: "다온아트.미술상자", category: "academy", memo: "5월부터 빡시게" },
  { name: "티클래스 달서복지사", category: "academy", memo: "" },
  { name: "해법수학 신하점", category: "academy", memo: "" },
  { name: "외대HS어학원", category: "academy", memo: "주2회" },
  { name: "엠베스트 se 몰입학원", category: "academy", memo: "" },
  { name: "Core 어학원", category: "academy", memo: "" },
  { name: "내곡해법수학", category: "academy", memo: "" },
  { name: "더원수학 (테크노)", category: "academy", memo: "주2회 -> 주1회" },
  { name: "라인아츠미술", category: "academy", memo: "" },
  { name: "창원엘루미나erc", category: "academy", memo: "" },
  { name: "대한민국입시학원", category: "academy", memo: "" },
  { name: "데비스영어", category: "academy", memo: "" },
  { name: "최강공부방(해법)", category: "academy", memo: "" },
  { name: "두루 플레이스", category: "general", memo: "일반업종" },
  { name: "수성렌트카 블로그", category: "general", memo: "일반업종" },
  { name: "메디케어피트니스", category: "general", memo: "일반업종" },
  { name: "육미향", category: "general", memo: "일반업종" },
];
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
    operation: { status: "작성중", publishDate: "", publishUrl: "", memo: "" },
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

const seedCommunityPosts = [
  {
    id: "share-1",
    title: "초등 고학년 상담 전에 확인하는 질문 리스트",
    category: "상담사례",
    author: "김원장",
    school: "해법수학영어학원",
    body:
      "첫 상담에서 아이의 학습 루틴, 숙제 반응, 오답 정리 습관을 빠르게 파악할 수 있도록 질문을 정리했습니다. 상담 전에 복사해서 쓰기 좋게 구성했어요.",
    link: "",
    pinned: true,
    createdAt: "2026-07-08T00:10:00.000Z",
    comments: [
      {
        id: "comment-1",
        author: "OH 쌤",
        body: "숙제 반응 질문을 먼저 꺼내면 학부모님도 편하게 말씀하시더라고요. 바로 적용해보겠습니다.",
        createdAt: "2026-07-08T00:25:00.000Z",
      },
    ],
  },
  {
    id: "share-2",
    title: "수업 후 학부모 문자 예시",
    category: "학부모소통",
    author: "박원장",
    school: "송도책통클럽",
    body:
      "수업 직후 아이가 오늘 해낸 부분과 다음 수업까지 챙길 부분을 짧게 보내는 문장 예시입니다. 길게 쓰기보다 관찰 포인트 하나를 남기는 방식이 반응이 좋았습니다.",
    link: "",
    pinned: false,
    createdAt: "2026-07-07T08:30:00.000Z",
    comments: [],
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
let communityPosts = loadCommunityPosts();
let communitySearch = "";
let communityCategory = "all";
let dashboardWeekLabel = loadWeekLabel();
let draggedClientId = null;
let currentClientId = clients[0].id;
let currentContentIndex = 0;
let currentView = "admin";

const $ = (selector) => document.querySelector(selector);

function clone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function loadClients() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : clone(seedClients);
    return mergeSheetClients(parsed).map(normalizeClient);
  } catch {
    return mergeSheetClients(clone(seedClients)).map(normalizeClient);
  }
}

function normalizeClient(client) {
  const safeClient = { ...client };
  delete safeClient["acc" + "ount"];
  return {
    ...safeClient,
    category: client.category || inferCompanyCategory(client.name),
    isArchived: Boolean(client.isArchived),
    archivedAt: client.archivedAt || "",
    isDeleted: Boolean(client.isDeleted),
    deletedAt: client.deletedAt || "",
    requests: client.requests || [],
    publishDates: normalizePublishDates(client.publishDates),
    operation: normalizeOperation(client.operation),
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

function inferCompanyCategory(name = "") {
  const generalNames = ["두루 플레이스", "수성렌트카 블로그", "메디케어피트니스", "육미향"];
  return generalNames.includes(name) ? "general" : "academy";
}

function categoryLabel(category) {
  return category === "general" ? "일반업종" : "학원업종";
}

function categoryDescription(category) {
  return category === "general" ? "플레이스·블로그·매장 업종" : "학원·공부방·교육기관";
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


function normalizeOperation(operation = {}) {
  return {
    status: operation.status || "미진행",
    publishDate: operation.publishDate || "",
    publishUrl: operation.publishUrl || "",
    memo: operation.memo || "",
  };
}

function makeSeedClient(company, index) {
  return {
    id: `sheet-client-${index}-${company.name.replace(/[^a-zA-Z0-9가-힣]/g, "-")}`,
    name: company.name,
    category: company.category || "academy",
    area: company.category === "general" ? "일반업종" : "학원업종",
    owner: "원장님",
    period: "2026년 7월 2주차",
    summary: `${company.name}의 7월 2주차 발행 상태를 관리합니다.`,
    requests: [],
    publishDates: ["", "", ""],
    operation: { status: company.memo ? "확인필요" : "미진행", publishDate: "", publishUrl: "", memo: company.memo || "" },
    publications: [],
    contents: [
      {
        id: `content-${Date.now()}-${index}`,
        keyword: company.name,
        title: `${company.name} 7월 2주차 발행 콘텐츠`,
        body: "",
        image: "",
        url: "",
        status: "키워드 선정",
        due: "2026년 7월 2주차",
        capture: null,
        feedback: null,
      },
    ],
  };
}

function mergeSheetClients(sourceClients) {
  const merged = Array.isArray(sourceClients) ? clone(sourceClients) : [];
  sheetSeedCompanies.forEach((company, index) => {
    const exists = merged.some((client) => client.name === company.name);
    if (!exists) {
      merged.push(makeSeedClient(company, index));
    } else {
      const matched = merged.find((client) => client.name === company.name);
      if (matched && !matched.category) matched.category = company.category || "academy";
      if (matched && (!matched.area || matched.area === "시트 등록 업체")) matched.area = company.category === "general" ? "일반업종" : "학원업종";
    }
  });
  return merged;
}

function loadWeekLabel() {
  try {
    return window.localStorage.getItem(WEEK_LABEL_KEY) || "2026년 7월 2주차";
  } catch {
    return "2026년 7월 2주차";
  }
}

function saveWeekLabel() {
  window.localStorage.setItem(WEEK_LABEL_KEY, dashboardWeekLabel);
}


function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}


function loadCommunityPosts() {
  try {
    const saved = window.localStorage.getItem(COMMUNITY_KEY);
    return normalizeCommunityPosts(saved ? JSON.parse(saved) : clone(seedCommunityPosts));
  } catch {
    return normalizeCommunityPosts(clone(seedCommunityPosts));
  }
}

function normalizeCommunityPosts(posts = []) {
  return (Array.isArray(posts) ? posts : []).map((post, index) => ({
    id: post.id || `share-${Date.now()}-${index}`,
    title: post.title || "제목 없는 자료",
    category: post.category || "수업자료",
    author: post.author || "원장님",
    school: post.school || "공유 학원",
    body: post.body || "",
    link: post.link || "",
    pinned: Boolean(post.pinned),
    createdAt: post.createdAt || new Date().toISOString(),
    comments: normalizeCommunityComments(post.comments),
  }));
}

function normalizeCommunityComments(comments = []) {
  return (Array.isArray(comments) ? comments : []).map((comment, index) => ({
    id: comment.id || `comment-${Date.now()}-${index}`,
    author: comment.author || "원장님",
    body: comment.body || "",
    createdAt: comment.createdAt || new Date().toISOString(),
  }));
}

function saveCommunityPosts() {
  window.localStorage.setItem(COMMUNITY_KEY, JSON.stringify(communityPosts));
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "방금 전";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function safeExternalUrl(value = "") {
  const raw = String(value).trim();
  if (!raw) return "";
  const candidate = /^[a-z][a-z0-9+.-]*:/i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function visibleClients() {
  return clients.filter((client) => !client.isDeleted);
}

function activeClients() {
  return visibleClients().filter((client) => !client.isArchived);
}

function archivedClients() {
  return visibleClients().filter((client) => client.isArchived);
}

function ensureCurrentClient() {
  if (visibleClients().some((client) => client.id === currentClientId)) return;
  const fallback = activeClients()[0] || archivedClients()[0] || clients.find((client) => !client.isDeleted);
  if (fallback) currentClientId = fallback.id;
}

function activeClient() {
  ensureCurrentClient();
  return visibleClients().find((client) => client.id === currentClientId) || clients.find((client) => !client.isDeleted) || clients[0];
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
  const groups = [
    { title: "진행 업체", items: activeClients(), empty: "진행 중인 업체가 없습니다." },
    { title: "보관 업체", items: archivedClients(), empty: "보관된 업체가 없습니다." },
  ];

  list.innerHTML = groups
    .map(
      (group) => `
        <div class="client-group">
          <p class="client-group-title">${group.title} <span>${group.items.length}</span></p>
          ${
            group.items.length
              ? group.items
                  .map(
                    (client) => `
                      <button class="client-card ${client.isArchived ? "archived" : ""} ${client.id === currentClientId ? "active" : ""}" data-client="${client.id}" type="button">
                        <strong>${escapeHtml(client.name)}</strong>
                        <span>${escapeHtml(client.area || categoryLabel(client.category))}</span>
                      </button>
                    `
                  )
                  .join("")
              : `<p class="empty-client-note">${group.empty}</p>`
          }
        </div>
      `
    )
    .join("");

  list.querySelectorAll(".client-card").forEach((button) => {
    button.addEventListener("click", () => {
      currentClientId = button.dataset.client;
      currentContentIndex = 0;
      switchView("admin");
      window.setTimeout(() => {
        document.querySelector(".company-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
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

  renderOperationsDashboard();
  renderClientWorkList(client);

  renderEditor();
  renderClientForm();
  renderPublicationEditor(client);
  renderAiPanel();
  renderCapturePanel();
}

function renderOperationsDashboard() {
  const statusOptions = ["미진행", "작성중", "예약완료", "발행완료", "수정요청", "확인필요"];
  const groups = ["academy", "general"];
  const renderClientRow = (client) => {
    const operation = normalizeOperation(client.operation);
    return `
      <article class="operations-row ${client.id === currentClientId ? "active" : ""}" data-client-id="${client.id}">
        <button class="drag-handle" type="button" draggable="true" data-drag-client="${client.id}" title="순서 이동" aria-label="업체 순서 이동">☰</button>
        <button class="operation-client" type="button" data-select-client="${client.id}">
          <strong>${escapeHtml(client.name)}</strong>
          <small>${escapeHtml(client.area || categoryLabel(client.category))}</small>
        </button>
        <select class="operation-status">
          ${statusOptions.map((status) => `<option ${operation.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <input class="operation-date" type="text" value="${escapeHtml(operation.publishDate)}" placeholder="예: 2026-07-08" />
        <input class="operation-url" type="url" value="${escapeHtml(operation.publishUrl)}" placeholder="https://..." />
        <input class="operation-memo" type="text" value="${escapeHtml(operation.memo)}" placeholder="주2회 -> 주1회 등" />
        <button class="secondary-button operation-save" type="button">저장</button>
      </article>
    `;
  };

  $("#weekLabelInput").value = dashboardWeekLabel;
  $("#operationsDashboard").innerHTML = `
    <div class="operations-head">
      <span></span>
      <span>업체명</span>
      <span>상태</span>
      <span>발행날짜</span>
      <span>발행링크</span>
      <span>메모</span>
      <span>선택</span>
    </div>
    ${groups
      .map((category) => {
        const groupClients = activeClients().filter((client) => (client.category || inferCompanyCategory(client.name)) === category);
        if (!groupClients.length) return "";
        return `
          <div class="operation-group-title ${category}">
            <span>${categoryLabel(category)}</span>
            <small>${categoryDescription(category)} · ${groupClients.length}곳</small>
          </div>
          ${groupClients.map(renderClientRow).join("")}
        `;
      })
      .join("")}
  `;

  bindOperationDragEvents();

  $("#operationsDashboard").querySelectorAll("[data-select-client]").forEach((button) => {
    button.addEventListener("click", () => {
      currentClientId = button.dataset.selectClient;
      currentContentIndex = 0;
      renderAll();
    });
  });

  $("#operationsDashboard").querySelectorAll(".operation-save").forEach((button) => {
    button.addEventListener("click", () => {
      saveOperationRow(button.closest(".operations-row"));
    });
  });
}
function bindOperationDragEvents() {
  const dashboard = $("#operationsDashboard");

  dashboard.querySelectorAll(".drag-handle").forEach((handle) => {
    handle.addEventListener("dragstart", (event) => {
      draggedClientId = handle.dataset.dragClient;
      const row = handle.closest(".operations-row");
      row?.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedClientId);
    });

    handle.addEventListener("dragend", () => {
      draggedClientId = null;
      dashboard.querySelectorAll(".operations-row").forEach((row) => row.classList.remove("dragging", "drag-over"));
    });
  });

  dashboard.querySelectorAll(".operations-row").forEach((row) => {
    row.addEventListener("dragover", (event) => {
      if (!draggedClientId || draggedClientId === row.dataset.clientId) return;
      event.preventDefault();
      row.classList.add("drag-over");
    });

    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));

    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("drag-over");
      reorderClientRows(draggedClientId || event.dataTransfer.getData("text/plain"), row.dataset.clientId);
    });
  });
}

function reorderClientRows(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const sourceIndex = clients.findIndex((client) => client.id === sourceId);
  const targetIndex = clients.findIndex((client) => client.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;

  const source = clients[sourceIndex];
  const target = clients[targetIndex];
  const sourceCategory = source.category || inferCompanyCategory(source.name);
  const targetCategory = target.category || inferCompanyCategory(target.name);
  if (sourceCategory !== targetCategory) {
    showToast("같은 업종 안에서만 순서를 바꿀 수 있습니다.");
    renderAll();
    return;
  }

  clients.splice(sourceIndex, 1);
  const adjustedTargetIndex = clients.findIndex((client) => client.id === targetId);
  clients.splice(adjustedTargetIndex, 0, source);
  currentClientId = source.id;
  saveState();
  renderAll();
  showToast("업체 순서를 변경했습니다.");
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

function renderClientWorkList(client) {
  const list = $("#clientWorkList");
  if (!list) return;

  if (!client.contents.length) {
    list.innerHTML = `<p class="empty-note">아직 등록된 작업물이 없습니다.</p>`;
    return;
  }

  list.innerHTML = client.contents
    .map((item, index) => {
      const link = safeExternalUrl(item.url);
      return `
        <button class="client-work-card ${index === currentContentIndex ? "active" : ""}" data-work-index="${index}" type="button">
          <div>
            <strong>${escapeHtml(item.title || item.keyword)}</strong>
            <span>${escapeHtml(item.keyword || "키워드 미입력")}</span>
            <small>${escapeHtml(item.due || "일정 미정")}${link ? " · 발행 링크 있음" : ""}</small>
          </div>
          <span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status || "상태 없음")}</span>
        </button>
      `;
    })
    .join("");

  list.querySelectorAll(".client-work-card").forEach((button) => {
    button.addEventListener("click", () => {
      currentContentIndex = Number(button.dataset.workIndex);
      renderAll();
      window.setTimeout(() => {
        document.querySelector(".editor-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    });
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
  $("#clientStateBadge").textContent = client.isArchived ? "보관됨" : "진행중";
  $("#clientStateBadge").className = `status-pill ${client.isArchived ? "review" : "done"}`;
  $("#archiveClient").hidden = Boolean(client.isArchived);
  $("#restoreClient").hidden = !client.isArchived;
}

function renderAiPanel() {
  const output = $("#aiOutput");
  if (!output || output.value) return;
  output.placeholder = "버튼을 누르면 ChatGPT에 붙여넣을 프롬프트가 여기에 만들어지고 복사됩니다. 완성본은 오른쪽 작성 작업실에 붙여넣어 관리하세요.";
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

  $("#portalTitle").textContent = "원장님 자료 공유실";
  $("#portalSummary").textContent = `${client.owner || "원장님"} 계정으로 자료를 올리고, 다른 원장님의 수업 사례와 운영 노하우에 댓글을 남길 수 있습니다.`;
  $("#portalProgress").textContent = `${progress}%`;

  renderCommunity();
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

function renderCommunity() {
  const client = activeClient();
  const authorInput = $("#shareAuthorInput");
  const searchInput = $("#shareSearchInput");
  const categoryFilter = $("#shareCategoryFilter");
  const stats = $("#shareStats");
  const list = $("#sharePostList");

  if (!authorInput || !searchInput || !categoryFilter || !stats || !list) return;
  if (!authorInput.value.trim()) authorInput.value = client.owner || "원장님";
  searchInput.value = communitySearch;
  categoryFilter.value = communityCategory;

  const search = communitySearch.trim().toLowerCase();
  const filteredPosts = communityPosts
    .filter((post) => communityCategory === "all" || post.category === communityCategory)
    .filter((post) => {
      if (!search) return true;
      return [post.title, post.body, post.author, post.school, post.category]
        .join(" ")
        .toLowerCase()
        .includes(search);
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || new Date(b.createdAt) - new Date(a.createdAt));

  const commentCount = communityPosts.reduce((sum, post) => sum + post.comments.length, 0);
  stats.innerHTML = `<span>자료 ${communityPosts.length}</span><span>댓글 ${commentCount}</span>`;

  if (!filteredPosts.length) {
    list.innerHTML = `<p class="empty-note">조건에 맞는 자료가 없습니다. 검색어를 줄이거나 새 자료를 올려보세요.</p>`;
    return;
  }

  list.innerHTML = filteredPosts
    .map((post) => {
      const link = safeExternalUrl(post.link);
      const comments = post.comments.length
        ? post.comments
            .map(
              (comment) => `
                <div class="community-comment">
                  <strong>${escapeHtml(comment.author)}</strong>
                  <p>${escapeHtml(comment.body)}</p>
                  <small>${escapeHtml(formatDateTime(comment.createdAt))}</small>
                </div>
              `
            )
            .join("")
        : `<p class="empty-note compact">아직 댓글이 없습니다. 첫 의견을 남겨주세요.</p>`;

      return `
        <article class="share-post ${post.pinned ? "pinned" : ""}">
          <div class="share-post-head">
            <div>
              <div class="share-meta">
                <span class="category-chip">${escapeHtml(post.category)}</span>
                ${post.pinned ? `<span class="category-chip pinned-chip">고정</span>` : ""}
                <span>${escapeHtml(post.school)}</span>
                <span>${escapeHtml(formatDateTime(post.createdAt))}</span>
              </div>
              <h3>${escapeHtml(post.title)}</h3>
            </div>
            <strong>${escapeHtml(post.author)}</strong>
          </div>
          <p class="share-body">${escapeHtml(post.body)}</p>
          ${link ? `<a class="portal-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">자료 링크 열기</a>` : ""}
          <div class="community-comments">${comments}</div>
          <div class="community-comment-form">
            <textarea class="community-comment-input" rows="2" placeholder="댓글을 입력하세요."></textarea>
            <button class="secondary-button save-community-comment" data-post-id="${escapeHtml(post.id)}" type="button">댓글 달기</button>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".save-community-comment").forEach((button) => {
    button.addEventListener("click", () => {
      const post = communityPosts.find((item) => item.id === button.dataset.postId);
      const form = button.closest(".community-comment-form");
      const input = form?.querySelector(".community-comment-input");
      const body = input?.value.trim() || "";
      if (!post || !body) return;
      post.comments.push({
        id: `comment-${Date.now()}`,
        author: authorInput.value.trim() || client.owner || "원장님",
        body,
        createdAt: new Date().toISOString(),
      });
      saveCommunityPosts();
      renderCommunity();
      showToast("댓글이 등록되었습니다.");
    });
  });
}

function addCommunityPost() {
  const author = $("#shareAuthorInput").value.trim() || activeClient().owner || "원장님";
  const title = $("#shareTitleInput").value.trim();
  const category = $("#shareCategorySelect").value;
  const body = $("#shareBodyInput").value.trim();
  const link = safeExternalUrl($("#shareLinkInput").value.trim());

  if (!title || !body) {
    showToast("제목과 내용을 입력해주세요.");
    return;
  }

  communityPosts.unshift({
    id: `share-${Date.now()}`,
    title,
    category,
    author,
    school: activeClient().name || "공유 학원",
    body,
    link,
    pinned: false,
    createdAt: new Date().toISOString(),
    comments: [],
  });

  $("#shareTitleInput").value = "";
  $("#shareBodyInput").value = "";
  $("#shareLinkInput").value = "";
  communitySearch = "";
  communityCategory = "all";
  saveCommunityPosts();
  renderCommunity();
  showToast("자료가 공유 게시판에 올라갔습니다.");
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

function saveOperationRows() {
  dashboardWeekLabel = $("#weekLabelInput").value.trim() || "2026년 7월 2주차";
  $("#operationsDashboard").querySelectorAll(".operations-row").forEach((row) => saveOperationRow(row, false));
  saveWeekLabel();
  saveState();
  renderAll();
  showToast("업체 운영 대시보드를 저장했습니다.");
}

function saveOperationRow(rowElement, shouldRender = true) {
  if (!rowElement) return;
  const client = clients.find((item) => item.id === rowElement.dataset.clientId);
  if (!client) return;
  client.operation = {
    status: rowElement.querySelector(".operation-status").value,
    publishDate: rowElement.querySelector(".operation-date").value.trim(),
    publishUrl: rowElement.querySelector(".operation-url").value.trim(),
    memo: rowElement.querySelector(".operation-memo").value.trim(),
  };
  syncOperationToPublication(client);
  if (shouldRender) {
    dashboardWeekLabel = $("#weekLabelInput").value.trim() || dashboardWeekLabel;
    saveWeekLabel();
    saveState();
    renderAll();
    showToast("업체 발행상태가 저장되었습니다.");
  }
}

function syncOperationToPublication(client) {
  const operation = normalizeOperation(client.operation);
  if (!operation.publishDate && !operation.publishUrl) return;
  const firstContent = client.contents[0] || {};
  const title = firstContent.title || `${client.name} ${dashboardWeekLabel} 발행 콘텐츠`;
  const row = client.publications[0] || {
    id: `pub-${Date.now()}`,
    companyName: client.name,
    publishDate: "",
    title,
    url: "",
  };
  row.companyName = client.name;
  row.publishDate = operation.publishDate;
  row.title = title;
  row.url = operation.publishUrl;
  client.publications[0] = row;
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
    category: "academy",
    area: "학원업종",
    owner: "원장님",
    period: "운영 현황",
    summary: "업체의 마케팅 운영 방향을 입력하세요.",
    requests: [],
    publishDates: ["", "", ""],
    operation: { status: "미진행", publishDate: "", publishUrl: "", memo: "" },
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

function archiveClient() {
  const client = activeClient();
  client.isArchived = true;
  client.archivedAt = new Date().toISOString();
  saveState();
  renderAll();
  showToast("업체를 보관했습니다. 보관 업체에서 다시 볼 수 있습니다.");
}

function restoreClient() {
  const client = activeClient();
  client.isArchived = false;
  client.archivedAt = "";
  saveState();
  renderAll();
  showToast("업체를 진행 업체로 되돌렸습니다.");
}

function deleteClient() {
  const client = activeClient();
  if (visibleClients().length <= 1) {
    showToast("마지막 업체는 삭제할 수 없습니다.");
    return;
  }
  const confirmed = window.confirm(`${client.name} 업체를 삭제할까요? 삭제하면 목록에서 숨겨지고 자동 복구되지 않습니다.`);
  if (!confirmed) return;
  client.isDeleted = true;
  client.deletedAt = new Date().toISOString();
  const fallback = activeClients().find((item) => item.id !== client.id) || archivedClients().find((item) => item.id !== client.id);
  if (fallback) currentClientId = fallback.id;
  currentContentIndex = 0;
  saveState();
  renderAll();
  showToast("업체를 삭제했습니다.");
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

function buildBlogPrompt(client, item, tone, goal, workType) {
  return `너는 학원 전문 블로그 마케팅 카피라이터야. 아래 정보를 바탕으로 네이버 블로그에 올릴 포스팅 초안을 작성해줘.

[업체 정보]
- 업체명: ${client.name}
- 업종/구분: ${client.area || categoryLabel(client.category)}
- 작업 종류: ${workType}

[콘텐츠 정보]
- 핵심 키워드: ${item.keyword || client.name}
- 글 제목: ${item.title || `${client.name} 콘텐츠`}
- 발행 예정 시기: ${item.due || "미정"}
- 기존 메모/본문 방향: ${item.body || "아직 없음"}
- 톤: ${tone}
- 추가 요청: ${goal || "없음"}

[작성 요청]
1. 학부모가 자연스럽게 읽을 수 있는 블로그 글로 작성해줘.
2. 과장 광고처럼 보이지 않게, 신뢰감 있는 설명 중심으로 써줘.
3. 제목 후보 5개, 본문 초안, 마지막 상담/문의 유도 문단을 나눠줘.
4. 실제 확인되지 않은 정보는 단정하지 말고, 필요한 부분은 [확인 필요]라고 표시해줘.
5. 문단은 모바일에서 읽기 좋게 짧게 끊어줘.`;
}

function buildThumbnailPrompt(client, item, tone, goal) {
  return `너는 블로그 썸네일 기획자야. 아래 콘텐츠에 맞는 썸네일 문구와 이미지 방향을 제안해줘.

[업체 정보]
- 업체명: ${client.name}
- 업종/구분: ${client.area || categoryLabel(client.category)}

[콘텐츠 정보]
- 핵심 키워드: ${item.keyword || client.name}
- 글 제목: ${item.title || `${client.name} 콘텐츠`}
- 현재 이미지 방향 메모: ${item.image || "아직 없음"}
- 톤: ${tone}
- 추가 요청: ${goal || "없음"}

[기획 요청]
1. 썸네일 메인 문구 10개를 제안해줘.
2. 각 문구마다 어울리는 이미지 콘셉트를 한 줄로 설명해줘.
3. 너무 광고처럼 보이는 표현은 피하고, 학부모가 신뢰할 수 있는 분위기로 잡아줘.
4. 이미지 생성툴에 넣을 수 있는 프롬프트도 3개 만들어줘.
5. 썸네일 안에 들어갈 글자는 짧고 크게 읽히게 구성해줘.`;
}

function buildChatGptPrompt(type) {
  const client = activeClient();
  const item = activeContent();
  const tone = $("#aiToneSelect").value;
  const goal = $("#aiGoalInput").value.trim();
  const workType = $("#aiWorkTypeSelect").value;
  return type === "thumbnail"
    ? buildThumbnailPrompt(client, item, tone, goal)
    : buildBlogPrompt(client, item, tone, goal, workType);
}

function setPromptOutput(type) {
  const prompt = buildChatGptPrompt(type);
  $("#aiOutput").value = prompt;
  return prompt;
}

async function writeClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function copyChatGptPrompt(type) {
  const prompt = setPromptOutput(type);
  try {
    await writeClipboard(prompt);
    showToast(type === "thumbnail" ? "썸네일 프롬프트를 복사했습니다." : "블로그 프롬프트를 복사했습니다.");
  } catch {
    showToast("프롬프트가 아래 칸에 만들어졌습니다. 직접 복사해주세요.");
  }
}

async function openChatGpt(type) {
  await copyChatGptPrompt(type);
  window.open("https://chatgpt.com/", "_blank", "noopener");
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
  $("#saveOperationRows").addEventListener("click", saveOperationRows);
  $("#addPublication").addEventListener("click", addPublication);
  $("#saveClient").addEventListener("click", saveClient);
  $("#archiveClient").addEventListener("click", archiveClient);
  $("#restoreClient").addEventListener("click", restoreClient);
  $("#deleteClient").addEventListener("click", deleteClient);
  $("#saveContent").addEventListener("click", saveCurrentContent);
  $("#captureInput").addEventListener("change", handleCaptureUpload);
  $("#copyBlogPrompt").addEventListener("click", () => copyChatGptPrompt("blog"));
  $("#openBlogChat").addEventListener("click", () => openChatGpt("blog"));
  $("#copyThumbPrompt").addEventListener("click", () => copyChatGptPrompt("thumbnail"));
  $("#openThumbChat").addEventListener("click", () => openChatGpt("thumbnail"));
  $("#addSharePost").addEventListener("click", addCommunityPost);
  $("#shareSearchInput").addEventListener("input", (event) => {
    communitySearch = event.target.value;
    renderCommunity();
  });
  $("#shareCategoryFilter").addEventListener("change", (event) => {
    communityCategory = event.target.value;
    renderCommunity();
  });

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
