"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, Zap } from "lucide-react";

export default function NextFixFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will I lose my photos, contacts, or personal files during repair?",
      a: "Absolutely not. In over 99.8% of repairs (screen, battery, camera, charge ports, housing), your storage NAND is never touched and your operating system remains 100% intact. We operate under strict cleanroom privacy protocols and never ask for your device passcode unless required for hardware sensor calibration.",
    },
    {
      q: "Do you use authentic OEM parts or cheap aftermarket copies?",
      a: "We exclusively utilize 100% factory-specification OEM assemblies. For Apple devices, we transfer your original TrueTone display serials and maintain 120Hz ProMotion responsiveness. For Samsung and Google devices, we calibrate the ultrasonic under-display fingerprint sensors to factory specifications.",
    },
    {
      q: "How does your 'No Fix = No Fee' guarantee work?",
      a: "It is our zero-risk promise. If our master technicians inspect your hardware and determine that the logic board or device cannot be restored to safe working condition, you pay exactly $0. Zero diagnostic charges, zero inspection fees.",
    },
    {
      q: "What does the 1-Year Unconditional Warranty cover?",
      a: "Our warranty covers every component we install against touch failures, LCD ghosting, backlight flickering, and premature battery degradation. If any defect appears within 365 days, walk into our shop for an instant no-questions-asked replacement.",
    },
    {
      q: "How long does an express screen or battery repair take?",
      a: "Average smartphone screen and battery replacements are completed in 22 to 28 minutes. You are welcome to relax in our complimentary lounge with high-speed WiFi and coffee while our technicians restore your device.",
    },
    {
      q: "Do I need to book an appointment or can I walk in anytime?",
      a: "Walk-ins are welcome anytime during our business hours (Monday to Saturday, 8:00 AM – 8:00 PM). If you prefer a guaranteed zero-wait bench slot, you can reserve an express priority pass directly on this website in 30 seconds.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#fafafa] border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363]">
            Everything you need to know about our repair standards, data security, and parts warranty.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-[#e8e8e8] overflow-hidden shadow-xs hover:border-[#EA580C]/30 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F1F1F] font-heading pr-2">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#EA580C] text-white rotate-180"
                        : "bg-[#f6f6f6] text-[#636363]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#636363] leading-relaxed border-t border-[#f0f0f0]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}