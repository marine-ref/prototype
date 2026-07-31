"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppShell } from "@/components/AppShell";
import { DemoFlowNav } from "@/components/DemoFlowNav";
import { phmParts } from "@/data/mock";

const chartData = phmParts.map((p) => ({
  name: p.name.replace(" ", "\n"),
  progress: Math.round(p.progress * 100),
  rul: p.rulFlightHours,
}));

export default function PhmPage() {
  return (
    <AppShell
      title="PHM 상태분석"
      subtitle="이상 · 진행도 · 잔여수명(RUL)"
    >
      <DemoFlowNav current="phm" />

      <div className="grid gap-4 lg:grid-cols-2">
        {phmParts.map((p) => (
          <section
            key={p.partId}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold">{p.name}</h2>
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                  p.risk === "높음"
                    ? "bg-red-50 text-danger"
                    : p.risk === "보통"
                      ? "bg-amber-50 text-warn"
                      : "bg-emerald-50 text-ok"
                }`}
              >
                위협 {p.risk}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              고장 진행도 {Math.round(p.progress * 100)}% · RUL{" "}
              <span className="font-semibold text-ink">
                {p.rulFlightHours} FH
              </span>
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg">
              <div
                className={`h-full rounded-full ${
                  p.risk === "높음" ? "bg-danger" : "bg-brand"
                }`}
                style={{ width: `${p.progress * 100}%` }}
              />
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {p.sensors.map((s) => (
                <li
                  key={s.label}
                  className="rounded-md border border-line bg-bg px-2.5 py-2 text-xs"
                >
                  <p className="text-muted">{s.label}</p>
                  <p
                    className={`mt-0.5 font-semibold ${
                      s.status === "bad"
                        ? "text-danger"
                        : s.status === "warn"
                          ? "text-warn"
                          : "text-ink"
                    }`}
                  >
                    {s.value}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-xl border border-line bg-surface p-5">
        <h2 className="mb-4 text-sm font-semibold">계통별 진행도</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="progress" name="진행도 %" fill="#1a3a6b" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </AppShell>
  );
}
