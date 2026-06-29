"use client";

import type { ReactNode } from "react";

export function AntiqueFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* SVG Frame overlay — rendered on top of content */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-sm">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold gradient for the frame rails */}
            <linearGradient id="goldH" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f5e6b0" stopOpacity="0.9" />
              <stop offset="22%"  stopColor="#c9a455" stopOpacity="0.95" />
              <stop offset="50%"  stopColor="#8a6825" stopOpacity="1" />
              <stop offset="78%"  stopColor="#c9a455" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f5e6b0" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="goldV" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#f5e6b0" stopOpacity="0.9" />
              <stop offset="22%"  stopColor="#c9a455" stopOpacity="0.95" />
              <stop offset="50%"  stopColor="#8a6825" stopOpacity="1" />
              <stop offset="78%"  stopColor="#c9a455" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f5e6b0" stopOpacity="0.9" />
            </linearGradient>
            {/* Inner shadow gradient */}
            <linearGradient id="shadowT" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="shadowB" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="shadowL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="shadowR" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ── Inner shadow strips ── */}
          <rect x="0"   y="0"   width="400" height="28" fill="url(#shadowT)" />
          <rect x="0"   y="272" width="400" height="28" fill="url(#shadowB)" />
          <rect x="0"   y="0"   width="28"  height="300" fill="url(#shadowL)" />
          <rect x="372" y="0"   width="28"  height="300" fill="url(#shadowR)" />

          {/* ── Outer frame rails (thick border) ── */}
          {/* Top rail */}
          <rect x="0"   y="0"   width="400" height="11" fill="url(#goldH)" />
          {/* Bottom rail */}
          <rect x="0"   y="289" width="400" height="11" fill="url(#goldH)" />
          {/* Left rail */}
          <rect x="0"   y="0"   width="11"  height="300" fill="url(#goldV)" />
          {/* Right rail */}
          <rect x="389" y="0"   width="11"  height="300" fill="url(#goldV)" />

          {/* ── Thin inner accent line ── */}
          <rect x="14"  y="14"  width="372" height="2"   fill="#c9a455" opacity="0.6" />
          <rect x="14"  y="284" width="372" height="2"   fill="#c9a455" opacity="0.6" />
          <rect x="14"  y="14"  width="2"   height="272" fill="#c9a455" opacity="0.6" />
          <rect x="384" y="14"  width="2"   height="272" fill="#c9a455" opacity="0.6" />

          {/* ── Corner ornaments ── */}
          {/* Top-left */}
          <g transform="translate(0,0)">
            <circle cx="18" cy="18" r="7"  fill="#c9a455" opacity="0.9" />
            <circle cx="18" cy="18" r="4"  fill="#8a6825" opacity="1" />
            <circle cx="18" cy="18" r="1.8" fill="#f5e6b0" opacity="0.9" />
            <line x1="18" y1="4"  x2="18" y2="11" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="4"  y1="18" x2="11" y2="18" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="9"  y1="9"  x2="13" y2="13" stroke="#c9a455" strokeWidth="1"   opacity="0.5" />
          </g>
          {/* Top-right */}
          <g transform="translate(400,0) scale(-1,1)">
            <circle cx="18" cy="18" r="7"  fill="#c9a455" opacity="0.9" />
            <circle cx="18" cy="18" r="4"  fill="#8a6825" opacity="1" />
            <circle cx="18" cy="18" r="1.8" fill="#f5e6b0" opacity="0.9" />
            <line x1="18" y1="4"  x2="18" y2="11" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="4"  y1="18" x2="11" y2="18" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="9"  y1="9"  x2="13" y2="13" stroke="#c9a455" strokeWidth="1"   opacity="0.5" />
          </g>
          {/* Bottom-left */}
          <g transform="translate(0,300) scale(1,-1)">
            <circle cx="18" cy="18" r="7"  fill="#c9a455" opacity="0.9" />
            <circle cx="18" cy="18" r="4"  fill="#8a6825" opacity="1" />
            <circle cx="18" cy="18" r="1.8" fill="#f5e6b0" opacity="0.9" />
            <line x1="18" y1="4"  x2="18" y2="11" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="4"  y1="18" x2="11" y2="18" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="9"  y1="9"  x2="13" y2="13" stroke="#c9a455" strokeWidth="1"   opacity="0.5" />
          </g>
          {/* Bottom-right */}
          <g transform="translate(400,300) scale(-1,-1)">
            <circle cx="18" cy="18" r="7"  fill="#c9a455" opacity="0.9" />
            <circle cx="18" cy="18" r="4"  fill="#8a6825" opacity="1" />
            <circle cx="18" cy="18" r="1.8" fill="#f5e6b0" opacity="0.9" />
            <line x1="18" y1="4"  x2="18" y2="11" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="4"  y1="18" x2="11" y2="18" stroke="#c9a455" strokeWidth="1.5" opacity="0.7" />
            <line x1="9"  y1="9"  x2="13" y2="13" stroke="#c9a455" strokeWidth="1"   opacity="0.5" />
          </g>

          {/* ── Mid-edge ornaments ── */}
          {/* Top center */}
          <g transform="translate(200,0)">
            <line x1="0" y1="0" x2="-18" y2="11" stroke="#c9a455" strokeWidth="1" opacity="0.5"/>
            <line x1="0" y1="0" x2=" 18" y2="11" stroke="#c9a455" strokeWidth="1" opacity="0.5"/>
            <circle cx="0" cy="11" r="2.5" fill="#c9a455" opacity="0.75" />
          </g>
          {/* Bottom center */}
          <g transform="translate(200,300) scale(1,-1)">
            <line x1="0" y1="0" x2="-18" y2="11" stroke="#c9a455" strokeWidth="1" opacity="0.5"/>
            <line x1="0" y1="0" x2=" 18" y2="11" stroke="#c9a455" strokeWidth="1" opacity="0.5"/>
            <circle cx="0" cy="11" r="2.5" fill="#c9a455" opacity="0.75" />
          </g>
        </svg>
      </div>

      {children}
    </div>
  );
}
