"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

interface WeFixHeroSliderProps {
  onBookRepair: () => void;
  onGetQuote: () => void;
}

export default function WeFixHeroSlider({
  onBookRepair,
  onGetQuote,
}: WeFixHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "general",
      title: "Hardware Restored to",
      highlight: "Factory Perfection.",
      desc: "Specialized same-day repairs for iPhone, MacBook, and Galaxy. Genuine OEM components, factory seals, and zero data loss.",
      bgImage:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=85&w=2000",
      pills: [
        { icon: Zap, label: "28-Min Turnaround" },
        { icon: ShieldCheck, label: "Lifetime Warranty" },
        { icon: CheckCircle2, label: "100% Data Preserved" },
        { icon: Award, label: "No Fix = $0 Fee" },
      ],
    },
    {
      id: "screen",
      title: "Shattered OLED & Glass",
      highlight: "Fixed in Under 28 Mins.",
      desc: "Precision laser cold-pressed screen replacements with factory color calibration and original touch sensitivity.",
      bgImage:
        "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=85&w=2000",
      pills: [
        { icon: Zap, label: "OEM Super Retina" },
        { icon: ShieldCheck, label: "TrueTone Retained" },
        { icon: CheckCircle2, label: "Water Seals Kept" },
        { icon: Award, label: "Instant Walk-In" },
      ],
    },
    {
      id: "logicboard",
      title: "Motherboard & Liquid Damage",
      highlight: "Revived with Zero Data Loss.",
      desc: "Micro-soldering, stereomicroscope diagnostics, and ultrasonic deoxidation baths for completely dead devices.",
      bgImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=85&w=2000",
      pills: [
        { icon: Zap, label: "Chip-Level Rework" },
        { icon: ShieldCheck, label: "Ultrasonic Bath" },
        { icon: CheckCircle2, label: "NAND Recovery" },
        { icon: Award, label: "Master Engineers" },
      ],
    },
  ];

  // Automatic slide cycle every 6.5s without any manual buttons
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 sm:pt-32 pb-20"
    >
      {/* 1. Next.js Optimized Crossfading Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.bgImage}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 select-none pointer-events-none"
        >
          <Image
            src={active.bgImage}
            alt={active.title}
            fill
            priority={currentSlide === 0}
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.74] contrast-[1.08]"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Sophisticated Atmospheric Lighting & Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 40%, rgba(234, 88, 12, 0.16) 0%, rgba(15, 23, 42, 0.52) 60%, rgba(2, 6, 23, 0.90) 100%)",
        }}
      />

      {/* 3. Ultra-Clean, Perfectly Aligned Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Animated Grand Headline (No badge above it) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${active.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] font-heading drop-shadow-2xl">
              {active.title}
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-lg">
                {active.highlight}
              </span>
            </h1>

            {/* Minimal High-Impact Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
              {active.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* High-Contrast Luxury Action Row */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={onBookRepair}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white shadow-xl shadow-[#EA580C]/35 hover:shadow-[#EA580C]/50 flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[50px] active:scale-95"
          >
            <span>Book Priority Repair</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGetQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[50px] active:scale-95"
          >
            <span>Price Calculator</span>
          </button>
        </div>

        {/* Dynamic Frosted Trust Strip with Slide Context */}
        <div className="mt-12 sm:mt-16 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-200/90 font-medium shadow-lg">
          {active.pills.map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <span className="hidden sm:inline text-white/20">•</span>
                )}
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#FB923C]" />
                  <span>{item.label}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Subtle Slide Indicators (Dots only, no clickable arrows) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentSlide === i
                  ? "w-8 bg-[#EA580C]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Downward Arrow Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 text-white/60 hover:text-[#FB923C] transition-colors group"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-[#EA580C]/50 group-hover:bg-[#EA580C]/15 transition-all shadow-md"
        >
          <ChevronDown className="w-4 h-4 text-[#FB923C]" />
        </motion.div>
      </a>
    </section>
  );
}
