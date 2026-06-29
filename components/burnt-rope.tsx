"use client";

export function BurntRope({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="w-full h-6"
      >
        <defs>
          <linearGradient id="ropeFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2a1a10" stopOpacity="0" />
            <stop offset="8%" stopColor="#3a2414" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8a6a3c" />
            <stop offset="92%" stopColor="#3a2414" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2a1a10" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* twisted strand 1 */}
        <path
          d="M0 12 Q 20 4, 40 12 T 80 12 T 120 12 T 160 12 T 200 12 T 240 12 T 280 12 T 320 12 T 360 12 T 400 12"
          stroke="url(#ropeFade)"
          strokeWidth="2.4"
          fill="none"
          opacity="0.9"
        />
        {/* twisted strand 2 */}
        <path
          d="M0 12 Q 20 20, 40 12 T 80 12 T 120 12 T 160 12 T 200 12 T 240 12 T 280 12 T 320 12 T 360 12 T 400 12"
          stroke="url(#ropeFade)"
          strokeWidth="2.4"
          fill="none"
          opacity="0.7"
        />

        {/* charred ember glow at center */}
        <circle cx="200" cy="12" r="3.5" fill="var(--primary)" opacity="0.55">
          <animate
            attributeName="opacity"
            values="0.35;0.7;0.35"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="12" r="7" fill="var(--primary)" opacity="0.15" />

        {/* frayed end - left */}
        <g opacity="0.8">
          <path d="M0 12 L-4 8" stroke="#4a3420" strokeWidth="1" />
          <path d="M0 12 L-5 12" stroke="#4a3420" strokeWidth="1" />
          <path d="M0 12 L-4 16" stroke="#4a3420" strokeWidth="1" />
        </g>
        {/* frayed end - right */}
        <g opacity="0.8">
          <path d="M400 12 L404 8" stroke="#4a3420" strokeWidth="1" />
          <path d="M400 12 L405 12" stroke="#4a3420" strokeWidth="1" />
          <path d="M400 12 L404 16" stroke="#4a3420" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
