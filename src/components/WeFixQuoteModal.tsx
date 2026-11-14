"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export interface WeFixBookingData {
  device?: string;
  model?: string;
  issue?: string;
  price?: number;
  turnaround?: string;
}

interface WeFixQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: WeFixBookingData | null;
}

export default function WeFixQuoteModal({
  isOpen,
  onClose,
  initialData,
}: WeFixQuoteModalProps) {
  const [device, setDevice] = useState("Smartphone");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDay, setPreferredDay] = useState("Today");
  const [timeSlot, setTimeSlot] = useState("10:00 AM – 11:00 AM");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      if (initialData?.model) {
        setDevice(`${initialData.model} (${initialData.issue || "Diagnostic"})`);
      }
    }
  }, [isOpen, initialData]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `WFX-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNumber(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {}
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#e8e8e8] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#f6f6f6] p-4 sm:p-6 border-b border-[#e8e8e8] flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider block">
              NextFix Pro Service Appointment
            </span>
            <h3 id="quote-modal-title" className="text-lg sm:text-xl font-bold text-[#1F1F1F] font-heading mt-0.5">
              {isSubmitted ? "Appointment Confirmed!" : "Book A Device Repair"}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 min-h-[36px] min-w-[36px] rounded-full bg-white border border-[#e8e8e8] text-[#1f1f1f] hover:bg-[#10B981] hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="quote-device" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                  Device & Required Service
                </label>
                <input
                  id="quote-device"
                  type="text"
                  required
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  placeholder="e.g. iPhone 15 Pro cracked screen or MacBook water spill"
                  className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs sm:text-sm focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quote-day" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                    Preferred Date
                  </label>
                  <select
                    id="quote-day"
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                  >
                    <option value="Today">Today (Fast-Track)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-slot" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                    Arrival Window
                  </label>
                  <select
                    id="quote-slot"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                  >
                    <option value="10:00 AM – 11:00 AM">10:00 AM – 11:00 AM</option>
                    <option value="1:00 PM – 2:00 PM">1:00 PM – 2:00 PM</option>
                    <option value="3:30 PM – 4:30 PM">3:30 PM – 4:30 PM</option>
                    <option value="6:00 PM – 7:00 PM">6:00 PM – 7:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quote-name" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-email" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-3 min-h-[44px] rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div>
                <label htmlFor="quote-notes" className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider block mb-1.5">
                  Issue Details (Optional)
                </label>
                <textarea
                  id="quote-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your device symptom or drop circumstances..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] text-[#1F1F1F] text-xs focus:outline-none focus:border-[#10B981]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 min-h-[46px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-primary shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                >
                  <span>Confirm Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#888888]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                <span>Zero upfront fees • Free diagnostic evaluation</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-[#1F1F1F] font-heading">
                We&apos;ve Scheduled Your Repair!
              </h4>

              <p className="text-xs text-[#636363] max-w-sm mx-auto">
                Thank you, {fullName || "valued customer"}. Your reservation has been logged. Our master technician desk is preparing genuine OEM components for your {device}.
              </p>

              <div className="p-4 rounded-xl bg-[#f6f6f6] border border-[#e8e8e8] max-w-xs mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between border-b border-[#e8e8e8] pb-1.5 mb-1.5 font-bold">
                  <span className="text-[#888888]">APPOINTMENT TICKET</span>
                  <span className="text-[#10B981] font-mono">{ticketNumber}</span>
                </div>
                <div><strong>When:</strong> {preferredDay} ({timeSlot})</div>
                <div><strong>Location:</strong> 25 Main St, NY 10001</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-3 min-h-[44px] rounded-full text-xs font-bold uppercase tracking-wider btn-wefix-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
