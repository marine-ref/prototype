export type ThreatLevel = "낮음" | "보통" | "높음";

export type Aircraft = {
  id: string;
  tailNo: string;
  model: string;
  unit: string;
  status: "정상" | "주의" | "이상";
  flightHours: number;
  lastInspection: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
};

export type ManualHit = {
  id: string;
  title: string;
  manual: string;
  chapter: string;
  section: string;
  page: number;
  excerpt: string;
};

export type FailureCase = {
  id: string;
  symptom: string;
  cause: string;
  actions: string;
  result: string;
  similarity: number;
  unit: string;
  occurredAt: string;
  recurred: boolean;
};

export type PhmPart = {
  partId: string;
  name: string;
  risk: ThreatLevel;
  progress: number;
  rulFlightHours: number;
  sensors: { label: string; value: string; status: "ok" | "warn" | "bad" }[];
};

export type GuideStep = {
  n: number;
  title: string;
  detail: string;
  ref: string;
};

export const aircraftList: Aircraft[] = [
  {
    id: "AC-01",
    tailNo: "Surion-KUH-01",
    model: "KUH-1 수리온",
    unit: "해병 정비대대 A",
    status: "이상",
    flightHours: 1842,
    lastInspection: "2026-07-22",
  },
  {
    id: "AC-02",
    tailNo: "Surion-KUH-07",
    model: "KUH-1 수리온",
    unit: "해병 정비대대 A",
    status: "주의",
    flightHours: 1205,
    lastInspection: "2026-07-18",
  },
  {
    id: "AC-03",
    tailNo: "Surion-KUH-12",
    model: "KUH-1 수리온",
    unit: "해병 정비대대 B",
    status: "정상",
    flightHours: 980,
    lastInspection: "2026-07-25",
  },
];

export const demoAircraft = aircraftList[0];

export const initialChat: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    text: "엔진 오일 압력이 낮아.",
    time: "10:15",
  },
  {
    id: "m2",
    role: "assistant",
    text: "엔진 오일 압력 저하와 관련된 가능 원인과 점검절차를 안내합니다. 디지털트윈에서 엔진 오일계통을 표시했고, 우선 오일 필터 점검·교체를 권고합니다.",
    time: "10:15",
  },
];

export const alertSummary = {
  abnormalItem: "엔진 · 오일계통",
  threat: "높음" as ThreatLevel,
  recommendation: "오일 필터 점검 및 교체",
  highlightPartId: "engine-oil",
  confidence: 94,
};

export const manualHits: ManualHit[] = [
  {
    id: "M-01",
    title: "엔진 오일 압력 저하 시 점검절차",
    manual: "수리온 기술교범 · 엔진편",
    chapter: "3",
    section: "2",
    page: 15,
    excerpt:
      "오일 압력이 규정 하한 미만일 경우 필터 막힘·누유·펌프 이상을 순서대로 점검한다. 필터 차압이 기준을 초과하면 필터를 교체한다.",
  },
  {
    id: "M-02",
    title: "오일 필터 교체 및 토크 기준",
    manual: "수리온 기술교범 · 엔진편",
    chapter: "3",
    section: "4",
    page: 28,
    excerpt:
      "필터 하우징 체결 토크 및 오일 보충량 기준. 교체 후 지상가동으로 압력 회복을 확인한다.",
  },
  {
    id: "M-03",
    title: "지상가동 중 압력 모니터링",
    manual: "수리온 기술교범 · 운용점검",
    chapter: "2",
    section: "1",
    page: 9,
    excerpt:
      "지상가동 시 오일 압력 게이지 허용 범위와 경고등 점등 시 즉시정지 기준.",
  },
];

export const failureCases: FailureCase[] = [
  {
    id: "C-2023-081",
    symptom: "엔진 오일 압력 저하 · 경고등 점등",
    cause: "오일 필터 막힘 (오염·수분 혼입)",
    actions: "필터 교체 · 오일 샘플 채취 · 지상가동 압력 확인",
    result: "압력 정상 회복 · 당일 임무 가능",
    similarity: 0.95,
    unit: "포항 정비중대",
    occurredAt: "2023-09-14",
    recurred: false,
  },
  {
    id: "C-2024-033",
    symptom: "오일 압력 불안정 · 진동 동반",
    cause: "오일 펌프 흡입측 미세 누기",
    actions: "흡입 라인 점검 · 시일 교체",
    result: "재발 없음 (6개월 추적)",
    similarity: 0.78,
    unit: "해병 정비대대 A",
    occurredAt: "2024-03-02",
    recurred: false,
  },
  {
    id: "C-2022-019",
    symptom: "저압 경고 · 온도 상승",
    cause: "오일 쿨러 유로 부분 막힘",
    actions: "쿨러 세척 · 필터 동시 교체",
    result: "정상 · 후속 온도 안정",
    similarity: 0.64,
    unit: "해병 정비대대 B",
    occurredAt: "2022-11-08",
    recurred: true,
  },
];

export const phmParts: PhmPart[] = [
  {
    partId: "engine-oil",
    name: "엔진 오일계통",
    risk: "높음",
    progress: 0.72,
    rulFlightHours: 18,
    sensors: [
      { label: "오일 압력", value: "28 psi", status: "bad" },
      { label: "오일 온도", value: "98 °C", status: "warn" },
      { label: "필터 차압", value: "12 psi", status: "bad" },
      { label: "진동", value: "0.42 g", status: "ok" },
    ],
  },
  {
    partId: "gearbox",
    name: "메인 기어박스",
    risk: "보통",
    progress: 0.35,
    rulFlightHours: 120,
    sensors: [
      { label: "오일 온도", value: "82 °C", status: "ok" },
      { label: "진동", value: "0.55 g", status: "warn" },
    ],
  },
  {
    partId: "hydraulic",
    name: "유압 계통",
    risk: "낮음",
    progress: 0.12,
    rulFlightHours: 280,
    sensors: [
      { label: "압력", value: "3,000 psi", status: "ok" },
      { label: "온도", value: "54 °C", status: "ok" },
    ],
  },
];

export const guideSteps: GuideStep[] = [
  {
    n: 1,
    title: "안전조치 · 전원/로터 상태 확인",
    detail: "지상안전 절차에 따라 기체 고정 및 경고계통 상태를 확인한다.",
    ref: "운용점검 2장 1절",
  },
  {
    n: 2,
    title: "오일 레벨 · 누유 육안점검",
    detail: "엔진 주변 누유·오일 레벨을 확인하고 이상 시 사진 기록한다.",
    ref: "엔진편 3장 1절",
  },
  {
    n: 3,
    title: "오일 필터 차압 · 필터 교체",
    detail: "차압이 기준 초과 시 필터를 교체하고 토크 기준을 적용한다.",
    ref: "엔진편 3장 4절 p.28",
  },
  {
    n: 4,
    title: "지상가동 압력 회복 확인",
    detail: "지상가동으로 오일 압력·온도가 허용범위인지 확인 후 기록한다.",
    ref: "엔진편 3장 2절 p.15",
  },
  {
    n: 5,
    title: "작업지시 종료 · 이력 등록",
    detail: "조치결과·사용부품·재발위험 여부를 정비이력에 등록한다.",
    ref: "정비정보체계",
  },
];

export const opsSummary = {
  aircraftTotal: 12,
  abnormal: 2,
  attention: 3,
  openWorkOrders: 5,
  avgResponseMin: 1.8,
};

export function getAircraft(id: string) {
  return aircraftList.find((a) => a.id === id);
}
