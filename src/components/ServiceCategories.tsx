"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA } from "@/data/servicesData";
import { ServiceCategory } from "@/types";
import {
  Wrench,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceCategoriesProps {
  onSelectService: (service: ServiceCategory) => void;
}

export default function ServiceCategories({
  onSelectService,
}: ServiceCategoriesProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (filter === "all") return true;
    if (filter === "phones") return item.category === "phones";
    if (filter === "laptops") return item.category === "laptops";
    if (filter === "consoles") return item.category === "consoles";
    if (filter === "microsoldering") return item.category === "microsoldering";
    return true;
  });

  return (
    <section id="services" className="py-20 bg-slate-950 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Comprehensive Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
              Our Certified Repair Services
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              From glass replacement in 20 minutes to complex multi-layer micro-soldering under microscope. Every repair performed in an ESD-protected lab.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "phones", label: "Smartphones" },
              { id: "laptops", label: "Mac & Laptops" },
              { id: "microsoldering", label: "Micro-Soldering" },
              { id: "consoles", label: "Consoles" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Card Image with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={380}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  {/* Starting Price Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-lg">
                    <span className="text-[10px] text-slate-400 uppercase font-bold mr-1">
                      From
                    </span>
                    <span className="text-sm font-black text-emerald-400">
                      ${service.startingPrice}
                    </span>
                  </div>

                  {/* Turnaround Badge */}
                  <div className="absolute top-3 right-3 bg-orange-500/90 backdrop-blur-md text-slate-950 px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.turnaroundTime}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer & Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{service.warranty}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-transparent text-xs font-bold transition-all flex-shrink-0"
                  >
                    <span>Book Repair</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
