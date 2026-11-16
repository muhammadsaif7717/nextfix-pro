"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Clock,
} from "lucide-react";

export default function WeFixTestimonialSection() {
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

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa] border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
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
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e8e8e8] shadow-sm mb-10 max-w-md mx-auto flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EA580C] text-white flex flex-col items-center justify-center font-black shadow-sm flex-shrink-0">
            <span className="text-base leading-none">4.9</span>
            <span className="text-[8px] font-bold uppercase tracking-wider opacity-90">
              Score
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#EA580C] mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <div className="text-xs font-bold text-[#1F1F1F]">
              2,400+ Verified Customer Reviews
            </div>
            <div className="text-[10px] text-[#888888]">
              Google Reviews (4.9/5) • Trustpilot (4.9/5)
            </div>
          </div>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-[#e8e8e8] hover:border-[#EA580C]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Customer Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#e8e8e8] group-hover:border-[#EA580C]/40 transition-colors flex-shrink-0">
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
                              <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#888888] font-medium">
                          {item.role} • {item.location}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-[#EA580C]/15 flex-shrink-0 group-hover:text-[#EA580C]/30 transition-colors" />
                  </div>

                  {/* Stars + Date */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <div className="flex items-center gap-0.5 text-[#EA580C]">
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
                      <Smartphone className="w-3 h-3 text-[#EA580C]" />
                      <span>{item.device}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EA580C]/10 border border-[#EA580C]/20 text-[11px] font-bold text-[#EA580C]">
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
                    <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{item.repair}</span>
                  </span>
                  <span className="text-[#EA580C] font-bold">
                    1-Yr Warranty
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}