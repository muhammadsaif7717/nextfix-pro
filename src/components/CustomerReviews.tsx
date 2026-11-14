"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REVIEWS_DATA } from "@/data/reviewsData";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ThumbsUp,
  Sparkles,
} from "lucide-react";

export default function CustomerReviews() {
  const [filterDevice, setFilterDevice] = useState<string>("all");

  const filteredReviews = REVIEWS_DATA.filter((rev) => {
    if (filterDevice === "all") return true;
    if (filterDevice === "iphone") return rev.device.toLowerCase().includes("iphone");
    if (filterDevice === "macbook") return rev.device.toLowerCase().includes("macbook");
    if (filterDevice === "samsung") return rev.device.toLowerCase().includes("samsung");
    if (filterDevice === "console") return rev.device.toLowerCase().includes("playstation");
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header Strip & Social Proof */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Local Google & Yelp Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
              Loved by 2,400+ Local Device Owners
            </h2>
            <p className="text-sm text-slate-400">
              Real stories from everyday professionals, gamers, and students who got their hardware rescued same-day.
            </p>
          </div>

          {/* Rating Summary Block */}
          <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                4.9
              </div>
              <div className="flex text-amber-400 justify-center text-sm mt-1">
                {"★★★★★"}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-700"></div>
            <div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Overall Rating
              </div>
              <div className="text-sm font-bold text-emerald-400">
                2,418+ Verified Reviews
              </div>
              <div className="text-[11px] text-slate-400">
                99.4% First-Time Fix Success
              </div>
            </div>
          </div>
        </div>

        {/* Device Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "all", label: "All Reviews" },
            { id: "iphone", label: "iPhone Repairs" },
            { id: "macbook", label: "MacBook & Laptop" },
            { id: "samsung", label: "Samsung Galaxy" },
            { id: "console", label: "Gaming Consoles" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterDevice(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterDevice === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-200"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-800 border border-slate-700 flex-shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <span title="Verified Repair Customer">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {rev.location} • {rev.date}
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Device & Repair Badge Pill Strip */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {rev.device}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Clock className="w-3 h-3" />
                    {rev.turnaround}
                  </span>
                </div>

                {/* Review Quote Body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Card Footer Proof Tag */}
              <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-400">Repair: {rev.repairType}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> Verified Work
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
