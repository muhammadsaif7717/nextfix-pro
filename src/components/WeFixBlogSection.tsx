"use client";

import React from "react";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function WeFixBlogSection() {
  const posts = [
    {
      id: 1,
      title: "Expert Laptop Repair: Skilled Technicians Restoring Device",
      desc: "Learn how cleanroom technicians diagnose motherboard short-circuits, test PMIC rails, and rescue water-logged hardware.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
      category: "Laptop Care",
      date: "August 18, 2025",
      author: "Admin",
    },
    {
      id: 2,
      title: "Always Ready On-Site Technical Help",
      desc: "Why immediate action on water spills matters: how ultrasonic chemical baths dissolve corrosive mineral salts before traces erode.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      category: "Diagnostics",
      date: "August 12, 2025",
      author: "Admin",
    },
    {
      id: 3,
      title: "Fixing Technology Right, Every Time",
      desc: "The critical differences between cheap aftermarket copy screens and factory-calibrated OEM panels with 120Hz ProMotion.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
      category: "Screen Repair",
      date: "July 29, 2025",
      author: "Admin",
    },
    {
      id: 4,
      title: "Quick, Reliable Computer Repair Service",
      desc: "Extending your device lifespan: thermal paste maintenance, fan overhaul, and 0-cycle battery calibration tips.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      category: "Hardware",
      date: "July 14, 2025",
      author: "Admin",
    },
  ];

  return (
    <section id="blogs" className="py-16 sm:py-24 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#EF644C] uppercase tracking-widest block mb-2">
            Our Blogs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Explore Inspiration and Trends
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#636363]">
            Expert articles, hardware maintenance insights, and device restoration tutorials from our lab.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#f6f6f6] hover:bg-white border border-[#e8e8e8] hover:border-[#EF644C]/40 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e0e0e0]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={320}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-3 left-3 bg-[#EF644C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-[#888888] mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#EF644C]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#EF644C]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1F1F1F] font-heading group-hover:text-[#EF644C] transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#636363] leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#e8e8e8] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#EF644C] transition-colors uppercase tracking-wider">
                    Read More
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#EF644C] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
