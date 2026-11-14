"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Package,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  User,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export interface BookingData {
  device: string;
  model: string;
  issue: string;
  price: number;
  turnaround: string;
  isOem: boolean;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: BookingData | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialData,
}: BookingModalProps) {
  const [serviceType, setServiceType] = useState<"walkin" | "mailin">("walkin");
  const [date, setDate] = useState("Today");
  const [timeSlot, setTimeSlot] = useState("11:30 AM (Next Available)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dataPreference, setDataPreference] = useState<"locked" | "test">("locked");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `NFX-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback if canvas is not ready
    }
  };

  const deviceName = initialData?.model || "iPhone 15 Pro";
  const issueName = initialData?.issue || "Cracked Screen Replacement";
  const price = initialData?.price || 129;
  const turnaround = initialData?.turnaround || "25–35 Mins";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isSubmitted ? "Appointment Confirmed!" : "Book Free In-Store Diagnostic"}
              </h3>
              <p className="text-xs text-slate-400">
                {isSubmitted
                  ? "Parts reserved in lab. Show this ticket upon arrival."
                  : "Zero upfront fees • Fast-track queue priority"}
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

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Selected Hardware Summary Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase font-bold text-blue-400">
                    Configured Device & Repair
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {deviceName} • {issueName}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-orange-400">
                      <Clock className="w-3 h-3" /> {turnaround}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400">Lifetime Warranty</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Est. Cost</span>
                  <span className="text-xl font-black text-white font-heading">
                    ${price}
                  </span>
                </div>
              </div>

              {/* Service Type Toggle (In-Store vs Mail-In) */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Service Method:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType("walkin")}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all ${
                      serviceType === "walkin"
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>In-Store Walk-In Lab</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType("mailin")}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all ${
                      serviceType === "mailin"
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Package className="w-4 h-4 text-orange-400" />
                    <span>Express Mail-In Box</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Preferred Day
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="Today">Today (Fast-Track Queue)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="In 2 Days">In 2 Days</option>
                    <option value="This Weekend">This Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Arrival Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="11:30 AM (Next Available)">11:30 AM (Next Available)</option>
                    <option value="1:00 PM – 2:00 PM">1:00 PM – 2:00 PM</option>
                    <option value="3:00 PM – 4:00 PM">3:00 PM – 4:00 PM</option>
                    <option value="5:30 PM – 6:30 PM (Evening)">5:30 PM – 6:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Your Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-500"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Cell Phone # (for SMS updates)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address (for Lifetime Warranty Receipt)"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Data Privacy Preference */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict Zero-Touch Data Guarantee:</span>
                </div>
                <div className="flex gap-4 text-xs text-slate-400">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="dataprivacy"
                      checked={dataPreference === "locked"}
                      onChange={() => setDataPreference("locked")}
                      className="text-blue-600 focus:ring-0"
                    />
                    <span>Keep passcode locked (zero access)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="dataprivacy"
                      checked={dataPreference === "test"}
                      onChange={() => setDataPreference("test")}
                      className="text-blue-600 focus:ring-0"
                    />
                    <span>Provide passcode for 30-pt sensor test</span>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional: Any notes or symptoms (e.g. dropped in salt water, intermittent touch)"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Confirm & Reserve OEM Parts ($0 Upfront)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Fast-Track Diagnostic Reserved
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  We&apos;re Ready For You, {fullName || "Customer"}!
                </h3>
                <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                  A confirmation SMS and receipt have been dispatched to {phone || "your phone"}. Genuine OEM components for your {deviceName} have been pulled and staged.
                </p>
              </div>

              {/* Confirmation Ticket Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border-2 border-dashed border-blue-500/50 max-w-sm mx-auto text-left space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400">TICKET #</span>
                  <span className="text-base font-black text-blue-400 font-mono">
                    {ticketId}
                  </span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p><strong>Device:</strong> {deviceName}</p>
                  <p><strong>Service:</strong> {issueName}</p>
                  <p><strong>When:</strong> {date} @ {timeSlot}</p>
                  <p><strong>Location:</strong> 742 Evergreen Tech Blvd, SF</p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Amount Due:</span>
                  <span className="text-emerald-400 font-bold">${price} (Upon Pickup)</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
