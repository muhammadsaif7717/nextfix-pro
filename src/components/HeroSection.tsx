"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Lock,
  Star,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle2,
  Wrench,
  Activity,
  Layers,
} from "lucide-react";

interface HeroSectionProps {
  onOpenEstimator: () => void;
  onOpenBooking: () => void;
}

export default function HeroSection({
  onOpenEstimator,
  onOpenBooking,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 w-96 h-96 bg-orange-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Conversion Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Speed & Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
              <span className="text-white font-bold">EXPRESS SERVICE LAB:</span>
              <span>Average Turnaround Under 28 Minutes</span>
            </div>

            {/* Bold Value Hook Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading">
              Cracked Screen or Dead Battery?{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent underline decoration-orange-500 decoration-wavy decoration-2">
                Fixed in Under 45 Minutes
              </span>{" "}
              with Certified OEM Parts.
            </h1>

            {/* Subheading with strong CRO reassurance */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Don&apos;t wait days at official stores or pay inflated replacement fees.
              Our certified micro-soldering and cleanroom lab restores smartphones,
              MacBooks, and consoles with zero data wiping and guaranteed OEM precision.
            </p>

            {/* Dual Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
                <span>Calculate Repair Cost</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:5558393490"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-slate-600 shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Urgent Hotline (555) 839-3490</span>
              </a>
            </div>

            {/* Key Micro-Promises */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Walk-ins Welcome Anytime
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free Diagnostic Assessment
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No Fix = No Fee Ever
              </span>
            </div>
          </div>

          {/* Right Column: High-Tech Lab Workstation Visual & Telemetry */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative neon border frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800 to-orange-500/20 shadow-2xl shadow-blue-950/50">
                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                    alt="NextFix Pro Cleanroom Micro-soldering Technician"
                    width={800}
                    height={600}
                    priority
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  {/* Corner Watermark / Live Badge */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-bold tracking-wider text-slate-200 uppercase">
                      Lab Camera #02 Live
                    </span>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-blue-400" />
                        Microscope Soldering Station
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Class 100 ESD Cleanroom Environment
                      </p>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      OEM GRADE
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Live Telemetry Badge 1: Queue */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl rounded-xl p-3 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Current Queue
                  </div>
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    <span>3 Devices</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">(Fast)</span>
                  </div>
                </div>
              </div>

              {/* Floating Live Telemetry Badge 2: Wait Time */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Avg Repair Time
                  </div>
                  <div className="text-sm font-black text-emerald-400">
                    22 Minutes Flat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dynamic Trust Badges Strip (Pixel-perfect conversion boosters) */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Trust 1: Lifetime Warranty */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Lifetime Warranty
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Parts & labor covered for life
                </p>
              </div>
            </div>

            {/* Trust 2: No Fix No Fee */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-orange-600/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  No Fix = No Fee
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  100% Risk-free diagnostic
                </p>
              </div>
            </div>

            {/* Trust 3: Data Privacy */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  100% Data Privacy
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Zero wipe • Zero passcode peek
                </p>
              </div>
            </div>

            {/* Trust 4: 4.9/5 Rating */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    4.9 / 5.0 Rating
                  </h4>
                  <span className="text-[10px] text-amber-400 font-bold">★★★★★</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Across 2,400+ local reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
