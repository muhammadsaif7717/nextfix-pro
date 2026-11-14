"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  Laptop,
  Flame,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MoveHorizontal,
} from "lucide-react";

export default function NextFixBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      id: "iphone",
      title: "iPhone 15 Pro OLED Display",
      category: "Screen Restoration",
      time: "Restored in 22 Mins",
      warranty: "Lifetime Glass Guarantee",
      beforeImage:
        "https://images.unsplash.com/photo-1636589343867-f1d643baf04c?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=1200",
      beforeText: "Shattered OLED & Touch Glitch",
      afterText: "Pristine OEM Super Retina XDR",
    },
    {
      id: "macbook",
      title: "MacBook Pro Liquid Spill Clean",
      category: "Motherboard Ultrasonic",
      time: "Completed Same-Day",
      warranty: "100% Data Preserved",
      beforeImage:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
      beforeText: "Corroded Logic Board & Short Circuit",
      afterText: "Ultrasonic Deoxidized & Operational",
    },
    {
      id: "samsung",
      title: "Galaxy S24 Screen & Housing",
      category: "Laser Rebuild",
      time: "Restored in 35 Mins",
      warranty: "IP68 Water Seals Kept",
      beforeImage:
        "https://images.unsplash.com/photo-1664735245477-25d862e46cf4?auto=format&fit=crop&q=80&w=1200",
      afterImage:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200",
      beforeText: "Spiderweb Fracture & Pixel Bleed",
      afterText: "Factory Laser Calibrated & Sealed",
    },
  ];

  const current = presets[activePreset];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafafa] border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-2">
            Visual Proof of Quality
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Interactive Before & After
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Drag the slider to see how shattered screens and corroded logic boards are restored to pristine factory specification.
          </p>
        </motion.div>

        {/* Preset Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {presets.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActivePreset(i)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                activePreset === i
                  ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30"
                  : "bg-white text-[#636363] border border-[#e8e8e8] hover:bg-[#f6f6f6]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-[#e8e8e8] shadow-xl"
        >
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none bg-[#1F1F1F]"
          >
            {/* After Image (Full background) */}
            <Image
              src={current.afterImage}
              alt={current.afterText}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-center pointer-events-none select-none"
              draggable={false}
            />

            {/* Before Image (Clipped overlay) */}
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute inset-0"
            >
              <Image
                src={current.beforeImage}
                alt={current.beforeText}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-center filter contrast-125 brightness-90 pointer-events-none select-none"
                draggable={false}
              />
            </div>

            {/* Before Badge (Left) */}
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/20 shadow-lg pointer-events-none">
              BEFORE: {current.beforeText}
            </div>

            {/* After Badge (Right) */}
            <div className="absolute top-4 right-4 bg-[#2563EB] text-white px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-lg pointer-events-none">
              AFTER: {current.afterText}
            </div>

            {/* Drag Handle Bar */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl -translate-x-1/2 flex items-center justify-center pointer-events-none"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#1F1F1F] shadow-2xl flex items-center justify-center border-2 border-[#2563EB] pointer-events-auto">
                <MoveHorizontal className="w-5 h-5 text-[#2563EB]" />
              </div>
            </div>
          </div>

          {/* Bottom Card Meta Details */}
          <div className="mt-6 pt-5 border-t border-[#f0f0f0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-semibold text-[#636363]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#1F1F1F]">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>{current.time}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#1F1F1F]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>{current.warranty}</span>
              </span>
            </div>

            <div className="text-[11px] text-[#888888]">
              💡 Tip: Click or drag the center handle left/right to compare
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}