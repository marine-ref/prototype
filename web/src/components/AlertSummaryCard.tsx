import Link from "next/link";
import { alertSummary } from "@/data/mock";

export function AlertSummaryCard() {
  return (
    <section className="flex h-full min-h-[28rem] flex-col rounded-xl border border-line bg-surface">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-sm font-semibold">핵심 정보</h2>
        <p className="text-xs text-muted">이상 · 위협 · 권고</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <p className="text-xs text-muted">이상 항목</p>
          <p className="mt-1 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-danger">
            {alertSummary.abnormalItem}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted">위협 수준</p>
          <p className="mt-1 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-danger">
            {alertSummary.threat}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted">권고 조치</p>
          <p className="mt-1 rounded-md border border-line bg-bg px-3 py-2 text-sm font-medium">
            {alertSummary.recommendation}
          </p>
        </div>
        <div className="rounded-md border border-line bg-brand-soft/50 px-3 py-2 text-xs text-muted">
          분석 신뢰도 {alertSummary.confidence}% · 교범·사례·PHM 융합
        </div>
        <div className="mt-auto space-y-2">
          <Link
            href="/guide"
            className="flex w-full items-center justify-center rounded-lg bg-brand px-3 py-2.5 text-sm font-medium text-white"
          >
            상세 보기 · 정비 가이드
          </Link>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
            <Link href="/manuals" className="rounded-md border border-line py-1.5 hover:bg-bg">
              교범
            </Link>
            <Link href="/failures" className="rounded-md border border-line py-1.5 hover:bg-bg">
              사례
            </Link>
            <Link href="/phm" className="rounded-md border border-line py-1.5 hover:bg-bg">
              PHM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
