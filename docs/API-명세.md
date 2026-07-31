# API 명세 (프로토타입)

Base: `/api` (실연동 전 mock, UI는 클라이언트 mock 사용)

| Method | Path | 설명 |
|--------|------|------|
| GET | `/aircraft` | 기체 목록·상태 |
| GET | `/aircraft/{id}` | 기체 상세·이상 요약 |
| POST | `/assistant/query` | 질의 `{ text\|voice\|image }` → 통합 응답 |
| GET | `/manuals/search?q=` | 교범 RAG 결과 |
| GET | `/failures/similar?symptom=` | 유사 고장 |
| GET | `/phm/{aircraftId}` | PHM·RUL |
| GET | `/guide/{caseId}` | 정비가이드 |
| POST | `/work-orders` | 작업지시 생성 |
| GET | `/history` | 질의·조치 이력 |

## POST `/assistant/query` 응답 (개념)

```json
{
  "answer": "엔진 오일 압력 저하 관련 원인과 점검절차를 안내합니다.",
  "abnormal": { "system": "엔진-오일계통", "threat": "높음" },
  "recommendation": "오일 필터 점검 및 교체",
  "highlightPartId": "engine-oil",
  "manuals": [{ "title": "...", "chapter": "3", "section": "2", "page": 15 }],
  "similarCases": [{ "id": "C-2023-081", "similarity": 0.95 }],
  "phm": { "rulFlightHours": 18, "progress": 0.72 }
}
```
