"use client";

import React from "react";
import Image from "next/image";
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

  const stats = [
    { value: "20+", label: "Years Experience", icon: Award },
    { value: "20K+", label: "Happy Customers", icon: Users },
    { value: "470+", label: "Delivery Centers", icon: Building },
    { value: "1 Year", label: "Return Warranty", icon: ShieldCheck },
    { value: "2L+", label: "Devices Repaired", icon: Smartphone },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Milestone
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Reached New Heights In Repair Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#636363]">
            Setting industry benchmarks with precision engineering, cleanroom protocols, and guaranteed customer satisfaction.
          </p>
        </div>

        {/* Split Grid: Left Image & Right Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e8e8e8] aspect-[4/5] bg-[#f6f6f6]">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                alt="WeFix Certified Master Technician"
                width={800}
                height={1000}
                className="w-full h-full object-cover object-center filter brightness-95"
              />

              {/* Float Experience Box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-[#e8e8e8] flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-[#1F1F1F] font-heading">
                    20+ Years
                  </div>
                  <div className="text-xs font-semibold text-[#888888]">
                    Proven Repair Industry Excellence
                  </div>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#EF644C] text-white flex items-center justify-center font-bold">
                  ★
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f6f6f6] border border-[#e8e8e8] hover:border-[#EF644C]/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#e8e8e8] text-[#EF644C] flex items-center justify-center font-bold text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1F1F1F] font-heading mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#636363] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Hotline Call Strip */}
            <div className="p-6 rounded-2xl bg-[#1F1F1F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#EF644C] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                    Direct Diagnostic Desk
                  </span>
                  <a
                    href="tel:18006578963"
                    className="text-lg sm:text-xl font-black font-heading text-white hover:text-[#EF644C] transition-colors"
                  >
                    +1 (800) 657-8963
                  </a>
                </div>
              </div>

              <button
                onClick={onBookRepair}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary flex items-center gap-2 flex-shrink-0"
              >
                <span>Schedule Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Counter Stats Ticker Strip (Exact WeFix Style) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 pt-10 border-t border-[#e8e8e8]">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#f6f6f6] border border-[#e8e8e8] text-center flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] text-[#EF644C] flex items-center justify-center mb-2 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#1F1F1F] font-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-[#888888] font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
