"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";

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
      className="relative w-full min-h-[calc(100vh-116px)] min-h-[calc(100dvh-116px)] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* 1. Authentic High-Resolution Workshop Background Image (Clearly Visible) */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=85&w=2000"
          alt="Electronics Repair Laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.78] contrast-[1.05]"
        />
      </div>

      {/* 2. Soft, Balanced Overlay — allows background image to be clearly seen */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.85] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

      {/* 3. Minimal, High-Impact Centered Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Subtle Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Open Now • 30-Minute Certified Repairs</span>
        </motion.div>

        {/* Grand Headline (Punchy, Clean, Few Words) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] font-heading drop-shadow-lg"
        >
          Precision Tech Repair.
          <span className="block text-[#3B82F6] mt-2">Restored in Minutes.</span>
        </motion.h1>

        {/* Short, Simple One-Sentence Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-200/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md"
        >
          Expert care for iPhone, Mac, and Galaxy. Genuine OEM components, factory seals, and zero data loss.
        </motion.p>

        {/* Minimal Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            onClick={onBookRepair}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-[#2563EB]/40 flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
          >
            <span>Book a Repair</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGetQuote}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/30 backdrop-blur-md transition-all duration-200 shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
          >
            <span>Price Calculator</span>
          </button>
        </motion.div>

        {/* Subtle, Minimal Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-200/90 font-medium drop-shadow"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#3B82F6]" />
            <span>30-Min Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
            <span>1-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#3B82F6]" />
            <span>No Fix, No Fee Guarantee</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
          />
        </div>
      </a>
    </section>
  );
}
