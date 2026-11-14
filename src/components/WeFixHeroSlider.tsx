"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      accent: "#EF644C",
    },
    {
      subtitle: "Bright Ideas",
      title: "Lighting The Way To Solutions",
      desc: "We guide every service journey with unmatched expertise, ensuring a smooth process, reliable performance, and Overachievement.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200",
      accent: "#EF644C",
    },
    {
      subtitle: "Trusted Pros",
      title: "Clear Solutions For Hidden Problem",
      desc: "We uncover issues through skillful diagnosis, providing clear, honest, and dependable service solutions that Guaranteed Satisfaction.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1200",
      accent: "#EF644C",
    },
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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

  // Touch Swipe handlers
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
      className="relative w-full bg-[#f6f6f6] overflow-hidden border-b border-[#e8e8e8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF644C]/10 text-[#EF644C] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EF644C] animate-ping"></span>
              <span>{active.subtitle}</span>
            </div>

            {/* Slide Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1F1F1F] tracking-tight leading-[1.12] font-heading">
              {active.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#636363] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {active.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onBookRepair}
                className="w-full sm:w-auto px-8 py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              >
                <span>Book A Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGetQuote}
                className="w-full sm:w-auto px-8 py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-dark shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              >
                <span>Get A Quote</span>
              </button>
            </div>

            {/* Micro badges */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#888888] font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                1-Year Return Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                Average 28-Min Turnaround
              </span>
            </div>
          </div>

          {/* Right Image Visual with Slider Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e8e8e8] aspect-[4/3] sm:aspect-[16/11]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                width={800}
                height={600}
                priority
                className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95"
              />

              {/* Floating Quality Seal */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg border border-[#e8e8e8] text-center">
                <span className="text-[10px] uppercase font-bold text-[#888888] block">
                  SERVICE QUALITY
                </span>
                <span className="text-sm font-black text-[#EF644C] font-heading">
                  100% OEM
                </span>
              </div>

              {/* Bottom slide counter badge */}
              <div className="absolute bottom-4 left-4 bg-[#1f1f1f]/90 text-white px-3 py-1 rounded-full text-xs font-bold font-mono">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>

            {/* Slider Navigation Arrows & Dots */}
            <div className="flex items-center justify-between mt-4">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === idx ? "w-8 bg-[#EF644C]" : "w-2.5 bg-[#d1d5db]"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next/Prev Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 min-h-[40px] rounded-full bg-white border border-[#d5d5d5] hover:border-[#EF644C] hover:bg-[#EF644C] hover:text-white text-[#1f1f1f] flex items-center justify-center shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 min-h-[40px] rounded-full bg-white border border-[#d5d5d5] hover:border-[#EF644C] hover:bg-[#EF644C] hover:text-white text-[#1f1f1f] flex items-center justify-center shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
