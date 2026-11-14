"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  Menu,
  X,
  Wrench,
  Clock,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface WeFixNavbarProps {
  onOpenQuote: () => void;
  onOpenTracker: () => void;
}

export default function WeFixNavbar({
  onOpenQuote,
  onOpenTracker,
}: WeFixNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white z-40 relative">
      {/* 1. WeFix Top Bar (Light gray background) */}
      <div className="bg-[#f6f6f6] border-b border-[#e8e8e8] text-xs text-[#636363] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-[#636363]">
              <MapPin className="w-3.5 h-3.5 text-[#EF644C]" />
              <span>25 Main St, NY 10001</span>
            </span>

            <a
              href="mailto:example@gmail.com"
              className="flex items-center gap-1.5 text-[#636363] hover:text-[#EF644C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#EF644C]" />
              <span>example@gmail.com</span>
            </a>

            <span className="hidden lg:flex items-center gap-1.5 text-[#636363]">
              <Clock className="w-3.5 h-3.5 text-[#EF644C]" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </span>
          </div>

          {/* Right social info & quick actions */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-[#1f1f1f] font-semibold hidden sm:inline">
              Follow Us:
            </span>
            <div className="flex items-center gap-3 text-[#636363]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Fb
              </a>
              <span>/</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Tw
              </a>
              <span>/</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                In
              </a>
              <span>/</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Li
              </a>
            </div>

            <div className="h-3 w-[1px] bg-[#d5d5d5] hidden sm:block"></div>

            <button
              onClick={onOpenTracker}
              className="text-[#EF644C] font-bold hover:underline flex items-center gap-1"
            >
              <Search className="w-3 h-3" />
              <span>Track Repair</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="border-b border-[#e8e8e8] bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Logo (Exact WeFix Style) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EF644C] flex items-center justify-center text-white shadow-md group-hover:bg-[#1f1f1f] transition-colors duration-300">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight font-heading">
                WeFix<span className="text-[#EF644C]">.</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-[#888888] tracking-wider uppercase -mt-1">
                Smart Gadget Repair
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-[#1f1f1f]">
            <a
              href="#home"
              className="text-[#EF644C] hover:text-[#EF644C] transition-colors relative py-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#estimator"
              className="hover:text-[#EF644C] transition-colors py-1 text-[#EF644C]"
            >
              Price Calculator
            </a>
            <a
              href="#options"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              Options
            </a>
            <a
              href="#reviews"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              Testimonials
            </a>
            <a
              href="#blogs"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-[#EF644C] transition-colors py-1"
            >
              Contact
            </a>
          </div>

          {/* Right Action Column */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Phone Widget */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f6f6f6] border border-[#e8e8e8] flex items-center justify-center text-[#EF644C]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-medium text-[#888888]">
                  Ask Questions?
                </span>
                <a
                  href="tel:18006578963"
                  className="text-sm font-extrabold text-[#1f1f1f] hover:text-[#EF644C] transition-colors font-heading"
                >
                  +1 (800) 657-8963
                </a>
              </div>
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full hover:bg-[#f6f6f6] flex items-center justify-center text-[#1f1f1f] transition-colors"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Get A Quote Button */}
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-sm"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider btn-wefix-primary sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#f6f6f6] text-[#1f1f1f] hover:bg-[#eaeaea] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Flyout */}
        {searchOpen && (
          <div className="bg-[#f6f6f6] border-b border-[#e8e8e8] px-4 py-3">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Search repair services, devices or guides..."
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#d5d5d5] text-sm text-[#1f1f1f] focus:outline-none focus:border-[#EF644C]"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#1f1f1f] text-white text-xs font-bold uppercase"
              >
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer (100% Light Mode & Responsive) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e8e8e8] px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1 font-bold text-sm text-[#1f1f1f]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6] text-[#EF644C]"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6] text-[#EF644C]"
              >
                <span>Instant Price Calculator</span>
                <ChevronRight className="w-4 h-4 text-[#EF644C]" />
              </a>
              <a
                href="#options"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>Repair Options</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>User Opinions</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>Our Blogs</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#f6f6f6]"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#e8e8e8] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary text-center block"
              >
                Get A Quote
              </button>
              <a
                href="tel:18006578963"
                className="w-full py-3 rounded-full text-xs font-bold text-[#1f1f1f] bg-[#f6f6f6] border border-[#e8e8e8] text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#EF644C]" />
                <span>Call +1 (800) 657-8963</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
