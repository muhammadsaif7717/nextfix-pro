"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronsLeftRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function NextFixBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      id: "iphone",
      title: "iPhone 15 Pro",
      issue: "Shattered OLED & Glitch",
      solution: "OEM Super Retina XDR",
      turnaround: "22 Mins",
      warranty: "Lifetime Glass Guarantee",
      beforeImage:
        "https://images.unsplash.com/photo-1636589343867-f1d643baf04c?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "macbook",
      title: "MacBook Pro M-Series",
      issue: "Liquid Spill & Board Short",
      solution: "Ultrasonic Deoxidized",
      turnaround: "Same-Day",
      warranty: "100% Data Preserved",
      beforeImage:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "samsung",
      title: "Galaxy S24 Ultra",
      issue: "Spiderweb Fracture",
      solution: "Laser Rebuilt & Sealed",
      turnaround: "35 Mins",
      warranty: "IP68 Water Seals Kept",
      beforeImage:
        "https://images.unsplash.com/photo-1664735245477-25d862e46cf4?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const current = presets[activePreset];

  // Precision pointer position calculator (works across mouse, touch, and trackpad)
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  // Pointer Down with SetPointerCapture for unbreakable drag experience
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture was already released
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] border-b border-[#e2e8f0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal, Human-Crafted Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Visual Proof
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading">
            Before & After
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Drag the slider horizontally to compare damaged hardware before and after restoration.
          </p>
        </div>

        {/* Clean Segmented Device Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex p-1 rounded-full bg-white border border-[#e2e8f0] shadow-sm">
            {presets.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePreset(i);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activePreset === i
                    ? "bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/25"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Effortless Comparison Canvas (Zero clunky nested boxes) */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{ touchAction: "none" }}
            className={`relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none bg-slate-950 border border-slate-200/80 shadow-2xl cursor-ew-resize ${
              isDragging ? "cursor-grabbing" : ""
            }`}
          >
            {/* 1. After Image (Full Background) */}
            <Image
              src={current.afterImage}
              alt={current.solution}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-center pointer-events-none select-none"
              draggable={false}
              priority
            />

            {/* 2. Before Image (Clipped Left-to-Right Overlay) */}
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute inset-0 pointer-events-none"
            >
              <Image
                src={current.beforeImage}
                alt={current.issue}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center filter brightness-90 contrast-110 pointer-events-none select-none"
                draggable={false}
                priority
              />
            </div>

            {/* Discreet Floating "Before" Label (Left) */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/75 text-white backdrop-blur-md border border-white/15 shadow-md">
                Before
              </span>
            </div>

            {/* Discreet Floating "After" Label (Right) */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#EA580C] text-white backdrop-blur-md shadow-md">
                After
              </span>
            </div>

            {/* Precision Handle Bar & Floating Grab Circle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] -translate-x-1/2 pointer-events-none z-30"
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#EA580C] shadow-2xl flex items-center justify-center border-2 border-[#EA580C] transition-transform duration-150 ${
                  isDragging ? "scale-110 shadow-[#EA580C]/50" : "scale-100"
                }`}
              >
                <ChevronsLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Accessible Hidden Range Input for Keyboard Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after comparison slider"
              className="sr-only"
            />
          </div>

          {/* Minimal 1-Line Status Footer */}
          <div className="mt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#0F172A]">
                {current.issue}
              </span>
              <span className="text-slate-300">→</span>
              <span className="font-bold text-[#EA580C]">
                {current.solution}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1 text-[#0F172A]">
                <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{current.turnaround}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#0F172A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{current.warranty}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
