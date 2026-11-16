"use client";

import React, { useState } from "react";
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
  Clock,
  Check,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Gamepad2,
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
  // Price Calculator State (DO NOT TOUCH - EXACT CALCULATION LOGIC PRESERVED)
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
    <section id="estimator" className="py-16 sm:py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading wdt-spaced-heading">
            Instant Cost & Turnaround Calculator
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl mx-auto">
            Select your device and hardware fault for an immediate upfront quote with genuine parts and zero diagnostic fees.
          </p>
        </motion.div>

        {/* Full-Width Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-[#e2e8f0] shadow-sm"
        >
          {/* Top Header Strip */}
          <div className="pb-5 sm:pb-6 border-b border-[#e2e8f0] mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
              Step-by-Step Diagnostic
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#0F172A] font-heading">
              Calculate Exact Repair Total
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* 1. Device Category Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2.5 sm:mb-3">
                1. Select Device Family
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
                {DEVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat)}
                    className={`py-2.5 sm:py-3.5 px-2.5 sm:px-4 rounded-xl sm:rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                      selectedCategory.id === cat.id
                        ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold shadow-xs"
                        : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1] hover:bg-slate-50/50"
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-bold truncate w-full">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Device Model Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2.5 sm:mb-3">
                2. Select Exact Model
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 max-h-56 overflow-y-auto pr-1">
                {modelsForCat.map((model: DeviceModel) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`py-2.5 sm:py-3 px-3 sm:px-3.5 rounded-xl border text-left text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                      selectedModel?.id === model.id
                        ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold shadow-xs"
                        : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1] hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="truncate font-semibold text-[11px] sm:text-xs">{model.name}</div>
                    <div className="text-[10px] text-[#94A3B8] font-normal mt-0.5 truncate">
                      {model.brand}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Issue Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2.5 sm:mb-3">
                3. Select Hardware Issue
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                {issuesForCat.map((issue: RepairIssue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue)}
                    className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 flex items-start justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                      selectedIssue?.id === issue.id
                        ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold shadow-xs"
                        : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1] hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="pr-2">
                      <div className="text-xs font-bold">{issue.name}</div>
                      <div className="text-[11px] text-[#94A3B8] font-normal mt-0.5 line-clamp-2">
                        {issue.shortDesc}
                      </div>
                    </div>
                    {selectedIssue?.id === issue.id && (
                      <Check className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Full-Width Live Quote Result Card */}
            <div className="p-4 sm:p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] mt-6 sm:mt-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    All-Inclusive Quoted Total
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading">
                      ${calculatedQuote.selectedPrice}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#64748B]">
                      / Genuine Parts + Labor
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 text-xs font-semibold text-[#64748B]">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#e2e8f0] flex items-center gap-2 flex-1 sm:flex-initial">
                    <Clock className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Turnaround</div>
                      <div className="text-xs font-bold text-[#0F172A] whitespace-nowrap">{calculatedQuote.turnaround}</div>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#e2e8f0] flex items-center gap-2 flex-1 sm:flex-initial">
                    <ShieldCheck className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Warranty</div>
                      <div className="text-xs font-bold text-[#0F172A] whitespace-nowrap">{calculatedQuote.warranty}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Action Button */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-[#64748B] flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                  <span>Free microscopic inspection. Pay $0 if not repaired.</span>
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
                  className="px-6 sm:px-8 py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
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
    </section>
  );
}
