"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

interface WeFixNavbarProps {
  onOpenQuote: () => void;
  onOpenTracker: () => void;
}

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "estimator", label: "Price Calculator" },
  { id: "options", label: "Repair Options" },
  { id: "reviews", label: "Testimonials" },
  { id: "blogs", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function WeFixNavbar({
  onOpenQuote,
  onOpenTracker,
}: WeFixNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Prevent scroll-spy from rapidly toggling during programmatic smooth scroll
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic Scroll Spy for active navigation section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If user clicked a nav link and smooth scroll is animating, skip spy
      if (isNavigatingRef.current) return;

      // 1. Top of page -> Home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // 2. Bottom of page -> Contact
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      if (scrollPos >= scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // 3. Middle sections: check top offset with navbar height compensation
      const sectionOffset = 130;
      const currentScroll = window.scrollY + sectionOffset;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (currentScroll >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler on click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    // Lock spy during smooth scroll
    isNavigatingRef.current = true;
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", "#home");
      }
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 85; // Fixed navbar buffer
      const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  // Close modals on Escape key
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      {/* 1. Crisp Corporate Top Bar */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-[#f8f9fa] border-b border-[#e8e8e8] ${
          scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-12 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-[11px] sm:text-xs text-[#636363]">
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

      {/* 2. Solid High-Contrast Main Navigation Bar */}
      <nav
        className={`w-full bg-white border-b transition-all duration-300 ${
          scrolled
            ? "border-[#e0e0e0] shadow-md py-0.5"
            : "border-[#e8e8e8] shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
          {/* Bespoke NextFix Pro Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] rounded-xl flex-shrink-0"
            aria-label="NextFix Pro Home"
          >
            <NextFixLogo size="md" />
          </a>

          {/* Desktop Nav Links - STRICT constant font-bold with sliding layoutId indicator to eliminate jitter */}
          <div className="hidden xl:flex items-center gap-7 2xl:gap-8 text-[15px] font-bold whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative py-2 whitespace-nowrap font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-[#EF644C]"
                      : "text-[#1F1F1F] hover:text-[#EF644C]"
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Smooth Sliding Active Indicator (No layout shift) */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#EF644C] rounded-full shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Search + Get A Quote CTA */}
          <div className="hidden sm:flex items-center gap-3.5 flex-shrink-0">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full bg-[#f6f6f6] hover:bg-[#EF644C] hover:text-white border border-[#e8e8e8] flex items-center justify-center text-[#1f1f1f] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
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
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1f1f1f] hover:bg-[#eaeaea] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Flyout */}
        {searchOpen && (
          <div className="bg-[#fafafa] border-t border-[#e8e8e8] px-4 py-3">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <label htmlFor="search-input" className="sr-only">
                Search
              </label>
              <input
                id="search-input"
                type="text"
                autoFocus
                placeholder="Search repair services, devices or guides..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#e8e8e8] rounded-full focus:outline-none focus:border-[#EF644C]"
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

        {/* Mobile Navigation Drawer with Dynamic Active Highlight */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#e8e8e8] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2 text-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`py-2.5 px-3.5 rounded-xl border flex items-center justify-between font-bold transition-all ${
                      isActive
                        ? "bg-[#EF644C]/10 border-[#EF644C]/30 text-[#EF644C]"
                        : "border-transparent text-[#1F1F1F] hover:bg-[#f6f6f6]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#EF644C]" : "text-[#888888]"
                      }`}
                    />
                  </a>
                );
              })}
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