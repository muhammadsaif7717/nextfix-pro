"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Car,
  Package,
  ArrowRight,
  Phone,
  CheckCircle2,
  Navigation,
  Train,
  Footprints,
  ExternalLink,
} from "lucide-react";

interface LocationAndHoursProps {
  onOpenBooking: () => void;
}

export default function LocationAndHours({
  onOpenBooking,
}: LocationAndHoursProps) {
  const [activeTab, setActiveTab] = useState<"walkin" | "mailin">("walkin");
  const [transitMode, setTransitMode] = useState<"drive" | "transit" | "walk">("drive");

  // Schedule days
  const schedule = [
    { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM", status: "Full Lab Open" },
    { day: "Saturday", hours: "9:00 AM – 7:00 PM", status: "Express Lab Open" },
    { day: "Sunday", hours: "10:00 AM – 6:00 PM", status: "Walk-ins Welcome" },
  ];

  return (
    <section id="location" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            Convenient Access & Service Modes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Visit Our Lab or Ship It Express
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Centrally located with free customer parking. Or let us send an insured FedEx anti-static mailer directly to your door.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-8">
            <button
              onClick={() => setActiveTab("walkin")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "walkin"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>In-Store Walk-In Lab</span>
            </button>
            <button
              onClick={() => setActiveTab("mailin")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "mailin"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Express Mail-In Repair Kit</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Walk-in Store Details & Interactive Simulated Map */}
        {activeTab === "walkin" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Store Address & Parking Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                      Flagship Hardware Lab
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      NextFix Pro Tech Center
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Open Now
                  </span>
                </div>

                <div className="text-sm text-slate-300 space-y-1">
                  <p className="font-semibold text-white">742 Evergreen Tech Blvd, Suite 104</p>
                  <p className="text-slate-400">San Francisco, CA 94107</p>
                  <p className="text-xs text-slate-400 pt-1">
                    (Cross streets: 4th & King St, right by Caltrain Station)
                  </p>
                </div>

                {/* Free Parking Feature */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Free Customer Drop-Off Parking
                    </div>
                    <div className="text-[11px] text-slate-400">
                      4 dedicated reserved stalls directly outside our front entrance.
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="tel:5558393490"
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Ahead</span>
                  </a>
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center transition-all border border-slate-700"
                  >
                    Reserve Priority Slot
                  </button>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Store Operating Hours
                </h4>

                <div className="space-y-3">
                  {schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-2 border-b border-slate-800/80 last:border-0"
                    >
                      <span className="font-semibold text-white">{item.day}</span>
                      <div className="text-right">
                        <span className="text-slate-300 font-medium block">
                          {item.hours}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold">
                          ● {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Map Container (Simulated High-Tech Dark Mode Map) */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between">
              {/* Map Header with Transit Mode Tabs */}
              <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span>Interactive Map & Turn-By-Turn Directions</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setTransitMode("drive")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded ${
                      transitMode === "drive"
                        ? "bg-blue-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Driving (12m)</span>
                  </button>
                  <button
                    onClick={() => setTransitMode("transit")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded ${
                      transitMode === "transit"
                        ? "bg-blue-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Train className="w-3.5 h-3.5" />
                    <span>Caltrain (4m walk)</span>
                  </button>
                  <button
                    onClick={() => setTransitMode("walk")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded ${
                      transitMode === "walk"
                        ? "bg-blue-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Footprints className="w-3.5 h-3.5" />
                    <span>Walking</span>
                  </button>
                </div>
              </div>

              {/* Map Visual Simulation Canvas */}
              <div className="relative flex-1 min-h-[380px] bg-slate-950 p-6 flex flex-col items-center justify-center overflow-hidden">
                {/* Simulated Street Grid Patterns */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

                {/* Simulated Road Lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-12 bg-slate-800/40 -rotate-12 border-y border-blue-500/20"></div>
                  <div className="h-full w-14 bg-slate-800/40 rotate-12 border-x border-blue-500/20 absolute"></div>
                </div>

                {/* Animated Route Line */}
                <div className="absolute w-64 h-32 border-b-2 border-l-2 border-dashed border-cyan-400/80 rounded-bl-3xl pointer-events-none animate-pulse"></div>

                {/* Center Store Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce [animation-duration:2.5s]">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 border-2 border-white shadow-2xl shadow-blue-500/50 flex items-center justify-center text-white">
                    <MapPin className="w-7 h-7 text-amber-300 fill-amber-300" />
                  </div>
                  <div className="mt-2 bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-500/50 shadow-2xl text-center">
                    <div className="text-xs font-black text-white">NextFix Pro Lab</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">● Fast-Track Intake Ready</div>
                  </div>
                </div>

                {/* Nearby Landmarks Pills */}
                <div className="absolute top-6 left-6 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 flex items-center gap-1.5 shadow">
                  <Train className="w-3.5 h-3.5 text-blue-400" />
                  <span>4th & King Caltrain (200m)</span>
                </div>

                <div className="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 flex items-center gap-1.5 shadow">
                  <Car className="w-3.5 h-3.5 text-emerald-400" />
                  <span>I-280 Exit 4th St (1 min)</span>
                </div>
              </div>

              {/* Map Footer Action */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Free customer validation on garage parking for stays over 30 mins.</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Express Mail-In Repair Kit Instructions */}
        {activeTab === "mailin" && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
                  Nationwide Express Service
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  How Express Mail-In Repair Works
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                $1,000 Shipping Insurance Included
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h4 className="text-sm font-bold text-white">Request Free Shipping Box</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We overnight an anti-static cushioned FedEx shipping carton with a prepaid return airbill directly to your home.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h4 className="text-sm font-bold text-white">24-Hour Cleanroom Turnaround</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The moment your device arrives, it is logged, micro-soldered or rebuilt with OEM components, and passed through our 30-point QA test.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h4 className="text-sm font-bold text-white">Insured Priority Return</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Shipped back via FedEx Express with signature verification and your Lifetime Warranty documentation certificate included.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-bold text-sm mb-0.5">
                  Ready to mail your device in?
                </strong>
                Generate your shipping label now with zero upfront payment.
              </div>
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex-shrink-0"
              >
                <span>Request Mail-In Box</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
