"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DEVICE_CATEGORIES,
  DEVICE_MODELS,
  getIssuesForCategory,
  calculateRepairPrice,
} from "@/data/repairData";
import { DeviceCategory, DeviceModel, RepairIssue } from "@/types";
import {
  ShieldCheck,
  Zap,
  Clock,
  Check,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface WeFixSafeguardSectionProps {
  onBookAppointment: (bookingDetails: {
    category: DeviceCategory;
    model: DeviceModel;
    issue: RepairIssue;
    price: number;
    turnaround: string;
  }) => void;
}

export default function WeFixSafeguardSection({
  onBookAppointment,
}: WeFixSafeguardSectionProps) {
  // Hotspot active pin
  const [activePin, setActivePin] = useState<number>(0);

  const hotspots = [
    {
      id: 0,
      title: "OEM OLED Display & TrueTone",
      desc: "Super Retina XDR with original oleophobic coating, TrueTone retention, and 120Hz ProMotion responsiveness.",
      x: "50%",
      y: "22%",
    },
    {
      id: 1,
      title: "Micro-Soldered Logic Board",
      desc: "Stereomicroscope BGA rework, PMIC power rail tracing, and capacitor short detection in ESD cleanroom.",
      x: "38%",
      y: "45%",
    },
    {
      id: 2,
      title: "0-Cycle High Density Battery",
      desc: "Brand new OEM specification cell with internal thermal protection fuses, restored to 100% capacity.",
      x: "62%",
      y: "65%",
    },
    {
      id: 3,
      title: "Titanium Chassis & Glass",
      desc: "Laser precision adhesive removal and factory cold-press curing to retain full IP68 water resistance seals.",
      x: "50%",
      y: "85%",
    },
  ];

  // Price Calculator State
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory>(DEVICE_CATEGORIES[0]);
  const modelsForCat: DeviceModel[] = DEVICE_MODELS[selectedCategory.id] || [];
  const [selectedModel, setSelectedModel] = useState<DeviceModel>(modelsForCat[0]);
  const issuesForCat: RepairIssue[] = getIssuesForCategory(selectedCategory.id);
  const [selectedIssue, setSelectedIssue] = useState<RepairIssue>(issuesForCat[0]);

  const handleCategoryChange = (cat: DeviceCategory) => {
    setSelectedCategory(cat);
    const newModels = DEVICE_MODELS[cat.id] || [];
    setSelectedModel(newModels[0]);
    const newIssues = getIssuesForCategory(cat.id);
    setSelectedIssue(newIssues[0]);
  };

  const calculatedQuote = calculateRepairPrice(
    selectedCategory.id,
    selectedModel ? selectedModel.id : "",
    selectedIssue
  );

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-[#f6f6f6] border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Safeguard Device
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Device Anatomy & Instant Price Calculator
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Explore internal engineering standards or calculate an exact repair estimate with transparent pricing and warranty coverage.
          </p>
        </motion.div>

        {/* 2-Column Split: Exploded Hotspots & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Exploded Anatomy (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e8e8] shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EF644C]">
                  Interactive Architecture
                </span>
                <span className="text-xs font-medium text-[#888888]">
                  Click pins to inspect
                </span>
              </div>

              {/* Exploded Device Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center p-4">
                <Image
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800"
                  alt="Exploded smartphone hardware assembly"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-xl filter brightness-95"
                />

                {/* Hotspot Pins */}
                {hotspots.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActivePin(pin.id)}
                    style={{ top: pin.y, left: pin.x }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] ${
                      activePin === pin.id
                        ? "bg-[#EF644C] text-white scale-125 z-20 ring-4 ring-white"
                        : "bg-white/90 text-[#1f1f1f] hover:bg-[#EF644C] hover:text-white z-10"
                    }`}
                    aria-label={`Inspect ${pin.title}`}
                  >
                    <span className="text-xs font-black">{pin.id + 1}</span>
                  </button>
                ))}
              </div>

              {/* Active Hotspot Detail Card */}
              <div className="mt-6 p-5 rounded-2xl bg-[#f6f6f6] border border-[#e8e8e8] transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#EF644C] text-white text-[11px] font-bold flex items-center justify-center">
                    {activePin + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#1f1f1f] font-heading">
                    {hotspots[activePin].title}
                  </h4>
                </div>
                <p className="text-xs text-[#636363] leading-relaxed">
                  {hotspots[activePin].desc}
                </p>
              </div>
            </div>

            {/* Micro Badges */}
            <div className="mt-6 pt-4 border-t border-[#e8e8e8] flex items-center justify-around text-center text-xs text-[#636363] font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#EF644C]" />
                ESD Cleanroom
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-[#EF644C]" />
                OEM Calibrated
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Multi-Step Price Calculator (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#e8e8e8] shadow-md"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#e8e8e8] mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EF644C] block mb-1">
                  Step-by-Step Diagnostic
                </span>
                <h3 className="text-2xl font-black text-[#1F1F1F] font-heading">
                  Instant Cost & Turnaround Calculator
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f6f6] border border-[#e8e8e8] text-xs font-bold text-[#1F1F1F]">
                <Clock className="w-3.5 h-3.5 text-[#EF644C]" />
                <span>Live Estimates</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* 1. Device Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-3">
                  1. Select Device Family
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DEVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] ${
                        selectedCategory.id === cat.id
                          ? "border-[#EF644C] bg-[#EF644C]/5 text-[#EF644C] font-bold shadow-sm"
                          : "border-[#e8e8e8] bg-white text-[#636363] hover:border-[#cccccc]"
                      }`}
                    >
                      <span className="text-xs font-semibold">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Device Model Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-3">
                  2. Select Exact Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {modelsForCat.map((model: DeviceModel) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`py-2.5 px-3 rounded-xl border text-left text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] ${
                        selectedModel?.id === model.id
                          ? "border-[#EF644C] bg-[#EF644C]/5 text-[#EF644C] font-bold"
                          : "border-[#e8e8e8] bg-white text-[#636363] hover:border-[#cccccc]"
                      }`}
                    >
                      <div className="truncate font-semibold">{model.name}</div>
                      <div className="text-[10px] text-[#888888] font-normal">
                        {model.brand}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Issue Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-3">
                  3. Select Hardware Issue
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {issuesForCat.map((issue: RepairIssue) => (
                    <button
                      key={issue.id}
                      onClick={() => setSelectedIssue(issue)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] ${
                        selectedIssue?.id === issue.id
                          ? "border-[#EF644C] bg-[#EF644C]/5 text-[#EF644C] font-bold shadow-sm"
                          : "border-[#e8e8e8] bg-white text-[#636363] hover:border-[#cccccc]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold">{issue.name}</div>
                        <div className="text-[11px] text-[#888888] font-normal">
                          {issue.shortDesc}
                        </div>
                      </div>
                      {selectedIssue?.id === issue.id && (
                        <Check className="w-4 h-4 text-[#EF644C] flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Live Quote Result Card */}
              <div className="p-6 rounded-2xl bg-[#fafafa] border border-[#e8e8e8] mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                      Calculated Estimate
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#1F1F1F] font-heading">
                        ${calculatedQuote.selectedPrice}
                      </span>
                      <span className="text-xs font-semibold text-[#888888]">
                        / All-Inclusive Parts + Labor
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-semibold text-[#636363] space-y-1">
                    <span className="flex items-center gap-1.5 text-[#1F1F1F]">
                      <Clock className="w-4 h-4 text-[#EF644C]" />
                      Turnaround:{" "}
                      <strong className="text-[#EF644C]">
                        {calculatedQuote.turnaround}
                      </strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#EF644C]" />
                      Warranty: {calculatedQuote.warranty}
                    </span>
                  </div>
                </div>

                {/* Book Action Button */}
                <div className="mt-6 pt-5 border-t border-[#e8e8e8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#888888] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                    <span>Free diagnostic. Pay nothing until verified complete.</span>
                  </div>

                  <button
                    onClick={() =>
                      onBookAppointment({
                        category: selectedCategory,
                        model: selectedModel,
                        issue: selectedIssue,
                        price: calculatedQuote.selectedPrice,
                        turnaround: calculatedQuote.turnaround,
                      })
                    }
                    className="px-7 py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Repair Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}