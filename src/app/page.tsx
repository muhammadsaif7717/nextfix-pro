"use client";

import React, { useState } from "react";
import WeFixNavbar from "@/components/WeFixNavbar";
import WeFixHeroSlider from "@/components/WeFixHeroSlider";
import WeFixIdentitySection from "@/components/WeFixIdentitySection";
import WeFixQualityRepairs from "@/components/WeFixQualityRepairs";
import NextFixBeforeAfter from "@/components/NextFixBeforeAfter";
import WeFixSafeguardSection from "@/components/WeFixSafeguardSection";
import WeFixRepairOptions from "@/components/WeFixRepairOptions";
import NextFixWorkflow from "@/components/NextFixWorkflow";
import WeFixMilestoneSection from "@/components/WeFixMilestoneSection";
import WeFixTestimonialSection from "@/components/WeFixTestimonialSection";
import NextFixLocation from "@/components/NextFixLocation";
import NextFixFAQ from "@/components/NextFixFAQ";
import WeFixBlogSection from "@/components/WeFixBlogSection";
import WeFixFooter from "@/components/WeFixFooter";
import WeFixMobileStickyDock from "@/components/WeFixMobileStickyDock";
import WeFixQuoteModal, { WeFixBookingData } from "@/components/WeFixQuoteModal";
import WeFixTrackerModal from "@/components/WeFixTrackerModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [trackerModalOpen, setTrackerModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<WeFixBookingData | null>(null);

  const handleOpenGeneralQuote = () => {
    setBookingData({
      device: "Smart Device / Gadget",
      issue: "General Repair Diagnostic",
      price: 59,
      turnaround: "Under 30 Mins",
    });
    setQuoteModalOpen(true);
  };

  const handleSelectRepairTitle = (repairTitle: string) => {
    setBookingData({
      device: repairTitle,
      issue: "Hardware Restoration",
      price: 79,
      turnaround: "Same-Day",
    });
    setQuoteModalOpen(true);
  };

  const handleEstimatorBooking = (details: {
    category: { name: string };
    model: { name: string };
    issue: { name: string };
    price: number;
    turnaround: string;
  }) => {
    setBookingData({
      device: details.category.name,
      model: details.model.name,
      issue: details.issue.name,
      price: details.price,
      turnaround: details.turnaround,
    });
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#636363] overflow-x-hidden w-full max-w-full pb-20 lg:pb-0 pt-0">
      {/* 1. Header & Navigation (Light Mode) */}
      <WeFixNavbar
        onOpenQuote={handleOpenGeneralQuote}
        onOpenTracker={() => setTrackerModalOpen(true)}
      />

      {/* 2. Hero Section (Split CRO Layout with Live Lab Bench & No Buttons) */}
      <WeFixHeroSlider
        onBookRepair={handleOpenGeneralQuote}
        onGetQuote={handleOpenGeneralQuote}
      />

      {/* 3. Our Identity / Trusted Solutions Section */}
      <WeFixIdentitySection />

      {/* 4. Issues We Solve / Quality Repairs Section */}
      <WeFixQualityRepairs onSelectRepair={handleSelectRepairTitle} />

      {/* 5. Interactive Before & After Repair Comparison Slider */}
      <NextFixBeforeAfter />

      {/* 6. Safeguard / Superior Safety (Hotspot & Interactive Price Estimator) */}
      <WeFixSafeguardSection onBookAppointment={handleEstimatorBooking} />

      {/* 7. Service List / Discover Our Repair Options */}
      <WeFixRepairOptions onSelectOption={handleSelectRepairTitle} />

      {/* 8. Our 4-Step Precision Workflow */}
      <NextFixWorkflow />

      {/* 9. Milestone / Reached New Heights In Repair Services */}
      <WeFixMilestoneSection onBookRepair={handleOpenGeneralQuote} />

      {/* 10. Testimonials / 6 Verified Review Cards */}
      <WeFixTestimonialSection />

      {/* 11. Store Hours, Walk-In Directions & Mail-In Repair */}
      <NextFixLocation onOpenQuote={handleOpenGeneralQuote} />

      {/* 12. Frequently Asked Questions (FAQ Accordion) */}
      <NextFixFAQ />

      {/* 13. Our Blogs / Explore Inspiration and Trends */}
      <WeFixBlogSection />

      {/* 14. Footer (4-Column Layout with Counters & Newsletter) */}
      <WeFixFooter />

      {/* 15. Mobile Bottom Sticky Dock */}
      <WeFixMobileStickyDock onOpenQuote={handleOpenGeneralQuote} />

      {/* Modals */}
      <WeFixQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={bookingData}
      />

      <WeFixTrackerModal
        isOpen={trackerModalOpen}
        onClose={() => setTrackerModalOpen(false)}
      />
    </main>
  );
}