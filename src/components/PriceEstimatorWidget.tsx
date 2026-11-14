"use client";

import React, { useState, useMemo } from "react";
import {
  DEVICE_CATEGORIES,
  DEVICE_MODELS,
  getIssuesForCategory,
  calculateRepairPrice,
} from "@/data/repairData";
import { DeviceCategory, DeviceModel, RepairIssue } from "@/types";
import {
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Check,
  ShieldCheck,
  Clock,
  Zap,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Layers,
  Wrench,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

interface PriceEstimatorWidgetProps {
  onBookAppointment: (bookingDetails: {
    category: DeviceCategory;
    model: DeviceModel;
    issue: RepairIssue;
    isOem: boolean;
    price: number;
    turnaround: string;
  }) => void;
}

export default function PriceEstimatorWidget({
  onBookAppointment,
}: PriceEstimatorWidgetProps) {
  // Current multi-step state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Selections
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory>(
    DEVICE_CATEGORIES[0]
  );
  const availableModels = useMemo(() => {
    return DEVICE_MODELS[selectedCategory.id] || [];
  }, [selectedCategory]);

  const [selectedModel, setSelectedModel] = useState<DeviceModel>(
    availableModels[0] || DEVICE_MODELS.iphone[0]
  );

  const availableIssues = useMemo(() => {
    return getIssuesForCategory(selectedCategory.id);
  }, [selectedCategory]);

  const [selectedIssue, setSelectedIssue] = useState<RepairIssue>(
    availableIssues[0]
  );

  // OEM Grade vs Standard Tier
  const [isOem, setIsOem] = useState<boolean>(true);

  // Price calculations
  const calculation = useMemo(() => {
    return calculateRepairPrice(
      selectedCategory.id,
      selectedModel.id,
      selectedIssue,
      isOem
    );
  }, [selectedCategory.id, selectedModel.id, selectedIssue, isOem]);

  // Handle category switch
  const handleSelectCategory = (cat: DeviceCategory) => {
    setSelectedCategory(cat);
    const newModels = DEVICE_MODELS[cat.id] || [];
    setSelectedModel(newModels[0]);
    const newIssues = getIssuesForCategory(cat.id);
    setSelectedIssue(newIssues[0]);
    setCurrentStep(2);
  };

  // Handle model switch
  const handleSelectModel = (model: DeviceModel) => {
    setSelectedModel(model);
    setCurrentStep(3);
  };

  // Handle issue switch
  const handleSelectIssue = (issue: RepairIssue) => {
    setSelectedIssue(issue);
    setCurrentStep(4);
  };

  // Render device icon
  const renderCategoryIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className={className} />;
      case "Laptop":
        return <Laptop className={className} />;
      case "Tablet":
        return <Tablet className={className} />;
      case "Gamepad2":
        return <Gamepad2 className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Instant Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Calculate Your Repair Cost in Seconds
          </h2>
          <p className="mt-3 text-base text-slate-300">
            No surprise invoices. Select your device, choose your model and issue, and get a guaranteed upfront quote backed by our Lifetime Warranty.
          </p>
        </div>

        {/* Multi-Step Diagnostic Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Step Progress Header Strip */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-8 py-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
              {[
                { step: 1, label: "1. Device", desc: selectedCategory.name },
                { step: 2, label: "2. Model", desc: selectedModel?.name || "Select" },
                { step: 3, label: "3. Issue", desc: selectedIssue?.name?.slice(0, 18) + "..." },
                { step: 4, label: "4. Estimate", desc: `$${calculation.selectedPrice} • Quote` },
              ].map((item) => {
                const isActive = currentStep === item.step;
                const isPassed = currentStep > item.step;

                return (
                  <button
                    key={item.step}
                    onClick={() => setCurrentStep(item.step as 1 | 2 | 3 | 4)}
                    className={`flex flex-col text-left p-2 sm:p-3 rounded-xl border transition-all ${
                      isActive
                        ? "bg-blue-600/15 border-blue-500/60 shadow-lg shadow-blue-500/10"
                        : isPassed
                        ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                        : "bg-slate-950/40 border-transparent text-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : isPassed
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        {isPassed ? <Check className="w-3 h-3" /> : item.step}
                      </span>
                      <span
                        className={`text-xs font-bold truncate ${
                          isActive ? "text-white" : isPassed ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="hidden sm:block text-[11px] text-slate-400 truncate mt-1">
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Body Content Area */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: Select Device Category */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                      1
                    </span>
                    Select Your Device Family
                  </h3>
                  <span className="text-xs text-slate-400">Step 1 of 4</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {DEVICE_CATEGORIES.map((category) => {
                    const isSelected = selectedCategory.id === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleSelectCategory(category)}
                        className={`relative group p-4 sm:p-5 rounded-xl border flex flex-col items-center justify-center text-center gap-3 transition-all duration-200 ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-xl shadow-blue-500/20 scale-[1.02]"
                            : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                        }`}
                      >
                        {category.popular && (
                          <span className="absolute -top-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-orange-500 text-white tracking-wider shadow">
                            POPULAR
                          </span>
                        )}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-800 text-blue-400 group-hover:bg-slate-700"
                          }`}
                        >
                          {renderCategoryIcon(category.iconName, "w-6 h-6")}
                        </div>
                        <span className="text-xs sm:text-sm font-bold truncate max-w-full">
                          {category.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <span>Proceed to Model Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Device Model */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Back to Devices
                    </button>
                    <span className="text-slate-600">/</span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                        2
                      </span>
                      Select {selectedCategory.name} Model
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Step 2 of 4</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableModels.map((model) => {
                    const isSelected = selectedModel?.id === model.id;
                    return (
                      <button
                        key={model.id}
                        onClick={() => handleSelectModel(model)}
                        className={`p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                            : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {renderCategoryIcon(selectedCategory.iconName, "w-4 h-4")}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">
                              {model.name}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {model.brand} • {model.releaseYear || "Current Series"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? "bg-blue-600 border-blue-500 text-white"
                              : "border-slate-700"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <span>Proceed to Issue Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Select Issue */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Back to Models
                    </button>
                    <span className="text-slate-600">/</span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                        3
                      </span>
                      What&apos;s wrong with your {selectedModel?.name}?
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Step 3 of 4</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {availableIssues.map((issue) => {
                    const isSelected = selectedIssue?.id === issue.id;
                    const issueCalc = calculateRepairPrice(
                      selectedCategory.id,
                      selectedModel.id,
                      issue,
                      true
                    );

                    return (
                      <button
                        key={issue.id}
                        onClick={() => handleSelectIssue(issue)}
                        className={`p-4 rounded-xl border flex flex-col justify-between text-left transition-all ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-xl shadow-blue-500/20 ring-1 ring-blue-500"
                            : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                isSelected
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-800 text-blue-400"
                              }`}
                            >
                              <Wrench className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white">
                                {issue.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                                {issue.shortDesc}
                              </div>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-sm font-black text-emerald-400">
                              From ${issueCalc.standardPrice}
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1 justify-end mt-0.5">
                              <Clock className="w-3 h-3 text-orange-400" />
                              {issue.turnaroundText}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-slate-400">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            {issue.warranty}
                          </span>
                          <span
                            className={`font-semibold ${
                              isSelected ? "text-blue-400" : "text-slate-500"
                            }`}
                          >
                            {isSelected ? "● Selected" : "Select →"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <span>View Guaranteed Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Instant Cost & Turnaround Summary (The Big Conversion Step) */}
            {currentStep === 4 && (
              <div className="space-y-8">
                {/* Summary Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      {renderCategoryIcon(selectedCategory.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                        Configured Repair Quote
                      </div>
                      <div className="text-lg font-black text-white">
                        {selectedModel?.name} • {selectedIssue?.name}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 font-semibold self-start md:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Change Device / Issue
                  </button>
                </div>

                {/* Main Pricing & Turnaround Breakdown Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left Column: Grade Options & Guarantee Breakdown */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Quality Tier Selector (OEM Certified vs Premium Standard) */}
                    {selectedIssue.oemAvailable && (
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center justify-between">
                          <span>Select Component Quality Tier:</span>
                          <span className="text-emerald-400 text-[11px] font-semibold">
                            ● In Stock at Lab
                          </span>
                        </label>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* OEM Certified Option */}
                          <div
                            onClick={() => setIsOem(true)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isOem
                                ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-500 text-white">
                                RECOMMENDED
                              </span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isOem
                                    ? "border-blue-500 bg-blue-600 text-white"
                                    : "border-slate-600"
                                }`}
                              >
                                {isOem && <Check className="w-2.5 h-2.5" />}
                              </div>
                            </div>
                            <div className="text-sm font-black text-white mt-2">
                              Certified OEM Grade
                            </div>
                            <p className="text-xs text-slate-300 mt-1">
                              Factory-original specifications, TrueTone calibrated, full 120Hz ProMotion & maximum color gamut.
                            </p>
                            <div className="text-base font-black text-emerald-400 mt-3">
                              ${calculation.oemPrice}{" "}
                              <span className="text-[11px] text-slate-400 font-normal">
                                (all-inclusive)
                              </span>
                            </div>
                          </div>

                          {/* Standard Premium Grade Option */}
                          <div
                            onClick={() => setIsOem(false)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              !isOem
                                ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                BUDGET FRIENDLY
                              </span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  !isOem
                                    ? "border-blue-500 bg-blue-600 text-white"
                                    : "border-slate-600"
                                }`}
                              >
                                {!isOem && <Check className="w-2.5 h-2.5" />}
                              </div>
                            </div>
                            <div className="text-sm font-black text-white mt-2">
                              Premium Aftermarket
                            </div>
                            <p className="text-xs text-slate-400 mt-1">
                              High quality tier-1 aftermarket panel. Passed full touch sensitivity and multi-touch test matrix.
                            </p>
                            <div className="text-base font-black text-emerald-400 mt-3">
                              ${calculation.standardPrice}{" "}
                              <span className="text-[11px] text-slate-400 font-normal">
                                (all-inclusive)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* What's Included Checkpoints */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Every NextFix Pro Service Includes:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Lifetime Parts & Labor Warranty</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Complimentary 30-Point Diagnostic</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Zero-Touch Data Privacy Policy</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>No Fix = Zero Charge Guarantee</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>UV-C Sanitization & ESD Cleanroom Pack</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Water-Resistant Perimeter Seal Refitted</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Instant Price Card & 1-Click Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-blue-950/60 via-slate-900 to-slate-950 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          GUARANTEED QUOTE
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Part Reserved in Lab
                        </span>
                      </div>

                      {/* Giant Price Display */}
                      <div className="py-2">
                        <div className="text-xs font-semibold text-slate-400">
                          Total Estimated Out-The-Door Cost:
                        </div>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                            ${calculation.selectedPrice}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            USD • Parts & Labor Included
                          </span>
                        </div>
                      </div>

                      {/* Turnaround Badge */}
                      <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-5 h-5 text-orange-400 animate-pulse" />
                          <div>
                            <div className="text-xs font-bold text-orange-300">
                              Estimated Turnaround:
                            </div>
                            <div className="text-sm font-black text-white">
                              {calculation.turnaround}
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-500 text-slate-950">
                          EXPRESS
                        </span>
                      </div>

                      {/* Warranty Coverage */}
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Coverage: </span>
                        <strong className="text-white">{calculation.warranty}</strong>
                      </div>
                    </div>

                    {/* 1-Click Action CTA */}
                    <div className="pt-6 space-y-3">
                      <button
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
                        className="w-full py-4 px-6 rounded-xl font-black text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                      >
                        <Calendar className="w-5 h-5 text-amber-300" />
                        <span>Book Free In-Store Diagnostic</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-center text-[11px] text-slate-400">
                        ⚡ Walk-ins welcome anytime or reserve your time slot online for fast-track queue priority. No upfront payment required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
