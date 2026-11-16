"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";

export default function WeFixBlogSection() {
  return (
    <section id="blogs" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#e8e8e8] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
            Our Blogs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading wdt-spaced-heading">
            Explore Inspiration and Trends
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#636363] max-w-2xl mx-auto">
            Expert articles, hardware maintenance insights, and device restoration tutorials from our lab.
          </p>
        </div>

        {/* 4 Posts Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between bg-[#fafafa] hover:bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:border-[#EA580C]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col h-full justify-between">
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#e8e8e8]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={350}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute top-3 left-3 bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[11px] text-[#888888] font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#EA580C]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#EA580C]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1F1F1F] font-heading leading-snug group-hover:text-[#EA580C] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#636363] leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>

                {/* Read More */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#EA580C] flex items-center gap-1.5 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
