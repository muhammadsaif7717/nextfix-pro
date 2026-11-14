"use client";

import React from "react";

interface NextFixLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export default function NextFixLogo({
  className = "",
  size = "md",
  inverted = false,
}: NextFixLogoProps) {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14",
  }[size];

  const titleSizes = {
    sm: "text-lg",
    md: "text-2xl sm:text-[26px]",
    lg: "text-3xl",
  }[size];

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px] sm:text-[11px]",
    lg: "text-xs",
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke NextFix Vector Emblem */}
      <div
        className={`relative ${iconDimensions} rounded-xl sm:rounded-2xl p-[2px] shadow-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
        style={{
          background: "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
          boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Inner Geometric Shield Glow */}
          <path
            d="M24 4L40 10V22C40 32 33 40.5 24 44C15 40.5 8 32 8 22V10L24 4Z"
            fill="white"
            fillOpacity="0.12"
          />
          {/* Dynamic "N" + Circuit Lightning Bolt Fusion */}
          <path
            d="M16 32V16L26 27V16"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 21L34 16L30 25L35 24L26 35L28 27L23 29L26 21Z"
            fill="#FFFFFF"
          />
          {/* Micro precision dot */}
          <circle cx="16" cy="16" r="2" fill="white" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="whitespace-nowrap leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black font-heading tracking-tight ${titleSizes} ${
              inverted ? "text-white" : "text-[#1F1F1F]"
            }`}
          >
            NextFix
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-[#10B981] text-white text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
            PRO
          </span>
        </div>
        <div
          className={`font-bold tracking-[0.18em] uppercase mt-1 ${subtitleSizes} ${
            inverted ? "text-slate-400" : "text-[#888888]"
          }`}
        >
          Smart Tech Repair
        </div>
      </div>
    </div>
  );
}