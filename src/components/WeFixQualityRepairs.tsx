"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  HardDrive,
  Cpu,
  Camera,
  Layers,
  ArrowRight,
  Clock,
} from "lucide-react";

interface WeFixQualityRepairsProps {
  onSelectRepair: (title: string) => void;
}

export default function WeFixQualityRepairs({
  onSelectRepair,
}: WeFixQualityRepairsProps) {
  const services = [
    {
      id: "pro-lap",
      title: "Pro Lap Solution",
      category: "Laptop & Mac",
      desc: "Complete diagnosis, logic board repairs, thermal overhaul, and battery replacements for MacBooks and laptops.",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
      price: "From $99",
      turnaround: "Same-Day",
    },
    {
      id: "display-service",
      title: "Display Service",
      category: "Screen Repair",
      desc: "OEM-grade OLED and LCD screen assemblies, TrueTone calibration, and 120Hz refresh rate testing.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
      price: "From $59",
      turnaround: "20–35 Mins",
    },
    {
      id: "data-recovery",
      title: "Data Recovery",
      category: "Storage & Chip",
      desc: "Emergency NAND memory extraction, corrupted partition recovery, and secure encrypted backup transfer.",
      icon: HardDrive,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      price: "From $69",
      turnaround: "24–48 Hours",
    },
    {
      id: "os-installation",
      title: "OS Installation",
      category: "Software & Boot",
      desc: "Operating system reinstalls, firmware recovery, crash-loop resolution, and clean data migration.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      price: "From $49",
      turnaround: "45 Mins",
    },
    {
      id: "smartphone-repair",
      title: "Smart Phone Repair",
      category: "iPhone & Android",
      desc: "Quick 20-minute battery replacements, charging port flex fixes, speaker cleaning, and back glass restoration.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
      price: "From $59",
      turnaround: "20–30 Mins",
    },
    {
      id: "camera-lens",
      title: "Camera & Lens Service",
      category: "Optics & Sensors",
      desc: "Camera module swaps, sapphire crystal lens replacement, autofocus and optical stabilization calibration.",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
      price: "From $79",
      turnaround: "30–45 Mins",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f6f6f6] border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
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
            Issues We Solve
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Quality Repairs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Expert technical solutions for consumer smartphones, laptops, tablets, and gaming consoles with factory precision.
          </p>
        </motion.div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:border-[#EA580C]/40 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e8e8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-black text-[#1F1F1F] border border-[#e8e8e8] shadow-sm">
                      {item.price}
                    </div>
                  </div>

                  {/* Floating Icon Badge - Positioned cleanly without clipping */}
                  <div className="relative px-6 -mt-6 flex justify-end z-10 pointer-events-none">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white flex items-center justify-center shadow-xl border-2 border-white group-hover:scale-110 transition-transform duration-300 pointer-events-auto">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pt-3">
                    <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1F1F1F] font-heading group-hover:text-[#EA580C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#636363] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                    <button
                      onClick={() => onSelectRepair(item.title)}
                      className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] group-hover:text-[#EA580C] flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-[#888888] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#EA580C]" />
                      <span>{item.turnaround}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}