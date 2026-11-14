"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Train,
  PackageCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Box,
  Truck,
  Video,
} from "lucide-react";

interface NextFixLocationProps {
  onOpenQuote: () => void;
}

export default function NextFixLocation({ onOpenQuote }: NextFixLocationProps) {
  const [activeTab, setActiveTab] = useState<"walkin" | "mailin">("walkin");

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-[#e2e8f0] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Service Hub
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading wdt-spaced-heading">
            Visit Our Lab or Ship From Anywhere
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
            Experience our walk-in cleanroom diagnostic lounge in Manhattan, or use our complimentary prepaid overnight mail-in service nationwide.
          </p>
        </motion.div>

        {/* Master Unified Service Hub (Seamless Architecture, No Cheap Boxes) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl border border-[#e2e8f0] shadow-sm overflow-hidden"
        >
          {/* Top Integrated Segment Selector */}
          <div className="grid grid-cols-2 border-b border-[#e2e8f0] bg-[#f8fafc]/80 text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab("walkin")}
              className={`py-4 sm:py-5 px-6 flex items-center justify-center gap-2.5 transition-all duration-200 border-b-2 ${
                activeTab === "walkin"
                  ? "border-[#EA580C] text-[#EA580C] bg-white font-extrabold shadow-xs"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/50"
              }`}
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Manhattan Flagship Lab (Walk-In)</span>
            </button>

            <button
              onClick={() => setActiveTab("mailin")}
              className={`py-4 sm:py-5 px-6 flex items-center justify-center gap-2.5 transition-all duration-200 border-b-2 ${
                activeTab === "mailin"
                  ? "border-[#EA580C] text-[#EA580C] bg-white font-extrabold shadow-xs"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/50"
              }`}
            >
              <PackageCheck className="w-4 h-4 flex-shrink-0" />
              <span>Nationwide Prepaid Mail-In Box</span>
            </button>
          </div>

          {/* Interactive Content Canvas */}
          <div className="p-6 sm:p-10 lg:p-12">
            {activeTab === "walkin" ? (
              <motion.div
                key="walkin-panel"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left: Location & Hours Breakdown (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                      Central Cleanroom Facility
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
                      NextFix Pro Manhattan Studio
                    </h3>
                    <p className="text-sm text-[#64748B] mt-2 flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                      <span>25 Main Street, Suite 400, New York, NY 10001</span>
                    </p>
                  </div>

                  {/* Operational Hours Grid */}
                  <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-5 space-y-3 text-xs">
                    <div className="flex items-center justify-between font-medium pb-2 border-b border-[#e2e8f0]/60">
                      <span className="text-[#64748B]">Monday – Friday</span>
                      <span className="font-bold text-[#0F172A]">8:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between font-medium pb-2 border-b border-[#e2e8f0]/60">
                      <span className="text-[#64748B]">Saturday</span>
                      <span className="font-bold text-[#0F172A]">9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                      <span className="text-[#64748B]">Sunday</span>
                      <span className="font-bold text-[#0F172A]">10:00 AM – 5:00 PM</span>
                    </div>
                  </div>

                  {/* Transit & Parking Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#64748B]">
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                      <Train className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#0F172A] block">Subway Transit</span>
                        <span>B, D, F, M, N, Q, R, W to 34th St / Herald Sq (2 min walk)</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                      <Car className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#0F172A] block">Customer Parking</span>
                        <span>Validated 1-hour parking at 32nd St Garage</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Walk-In Action Card (5 Cols) */}
                <div className="lg:col-span-5 bg-slate-950 text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FB923C] block">
                      Fast-Track Walk-In
                    </span>
                    <h4 className="text-xl font-bold font-heading text-white">
                      Instant Walk-In Diagnostic
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      No appointment required. Walk in anytime to relax in our customer lounge with espresso and Wi-Fi while our master technicians service your device.
                    </p>

                    <div className="pt-2 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>Average screen swap: 28 Minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>Free live testing & microscopic inspection</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>Complimentary device sanitization</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white shadow-lg shadow-[#EA580C]/35 flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[48px]"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions & Reserve Bench</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="mailin-panel"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left: How Mail-In Works (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                      Nationwide Service
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
                      Prepaid Armored Mail-In Box
                    </h3>
                    <p className="text-sm text-[#64748B] mt-2 font-normal leading-relaxed">
                      Can&apos;t make it to our Manhattan store? We ship an armored, ESD-shielded shipping kit with prepaid FedEx Priority overnight postage straight to your door.
                    </p>
                  </div>

                  {/* 3 Clear Steps */}
                  <div className="space-y-3.5">
                    {[
                      {
                        step: "01",
                        icon: Box,
                        title: "We Mail You a Custom Shockproof Kit",
                        desc: "Includes pre-cut ESD anti-static foam, tamper-evident security tape, and a prepaid FedEx Priority overnight shipping label.",
                      },
                      {
                        step: "02",
                        icon: Truck,
                        title: "Drop Off at Any FedEx Location",
                        desc: "Fully insured in transit up to $5,000 with mandatory signature delivery directly to our cleanroom vault.",
                      },
                      {
                        step: "03",
                        icon: Video,
                        title: "Live Video Diagnostic & Same-Day Return",
                        desc: "We record a microscopic intake inspection video and dispatch your restored device within 24 hours.",
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-bold text-sm flex-shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase text-[#EA580C] tracking-wider">
                                Step {item.step}
                              </span>
                              <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Request Kit Action Card (5 Cols) */}
                <div className="lg:col-span-5 bg-slate-950 text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FB923C] block">
                      100% Risk Free
                    </span>
                    <h4 className="text-xl font-bold font-heading text-white">
                      Request Your Shipping Box
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Zero upfront shipping fees. If our engineers cannot resolve your hardware issue, we ship your device back to you completely free of charge.
                    </p>

                    <div className="pt-2 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>Prepaid FedEx Priority Overnight label</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>Up to $5,000 carrier insurance included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FB923C] flex-shrink-0" />
                        <span>24-Hour cleanroom lab turnaround</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#F97316] hover:to-[#EA580C] text-white shadow-lg shadow-[#EA580C]/35 flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[48px]"
                  >
                    <PackageCheck className="w-4 h-4" />
                    <span>Order Free Mail-In Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
