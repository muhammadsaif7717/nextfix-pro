"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
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
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      subtitle: "Trusted Aid",
      title: "Bright Solution, A Better Outcomes",
      desc: "We provide excellence in every service, delivering reliable results through expert care, precise workmanship, and Customer Focus.",
      bgImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=85&w=1920",
      accent: "#EF644C",
    },
    {
      subtitle: "Bright Ideas",
      title: "Lighting The Way To Solutions",
      desc: "We guide every service journey with unmatched expertise, ensuring a smooth process, reliable performance, and Overachievement.",
      bgImage: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=85&w=1920",
      accent: "#EF644C",
    },
    {
      subtitle: "Trusted Pros",
      title: "Clear Solutions For Hidden Problem",
      desc: "We uncover issues through skillful diagnosis, providing clear, honest, and dependable service solutions that Guaranteed Satisfaction.",
      bgImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=85&w=1920",
      accent: "#EF644C",
    },
  ];

  // Auto-play every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#1F1F1F]"
    >
      {/* 1. Background Image with AnimatePresence & Ken-Burns Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.bgImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ backgroundImage: `url(${active.bgImage})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      </AnimatePresence>

      {/* 2. Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* 3. Hero Content Layered Over Background */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Subtitle Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EF644C] text-white text-xs font-bold uppercase tracking-widest shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>{active.subtitle}</span>
          </motion.div>

          {/* Grand Heading */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-md"
          >
            {active.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow"
          >
            {active.desc}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            key={`btns-${currentSlide}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={onBookRepair}
              className="px-8 py-4 min-h-[48px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-xl flex items-center justify-center gap-2 text-center"
            >
              <span>Book A Repair</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onGetQuote}
              className="px-8 py-4 min-h-[48px] rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-[#1F1F1F] border border-white/30 backdrop-blur-md transition-all shadow-md flex items-center justify-center gap-2 text-center"
            >
              <span>Get A Quote</span>
            </button>
          </motion.div>

          {/* Trust Badges Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-semibold"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#EF644C]" />
              1-Year Return Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#EF644C]" />
              Average 28-Min Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#EF644C]" />
              100% Certified OEM Parts
            </span>
          </motion.div>
        </div>
      </div>

      {/* 4. Controls & Slide Progress (Bottom Right) */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex items-center gap-4">
        {/* Slide Counter */}
        <div className="hidden sm:block text-xs font-mono font-bold text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          0{currentSlide + 1} / 0{slides.length}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/20 hover:bg-[#EF644C] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/20 hover:bg-[#EF644C] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 5. Slide Dot Indicators (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:hidden">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === idx ? "w-6 bg-[#EF644C]" : "w-2 bg-white/40"
            }`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
