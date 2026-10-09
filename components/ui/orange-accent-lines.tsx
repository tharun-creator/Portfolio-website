"use client";

import React from "react";

// Glowing horizontal orange section divider line
export function OrangeSectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-6xl mx-auto my-12 px-4 flex items-center justify-center ${className}`}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute h-1 w-32 rounded-full bg-gradient-to-r from-orange-600 via-amber-400 to-orange-600 blur-sm opacity-80" />
    </div>
  );
}

// Side margin glowing vector curves (Matching user's drawn screenshot lines)
export function SideOrangeLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Left side flowing curve */}
      <svg
        className="absolute left-0 top-1/4 h-[900px] w-48 text-orange-500/20 opacity-80"
        viewBox="0 0 100 900"
        fill="none"
      >
        <path
          d="M -30 0 C 80 200 90 400 -10 600 Q 80 750 0 900"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
      </svg>

      {/* Right side flowing loop curve */}
      <svg
        className="absolute right-0 top-1/3 h-[1000px] w-56 text-orange-500/20 opacity-80"
        viewBox="0 0 120 1000"
        fill="none"
      >
        <path
          d="M 150 0 C 20 250 140 450 30 650 Q -10 800 130 1000"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
