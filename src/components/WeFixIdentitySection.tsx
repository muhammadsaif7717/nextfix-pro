"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Zap,
  Award,
  ArrowRight,
} from "lucide-react";

export default function WeFixIdentitySection() {
  const cards = [
    {
      title: "Expert Device Care",
      desc: "Skilled technicians perform accurate, dependable maintenance and micro-soldering for peak performance.",
      icon: Wrench,
      tag: "Certified Techs",
    },
    {
      title: "Quality First Always",
      desc: "Strict adherence to OEM-grade parts, ESD cleanroom handling, and 30-point precision hardware testing.",
      icon: ShieldCheck,
      tag: "OEM Standards",
    },
    {
      title: "Service You Trust",
      desc: "Transparent diagnostics, clear upfront pricing, and a zero-risk policy: if we can't fix it, you pay nothing.",
      icon: HeartHandshake,
      tag: "No Fix = No Fee",
    },
    {
      title: "Free Diagnostic Check",
      desc: "Complimentary multi-point inspection to identify motherboard shorts, battery wear, and display issues.",
      icon: Sparkles,
      tag: "100% Free",
    },
    {
      title: "Rapid 28-Min Turnaround",
      desc: "Walk-in screen swaps and battery replacements completed in under 28 minutes while you relax in our lounge.",
      icon: Zap,
      tag: "Express Service",
    },
    {
      title: "20+ Years Experience",
      desc: "Over two decades of precision electronic repair excellence with more than 200,000 devices restored.",
      icon: Award,
      tag: "Industry Leader",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Our Identity
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Trusted Solutions For Your Device Repair
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Committed to quality hardware repair, rapid diagnostics, and genuine OEM components backed by our lifetime workmanship guarantee.
          </p>
        </motion.div>

        {/* 6 Cards Balanced Grid: 3 cols on lg, 2 cols on md, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#fafafa] hover:bg-white border border-[#e8e8e8] hover:border-[#EA580C]/40 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative Top Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#e8e8e8] group-hover:bg-[#EA580C] group-hover:border-[#EA580C] text-[#EA580C] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#e8e8e8] text-[#888888] group-hover:text-[#EA580C] group-hover:border-[#EA580C]/30 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 font-heading group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#636363] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}