"use client";

import React, { useState } from "react";
import {
  Wrench,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Building,
  ShieldCheck,
  Smartphone,
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
    <footer id="contact" className="bg-[#1F1F1F] text-white text-xs">
      {/* 1. Top Counter Ticker Strip (Exact WeFix Style) */}
      <div className="border-b border-[#333333] py-6 px-4 bg-[#181818]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#EF644C]"></span>
              <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EF644C] flex items-center justify-center text-white shadow-md">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white tracking-tight font-heading">
                  WeFix<span className="text-[#EF644C]">.</span>
                </div>
                <div className="text-[10px] font-bold text-[#888888] uppercase tracking-wider -mt-1">
                  Smart Gadget Repair
                </div>
              </div>
            </div>

            <p className="text-[#a0a0a0] leading-relaxed text-xs sm:text-sm">
              Expert gadget repair, maintenance services, keeping your devices running smoothly with certified components and master craftsmanship.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Follow Us:
              </span>
              <div className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#EF644C] transition-colors">
                  Fb
                </a>
                <span>/</span>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#EF644C] transition-colors">
                  Tw
                </a>
                <span>/</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#EF644C] transition-colors">
                  In
                </a>
                <span>/</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#EF644C] transition-colors">
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
            <ul className="space-y-2.5 text-[#a0a0a0] text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#EF644C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#EF644C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#options" className="hover:text-[#EF644C] transition-colors">
                  Repair Options
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#EF644C] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-[#EF644C] transition-colors">
                  News & Media
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#EF644C] transition-colors">
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
            <ul className="space-y-2.5 text-[#a0a0a0] text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Phone Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Tablet Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Laptop Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Software Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
                  Smart Watch Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#EF644C] transition-colors">
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
                <MapPin className="w-4 h-4 text-[#EF644C] flex-shrink-0 mt-0.5" />
                <span>863 Hope Street, Irving, TX 59080</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                <span>+1 (800) 657-8963</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EF644C] flex-shrink-0" />
                <span>info@example.com</span>
              </div>
            </div>

            {/* Newsletter Subscribe */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                Subscribe To Newsletter:
              </span>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Mail Address"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#2a2a2a] border border-[#3d3d3d] text-white text-xs placeholder-[#777] focus:outline-none focus:border-[#EF644C]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-[#EF644C] hover:bg-[#d94f38] text-white text-xs font-bold uppercase transition-colors"
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
        <div className="mt-16 pt-8 border-t border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <p>© 2026 WeFix – Smart Device & Gadget Repair. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-[#EF644C] transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#EF644C] transition-colors">
              Privacy & Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
