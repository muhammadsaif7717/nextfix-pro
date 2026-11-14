"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Flame,
  Award,
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
      subtitle: "⚡ Certified OEM Device Restoration",
      title: "Cracked Screen or Dead Battery?",
      highlight: "Fixed in Under 28 Minutes.",
      desc: "Top-rated electronic cleanroom laboratory in New York. We restore iPhones, MacBooks, Samsung, and consoles with 100% genuine OEM components and zero data loss.",
      bgImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1920",
    },
    {
      subtitle: "🔬 Micro-Soldering & Logic Board Lab",
      title: "Water Damage or Motherboard Short?",
      highlight: "Revived with Zero Data Loss.",
      desc: "Stereomicroscope chip-level diagnostics, BGA rework, and ultrasonic deoxidation baths. Where other shops declare devices unfixable, our master engineers restore them.",
      bgImage: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1920",
    },
    {
      subtitle: "🛡️ Lifetime Workmanship Warranty",
      title: "Fast, Honest & Transparent Repair.",
      highlight: "No Fix = Zero Fee Guarantee.",
      desc: "Transparent upfront pricing with zero diagnostic fees. If your hardware cannot be fully restored to factory specifications, you pay absolutely nothing.",
      bgImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1920",
    },
  ];

  // Smooth automatic crossfade every 6.5s
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
      className="relative w-full min-h-[calc(100vh-116px)] min-h-[calc(100dvh-116px)] flex items-center overflow-hidden bg-[#1F1F1F]"
    >
      {/* 1. Next.js Optimized Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.bgImage}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.bgImage}
            alt={active.title}
            fill
            priority={currentSlide === 0}
            sizes="100vw"
            className="object-cover object-center filter brightness-90"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Filmic High-Contrast Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />

      {/* 3. Hero Content Container: High-Converting 2-Column Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Value Hook & Primary Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Store Status & Subtitle Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open Now Until 8:00 PM</span>
              </span>

              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg"
              >
                <span>{active.subtitle}</span>
              </motion.div>
            </div>

            {/* Dynamic Grand Heading */}
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading drop-shadow-md">
                {active.title}
              </h1>
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-black text-[#2563EB] tracking-tight font-heading leading-tight drop-shadow-md">
                {active.highlight}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal drop-shadow"
            >
              {active.desc}
            </motion.p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookRepair}
                className="px-8 py-4 min-h-[50px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-xl flex items-center justify-center gap-2 text-center"
              >
                <span>Book 30-Min Repair Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGetQuote}
                className="px-8 py-4 min-h-[50px] rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-[#1F1F1F] border border-white/30 backdrop-blur-md transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <span>Instant Cost Calculator</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] text-slate-300 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>1-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>28-Min Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>100% Data Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>No Fix = $0 Fee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Lab Bench & Fast-Track Drop-Off Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 text-white">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block">
                    Fast-Track Walk-In
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mt-0.5">
                    Live Lab Availability
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-emerald-400">
                    Est. Wait: 4 Mins
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    2 Master Techs Free
                  </div>
                </div>
              </div>

              {/* Quick Repair Menu Items */}
              <div className="space-y-2.5 text-xs">
                {[
                  {
                    name: "iPhone OLED Screen",
                    time: "20–30 Mins",
                    price: "From $59",
                    badge: "Most Popular",
                  },
                  {
                    name: "MacBook Battery / Board",
                    time: "Same-Day",
                    price: "From $99",
                    badge: "Apple Certified",
                  },
                  {
                    name: "Samsung Galaxy OLED",
                    time: "25–40 Mins",
                    price: "From $69",
                    badge: "OEM Calibrated",
                  },
                  {
                    name: "PS5 / Console HDMI 2.1",
                    time: "40 Mins",
                    price: "From $89",
                    badge: "Micro-Solder",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={onGetQuote}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#2563EB]/50 flex items-center justify-between transition-all cursor-pointer group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-[#2563EB] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-[#2563EB]" />
                        <span>{item.time}</span>
                        <span>•</span>
                        <span className="text-emerald-400 font-semibold">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-white bg-white/10 px-2.5 py-1 rounded-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Reserve Button */}
              <button
                onClick={onBookRepair}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Reserve Priority Bench Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors group"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1 group-hover:border-[#2563EB] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
          />
        </div>
      </a>
    </section>
  );
}