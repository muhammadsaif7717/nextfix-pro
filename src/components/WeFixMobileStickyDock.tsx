"use client";

import React from "react";
import { Phone, Zap, MapPin } from "lucide-react";

interface WeFixMobileStickyDockProps {
  onOpenQuote: () => void;
}

export default function WeFixMobileStickyDock({
  onOpenQuote,
}: WeFixMobileStickyDockProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-white/95 backdrop-blur-md border-t border-[#e8e8e8] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Shop */}
        <a
          href="tel:18006578963"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] active:bg-[#eaeaea] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#10B981] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-tight">
            Call Shop
          </span>
        </a>

        {/* Get A Quote Primary Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl btn-wefix-primary shadow-md active:scale-95 transition-all"
        >
          <Zap className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[10px] font-black uppercase tracking-tight">
            Get Quote
          </span>
        </button>

        {/* Directions / Location */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] active:bg-[#eaeaea] transition-colors"
        >
          <MapPin className="w-4 h-4 text-[#10B981] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-tight">
            Location
          </span>
        </a>
      </div>
    </div>
  );
}
