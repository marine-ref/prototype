"use client";

export function DigitalTwinViewer({
  highlightPartId = "engine-oil",
}: {
  highlightPartId?: string;
}) {
  const engineHot = highlightPartId === "engine-oil";

  return (
    <section className="flex h-full min-h-[28rem] flex-col rounded-xl border border-line bg-surface">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-sm font-semibold">디지털트윈</h2>
        <p className="text-xs text-muted">수리온 · 이상 부위 가시화</p>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 p-4">
        <svg
          viewBox="0 0 400 220"
          className="h-full max-h-64 w-full max-w-lg"
          role="img"
          aria-label="수리온 디지털트윈 개략도"
        >
          {/* fuselage */}
          <ellipse cx="200" cy="120" rx="110" ry="28" fill="#64748b" />
          <rect x="280" y="108" width="70" height="20" rx="6" fill="#64748b" />
          {/* cabin */}
          <path d="M110 110 Q130 85 170 95 L190 110 Z" fill="#94a3b8" />
          {/* main rotor */}
          <line
            x1="80"
            y1="88"
            x2="320"
            y2="88"
            stroke="#475569"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="200" cy="88" r="8" fill="#334155" />
          {/* tail rotor */}
          <circle cx="350" cy="118" r="16" fill="none" stroke="#475569" strokeWidth="3" />
          {/* skids */}
          <line x1="130" y1="155" x2="250" y2="155" stroke="#334155" strokeWidth="3" />
          <line x1="150" y1="140" x2="150" y2="155" stroke="#334155" strokeWidth="2" />
          <line x1="230" y1="140" x2="230" y2="155" stroke="#334155" strokeWidth="2" />
          {/* engine / oil system highlight */}
          <g>
            <rect
              x="175"
              y="100"
              width="50"
              height="32"
              rx="4"
              fill={engineHot ? "#fecaca" : "#cbd5e1"}
              stroke={engineHot ? "#b91c1c" : "#64748b"}
              strokeWidth={engineHot ? 3 : 1}
            />
            {engineHot ? (
              <>
                <circle cx="200" cy="116" r="18" fill="none" stroke="#b91c1c" strokeWidth="2" opacity="0.5">
                  <animate
                    attributeName="r"
                    values="14;22;14"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0.2;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="200"
                  y="180"
                  textAnchor="middle"
                  className="fill-danger"
                  fontSize="11"
                  fontWeight="600"
                >
                  엔진 · 오일계통
                </text>
              </>
            ) : null}
          </g>
        </svg>
        <div className="absolute bottom-3 left-3 rounded-md bg-black/55 px-2 py-1 text-[11px] text-white">
          Surion-KUH-01 · 실시간 매핑(시연)
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-line p-3 text-xs">
        {[
          "교범",
          "유사 고장",
          "PHM",
          "정비 가이드",
          "이력",
        ].map((label) => (
          <span
            key={label}
            className="rounded-md border border-line bg-bg px-2 py-1 text-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
