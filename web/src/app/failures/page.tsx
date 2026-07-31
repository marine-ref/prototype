import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { failureCases } from "@/data/mock";

export default function FailuresPage() {
  return (
    <AppShell
      title="유사 고장사례"
      subtitle="과거 증상·원인·조치결과 · 재발 여부"
    >
      <DemoFlowNav current="failures" />

      <ul className="space-y-3">
        {failureCases.map((c) => (
          <li
            key={c.id}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-mono text-muted">{c.id}</p>
                <h2 className="mt-1 font-semibold">{c.symptom}</h2>
                <p className="mt-1 text-xs text-muted">
                  {c.unit} · {c.occurredAt}
                  {c.recurred ? " · 재발 이력 있음" : " · 재발 없음"}
                </p>
              </div>
              <span className="rounded-md bg-brand-soft px-2.5 py-1 text-sm font-semibold text-brand">
                유사도 {(c.similarity * 100).toFixed(0)}%
              </span>
            </div>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs text-muted">원인</dt>
                <dd className="mt-0.5">{c.cause}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">조치</dt>
                <dd className="mt-0.5">{c.actions}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">결과</dt>
                <dd className="mt-0.5">{c.result}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
