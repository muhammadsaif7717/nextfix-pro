"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextFixLogo from "@/components/NextFixLogo";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Search,
} from "lucide-react";

interface WeFixNavbarProps {
  onOpenQuote: () => void;
  onOpenTracker: () => void;
}

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "estimator", label: "Calculator" },
  { id: "options", label: "Repairs" },
  { id: "reviews", label: "Reviews" },
  { id: "blogs", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export default function WeFixNavbar({
  onOpenQuote,
  onOpenTracker,
}: WeFixNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic Scroll Spy for active navigation section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (isNavigatingRef.current) return;

      // 1. Top of page -> Home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // 2. Bottom of page -> Contact
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      if (scrollPos >= scrollHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // 3. Middle sections: check offset
      const sectionOffset = 140;
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler on click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

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
      const navOffset = 80;
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
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Sleek Translucent Frosted Glass Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3"
            : "bg-slate-950/40 backdrop-blur-md border-b border-white/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo (Inverted for Dark Frosted Surface) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-xl flex-shrink-0"
            aria-label="NextFix Pro Home"
          >
            <NextFixLogo size="md" inverted={true} />
          </a>

          {/* Desktop Nav Links (Clean, Centered, No Jitter) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative py-1.5 transition-colors duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Luminous Sliding Active Underglow Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            {/* Quick Track Status Button */}
            <button
              onClick={onOpenTracker}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <Search className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Track Ticket</span>
            </button>

            {/* High-Converting Luxury Book Repair CTA */}
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 min-h-[42px] rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <span>Book Repair</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Compact CTA & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-bold bg-[#10B981] hover:bg-[#059669] text-white sm:hidden shadow-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[42px] min-w-[42px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Frosted Glass Aesthetic */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1.5 text-sm">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`py-2.5 px-3.5 rounded-xl border flex items-center justify-between font-semibold transition-all ${
                        isActive
                          ? "bg-[#10B981]/20 border-[#10B981]/40 text-[#34D399] font-bold"
                          : "border-transparent text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-[#34D399]" : "text-slate-500"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <span>Book Priority Repair</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracker();
                  }}
                  className="w-full py-3 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 text-center flex items-center justify-center gap-2"
                >
                  <Search className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Track Repair Ticket</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
