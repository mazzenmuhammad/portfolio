"use client";

type CandleProps = {
  className?: string;
  height?: number;
  delay?: number;
};

export function Candle({ className = "", height = 150, delay = 0 }: CandleProps) {
  const bodyHeight = height * 0.62;
  const bodyWidth = Math.max(20, height * 0.16);
  const uid = `${delay}`.replace(".", "");

  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: bodyWidth * 5,
          height: bodyWidth * 5,
          top: -bodyWidth * 1.2,
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 30%, transparent) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* Flame */}
      <div
        className="flame-flicker relative z-10"
        style={{
          width: bodyWidth * 0.95,
          height: bodyWidth * 1.7,
          marginBottom: -2,
          animationDelay: `${delay}s`,
        }}
      >
        <svg viewBox="0 0 24 40" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id={`outerFlame-${uid}`} cx="50%" cy="72%" r="65%">
              <stop offset="0%" stopColor="#fff6d8" />
              <stop offset="30%" stopColor="var(--primary)" />
              <stop offset="75%" stopColor="#7a3b12" />
              <stop offset="100%" stopColor="#3a1c08" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`innerFlame-${uid}`} cx="50%" cy="80%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fef0c0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fef0c0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M12 2C5 13 2 21 12 38C22 21 19 13 12 2Z"
            fill={`url(#outerFlame-${uid})`}
          />
          <path
            d="M12 16C9 22 8 26 12 33C16 26 15 22 12 16Z"
            fill={`url(#innerFlame-${uid})`}
          />
        </svg>
      </div>

      {/* Wick */}
      <div className="w-px h-2 bg-foreground/30 relative z-10" />

      {/* Wax body with drips */}
      <svg
        viewBox={`0 0 ${bodyWidth} ${bodyHeight}`}
        width={bodyWidth}
        height={bodyHeight}
        className="relative z-10"
      >
        <defs>
          <linearGradient id={`waxBody-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f1e8d4" />
            <stop offset="45%" stopColor="#e3d6b8" />
            <stop offset="75%" stopColor="#cdbb92" />
            <stop offset="100%" stopColor="#b6a378" />
          </linearGradient>
        </defs>
        <path
          d={`M0 4
              C0 1.5 ${bodyWidth * 0.5} 1.5 ${bodyWidth} 4
              L${bodyWidth} ${bodyHeight - 14}
              C${bodyWidth} ${bodyHeight - 14} ${bodyWidth * 0.82} ${bodyHeight - 10} ${bodyWidth * 0.88} ${bodyHeight - 2}
              C${bodyWidth * 0.92} ${bodyHeight + 2} ${bodyWidth * 0.7} ${bodyHeight - 1} ${bodyWidth * 0.62} ${bodyHeight - 8}
              C${bodyWidth * 0.58} ${bodyHeight - 13} ${bodyWidth * 0.5} ${bodyHeight - 6} ${bodyWidth * 0.46} ${bodyHeight}
              C${bodyWidth * 0.42} ${bodyHeight - 6} ${bodyWidth * 0.4} ${bodyHeight - 16} ${bodyWidth * 0.34} ${bodyHeight - 9}
              C${bodyWidth * 0.3} ${bodyHeight - 3} ${bodyWidth * 0.18} ${bodyHeight - 3} ${bodyWidth * 0.12} ${bodyHeight - 9}
              C${bodyWidth * 0.04} ${bodyHeight - 12} 0 ${bodyHeight - 16} 0 ${bodyHeight - 20}
              Z`}
          fill={`url(#waxBody-${uid})`}
        />
        <ellipse
          cx={bodyWidth / 2}
          cy={4}
          rx={bodyWidth / 2}
          ry={2.4}
          fill="#fbf4e4"
          opacity={0.8}
        />
      </svg>

      {/* Wax pool / holder */}
      <div
        className="rounded-full relative z-0"
        style={{
          width: bodyWidth * 2.1,
          height: bodyWidth * 0.5,
          marginTop: -4,
          background:
            "radial-gradient(ellipse at center, #d8c9a0 0%, #b9a679 55%, transparent 90%)",
          opacity: 0.85,
        }}
      />
      <div
        className="rounded-full"
        style={{
          width: bodyWidth * 3.4,
          height: bodyWidth * 0.9,
          marginTop: -bodyWidth * 0.35,
          background:
            "radial-gradient(ellipse at center, color-mix(in oklch, var(--primary) 22%, transparent) 0%, transparent 75%)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}
