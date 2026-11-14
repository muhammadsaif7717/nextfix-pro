"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Cpu,
  Monitor,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
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
        "PS5, Xbox Series X & Nintendo Switch repair",
        "Custom desktop GPU & PSU diagnostic",
        "Liquid metal application & thermal repaste",
        "Disc drive & laser mechanism restoration",
      ],
      price: "From $69",
      turnaround: "Same-Day",
    },
  ];

  const filtered =
    activeTab === "all"
      ? options
      : options.filter((item) => item.category === activeTab);

  return (
    <section id="options" className="py-20 sm:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-2">
            Repair Options
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Choose What Needs Repair
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            From cracked smartphone screens to complex microscope logic-board repairs, choose your equipment category.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14"
        >
          {[
            { id: "all", label: "All Services" },
            { id: "mobile", label: "Smartphones" },
            { id: "laptop", label: "Laptops & Mac" },
            { id: "cpu", label: "Micro-Soldering" },
            { id: "tower", label: "Consoles & PC" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                activeTab === tab.id
                  ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25"
                  : "bg-[#f6f6f6] text-[#636363] hover:bg-[#eaeaea] hover:text-[#1F1F1F]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Options Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group flex flex-col sm:flex-row bg-[#fafafa] hover:bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:border-[#2563EB]/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Left Thumbnail */}
                  <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#e8e8e8] flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">
                          {item.tagline}
                        </span>
                        <span className="text-xs font-black text-[#1F1F1F] bg-white px-2.5 py-1 rounded-full border border-[#e8e8e8]">
                          {item.price}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#1F1F1F] font-heading mb-4 group-hover:text-[#2563EB] transition-colors">
                        {item.title}
                      </h3>

                      <ul className="space-y-2 mb-6">
                        {item.points.map((pt, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#636363]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#e8e8e8] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#888888] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{item.turnaround}</span>
                      </span>

                      <button
                        onClick={() => onSelectOption(item.title)}
                        className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-sm flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                      >
                        <span>Schedule</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}