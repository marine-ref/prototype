"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ClipboardList,
  Home,
  LogOut,
  MessageSquare,
  Radar,
  Wrench,
  History,
} from "lucide-react";

const navGroups = [
  {
    title: "시연 흐름",
    items: [
      { href: "/", label: "1. 현황", icon: Home },
      { href: "/assistant", label: "2. AI 어시스턴트", icon: MessageSquare },
      { href: "/manuals", label: "3. 교범 검색", icon: BookOpen },
      { href: "/failures", label: "4. 유사 고장", icon: ClipboardList },
      { href: "/phm", label: "5. PHM 상태", icon: Radar },
      { href: "/guide", label: "6. 정비 가이드", icon: Wrench },
    ],
  },
  {
    title: "운영",
    items: [
      { href: "/history", label: "질의·조치 이력", icon: History },
    ],
  },
];

function normalizePath(path: string) {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function isActive(pathname: string, href: string) {
  const path = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-line bg-surface">
      <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-line px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-white">
          ROK
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">Surion AI</p>
          <p className="truncate text-[10px] text-muted">정비 어시스턴트</p>
        </div>
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto px-2.5 py-3">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="px-2.5 pb-1 text-[10px] font-medium text-muted">
              {group.title}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(pathname, item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={`${group.title}-${item.href}-${item.label}`}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition ${
                      active
                        ? "bg-brand-soft font-medium text-brand"
                        : "text-ink hover:bg-bg"
                    }`}
                  >
                    <Icon size={15} className="shrink-0 opacity-80" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-line p-2.5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-line px-3 py-2 text-sm text-muted"
        >
          <LogOut size={15} />
          세션 종료
        </button>
      </div>
    </aside>
  );
}
