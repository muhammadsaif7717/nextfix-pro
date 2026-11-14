"use client";

import React from "react";
import { Phone, Zap, MapPin } from "lucide-react";

interface MobileStickyDockProps {
  onOpenEstimator: () => void;
}

export default function MobileStickyDock({
  onOpenEstimator,
}: MobileStickyDockProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Shop Button */}
        <a
          href="tel:5558393490"
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-emerald-400 hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-tight text-white">
            Call Shop
          </span>
        </a>

        {/* Instant Estimate Primary Button */}
        <button
          onClick={onOpenEstimator}
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/40 transition-all scale-[1.02]"
        >
          <Zap className="w-4 h-4 text-amber-300 fill-amber-300 mb-0.5" />
          <span className="text-[10px] uppercase tracking-tight">
            Estimate
          </span>
        </button>

        {/* Directions Button */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-blue-400 hover:bg-slate-800 transition-colors shadow-sm"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-tight text-white">
            Directions
          </span>
        </a>
      </div>
    </div>
  );
}
