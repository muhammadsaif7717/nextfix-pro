"use client";

import React from "react";
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
}

export default function Footer({ onOpenEstimator, onOpenTracker }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pb-24 lg:pb-12">
      {/* Top Value Reassurance Bar */}
      <div className="border-b border-slate-800/80 py-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">Lifetime Warranty</div>
              <div className="text-[11px] text-slate-400">On all screens, batteries & ports</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-orange-400 flex-shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">Under 45-Min Fixes</div>
              <div className="text-[11px] text-slate-400">Average screen turnaround: 28m</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">100% Data Safe</div>
              <div className="text-[11px] text-slate-400">Zero device wiping required</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-white font-bold text-sm">No Fix = No Fee</div>
              <div className="text-[11px] text-slate-400">Zero bench or diagnostic fees</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white font-heading">
                NextFix<span className="text-blue-500">Pro</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              NextFix Pro is an elite hardware restoration laboratory specializing in rapid smartphone screen replacements, MacBook logic board micro-soldering, and gaming console overhauls.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                IPC-7711/7721 Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                Class 100 ESD Cleanroom
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                OEM Sourcing
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#estimator" className="hover:text-blue-400 transition-colors">
                  Instant Price Estimator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services & Turnarounds
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-blue-400 transition-colors">
                  Before & After Visualizer
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-blue-400 transition-colors">
                  4-Step Cleanroom Workflow
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTracker}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Track Repair Status
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQ & Data Security
                </a>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Popular Repairs
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  iPhone 15 & 16 Screen Repair
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  Samsung S24 Ultra Glass Replacement
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  MacBook Liquid Damage & Logic Board
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  PS5 HDMI 2.1 Port Replacement
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  iPad Pro Digitizer & Pencil Calibration
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-blue-400 transition-colors text-left">
                  Emergency Chip-Level Data Recovery
                </button>
              </li>
            </ul>
          </div>

          {/* Lab Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Lab Location
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>742 Evergreen Tech Blvd, Suite 104, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:5558393490" className="text-white font-bold hover:underline">
                  (555) 839-3490
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Mon–Fri: 8am–8pm | Sat–Sun: 9am–7pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026 NextFix Pro Labs. All rights reserved. Apple, iPhone, iPad, and MacBook are registered trademarks of Apple Inc. Samsung is a trademark of Samsung Electronics Co., Ltd. PlayStation is a trademark of Sony Interactive Entertainment Inc. NextFix Pro is an independent repair facility.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex-shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
