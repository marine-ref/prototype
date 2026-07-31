import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { aircraftList, opsSummary } from "@/data/mock";

export default function HomePage() {
  return (
    <AppShell
      title="정비 현황"
      subtitle="수리온 계열 · 이상 알림 · 가동 현황"
    >
      <DemoFlowNav current="home" />

      <section className="rounded-xl border border-line bg-surface p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">
              Surion-KUH-01 · 엔진 오일계통 이상
            </h2>
            <p className="mt-1 text-sm text-muted">
              현황 → AI 어시스턴트 → 교범/사례/PHM → 정비 가이드 순으로
              확인합니다.
            </p>
          </div>
          <Link
            href="/assistant"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white"
          >
            <MessageSquare size={16} />
            시연 시작 · AI 어시스턴트
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "운용 기체", value: opsSummary.aircraftTotal },
          { label: "이상", value: opsSummary.abnormal },
          { label: "주의", value: opsSummary.attention },
          { label: "진행 중 작업", value: opsSummary.openWorkOrders },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-line bg-surface p-4"
          >
            <p className="text-xs text-muted">{m.label}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{m.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
        <div className="border-b border-line px-4 py-3">
          <h3 className="text-sm font-semibold">기체 목록</h3>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-bg text-xs text-muted">
            <tr>
              <th className="px-4 py-2 font-medium">기체</th>
              <th className="px-4 py-2 font-medium">부대</th>
              <th className="px-4 py-2 font-medium">FH</th>
              <th className="px-4 py-2 font-medium">상태</th>
              <th className="px-4 py-2 font-medium" />
            </tr>
          </thead>
          <tbody>
            {aircraftList.map((a) => (
              <tr key={a.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <p className="font-medium">{a.tailNo}</p>
                  <p className="text-xs text-muted">{a.model}</p>
                </td>
                <td className="px-4 py-3 text-muted">{a.unit}</td>
                <td className="px-4 py-3 font-mono text-xs">{a.flightHours}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                      a.status === "이상"
                        ? "bg-red-50 text-danger"
                        : a.status === "주의"
                          ? "bg-amber-50 text-warn"
                          : "bg-emerald-50 text-ok"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href="/assistant"
                    className="text-xs font-medium text-brand hover:underline"
                  >
                    AI 지원
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
