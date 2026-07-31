"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const STEPS = [
  { id: "home", href: "/", label: "현황" },
  { id: "assistant", href: "/assistant", label: "AI 어시스턴트" },
  { id: "manuals", href: "/manuals", label: "교범" },
  { id: "failures", href: "/failures", label: "유사 고장" },
  { id: "phm", href: "/phm", label: "PHM" },
  { id: "guide", href: "/guide", label: "정비 가이드" },
] as const;

function normalizePath(path: string) {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function DemoFlowNav({
  current,
}: {
  current?: (typeof STEPS)[number]["id"];
}) {
  const pathname = normalizePath(usePathname());
  const idx = Math.max(
    0,
    STEPS.findIndex((s) =>
      current
        ? s.id === current
        : s.href === "/"
          ? pathname === "/"
          : pathname === s.href || pathname.startsWith(`${s.href}/`),
    ),
  );
  const next = STEPS[idx + 1];
  const isLast = idx === STEPS.length - 1;

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3 text-sm">
      <nav className="flex flex-wrap items-center gap-1" aria-label="시연 흐름">
        {STEPS.map((s, i) => {
          const active = i === idx;
          return (
            <span key={s.id} className="flex items-center gap-1">
              {i > 0 ? (
                <span className="text-muted/40" aria-hidden>
                  /
                </span>
              ) : null}
              <Link
                href={s.href}
                className={
                  active
                    ? "font-medium text-brand"
                    : "text-muted hover:text-ink"
                }
              >
                {s.label}
              </Link>
            </span>
          );
        })}
      </nav>
      {next ? (
        <Link
          href={next.href}
          className="inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 text-xs font-medium text-white"
        >
          다음 · {next.label}
          <ArrowRight size={12} />
        </Link>
      ) : isLast ? (
        <Link
          href="/"
          className="text-xs font-medium text-muted hover:text-ink"
        >
          시연 완료 · 현황으로
        </Link>
      ) : null}
    </div>
  );
}
