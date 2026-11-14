"use client";

import React, { useState, useEffect } from "react";
import {
  Wrench,
  Phone,
  Clock,
  Search,
  Sparkles,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  MapPin,
} from "lucide-react";

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onOpenBooking: () => void;
}

export default function Navbar({
  onOpenEstimator,
  onOpenTracker,
  onOpenBooking,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check store hours (simulated open status)
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    // Shop open 8:00 AM to 8:00 PM (20:00)
    setIsOpenNow(hour >= 8 && hour < 20);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg">
      {/* 1. Top Emergency Bar & Marquee Ticker */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Live Marquee Ticker */}
          <div className="flex items-center gap-3 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 whitespace-nowrap animate-pulse">
              ⚡ LIVE LAB DISPATCH
            </span>
            <div className="overflow-hidden relative whitespace-nowrap w-full md:w-[480px] lg:w-[600px]">
              <div className="animate-marquee inline-block font-medium text-slate-200">
                ⚡ Walk-ins Welcome • Average Screen Repair Time: 28 Minutes • Lifetime Parts Warranty • 100% Data Privacy Guaranteed • Certified OEM Hardware • Free 30-Point Diagnostic Check •
              </div>
            </div>
          </div>

          {/* Quick Info & Store Status */}
          <div className="hidden sm:flex items-center gap-5 text-xs">
            {/* Live Open Status */}
            <div className="flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isOpenNow ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isOpenNow ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                ></span>
              </span>
              <span className={isOpenNow ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {isOpenNow ? "Open Now until 8:00 PM" : "Opens Tomorrow 8:00 AM"}
              </span>
            </div>

            <div className="h-3 w-[1px] bg-slate-700"></div>

            {/* Address Peek */}
            <a
              href="#location"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>742 Evergreen Tech Blvd</span>
            </a>

            <div className="h-3 w-[1px] bg-slate-700"></div>

            {/* Hotline Phone */}
            <a
              href="tel:5558393490"
              className="flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(555) 839-3490</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Wrench className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 border-2 border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  NextFix<span className="text-blue-500">Pro</span>
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  LABS
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 -mt-0.5 tracking-wide">
                Certified Device & Logic Board Repair
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
            <a href="#estimator" className="hover:text-blue-400 transition-colors">
              Instant Estimator
            </a>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Services & Pricing
            </a>
            <a href="#before-after" className="hover:text-blue-400 transition-colors">
              Before & After
            </a>
            <a href="#workflow" className="hover:text-blue-400 transition-colors">
              4-Step Process
            </a>
            <a href="#reviews" className="hover:text-blue-400 transition-colors">
              Reviews (4.9★)
            </a>
            <a href="#location" className="hover:text-blue-400 transition-colors">
              Location & Mail-In
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Track Repair Button */}
            <button
              onClick={onOpenTracker}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-slate-600"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>Track Repair</span>
            </button>

            {/* High-Contrast Instant Repair Estimate Button */}
            <button
              onClick={onOpenEstimator}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Instant Repair Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenTracker}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white sm:hidden"
              title="Track Repair"
            >
              <Search className="w-5 h-5 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Estimate</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md"
              >
                <Clock className="w-4 h-4" />
                <span>Book Diagnostic</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1 pt-2 border-t border-slate-800 font-medium text-sm text-slate-200">
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-blue-400 font-semibold"
              >
                <span>⚡ Instant Price Estimator</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Services & Pricing Grid</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Before & After Visualizer</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Our 4-Step Lab Workflow</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Customer Reviews (4.9★)</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Store Hours & Mail-In Repair</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href="tel:5558393490"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-800 text-emerald-400 font-bold text-sm border border-emerald-500/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop Hotline: (555) 839-3490</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
