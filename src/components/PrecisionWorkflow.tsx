"use client";

import React from "react";
import {
  MapPin,
  Search,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Package,
} from "lucide-react";

interface PrecisionWorkflowProps {
  onOpenBooking: () => void;
}

export default function PrecisionWorkflow({
  onOpenBooking,
}: PrecisionWorkflowProps) {
  const steps = [
    {
      step: "01",
      title: "Drop-Off or Express Mail-In",
      time: "2 Mins Check-in",
      desc: "Walk straight into our lab anytime without an appointment, or request our free insured FedEx anti-static mailer kit for contactless express repair.",
      icon: Package,
      badge: "Zero Friction Intake",
      detail: "Intake photo log & physical condition receipt provided immediately.",
    },
    {
      step: "02",
      title: "Complimentary Multi-Point Diagnostic",
      time: "5–10 Mins Scan",
      desc: "Our engineers inspect board power draws, thermal profiles, battery cycle health, and IC rails using specialized diagnostic hardware. 100% free.",
      icon: Search,
      badge: "No Bench Assessment Fee",
      detail: "Zero diagnostic fees even if you choose not to proceed with repair.",
    },
    {
      step: "03",
      title: "Cleanroom Lab Precision Repair",
      time: "20–35 Mins Avg",
      desc: "All repairs occur in an ISO Class 7 ESD-safe environment under 45x magnification stereomicroscopes with genuine OEM certified components.",
      icon: Wrench,
      badge: "ESD Cleanroom Standards",
      detail: "Factory torque calibration & IP68 waterproof perimeter gasket applied.",
    },
    {
      step: "04",
      title: "30-Point QC & Lifetime Warranty Handover",
      time: "Same-Day Collection",
      desc: "Every device undergoes a 30-point stress test (TrueTone, LiDAR, biometric sensors, charging curve) and is sealed in a sanitized ESD pouch.",
      icon: ShieldCheck,
      badge: "Lifetime Parts Warranty",
      detail: "Instant warranty certificate issued and recorded in customer portal.",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            Rigorous Engineering Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Our 4-Step Precision Workflow
          </h2>
          <p className="mt-3 text-base text-slate-300">
            How we deliver flawless factory-certified hardware repairs in under 45 minutes with zero data loss.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 group"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-800 group-hover:text-blue-500/40 transition-colors font-heading">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.time}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Step Bottom Info */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.badge}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Bottom Reassurance CTA Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Backed by our 100% No Fix = No Fee Guarantee
              </h4>
              <p className="text-xs text-slate-400">
                If our diagnostic reveals unrecoverable board damage, you pay absolutely $0.00. No bench fees, no obligations.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0"
          >
            <span>Book Free Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
