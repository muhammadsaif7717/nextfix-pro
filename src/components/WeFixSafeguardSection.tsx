"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

interface WeFixSafeguardSectionProps {
  onBookAppointment: (bookingDetails: {
    category: DeviceCategory;
    model: DeviceModel;
    issue: RepairIssue;
    isOem: boolean;
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
      title: "48MP Optical Stabilized Camera",
      desc: "Sapphire crystal lens protection with laser-calibrated autofocus and zero optical image stabilization drift.",
      x: "32%",
      y: "15%",
    },
  ];

  // Interactive Estimator state inside this section
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory>(
    DEVICE_CATEGORIES[0]
  );
  const availableModels = DEVICE_MODELS[selectedCategory.id] || [];
  const [selectedModel, setSelectedModel] = useState<DeviceModel>(
    availableModels[0] || DEVICE_MODELS.iphone[0]
  );
  const availableIssues = getIssuesForCategory(selectedCategory.id);
  const [selectedIssue, setSelectedIssue] = useState<RepairIssue>(
    availableIssues[0]
  );
  const [isOem, setIsOem] = useState<boolean>(true);

  const calculation = calculateRepairPrice(
    selectedCategory.id,
    selectedModel.id,
    selectedIssue,
    isOem
  );

  const handleCategoryChange = (catId: string) => {
    const cat = DEVICE_CATEGORIES.find((c) => c.id === catId) || DEVICE_CATEGORIES[0];
    setSelectedCategory(cat);
    const newModels = DEVICE_MODELS[cat.id] || [];
    setSelectedModel(newModels[0]);
    const newIssues = getIssuesForCategory(cat.id);
    setSelectedIssue(newIssues[0]);
  };

  const handleModelChange = (modelId: string) => {
    const m = availableModels.find((mod) => mod.id === modelId) || availableModels[0];
    setSelectedModel(m);
  };

  const handleIssueChange = (issueId: string) => {
    const iss = availableIssues.find((i) => i.id === issueId) || availableIssues[0];
    setSelectedIssue(iss);
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-[#f6f6f6] border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Safeguard
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Superior Safety For Your Device
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#636363]">
            Explore our interactive component breakdown and calculate guaranteed transparent repair costs in real-time.
          </p>
        </div>

        {/* Dual Layout: Hotspot Inspector + Interactive Price Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Hotspot Showcase */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e8e8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#EF644C] uppercase tracking-wider">
                  Hardware Inspector
                </span>
                <span className="text-[11px] font-semibold text-[#888888]">
                  Click pins to inspect
                </span>
              </div>

              {/* Hotspot Device Image Container */}
              <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-xl overflow-hidden bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center p-4">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
                  alt="Device Hardware Breakdown"
                  width={400}
                  height={530}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />

                {/* Hotspot Pins */}
                {hotspots.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActivePin(pin.id)}
                    style={{ left: pin.x, top: pin.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      activePin === pin.id
                        ? "bg-[#1f1f1f] text-white scale-125 z-10 border-2 border-white ring-2 ring-[#EF644C]"
                        : "bg-[#EF644C] text-white animate-hotspot hover:scale-110"
                    }`}
                    aria-label={pin.title}
                  >
                    {pin.id + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Hotspot Info Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EF644C] uppercase mb-1">
                <span>Point #{activePin + 1}:</span>
                <span className="text-[#1f1f1f]">{hotspots[activePin].title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#636363] leading-relaxed">
                {hotspots[activePin].desc}
              </p>
            </div>
          </div>

          {/* Right Column: Instant Cost Calculator (Light Mode) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e8e8] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e8]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EF644C]">
                  Diagnostic Estimator
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1F] font-heading mt-0.5">
                  Calculate Instant Repair Cost
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                ● 100% Upfront Pricing
              </span>
            </div>

            {/* Select 1: Device Family */}
            <div>
              <label className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-2">
                1. Select Device Family:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DEVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center truncate ${
                      selectedCategory.id === cat.id
                        ? "bg-[#EF644C] text-white border-[#EF644C] shadow-sm"
                        : "bg-[#f6f6f6] text-[#636363] border-[#e8e8e8] hover:border-[#d0d0d0] hover:text-[#1f1f1f]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Select 2: Device Model */}
            <div>
              <label className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-2">
                2. Select Exact Model:
              </label>
              <select
                value={selectedModel?.id}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-sm text-[#1F1F1F] font-medium focus:outline-none focus:border-[#EF644C]"
              >
                {availableModels.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.releaseYear || "Current"})
                  </option>
                ))}
              </select>
            </div>

            {/* Select 3: Issue */}
            <div>
              <label className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-2">
                3. Select Hardware Issue:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableIssues.map((issue) => {
                  const isSelected = selectedIssue?.id === issue.id;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => handleIssueChange(issue.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? "bg-[#1f1f1f] text-white border-[#1f1f1f] shadow-sm"
                          : "bg-[#f6f6f6] text-[#636363] border-[#e8e8e8] hover:border-[#d0d0d0] hover:text-[#1f1f1f]"
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className={`text-xs font-bold truncate ${isSelected ? "text-white" : "text-[#1F1F1F]"}`}>
                          {issue.name}
                        </div>
                        <div className={`text-[10px] truncate ${isSelected ? "text-gray-300" : "text-[#888888]"}`}>
                          {issue.turnaroundText}
                        </div>
                      </div>
                      <div className={`text-xs font-black flex-shrink-0 ${isSelected ? "text-[#EF644C]" : "text-[#1F1F1F]"}`}>
                        From ${issue.basePrice}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quote Result Box */}
            <div className="p-5 rounded-2xl bg-[#f6f6f6] border border-[#e8e8e8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#888888] block">
                  Guaranteed Estimate For {selectedModel?.name}:
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-black text-[#1F1F1F] font-heading">
                    ${calculation.selectedPrice}
                  </span>
                  <span className="text-xs text-[#636363]">
                    USD • Parts & Labor Included
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#888888] mt-1">
                  <span className="flex items-center gap-1 text-[#EF644C] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {calculation.turnaround}
                  </span>
                  <span>•</span>
                  <span>1-Year Return Warranty</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onBookAppointment({
                    category: selectedCategory,
                    model: selectedModel,
                    issue: selectedIssue,
                    isOem,
                    price: calculation.selectedPrice,
                    turnaround: calculation.turnaround,
                  })
                }
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Book Free Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
