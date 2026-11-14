"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Train,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Phone,
  Coffee,
  Calendar,
} from "lucide-react";

interface NextFixLocationProps {
  onOpenQuote: () => void;
}

export default function NextFixLocation({ onOpenQuote }: NextFixLocationProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Visit Our Lab
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading wdt-spaced-heading">
            Visit Our Manhattan Lab & Service Hours
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl mx-auto">
            Drop by our central cleanroom diagnostic lounge or contact our specialists directly. No appointment required for walk-in testing.
          </p>
        </motion.div>

        {/* Clean 2-Column Grid: Google Map on One Side, Operating Schedule on the Other */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-[#e2e8f0] shadow-sm p-4 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Embedded Interactive Google Map (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm bg-slate-100 min-h-[260px] sm:min-h-[320px] lg:min-h-full">
                <iframe
                  title="NextFix Pro Flagship Lab Location Map"
                  src="https://maps.google.com/maps?q=25+Main+Street,+New+York,+NY+10001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[260px] sm:min-h-[320px]"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#e2e8f0] shadow-sm text-xs font-bold text-[#0F172A] flex items-center gap-1.5 pointer-events-none max-w-[85%] truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C] flex-shrink-0" />
                  <span className="truncate">25 Main St, Manhattan, NY</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
                <a
                  href="https://maps.google.com/?q=25+Main+Street,+New+York,+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-center border border-[#e2e8f0] hover:border-[#EA580C] bg-[#f8fafc] hover:bg-white text-[#0F172A] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="tel:18006398349"
                  className="py-3 px-5 rounded-xl text-xs font-bold text-center border border-[#e2e8f0] hover:border-[#EA580C] bg-[#f8fafc] hover:bg-white text-[#0F172A] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Call (800) 639-FIX</span>
                </a>
              </div>
            </div>

            {/* Right Column: Opening Hours & Visiting Details (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-[11px] sm:text-xs font-semibold text-[#EA580C] mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Open 7 Days A Week</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] font-heading">
                  NextFix Pro Manhattan Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 font-normal flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                  <span>25 Main Street, Suite 400, Manhattan, New York, NY 10001</span>
                </p>

                {/* Operating Schedule Table */}
                <div className="mt-5 sm:mt-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-4 sm:p-5 space-y-3 text-xs">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    Laboratory & Walk-In Schedule
                  </div>
                  
                  <div className="flex items-center justify-between font-medium pb-2 border-b border-[#e2e8f0]">
                    <span className="text-[#0F172A] font-semibold">Monday – Friday</span>
                    <span className="font-bold text-[#EA580C] px-2 py-0.5 rounded-md bg-[#EA580C]/10 text-xs">
                      8:00 AM – 8:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-medium pb-2 border-b border-[#e2e8f0]">
                    <span className="text-[#0F172A] font-semibold">Saturday</span>
                    <span className="font-bold text-[#0F172A] text-xs">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-medium">
                    <span className="text-[#0F172A] font-semibold">Sunday</span>
                    <span className="font-bold text-[#0F172A] text-xs">
                      10:00 AM – 5:00 PM
                    </span>
                  </div>
                </div>

                {/* Walk-In Highlights */}
                <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#64748B]">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                    <Train className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Subway Access</span>
                      <span>B, D, F, M, N, Q, R, W to 34th St (2 min walk)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                    <Car className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Free Parking</span>
                      <span>1-hour validated parking at 32nd St Garage</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                    <Coffee className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Lounge Amenities</span>
                      <span>High-speed Wi-Fi & complimentary espresso bar</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-[#e2e8f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">28-Min Turnaround</span>
                      <span>Instant screen swaps while you wait in comfort</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Bench CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[46px] sm:min-h-[48px] whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Bench or Walk-In Online</span>
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
