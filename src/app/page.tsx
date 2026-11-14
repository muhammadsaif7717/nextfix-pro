"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PriceEstimatorWidget from "@/components/PriceEstimatorWidget";
import ServiceCategories from "@/components/ServiceCategories";
import BeforeAfterVisualizer from "@/components/BeforeAfterVisualizer";
import PrecisionWorkflow from "@/components/PrecisionWorkflow";
import CustomerReviews from "@/components/CustomerReviews";
import LocationAndHours from "@/components/LocationAndHours";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import MobileStickyDock from "@/components/MobileStickyDock";
import TrackRepairModal from "@/components/TrackRepairModal";
import BookingModal, { BookingData } from "@/components/BookingModal";
import { ServiceCategory } from "@/types";

export default function Home() {
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  // Smooth scroll to estimator
  const handleOpenEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trigger booking from Price Estimator
  const handleBookFromEstimator = (details: {
    category: { name: string };
    model: { name: string };
    issue: { name: string };
    isOem: boolean;
    price: number;
    turnaround: string;
  }) => {
    setBookingData({
      device: details.category.name,
      model: details.model.name,
      issue: details.issue.name,
      price: details.price,
      turnaround: details.turnaround,
      isOem: details.isOem,
    });
    setIsBookingOpen(true);
  };

  // Trigger booking from Service Category card
  const handleSelectService = (service: ServiceCategory) => {
    setBookingData({
      device: "Standard Hardware Intake",
      model: service.title,
      issue: service.tagline,
      price: service.startingPrice,
      turnaround: service.turnaroundTime,
      isOem: true,
    });
    setIsBookingOpen(true);
  };

  // Trigger general diagnostic booking
  const handleGeneralBooking = () => {
    setBookingData({
      device: "Smart Device / Laptop / Console",
      model: "Complimentary Cleanroom Diagnostic",
      issue: "Hardware Multi-Point Assessment",
      price: 0,
      turnaround: "Under 30 Mins",
      isOem: true,
    });
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* 1. Top Emergency Bar & Navbar */}
      <Navbar
        onOpenEstimator={handleOpenEstimator}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenBooking={handleGeneralBooking}
      />

      {/* 2. High-Conversion Hero Section */}
      <HeroSection
        onOpenEstimator={handleOpenEstimator}
        onOpenBooking={handleGeneralBooking}
      />

      {/* 3. Interactive Repair Price Estimator Widget (Crucial Conversion Feature) */}
      <PriceEstimatorWidget onBookAppointment={handleBookFromEstimator} />

      {/* 4. Service Categories & Pricing Breakdown */}
      <ServiceCategories onSelectService={handleSelectService} />

      {/* 5. Interactive "Before & After" Repair Visualizer */}
      <BeforeAfterVisualizer onOpenEstimator={handleOpenEstimator} />

      {/* 6. Our 4-Step Precision Workflow */}
      <PrecisionWorkflow onOpenBooking={handleGeneralBooking} />

      {/* 7. Authentic Customer Reviews & Google 5-Star Social Proof */}
      <CustomerReviews />

      {/* 8. Interactive Location, Hours & Walk-In Directions */}
      <LocationAndHours onOpenBooking={handleGeneralBooking} />

      {/* 9. Comprehensive FAQ Accordion */}
      <FaqAccordion />

      {/* 10. Footer */}
      <Footer
        onOpenEstimator={handleOpenEstimator}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

      {/* 11. High-Converting Mobile Bottom Sticky Dock */}
      <MobileStickyDock onOpenEstimator={handleOpenEstimator} />

      {/* Interactive Modals */}
      <TrackRepairModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />
    </main>
  );
}
