"use client";

import type { ReactNode } from "react";

function CornerOrnament({ rotate }: { rotate: number }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className="absolute w-5 h-5 sm:w-6 sm:h-6 pointer-events-none"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M2 26 L2 8 C2 4 4 2 8 2 L26 2"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <circle cx="2" cy="26" r="1.4" fill="var(--primary)" opacity="0.7" />
      <path
        d="M6 6 C9 6 9 9 6 9 C3 9 3 6 6 6Z"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1"
        opacity="0.55"
      />
    </svg>
  );
}

export function AntiqueFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 z-20 pointer-events-none">
        <CornerOrnament rotate={0} />
        <div className="absolute top-0 right-0">
          <CornerOrnament rotate={90} />
        </div>
        <div className="absolute bottom-0 right-0">
          <CornerOrnament rotate={180} />
        </div>
        <div className="absolute bottom-0 left-0">
          <CornerOrnament rotate={270} />
        </div>
        {/* burnt vignette */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow:
              "inset 0 0 24px 6px rgba(0,0,0,0.45), inset 0 0 0 1px color-mix(in oklch, var(--primary) 30%, transparent)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
