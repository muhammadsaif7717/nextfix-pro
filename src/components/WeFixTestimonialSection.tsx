"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

export default function WeFixTestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Taylor",
      role: "Verified Customer",
      device: "iPhone 15 Pro Max",
      repair: "Screen & OLED Repair",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      quote:
        "The team fixed my shattered iPhone 15 Pro in 25 minutes while I waited in their comfortable lounge. Genuine OEM screen with flawless TrueTone and touch responsiveness.",
      rating: 5,
    },
    {
      id: 2,
      name: "Clara Bailey",
      role: "Creative Director",
      device: "MacBook Pro 16\"",
      repair: "Liquid Spill Deoxidation",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      quote:
        "Spilled tea directly across my keyboard with crucial client work unbacked. WeFix completed an emergency sonic bath and micro-soldering. All my files were saved 100% intact.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Ellison",
      role: "Software Architect",
      device: "Samsung Galaxy S24 Ultra",
      repair: "Camera & Back Glass",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      quote:
        "Remarkable precision. The laser glass removal left the titanium frame completely pristine, and the new camera lens takes crystal sharp 8K video as good as new.",
      rating: 5,
    },
    {
      id: 4,
      name: "Jean Morey",
      role: "Gaming Enthusiast",
      device: "PlayStation 5 Disc",
      repair: "HDMI 2.1 Port Replacement",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      quote:
        "My PS5 HDMI port broke during a move. They replaced it with a reinforced 4K 120Hz socket and renewed the liquid metal. Whisper quiet and runs great.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#f6f6f6] border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Testimonial
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            User Opinions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#636363]">
            Read authentic feedback from local device owners who rely on our certified technical team.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#e8e8e8] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex text-[#EF644C] mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EF644C]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#636363] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#f0f0f0] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#e0e0e0] flex-shrink-0 border border-[#e8e8e8]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="truncate">
                  <div className="text-sm font-bold text-[#1F1F1F] flex items-center gap-1 font-heading truncate">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EF644C]" />
                  </div>
                  <div className="text-[11px] text-[#888888] truncate">
                    {t.device} • {t.repair}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
