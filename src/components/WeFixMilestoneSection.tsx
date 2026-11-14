"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  Award,
  Users,
  Building,
  ShieldCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

interface WeFixMilestoneSectionProps {
  onBookRepair: () => void;
}

// Animated Counter component
function CounterValue({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WeFixMilestoneSection({
  onBookRepair,
}: WeFixMilestoneSectionProps) {
  const pillars = [
    {
      title: "Master Technicians",
      desc: "IPC-7711/7721 certified rework specialists with cleanroom micro-soldering authorization.",
    },
    {
      title: "Fulfillment Promises",
      desc: "Guaranteed express turnaround with 99.4% same-day handover compliance.",
    },
    {
      title: "No-Hidden Pricing",
      desc: "Transparent upfront quotes. If your hardware is non-repairable, you pay zero dollars.",
    },
    {
      title: "Full Range of Repairs",
      desc: "Everything from simple screen glass replacement to chip-level NAND and BGA reballing.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Milestone
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Reached New Heights In Repair Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Setting industry benchmarks with precision engineering, cleanroom protocols, and guaranteed customer satisfaction.
          </p>
        </motion.div>

        {/* Split Grid: Left Image & Right Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e8e8e8] aspect-[4/5] bg-[#f6f6f6]">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                alt="WeFix Certified Master Technician"
                width={800}
                height={1000}
                className="w-full h-full object-cover object-center filter brightness-95"
              />

              {/* Float Experience Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#e8e8e8] flex items-center justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#1F1F1F] font-heading">
                    <CounterValue target={20} suffix="+" /> Years
                  </div>
                  <div className="text-xs font-semibold text-[#888888]">
                    Proven Repair Industry Excellence
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#EF644C] text-white flex items-center justify-center font-bold text-lg shadow-md">
                  ★
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="p-6 rounded-2xl bg-[#fafafa] border border-[#e8e8e8] hover:border-[#EF644C]/30 hover:bg-white transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EF644C]/10 text-[#EF644C] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1F1F1F] font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#636363] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Support Callout Box */}
            <div className="p-7 rounded-2xl bg-[#1F1F1F] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl mt-8">
              <div>
                <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-1">
                  Immediate Help
                </span>
                <h4 className="text-xl font-bold font-heading">
                  Have an emergency device repair?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Walk in today or reserve your bench slot with our priority pass.
                </p>
              </div>

              <button
                onClick={onBookRepair}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary flex items-center gap-2 whitespace-nowrap shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom 5 Animated Counters Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8 rounded-3xl bg-[#fafafa] border border-[#e8e8e8] shadow-sm"
        >
          {[
            { target: 20, suffix: "+", label: "Years Experience", icon: Award },
            { target: 25, suffix: "K+", label: "Happy Customers", icon: Users },
            { target: 470, suffix: "+", label: "Partner Centers", icon: Building },
            { target: 365, suffix: " Days", label: "Return Warranty", icon: ShieldCheck },
            { target: 200, suffix: "K+", label: "Devices Repaired", icon: Smartphone },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#e8e8e8] text-[#EF644C] flex items-center justify-center mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#1F1F1F] font-heading tracking-tight">
                  <CounterValue target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-[#888888] font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}