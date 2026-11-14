"use client";

import React, { useState } from "react";
import WeFixNavbar from "@/components/WeFixNavbar";
import WeFixHeroSlider from "@/components/WeFixHeroSlider";
import WeFixIdentitySection from "@/components/WeFixIdentitySection";
import WeFixQualityRepairs from "@/components/WeFixQualityRepairs";
import WeFixRepairOptions from "@/components/WeFixRepairOptions";
import WeFixSafeguardSection from "@/components/WeFixSafeguardSection";
import WeFixMilestoneSection from "@/components/WeFixMilestoneSection";
import WeFixTestimonialSection from "@/components/WeFixTestimonialSection";
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
    <main className="min-h-screen bg-white text-[#636363] overflow-x-hidden min-w-[360px] pb-16 lg:pb-0 pt-[116px]">
      {/* 1. Header & Navigation (Light Mode) */}
      <WeFixNavbar
        onOpenQuote={handleOpenGeneralQuote}
        onOpenTracker={() => setTrackerModalOpen(true)}
      />

      {/* 2. Hero Carousel Slider (Exact WeFix 3-Slide Showcase) */}
      <WeFixHeroSlider
        onBookRepair={handleOpenGeneralQuote}
        onGetQuote={handleOpenGeneralQuote}
      />

      {/* 3. Our Identity / Trusted Solutions Section */}
      <WeFixIdentitySection />

      {/* 4. Issues We Solve / Quality Repairs Section */}
      <WeFixQualityRepairs onSelectRepair={handleSelectRepairTitle} />

      {/* 5. Safeguard / Superior Safety (Hotspot & Interactive Price Estimator) */}
      <WeFixSafeguardSection onBookAppointment={handleEstimatorBooking} />

      {/* 6. Service List / Discover Our Repair Options */}
      <WeFixRepairOptions onSelectOption={handleSelectRepairTitle} />

      {/* 7. Milestone / Reached New Heights In Repair Services */}
      <WeFixMilestoneSection onBookRepair={handleOpenGeneralQuote} />

      {/* 8. Testimonial / User Opinions */}
      <WeFixTestimonialSection />

      {/* 9. Our Blogs / Explore Inspiration and Trends */}
      <WeFixBlogSection />

      {/* 10. Footer (Exact WeFix 4-Column Layout with Counters & Newsletter) */}
      <WeFixFooter />

      {/* 11. Mobile Bottom Sticky Dock */}
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
