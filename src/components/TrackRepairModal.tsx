"use client";

import React, { useState } from "react";
import { MOCK_TICKETS } from "@/data/trackerData";
import { TrackingTicket } from "@/types";
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  Cpu,
  KeyRound,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface TrackRepairModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackRepairModal({
  isOpen,
  onClose,
}: TrackRepairModalProps) {
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
      setErrorMsg(
        `Ticket "${query}" not found in active queue. Try demo tickets: NFX-8492, NFX-2041, or NFX-9104.`
      );
    }
  };

  const selectDemoTicket = (code: string) => {
    setSearchTicket(code);
    setActiveTicket(MOCK_TICKETS[code]);
    setErrorMsg("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Live Repair Status Tracker
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  REAL-TIME
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Track your hardware through each cleanroom diagnostic station
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-2">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTicket}
                  onChange={(e) => setSearchTicket(e.target.value)}
                  placeholder="Enter Ticket # (e.g. NFX-8492)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all"
              >
                Track Now
              </button>
            </div>

            {/* Quick Demo Tickets */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span>Try Demo Tickets:</span>
              {["NFX-8492", "NFX-2041", "NFX-9104"].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => selectDemoTicket(code)}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 font-mono text-[11px] transition-colors"
                >
                  {code}
                </button>
              ))}
            </div>
          </form>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {activeTicket && (
            <div className="space-y-6">
              {/* Ticket Overview Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] font-mono text-blue-400 font-bold">
                      Ticket #{activeTicket.ticketNumber}
                    </div>
                    <div className="text-base font-bold text-white">
                      {activeTicket.device}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-black uppercase px-2.5 py-1 rounded-full border ${
                        activeTicket.status === "ready"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                          : activeTicket.status === "testing"
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                          : "bg-orange-500/20 text-orange-400 border-orange-500/40"
                      }`}
                    >
                      ● {activeTicket.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-2 border-t border-slate-800 text-slate-400">
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">
                      Customer
                    </span>
                    <span className="text-slate-200 font-medium">
                      {activeTicket.customerName}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">
                      Assigned Tech
                    </span>
                    <span className="text-slate-200 font-medium">
                      {activeTicket.technician}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400">
                      Diagnostic Health Score
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {activeTicket.healthScore} / 100
                    </span>
                  </div>
                </div>
              </div>

              {/* Locker pickup code banner if ready */}
              {activeTicket.readyForPickup && activeTicket.lockerCode && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-300">
                        Ready For Contactless Pickup
                      </div>
                      <div className="text-sm font-black text-white font-mono">
                        Pickup Code: {activeTicket.lockerCode}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-1 rounded bg-emerald-500 text-slate-950">
                    Smart Locker #7
                  </span>
                </div>
              )}

              {/* Progress Stepper */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hardware Processing Stages:
                </div>

                <div className="space-y-4">
                  {activeTicket.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      {/* Step Icon & Vertical Line */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            step.completed
                              ? "bg-emerald-500 text-slate-950"
                              : step.active
                              ? "bg-blue-600 text-white ring-4 ring-blue-500/20 animate-pulse"
                              : "bg-slate-800 text-slate-500"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            idx + 1
                          )}
                        </div>
                        {idx < activeTicket.steps.length - 1 && (
                          <div
                            className={`w-0.5 h-12 ${
                              step.completed ? "bg-emerald-500/40" : "bg-slate-800"
                            }`}
                          ></div>
                        )}
                      </div>

                      {/* Step Text */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`text-xs sm:text-sm font-bold ${
                              step.active
                                ? "text-blue-400"
                                : step.completed
                                ? "text-white"
                                : "text-slate-500"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {step.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parts Installed */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <span className="font-bold text-slate-300 block mb-1.5 uppercase text-[10px] tracking-wider">
                  Verified Replacement Hardware:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTicket.partsReplaced.map((part, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-300"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
