"use client";

import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full bg-white z-40 relative">
      {/* 1. WeFix Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-[#e8e8e8] text-xs text-[#636363] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left contact info */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium whitespace-nowrap overflow-hidden">
            <span className="flex items-center gap-1.5 text-[#636363] whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>25 Main St, NY 10001</span>
            </span>

            <a
              href="mailto:example@gmail.com"
              className="hidden sm:flex items-center gap-1.5 text-[#636363] hover:text-[#EF644C] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded"
            >
              <Mail className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>example@gmail.com</span>
            </a>

            <span className="hidden md:flex items-center gap-1.5 text-[#636363] whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </span>
          </div>

          {/* Right social info & quick actions */}
          <div className="flex items-center gap-4 text-xs font-medium whitespace-nowrap flex-shrink-0">
            <span className="text-[#1f1f1f] font-semibold hidden md:inline">
              Follow Us:
            </span>
            <div className="hidden sm:flex items-center gap-2 text-[#636363] whitespace-nowrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Fb
              </a>
              <span>/</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter X"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Tw
              </a>
              <span>/</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                In
              </a>
              <span>/</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#EF644C] transition-colors font-semibold"
              >
                Li
              </a>
            </div>

            <div className="h-3 w-[1px] bg-[#d5d5d5] hidden sm:block"></div>

            <button
              onClick={onOpenTracker}
              className="text-[#EF644C] font-bold hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded px-1.5 py-0.5 whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Track Repair</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`bg-white border-b border-[#e8e8e8] transition-all duration-300 sticky top-0 z-30 ${
          scrolled ? "shadow-md py-1" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
          {/* Brand Logo (Exact WeFix Style) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded-lg p-1 flex-shrink-0"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#EF644C] flex items-center justify-center text-white shadow-md group-hover:bg-[#1f1f1f] transition-colors duration-300 flex-shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="whitespace-nowrap">
              <div className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight font-heading leading-tight">
                WeFix<span className="text-[#EF644C]">.</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-[#888888] tracking-wider uppercase">
                Smart Gadget Repair
              </div>
            </div>
          </a>

          {/* Desktop Nav Links - with STRICT whitespace-nowrap */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[15px] font-bold text-[#1f1f1f] whitespace-nowrap">
            <a
              href="#home"
              className="text-[#EF644C] hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#estimator"
              className="hover:text-[#EF644C] transition-colors py-1 text-[#EF644C] whitespace-nowrap"
            >
              Price Calculator
            </a>
            <a
              href="#options"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Repair Options
            </a>
            <a
              href="#reviews"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Testimonials
            </a>
            <a
              href="#blogs"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Right Action Column */}
          <div className="hidden sm:flex items-center gap-4 2xl:gap-5 flex-shrink-0">
            {/* Phone Widget with STRICT whitespace-nowrap */}
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <div className="w-10 h-10 rounded-full bg-[#f6f6f6] border border-[#e8e8e8] flex items-center justify-center text-[#EF644C] flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left whitespace-nowrap">
                <span className="block text-[11px] font-medium text-[#888888] whitespace-nowrap">
                  Ask Questions?
                </span>
                <a
                  href="tel:18006578963"
                  className="text-sm font-extrabold text-[#1f1f1f] hover:text-[#EF644C] transition-colors font-heading whitespace-nowrap inline-block"
                >
                  +1 (800) 657-8963
                </a>
              </div>
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full hover:bg-[#f6f6f6] flex items-center justify-center text-[#1f1f1f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Get A Quote Button */}
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 min-h-[44px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 min-h-[40px] rounded-full text-[11px] font-bold uppercase tracking-wider btn-wefix-primary sm:hidden whitespace-nowrap"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-lg bg-[#f6f6f6] text-[#1f1f1f] hover:bg-[#eaeaea] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
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
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <input
                id="search-input"
                type="text"
                autoFocus
                placeholder="Search repair services, devices or guides..."
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#d5d5d5] text-sm text-[#1f1f1f] focus:outline-none focus:border-[#EF644C]"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2.5 min-h-[40px] rounded-lg bg-[#1f1f1f] text-white text-xs font-bold uppercase whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#e8e8e8] px-4 pt-3 pb-6 space-y-2 shadow-xl">
            <div className="flex flex-col space-y-1 font-bold text-sm text-[#1f1f1f]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] text-[#EF644C] min-h-[44px] whitespace-nowrap"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] text-[#EF644C] min-h-[44px] whitespace-nowrap"
              >
                <span>Price Calculator</span>
                <ChevronRight className="w-4 h-4 text-[#EF644C]" />
              </a>
              <a
                href="#options"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
              >
                <span>Repair Options</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
              >
                <span>Our Blogs</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6f6f6] min-h-[44px] whitespace-nowrap"
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
                className="w-full py-3 min-h-[44px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary text-center block whitespace-nowrap"
              >
                Get A Quote
              </button>
              <a
                href="tel:18006578963"
                className="w-full py-3 min-h-[44px] rounded-full text-xs font-bold text-[#1f1f1f] bg-[#f6f6f6] border border-[#e8e8e8] text-center flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#EF644C]" />
                <span>Call +1 (800) 657-8963</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
