"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Laptop,
  Cpu,
  Monitor,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface WeFixRepairOptionsProps {
  onSelectOption: (title: string) => void;
}

export default function WeFixRepairOptions({
  onSelectOption,
}: WeFixRepairOptionsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const options = [
    {
      id: "mobile-service",
      title: "Mobile Service Fixing",
      category: "mobile",
      tagline: "Smartphones & Mobile Devices",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
      icon: Smartphone,
      points: [
        "iPhone & Android OLED screen replacement",
        "0-Cycle battery health restoration",
        "Camera lens & FaceID/Fingerprint repair",
        "Water damage ultrasonic cleaning",
      ],
      price: "From $59",
      turnaround: "20–35 Mins",
    },
    {
      id: "laptop-lifeline",
      title: "Laptop Lifeline Repair",
      category: "laptop",
      tagline: "MacBook & Windows Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
      icon: Laptop,
      points: [
        "MacBook Apple Silicon & Intel board repairs",
        "Liquid spill deoxidation & trace rebuild",
        "Retina display lid replacement",
        "Keyboard & trackpad servicing",
      ],
      price: "From $99",
      turnaround: "Same-Day",
    },
    {
      id: "cpu-handling",
      title: "CPU Handling Service",
      category: "cpu",
      tagline: "Micro-Soldering & Motherboard",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
      icon: Cpu,
      points: [
        "Stereomicroscope micro-soldering rework",
        "BGA IC reballing & power rail tracing",
        "HDMI 2.1 4K 120Hz port replacement",
        "Surface-mount capacitor short fixes",
      ],
      price: "From $89",
      turnaround: "1–2 Days",
    },
    {
      id: "tech-tower",
      title: "Tech Tower Solutions",
      category: "tower",
      tagline: "Gaming Consoles & Desktops",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800",
      icon: Monitor,
      points: [
        "PS5 & Xbox Series X thermal overhaul",
        "Liquid metal replacement & fan cleanup",
        "Optical disc drive laser lens repair",
        "Custom desktop tower component upgrades",
      ],
      price: "From $79",
      turnaround: "Same-Day",
    },
  ];

  const filtered = options.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="options" className="py-16 sm:py-24 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
              Service List
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
              Discover Our Repair Options
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#636363] max-w-xl">
              Precision diagnostics, component-level craftsmanship, and certified replacement parts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Options" },
              { id: "mobile", label: "Mobile" },
              { id: "laptop", label: "Laptops" },
              { id: "cpu", label: "Micro-Soldering" },
              { id: "tower", label: "Consoles" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[#EF644C] text-white shadow-md"
                    : "bg-[#f6f6f6] text-[#636363] hover:text-[#1f1f1f] hover:bg-[#ececec] border border-[#e8e8e8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-[#f6f6f6] hover:bg-white border border-[#e8e8e8] hover:border-[#EF644C]/40 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-5 bg-[#e0e0e0]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-3 left-3 bg-[#1f1f1f]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.turnaround}
                  </div>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#EF644C] mb-1">
                  {item.tagline}
                </div>

                <h3 className="text-lg font-bold text-[#1F1F1F] font-heading group-hover:text-[#EF644C] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Points list */}
                <ul className="space-y-2 mb-4 text-xs text-[#636363]">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-[#e8e8e8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#888888] block">
                    Starting
                  </span>
                  <span className="text-sm font-black text-[#1F1F1F]">
                    {item.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectOption(item.title)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-dark text-center"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
