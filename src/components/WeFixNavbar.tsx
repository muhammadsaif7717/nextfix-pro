"use client";

import React, { useState, useEffect } from "react";
import NextFixLogo from "@/components/NextFixLogo";
import {
  MapPin,
  Mail,
  Clock,
  Search,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Sparkles,
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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal/drawer on Escape
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Slim Translucent Top Bar (Fades away gracefully on scroll) */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled
            ? "max-h-0 opacity-0 pointer-events-none"
            : "max-h-12 opacity-100 bg-white/70 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-[11px] sm:text-xs text-[#555555]">
          {/* Left info items */}
          <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap overflow-hidden">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>25 Main St, NY 10001</span>
            </span>

            <a
              href="mailto:support@nextfixpro.com"
              className="hidden sm:flex items-center gap-1.5 font-medium hover:text-[#EF644C] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>support@nextfixpro.com</span>
            </a>

            <span className="hidden md:flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#EF644C] flex-shrink-0" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </span>
          </div>

          {/* Right quick track action */}
          <div className="flex items-center gap-4 whitespace-nowrap flex-shrink-0">
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#888888]">
              ⚡ Avg. Screen Repair: 28 Mins
            </span>

            <button
              onClick={onOpenTracker}
              className="text-[#EF644C] font-bold hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded px-1.5 py-0.5 whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Track Ticket</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Glassmorphic Translucent Effect */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-[#e8e8e8]"
            : "bg-white/75 backdrop-blur-lg border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
          {/* Bespoke NextFix Pro Logo */}
          <a
            href="#"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded-xl flex-shrink-0"
            aria-label="NextFix Pro Home"
          >
            <NextFixLogo size="md" />
          </a>

          {/* Desktop Nav Links - STRICT whitespace-nowrap */}
          <div className="hidden xl:flex items-center gap-7 2xl:gap-8 text-[15px] font-bold text-[#1f1f1f] whitespace-nowrap">
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
              className="hover:text-[#EF644C] transition-colors py-1 whitespace-nowrap"
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

          {/* Right Actions: Search + Get A Quote CTA (Phone widget completely removed) */}
          <div className="hidden sm:flex items-center gap-3.5 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#EF644C] hover:text-white border border-[#e8e8e8] flex items-center justify-center text-[#1f1f1f] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* High-Converting Get A Quote Button */}
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 min-h-[44px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex xl:hidden items-center gap-2.5 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 min-h-[40px] rounded-full text-[11px] font-bold uppercase tracking-wider btn-wefix-primary sm:hidden whitespace-nowrap"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-white/80 border border-[#e8e8e8] text-[#1f1f1f] hover:bg-[#f6f6f6] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Flyout */}
        {searchOpen && (
          <div className="bg-white/95 backdrop-blur-md border-t border-[#e8e8e8] px-4 py-3">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <input
                id="search-input"
                type="text"
                autoFocus
                placeholder="Search repair services, devices or guides..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-[#f6f6f6] border border-[#e8e8e8] rounded-full focus:outline-none focus:border-[#EF644C]"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 text-[#888888] hover:text-[#1f1f1f]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-[#e8e8e8] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3 font-bold text-base text-[#1f1f1f]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Price Calculator</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#options"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Repair Options</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Blog</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EF644C] py-2 border-b border-[#f0f0f0] flex items-center justify-between"
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#e8e8e8] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Book A Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracker();
                }}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f6f6f6] text-[#1F1F1F] hover:bg-[#eaeaea] text-center flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Track Repair Status</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}