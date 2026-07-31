# DB · ERD (개념)

```text
Aircraft 1──* Alert
Aircraft 1──* SensorReading
Aircraft 1──* FlightRecord
Aircraft 1──* WorkOrder

ManualChunk *──* FailureCase   (관련 교범)
FailureCase 1──* ActionHistory
Part 1──* ManualChunk
Part 1──* PhmEstimate
Part *──1 TwinNode (디지털트윈 위치)

QueryLog ── User
WorkOrder ── User
```

## 주요 테이블

| 테이블 | 핵심 컬럼 |
|--------|-----------|
| aircraft | id, tail_no, model, unit, status |
| manual_chunk | id, manual_name, chapter, section, page, text, embedding |
| failure_case | id, symptom, cause, actions, result, recurred, unit, occurred_at |
| sensor_reading | aircraft_id, part_id, type, value, ts |
| phm_estimate | part_id, risk, progress, rul_fh, updated_at |
| twin_node | part_id, label, svg_id |
| work_order | id, aircraft_id, title, priority, status, assignee_role |
| query_log | id, user_role, query, engines[], created_at |
