"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award, Sparkles, CheckCircle2 } from "lucide-react";

interface WeFixHeroSliderProps {
  onBookRepair: () => void;
  onGetQuote: () => void;
}

export default function WeFixHeroSlider({
  onBookRepair,
  onGetQuote,
}: WeFixHeroSliderProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 sm:pt-28 pb-16"
    >
      {/* 1. Authentic High-Resolution Workshop Background Image */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=85&w=2000"
          alt="Electronics Cleanroom Laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
      </div>

      {/* 2. Sophisticated Atmospheric Lighting & Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 35%, rgba(37, 99, 235, 0.18) 0%, rgba(15, 23, 42, 0.5) 60%, rgba(2, 6, 23, 0.88) 100%)",
        }}
      />

      {/* 3. Ultra-Clean, High-Converting Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Luminous Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/15 text-slate-200 text-xs font-semibold tracking-wide backdrop-blur-xl mb-6 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>New York Cleanroom Lab</span>
          <span className="text-white/30">•</span>
          <span className="text-emerald-400 font-bold">Open Today</span>
        </motion.div>

        {/* Grand Headline with Electric Cyan/Blue Gradient Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] font-heading drop-shadow-2xl"
        >
          Hardware Restored to
          <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            Factory Perfection.
          </span>
        </motion.h1>

        {/* Minimal High-Impact Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md"
        >
          Specialized same-day repairs for iPhone, MacBook, and Galaxy. Genuine OEM components, factory seals, and zero data loss.
        </motion.p>

        {/* High-Contrast Luxury Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            onClick={onBookRepair}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[50px] active:scale-95"
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
        </motion.div>

        {/* Frosted Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-200/90 font-medium shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>28-Min Turnaround</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Lifetime Warranty</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>100% Data Preserved</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>No Fix = $0 Fee</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </a>
    </section>
  );
}
