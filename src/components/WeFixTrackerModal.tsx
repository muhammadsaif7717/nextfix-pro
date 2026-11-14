"use client";

import React, { useState } from "react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#e8e8e8] overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#f6f6f6] p-5 sm:p-6 border-b border-[#e8e8e8] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#EF644C] uppercase tracking-wider block">
              Live Hardware Status
            </span>
            <h3 className="text-xl font-bold text-[#1F1F1F] font-heading mt-0.5">
              Track Your Repair
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#e8e8e8] text-[#1f1f1f] hover:bg-[#EF644C] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTicket}
                onChange={(e) => setSearchTicket(e.target.value)}
                placeholder="Enter Ticket # (e.g. NFX-8492)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs sm:text-sm font-mono focus:outline-none focus:border-[#EF644C]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl btn-wefix-primary text-xs font-bold uppercase tracking-wider flex-shrink-0"
              >
                Track
              </button>
            </div>
            <div className="flex gap-2 text-[11px] text-[#888888]">
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
                  className="font-mono text-[#EF644C] hover:underline"
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
                  <span className="text-xs font-mono font-bold text-[#EF644C]">
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
                            ? "bg-[#EF644C] text-white animate-pulse"
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
                              ? "text-[#EF644C]"
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
