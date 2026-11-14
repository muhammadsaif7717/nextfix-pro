"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Train,
  Mail,
  Phone,
  PackageCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface NextFixLocationProps {
  onOpenQuote: () => void;
}

export default function NextFixLocation({ onOpenQuote }: NextFixLocationProps) {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Visit Our Lab
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Walk-In or Express Mail-In
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Centrally located in Manhattan with dedicated walk-in diagnostic benches and complimentary customer lounge.
          </p>
        </motion.div>

        {/* 2-Column Split: Left Walk-In Card & Right Mail-In Box Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Physical Workshop Walk-In */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#fafafa] border border-[#e8e8e8] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EF644C] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20">
                  ● Open Today Until 8:00 PM
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1F1F1F] font-heading mb-3">
                Manhattan Flagship Workshop
              </h3>
              <p className="text-sm text-[#636363] leading-relaxed mb-6">
                25 Main Street, Suite 400, New York, NY 10001
              </p>

              {/* Hours Grid */}
              <div className="space-y-2.5 text-xs text-[#636363] p-5 rounded-2xl bg-white border border-[#e8e8e8] mb-6">
                <div className="flex items-center justify-between font-medium">
                  <span>Monday – Friday</span>
                  <span className="font-bold text-[#1F1F1F]">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Saturday</span>
                  <span className="font-bold text-[#1F1F1F]">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Sunday</span>
                  <span className="font-bold text-[#1F1F1F]">10:00 AM – 5:00 PM</span>
                </div>
              </div>

              {/* Transit & Parking */}
              <div className="grid grid-cols-2 gap-4 text-xs text-[#636363] mb-6">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-[#EF644C] flex-shrink-0 mt-0.5" />
                  <span>Subway: B, D, F, M to 34th St / Herald Sq</span>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#EF644C] flex-shrink-0 mt-0.5" />
                  <span>Validated 1-hour customer parking nearby</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get Walk-In Directions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Express Insured Mail-In */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#1F1F1F] text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/20">
                  <PackageCheck className="w-6 h-6 text-[#EF644C]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EF644C]/20 text-[#EF644C] text-xs font-bold border border-[#EF644C]/30">
                  Nationwide Express
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-3 text-white">
                Free Prepaid Mail-In Box
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Can&apos;t make it to our store? We mail you an armored, ESD-shielded shipping kit with prepaid FedEx Priority overnight postage.
              </p>

              {/* Mail-In Perks List */}
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                  <span>Free insured return shipping with signature confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                  <span>Live HD video inspection & diagnostic recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                  <span>24-Hour turnaround upon lab receipt</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#1F1F1F] hover:bg-[#EF644C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Request Free Mail-In Kit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}