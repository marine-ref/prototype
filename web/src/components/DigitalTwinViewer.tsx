"use client";

import Image from "next/image";
import Link from "next/link";

export function DigitalTwinViewer({
  highlightPartId = "engine-oil",
}: {
  highlightPartId?: string;
}) {
  const engineHot = highlightPartId === "engine-oil";

  return (
    <section className="flex h-full min-h-[28rem] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold">디지털트윈</h2>
          <p className="text-xs text-muted">Surion KUH-1 · 계통 가시화</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-medium text-ok">LIVE</span>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#0a101c]">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(40,80,140,0.35), transparent 70%)",
          }}
        />

        <div className="relative z-10 aspect-[16/9] w-full max-w-xl">
          <Image
            src="/twin/surion-side.png"
            alt="수리온 KUH-1 디지털트윈"
            fill
            className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            sizes="(max-width: 1280px) 100vw, 40vw"
            priority
            unoptimized
          />

          {engineHot ? (
            <>
              {/* engine bay — mid fuselage under main rotor mast */}
              <div
                className="pointer-events-none absolute"
                style={{
                  left: "42%",
                  top: "46%",
                  width: "14%",
                  height: "16%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-red-500/30" />
                <span className="absolute inset-[12%] rounded-full border-2 border-red-400/90 bg-red-500/25 shadow-[0_0_24px_rgba(239,68,68,0.65)]" />
                <span className="absolute inset-[28%] rounded-full border border-dashed border-red-200/80" />
              </div>

              {/* callout */}
              <div
                className="absolute z-20"
                style={{ left: "58%", top: "18%" }}
              >
                <div className="relative">
                  <svg
                    className="absolute -left-16 top-8 h-12 w-16 text-red-300"
                    viewBox="0 0 64 48"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M60 8 L18 36"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="14" cy="38" r="3" fill="currentColor" />
                  </svg>
                  <div className="rounded-lg border border-red-400/70 bg-black/80 px-3 py-2 shadow-lg backdrop-blur-sm">
                    <p className="text-[11px] font-semibold text-red-200">
                      엔진 · 오일계통
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-300">
                      압력 저하 · 필터 점검 권고
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="absolute bottom-3 left-3 z-10 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-black/55 px-2 py-1 text-[11px] text-white backdrop-blur-sm">
            Surion-KUH-01
          </span>
          {engineHot ? (
            <span className="rounded-md bg-danger/90 px-2 py-1 text-[11px] font-medium text-white">
              이상 부위 매핑
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-3 right-3 z-10 rounded-md bg-black/45 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm">
          Twin · 시연 모드
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-line bg-surface p-3 text-xs">
        {[
          { label: "교범", href: "/manuals" },
          { label: "유사 고장", href: "/failures" },
          { label: "PHM", href: "/phm" },
          { label: "정비 가이드", href: "/guide" },
          { label: "이력", href: "/history" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md border border-line bg-bg px-2.5 py-1 text-muted transition hover:border-brand/40 hover:bg-brand-soft hover:text-brand"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
