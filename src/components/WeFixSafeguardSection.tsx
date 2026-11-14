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
  Lock,
  BadgeDollarSign,
  Award,
  Star,
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
    <section id="estimator" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-[#e2e8f0] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading wdt-spaced-heading">
            Instant Cost Calculator & Standards
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
            Select your device and repair type for an immediate upfront quote with genuine parts and zero diagnostic fees.
          </p>
        </motion.div>

        {/* 2-Column Split: Cleanroom Guarantee Card & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Redesigned High-Trust Service Assurance Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between space-y-6"
          >
            {/* 1. Authentic Cleanroom Visual Preview */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                alt="NextFix Pro Cleanroom Technician Lab"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

              {/* Status Pill on Image */}
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                <span>ISO Cleanroom Facility</span>
              </div>

              {/* Bottom Rating strip on Image */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span className="font-bold tracking-tight">
                  Manhattan Cleanroom Bench
                </span>
                <span className="flex items-center gap-1 text-amber-300 font-bold text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>4.9 / 5 Rating</span>
                </span>
              </div>
            </div>

            {/* 2. What's Included in Every Repair */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] block mb-1.5">
                The NextFix Pro Standard
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-4">
                What’s Included in Every Repair
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "100% Genuine OEM Hardware",
                    desc: "Factory-spec displays, batteries, and chips with original serialization and water seals.",
                  },
                  {
                    icon: Award,
                    title: "Lifetime Glass & Labor Warranty",
                    desc: "Free replacement coverage on parts and workmanship. You are protected for life.",
                  },
                  {
                    icon: Lock,
                    title: "Zero Data Loss Protocol",
                    desc: "Confidential handling. Your personal photos, apps, and storage remain untouched.",
                  },
                  {
                    icon: BadgeDollarSign,
                    title: "No Fix = Absolute $0 Fee",
                    desc: "If we cannot fully restore your hardware to factory spec, you pay nothing.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]/80 transition-all hover:bg-white hover:border-[#EA580C]/30 hover:shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Reassurance Trust Strip */}
            <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                <span>30-Min Fast Walk-In Available</span>
              </div>
              <span className="font-bold text-[#0F172A]">Open 8AM - 8PM</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Multi-Step Price Calculator (7 Cols) - UNTOUCHED UI & EXACT LOGIC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#e2e8f0] shadow-sm"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0] mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                  Step-by-Step Diagnostic
                </span>
                <h3 className="text-2xl font-black text-[#0F172A] font-heading">
                  Instant Cost & Turnaround Calculator
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8fafc] border border-[#e2e8f0] text-xs font-bold text-[#0F172A]">
                <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Live Estimates</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* 1. Device Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  1. Select Device Family
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DEVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                        selectedCategory.id === cat.id
                          ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold shadow-sm"
                          : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1]"
                      }`}
                    >
                      <span className="text-xs font-semibold">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Device Model Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  2. Select Exact Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {modelsForCat.map((model: DeviceModel) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`py-2.5 px-3 rounded-xl border text-left text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                        selectedModel?.id === model.id
                          ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold"
                          : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1]"
                      }`}
                    >
                      <div className="truncate font-semibold">{model.name}</div>
                      <div className="text-[10px] text-[#94A3B8] font-normal">
                        {model.brand}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Issue Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  3. Select Hardware Issue
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {issuesForCat.map((issue: RepairIssue) => (
                    <button
                      key={issue.id}
                      onClick={() => setSelectedIssue(issue)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                        selectedIssue?.id === issue.id
                          ? "border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C] font-bold shadow-sm"
                          : "border-[#e2e8f0] bg-white text-[#64748B] hover:border-[#cbd5e1]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold">{issue.name}</div>
                        <div className="text-[11px] text-[#94A3B8] font-normal">
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

              {/* 4. Live Quote Result Card */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Calculated Estimate
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading">
                        ${calculatedQuote.selectedPrice}
                      </span>
                      <span className="text-xs font-semibold text-[#94A3B8]">
                        / All-Inclusive Parts + Labor
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-semibold text-[#64748B] space-y-1">
                    <span className="flex items-center gap-1.5 text-[#0F172A]">
                      <Clock className="w-4 h-4 text-[#EA580C]" />
                      Turnaround:{" "}
                      <strong className="text-[#EA580C]">
                        {calculatedQuote.turnaround}
                      </strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                      Warranty: {calculatedQuote.warranty}
                    </span>
                  </div>
                </div>

                {/* Book Action Button */}
                <div className="mt-6 pt-5 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#94A3B8] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
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
                    className="px-7 py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
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
