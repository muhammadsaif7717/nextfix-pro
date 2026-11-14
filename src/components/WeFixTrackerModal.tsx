"use client";

import React, { useState, useEffect } from "react";
import { MOCK_TICKETS } from "@/data/trackerData";
import { TrackingTicket } from "@/types";
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  KeyRound,
} from "lucide-react";

interface WeFixTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeFixTrackerModal({
  isOpen,
  onClose,
}: WeFixTrackerModalProps) {
  const [searchTicket, setSearchTicket] = useState("NFX-8492");
  const [activeTicket, setActiveTicket] = useState<TrackingTicket | null>(
    MOCK_TICKETS["NFX-8492"]
  );
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTicket.trim().toUpperCase();
    if (MOCK_TICKETS[query]) {
      setActiveTicket(MOCK_TICKETS[query]);
      setErrorMsg("");
    } else {
      setErrorMsg(`Ticket "${query}" not found. Try demo: NFX-8492 or NFX-2041`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracker-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#e8e8e8] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#f6f6f6] p-4 sm:p-6 border-b border-[#e8e8e8] flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block">
              Live Hardware Status
            </span>
            <h3 id="tracker-modal-title" className="text-lg sm:text-xl font-bold text-[#1F1F1F] font-heading mt-0.5">
              Track Your Repair
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 min-h-[36px] min-w-[36px] rounded-full bg-white border border-[#e8e8e8] text-[#1f1f1f] hover:bg-[#EA580C] hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto">
          <form onSubmit={handleSearch} className="space-y-2">
            <div className="flex gap-2">
              <label htmlFor="tracker-input" className="sr-only">
                Ticket Number
              </label>
              <input
                id="tracker-input"
                type="text"
                value={searchTicket}
                onChange={(e) => setSearchTicket(e.target.value)}
                placeholder="Enter Ticket # (e.g. NFX-8492)"
                className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs sm:text-sm font-mono focus:outline-none focus:border-[#EA580C]"
              />
              <button
                type="submit"
                className="px-5 py-3 min-h-[44px] rounded-xl btn-wefix-primary text-xs font-bold uppercase tracking-wider flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              >
                Track
              </button>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-[#888888]">
              <span>Demo Tickets:</span>
              {["NFX-8492", "NFX-2041", "NFX-9104"].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setSearchTicket(code);
                    setActiveTicket(MOCK_TICKETS[code]);
                    setErrorMsg("");
                  }}
                  className="font-mono text-[#EA580C] hover:underline px-1 py-0.5 rounded"
                >
                  {code}
                </button>
              ))}
            </div>
          </form>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {activeTicket && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#EA580C]">
                    #{activeTicket.ticketNumber}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#1F1F1F] text-white">
                    {activeTicket.status.toUpperCase()}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1F1F1F] font-heading mt-1">
                  {activeTicket.device}
                </h4>
                <div className="text-xs text-[#636363] mt-0.5">
                  Tech: <strong>{activeTicket.technician}</strong> • Health Score:{" "}
                  <strong className="text-emerald-600">{activeTicket.healthScore}%</strong>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 pt-2">
                {activeTicket.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          step.completed
                            ? "bg-emerald-600 text-white"
                            : step.active
                            ? "bg-[#EA580C] text-white animate-pulse"
                            : "bg-[#e0e0e0] text-[#888888]"
                        }`}
                      >
                        {step.completed ? "✓" : idx + 1}
                      </div>
                      {idx < activeTicket.steps.length - 1 && (
                        <div
                          className={`w-0.5 h-8 ${
                            step.completed ? "bg-emerald-600/40" : "bg-[#e8e8e8]"
                          }`}
                        ></div>
                      )}
                    </div>

                    <div className="flex-1 pb-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-bold ${
                            step.active
                              ? "text-[#EA580C]"
                              : step.completed
                              ? "text-[#1F1F1F]"
                              : "text-[#888888]"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[10px] text-[#888888]">
                          {step.timestamp}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#636363] mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
