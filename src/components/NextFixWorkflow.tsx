"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PackageCheck,
  SearchCode,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function NextFixWorkflow() {
  const steps = [
    {
      num: "01",
      title: "Walk-In or Mail-In",
      desc: "Drop off your hardware at our Manhattan lab in under 2 minutes, or request a free insured prepaid mail-in box.",
      icon: PackageCheck,
      highlight: "No Booking Needed",
    },
    {
      num: "02",
      title: "30-Point Free Diagnostic",
      desc: "Stereomicroscope visual inspection, PMIC power rail tracing, and thermal analysis to locate exact faults.",
      icon: SearchCode,
      highlight: "100% Free Diagnostics",
    },
    {
      num: "03",
      title: "Cleanroom OEM Repair",
      desc: "Precision replacement using factory-calibrated OEM assemblies with ESD protection and TrueTone transfer.",
      icon: Cpu,
      highlight: "Under 28 Mins Avg",
    },
    {
      num: "04",
      title: "Rigorous QC & Handover",
      desc: "Display touch grid test, water resistance seal verification, and handover with our unconditional 1-year warranty.",
      icon: CheckCircle2,
      highlight: "1-Year Warranty Included",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#10B981] uppercase tracking-widest block mb-2">
            Seamless Process
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Our 4-Step Repair Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            From the moment your device arrives to the moment it leaves our cleanroom, experience complete transparency and zero guesswork.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Visual Connecting Progress Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-[#fafafa] hover:bg-white border border-[#e8e8e8] hover:border-[#10B981]/40 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#e8e8e8] group-hover:bg-[#10B981] group-hover:border-[#10B981] text-[#10B981] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-[#e0e0e0] group-hover:text-[#10B981]/40 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#10B981] mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-[#1F1F1F] font-heading mb-3 group-hover:text-[#10B981] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#636363] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#888888]">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#10B981] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}