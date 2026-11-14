"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { BEFORE_AFTER_ITEMS } from "@/data/beforeAfterData";
import {
  Sparkles,
  SlidersHorizontal,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface BeforeAfterVisualizerProps {
  onOpenEstimator: () => void;
}

export default function BeforeAfterVisualizer({
  onOpenEstimator,
}: BeforeAfterVisualizerProps) {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = BEFORE_AFTER_ITEMS[selectedCaseIndex];

  // Drag handling
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(5, Math.min(95, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Workmanship Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Before & After Precision Repairs
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Slide horizontally to see how our certified cleanroom technicians transform destroyed screens, corroded motherboards, and burnt ports back to factory standards.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCaseIndex === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <span>{item.device}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Display Card */}
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          {/* Top Info Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                Case Study #{selectedCaseIndex + 1}
              </span>
              <h3 className="text-lg font-bold text-white">
                {currentCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <Clock className="w-3.5 h-3.5" />
                {currentCase.turnaround}
              </span>
            </div>
          </div>

          {/* Split Screen Image Slider */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] select-none overflow-hidden cursor-ew-resize bg-slate-950"
          >
            {/* After Image (Background Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentCase.afterImage}
                alt="Flawless After Repair"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>AFTER: OEM RESTORED</span>
              </div>
            </div>

            {/* Before Image (Clipped Overlay Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                <Image
                  src={currentCase.beforeImage}
                  alt="Damaged Before Repair"
                  fill
                  className="object-cover object-center filter contrast-110"
                />
                <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>BEFORE: DAMAGED</span>
                </div>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-2xl flex items-center justify-center text-white">
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Bottom Prompt Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/80 text-[11px] font-semibold text-slate-300 pointer-events-none shadow-lg">
              ↔ Drag slider left or right to inspect workmanship
            </div>
          </div>

          {/* Bottom Diagnostic Specs & Reassurance */}
          <div className="p-6 sm:p-8 bg-slate-950 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Technical Diagnosis & Solution:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCase.afterDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Lab Verification Checkpoints:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-blue-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Experiencing a similar issue? Our master technicians can diagnose your hardware today.
              </span>
              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Calculate My Repair</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
