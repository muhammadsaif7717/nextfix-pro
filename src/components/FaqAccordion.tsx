"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/faqData";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  ShieldCheck,
  Lock,
  Clock,
  Sparkles,
} from "lucide-react";

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (activeCategory === "all") return true;
    return faq.category === activeCategory;
  });

  return (
    <section id="faq" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Transparent Answers & Technical Policies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Everything you need to know about our data security protocols, OEM parts, lifetime warranties, and turnarounds.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Questions" },
              { id: "privacy", label: "Data & Privacy" },
              { id: "warranty", label: "Warranty & Parts" },
              { id: "turnaround", label: "Timing & Costs" },
              { id: "mailin", label: "Mail-In Process" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-950 border-blue-500/50 shadow-xl"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
          <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Have a custom device or specialized micro-soldering inquiry?
          </p>
          <h4 className="text-lg font-bold text-white">
            Speak directly with a Master Hardware Technician
          </h4>
          <div className="pt-2">
            <a
              href="tel:5558393490"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Technician Desk: (555) 839-3490</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
