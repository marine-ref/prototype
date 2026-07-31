import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { alertSummary, guideSteps } from "@/data/mock";

export default function GuidePage() {
  return (
    <AppShell
      title="정비 가이드"
      subtitle="권고 점검순서 · 작업지시"
    >
      <DemoFlowNav current="guide" />

      <section className="mb-5 rounded-xl border border-line bg-surface p-5">
        <p className="text-xs text-muted">권고 조치</p>
        <h2 className="mt-1 text-lg font-semibold">
          {alertSummary.recommendation}
        </h2>
        <p className="mt-2 text-sm text-muted">
          {alertSummary.abnormalItem} · 위협 {alertSummary.threat}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white"
          >
            작업지시 생성
          </button>
          <Link
            href="/history"
            className="rounded-lg border border-line px-4 py-2 text-sm"
          >
            이력 보기
          </Link>
        </div>
      </section>

      <ol className="space-y-3">
        {guideSteps.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 rounded-xl border border-line bg-surface p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
              {s.n}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.detail}</p>
              <p className="mt-2 text-xs text-brand">근거: {s.ref}</p>
            </div>
          </li>
        ))}
      </ol>
    </AppShell>
  );
}
