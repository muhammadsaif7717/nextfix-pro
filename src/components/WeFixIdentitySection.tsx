"use client";

import React from "react";
import {
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Gift,
  Award,
  ArrowRight,
} from "lucide-react";

export default function WeFixIdentitySection() {
  const cards = [
    {
      title: "Expert Device Care",
      desc: "For optimum performance, skilled technicians offer accurate, dependable device maintenance.",
      icon: Wrench,
    },
    {
      title: "Quality First Always",
      desc: "Committed to delivering premium repairs with attention to detail, putting your satisfaction above all else.",
      icon: ShieldCheck,
    },
    {
      title: "Service You Trust",
      desc: "Trustworthy and truthful assistance from skilled experts who put your device well-being, peace of mind first.",
      icon: HeartHandshake,
    },
    {
      title: "Free Repair Bonus",
      desc: "Take advantage of free service upgrades that are intended to optimize value, conveniently prolong life of your gadget.",
      icon: Gift,
    },
    {
      title: "Years Of Experience",
      desc: "Dedicated specialists offering unmatched expertise, ensuring every repair is seamless and reliable.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Our Identity
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Trusted Solutions For Your Device Repair
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#636363]">
            Committed to quality hardware repair, rapid diagnostics, and genuine OEM components.
          </p>
        </div>

        {/* 5 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#f6f6f6] hover:bg-white border border-[#e8e8e8] hover:border-[#EF644C]/40 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e8e8e8] group-hover:bg-[#EF644C] group-hover:border-[#EF644C] text-[#EF644C] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1f1f1f] mb-2 font-heading group-hover:text-[#EF644C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#636363] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e8e8e8]/70 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#888888] group-hover:text-[#EF644C] transition-colors">
                    Read More
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#EF644C] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
