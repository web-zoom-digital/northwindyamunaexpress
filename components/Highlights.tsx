"use client";

import React from "react";
import Image from "next/image";
import AnimatedReveal from "./AnimatedReveal";

export default function Highlights() {
  const highlightImages = [
    {
      image: "/images/blog/yamuna-expressway-investment-growth.jpg",
      alt: "Sector 22D Prime Yamuna Expressway Location",
    },
    {
      image: "/images/blog/metro-connectivity-jewar-delhi-ncr.jpg",
      alt: "Noida International Airport Jewar Connectivity",
    },
    {
      image: "/images/blog/green-buffers-botanical-parks.jpg",
      alt: "Low-Density Green Buffers and Botanical Parks",
    },
    {
      image: "/images/amenities/clubhouse.jpg",
      alt: "Modern Clubhouse and Resort Style Amenities",
    },
    {
      image: "/images/amenities/security-gate.jpg",
      alt: "24x7 Multi-Tier Gated Security System",
    },
    {
      image: "/images/blog/yeida-master-plan-infrastructure.jpg",
      alt: "YEIDA Master Plan and Future-Ready Infrastructure",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-[#F4F1DF] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
            Project Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Key Architectural and Planning Highlights
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            From low-density tower footprints and landscaped walking promenades to multi-tier gated security, explore the foundational features of Northwind Estate.
          </p>
        </AnimatedReveal>

        {/* Highlight Grid: Pure Image Cards with Smooth Transitions (2 per row on mobile) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {highlightImages.map((item, idx) => (
            <AnimatedReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
              <div className="bg-[#FFFCEC] rounded-2xl overflow-hidden transition-all duration-500 group h-full shadow-[0_4px_20px_rgba(13,58,41,0.08)] hover:shadow-[0_16px_36px_rgba(13,58,41,0.16)] border border-[#0D3829]/5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D3829]/5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}



