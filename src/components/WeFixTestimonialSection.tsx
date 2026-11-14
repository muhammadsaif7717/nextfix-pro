"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Smartphone,
  Laptop,
  Gamepad2,
  Tablet,
  Award,
} from "lucide-react";

export default function WeFixTestimonialSection() {
  const [filter, setFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "John Taylor",
      role: "Software Lead",
      location: "Manhattan, NY",
      device: "iPhone 15 Pro Max",
      category: "screen",
      repair: "OEM OLED Screen Replacement",
      turnaround: "Fixed in 24 Mins",
      rating: 5,
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote:
        "Walked in on my lunch break with a shattered OLED. The technician completed the TrueTone calibration and factory water-seal press in under 25 minutes. Touch response and 120Hz ProMotion feel identical to brand new.",
      verified: true,
    },
    {
      id: 2,
      name: "Clara Bailey",
      role: "Creative Director",
      location: "Brooklyn, NY",
      device: "MacBook Pro 16\" M3",
      category: "laptop",
      repair: "Liquid Spill Ultrasonic Clean",
      turnaround: "Same-Day Handover",
      rating: 5,
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      quote:
        "Spilled hot tea directly across my keyboard with crucial unbacked client files. NextFix Pro dismantled the logic board, ran an ultrasonic isopropyl bath, and saved 100% of my drive data intact. Truly lifesavers.",
      verified: true,
    },
    {
      id: 3,
      name: "David Ellison",
      role: "Lead Architect",
      location: "Queens, NY",
      device: "Samsung Galaxy S24 Ultra",
      category: "screen",
      repair: "Laser Glass & 200MP Lens",
      turnaround: "Fixed in 35 Mins",
      rating: 5,
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      quote:
        "Cold laser back glass removal left the titanium frame completely blemish-free. The camera module swap restored razor-sharp 8K video capture. Incredible cleanroom workmanship and zero dust under the glass.",
      verified: true,
    },
    {
      id: 4,
      name: "Jean Morey",
      role: "Esports Competitor",
      location: "Jersey City, NJ",
      device: "PlayStation 5 Slim",
      category: "microsolder",
      repair: "HDMI 2.1 4K Port Replacement",
      turnaround: "Fixed in 45 Mins",
      rating: 5,
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      quote:
        "PS5 HDMI port broke during tournament travel. They micro-soldered a reinforced OEM 4K 120Hz socket and renewed the liquid metal APU paste. Runs whisper-quiet with zero frame drops or lag.",
      verified: true,
    },
    {
      id: 5,
      name: "Sarah Jenkins",
      role: "Medical Researcher",
      location: "NYU Medical",
      device: "iPad Pro 12.9\" M2",
      category: "battery",
      repair: "0-Cycle Battery Restoration",
      turnaround: "Fixed in 40 Mins",
      rating: 5,
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      quote:
        "My iPad battery was swelling and suddenly dying at 30%. They installed a certified OEM-spec 0-cycle cell with internal thermal telemetry intact. Battery health is back to 100% and holds charge for days.",
      verified: true,
    },
    {
      id: 6,
      name: "Marcus Vance",
      role: "Fintech Analyst",
      location: "Wall St, NY",
      device: "Google Pixel 9 Pro",
      category: "microsolder",
      repair: "Motherboard PMIC Short Repair",
      turnaround: "Same-Day Return",
      rating: 5,
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      quote:
        "Phone refused to power on after a voltage spike. Two other shops declared the board dead. NextFix Pro traced the short on the power rail under stereomicroscope and revived it with zero data loss.",
      verified: true,
    },
  ];

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === filter);

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-[#10B981] uppercase tracking-widest block mb-2">
            Verified Customer Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Our Loving Customers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Real stories and unedited experiences from individuals and businesses who rely on NextFix Pro for mission-critical device care.
          </p>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e8e8e8] shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left: Overall Rating */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981] text-white flex flex-col items-center justify-center font-black shadow-md">
              <span className="text-xl leading-none">4.9</span>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                Score
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#10B981] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1F1F1F]">
                2,400+ Verified Local Device Reviews
              </div>
              <div className="text-[11px] text-[#888888]">
                Google Reviews (4.9/5) • Trustpilot (4.9/5)
              </div>
            </div>
          </div>

          {/* Right: Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Reviews" },
              { id: "screen", label: "Screen & OLED" },
              { id: "laptop", label: "MacBook & Laptop" },
              { id: "microsolder", label: "Micro-Soldering" },
              { id: "battery", label: "Battery Health" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] ${
                  filter === tab.id
                    ? "bg-[#1F1F1F] text-white shadow-sm"
                    : "bg-[#f6f6f6] text-[#636363] hover:bg-[#e8e8e8] hover:text-[#1F1F1F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 6 Modern Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-[#e8e8e8] hover:border-[#10B981]/40 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Customer Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#e8e8e8] group-hover:border-[#10B981]/40 transition-colors flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-bold text-[#1F1F1F] font-heading">
                            {item.name}
                          </h3>
                          {item.verified && (
                            <span title="Verified Customer">
                              <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#888888] font-medium">
                          {item.role} • {item.location}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-[#10B981]/15 flex-shrink-0 group-hover:text-[#10B981]/30 transition-colors" />
                  </div>

                  {/* Stars + Date */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <div className="flex items-center gap-0.5 text-[#10B981]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#888888] font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Device & Repair Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f6f6f6] border border-[#e8e8e8] text-[11px] font-bold text-[#1F1F1F]">
                      <Smartphone className="w-3 h-3 text-[#10B981]" />
                      <span>{item.device}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#10B981]/10 border border-[#10B981]/20 text-[11px] font-bold text-[#10B981]">
                      <Clock className="w-3 h-3" />
                      <span>{item.turnaround}</span>
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Card Footer: Verified Service Stamp */}
                <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[11px] text-[#888888] font-semibold">
                  <span className="flex items-center gap-1 text-[#1F1F1F]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{item.repair}</span>
                  </span>
                  <span className="text-[#10B981] font-bold">
                    1-Yr Warranty
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}