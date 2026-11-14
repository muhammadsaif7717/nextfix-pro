"use client";

import React, { useState } from "react";
import NextFixLogo from "@/components/NextFixLogo";
import {
  Wrench,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WeFixFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const tickerItems = [
    { title: "20 + Years of Experience" },
    { title: "20 K+ Happy Customers" },
    { title: "470 + Delivery Centers" },
    { title: "1 Year Return Warranty" },
    { title: "2 L+ Device Repaired" },
  ];

  return (
    <footer id="contact" className="bg-[#1F1F1F] text-white text-xs scroll-mt-24 sm:scroll-mt-28">
      {/* 1. Top Counter Ticker Strip (Exact WeFix Style) */}
      <div className="border-b border-[#333333] py-5 px-3 sm:px-4 bg-[#181818]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-around gap-4 sm:gap-6 text-center">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-3">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0"></span>
              <span className="text-xs sm:text-base font-bold text-white tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <NextFixLogo inverted size="md" />

            <p className="text-[#a0a0a0] leading-relaxed text-xs sm:text-sm">
              Expert gadget repair, maintenance services, keeping your devices running smoothly with certified components and master craftsmanship.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Follow Us:
              </span>
              <div className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook page"
                  className="hover:text-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EA580C] rounded"
                >
                  Fb
                </a>
                <span>/</span>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter X profile"
                  className="hover:text-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EA580C] rounded"
                >
                  Tw
                </a>
                <span>/</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profile"
                  className="hover:text-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EA580C] rounded"
                >
                  In
                </a>
                <span>/</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="hover:text-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EA580C] rounded"
                >
                  Li
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-[#a0a0a0] text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#EA580C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#EA580C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#options" className="hover:text-[#EA580C] transition-colors">
                  Repair Options
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#EA580C] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-[#EA580C] transition-colors">
                  News & Media
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#EA580C] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-[#a0a0a0] text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Phone Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Tablet Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Laptop Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Software Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Smart Watch Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EA580C] transition-colors">
                  Game Console
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Contact Us
            </h4>
            <div className="space-y-2 text-[#a0a0a0] text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                <span>25 Main Street, Suite 400, Manhattan, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                <a href="tel:18006398349" className="hover:text-[#EA580C] transition-colors">
                  +1 (800) 639-FIX (349)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                <a href="mailto:support@nextfixpro.com" className="hover:text-[#EA580C] transition-colors">
                  support@nextfixpro.com
                </a>
              </div>
            </div>

            {/* Newsletter Subscribe with Accessible Form Controls */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                Subscribe To Newsletter:
              </span>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your Mail Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Mail Address"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg bg-[#2a2a2a] border border-[#3d3d3d] text-white text-xs placeholder-[#777] focus:outline-none focus:border-[#EA580C]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-4 py-2.5 min-h-[44px] min-w-[44px] rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <p>© 2026 NextFix Pro – Smart Device & Gadget Repair. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-[#EA580C] transition-colors py-1">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#EA580C] transition-colors py-1">
              Privacy & Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
