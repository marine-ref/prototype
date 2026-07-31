import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";

const rows = [
  {
    ts: "2026-07-28 10:15",
    type: "질의",
    detail: "엔진 오일 압력이 낮아.",
    engines: "RAG · Case · PHM",
  },
  {
    ts: "2026-07-28 10:16",
    type: "분석",
    detail: "엔진-오일계통 · 위협 높음 · 필터 교체 권고",
    engines: "Orchestrator",
  },
  {
    ts: "2026-07-28 10:22",
    type: "조치",
    detail: "작업지시 WO-241 · 필터 교체 진행",
    engines: "의사결정",
  },
  {
    ts: "2026-07-22 14:05",
    type: "질의",
    detail: "메인 기어박스 진동 증가",
    engines: "PHM · RAG",
  },
];

export default function HistoryPage() {
  return (
    <AppShell title="질의·조치 이력" subtitle="감사 · 추적">
      <DemoFlowNav />

      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line bg-bg text-xs text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">시각</th>
              <th className="px-4 py-3 font-medium">유형</th>
              <th className="px-4 py-3 font-medium">내용</th>
              <th className="px-4 py-3 font-medium">엔진</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ts + r.detail} className="border-t border-line">
                <td className="px-4 py-3 font-mono text-xs text-muted">
                  {r.ts}
                </td>
                <td className="px-4 py-3">{r.type}</td>
                <td className="px-4 py-3">{r.detail}</td>
                <td className="px-4 py-3 text-xs text-muted">{r.engines}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
