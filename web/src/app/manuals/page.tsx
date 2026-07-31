import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { manualHits } from "@/data/mock";

export default function ManualsPage() {
  return (
    <AppShell
      title="교범 지능형 검색"
      subtitle="RAG · 출처(장·절·페이지) · 환각 방지"
    >
      <DemoFlowNav current="manuals" />

      <div className="mb-4 rounded-xl border border-line bg-surface p-4">
        <p className="text-sm text-muted">질의</p>
        <p className="mt-1 font-medium">엔진 오일 압력이 낮아.</p>
        <p className="mt-2 text-xs text-muted">
          하이브리드 검색(의미 + 부품/고장코드) · 근거 없는 답변 제한
        </p>
      </div>

      <ul className="space-y-3">
        {manualHits.map((m) => (
          <li
            key={m.id}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold">{m.title}</h2>
                <p className="mt-1 text-xs text-muted">
                  {m.manual} · {m.chapter}장 {m.section}절 · p.{m.page}
                </p>
              </div>
              <span className="rounded-md bg-brand-soft px-2 py-1 text-xs font-medium text-brand">
                출처 확인
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{m.excerpt}</p>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
