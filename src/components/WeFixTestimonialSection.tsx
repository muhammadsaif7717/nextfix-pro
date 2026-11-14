"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
        "Spilled tea directly across my keyboard with crucial client work unbacked. NextFix Pro completed an emergency sonic bath and micro-soldering. All my files were saved 100% intact.",
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

  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f6f6f6] border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Our Loving Customers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Authentic experiences from individuals and business clients who trust our repair workshop with their critical tech devices.
          </p>
        </motion.div>

        {/* Featured Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e8e8] shadow-xl relative"
        >
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#EF644C]/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
            >
              {/* Customer Avatar */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#EF644C]/20 shadow-md flex-shrink-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Meta */}
              <div className="flex-1 text-center sm:text-left">
                {/* 5 Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#EF644C] mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-[#1F1F1F] font-medium leading-relaxed italic mb-6">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#f0f0f0]">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] font-heading">
                      {current.name}
                    </h3>
                    <div className="text-xs text-[#888888] font-medium">
                      {current.role} •{" "}
                      <span className="text-[#EF644C] font-semibold">
                        {current.device}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f6f6] border border-[#e8e8e8] text-xs font-semibold text-[#1F1F1F]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EF644C]" />
                    <span>{current.repair}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e8e8e8]">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIdx === i ? "w-8 bg-[#EF644C]" : "w-2.5 bg-[#e0e0e0]"
                  }`}
                  aria-label={`Jump to review ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous Review"
                className="w-10 h-10 rounded-full bg-[#f6f6f6] hover:bg-[#EF644C] hover:text-white border border-[#e8e8e8] text-[#1F1F1F] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next Review"
                className="w-10 h-10 rounded-full bg-[#f6f6f6] hover:bg-[#EF644C] hover:text-white border border-[#e8e8e8] text-[#1F1F1F] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}