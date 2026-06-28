"use client";

type CandleProps = {
  className?: string;
  height?: number;
  delay?: number;
};

export function Candle({ className = "", height = 90, delay = 0 }: CandleProps) {
  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <div
        className="flame-flicker"
        style={{
          width: 14,
          height: 22,
          marginBottom: -3,
          animationDelay: `${delay}s`,
        }}
      >
        <svg viewBox="0 0 20 32" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id={`flameGlow-${delay}`} cx="50%" cy="75%" r="65%">
              <stop offset="0%" stopColor="#fff6d8" />
              <stop offset="35%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="#5a2e0e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M10 1.5C5 11 2 18 10 30.5C18 18 15 11 10 1.5Z"
            fill={`url(#flameGlow-${delay})`}
          />
        </svg>
      </div>
      <div className="w-px h-2 bg-foreground/30" />
      <div
        className="rounded-[2px]"
        style={{
          width: 16,
          height: height * 0.5,
          background:
            "linear-gradient(to bottom, #efe7d6 0%, #d9cdb2 60%, #c7b896 100%)",
          boxShadow: "inset -3px 0 5px rgba(0,0,0,0.3), inset 2px 0 3px rgba(255,255,255,0.15)",
        }}
      />
      <div
        className="rounded-full"
        style={{
          width: 30,
          height: 8,
          background:
            "radial-gradient(ellipse at center, color-mix(in oklch, var(--primary) 35%, transparent) 0%, transparent 75%)",
          filter: "blur(2px)",
          marginTop: -1,
        }}
      />
    </div>
  );
}
