"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedReveal from "./AnimatedReveal";

const slides = [
  {
    image: "/images/blog/low-density-luxury-living-sector-22d.jpg",
    alt: "Northwind Estate Low Density Community Architecture",
  },
  {
    image: "/images/blog/luxury-3bhk-4bhk-balcony-living.jpg",
    alt: "Luxury 3 and 4 BHK Balcony Living",
  },
  
  {
    image: "/images/blog/master-bedroom-suite-luxury-interiors.jpg",
    alt: "Master Bedroom Suite Luxury Interiors",
  },
  {
    image: "/images/blog/green-buffers-botanical-parks.jpg",
    alt: "Green Buffers and Botanical Landscaping",
  },
];

export default function ProjectOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section id="overview" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0D3829] uppercase block">
            Project Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Thoughtful Residential Planning in Sector 22D
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            Northwind Estate is designed around lower tower density, generous residential setbacks, and landscaped open spaces along the Yamuna Expressway.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content Only */}
          <AnimatedReveal direction="right" delay={0.1} className="order-1 lg:order-1 lg:col-span-6 space-y-5 text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829] leading-snug">
              Apartment Architecture Focused on Space, Daylight, and Privacy
            </h3>

            <p className="text-sm text-[#2D3C25] leading-relaxed font-light">
              Positioned within Sector 22D, <strong className="text-[#0D3829] font-semibold">Northwind Estate</strong> features oriented residential towers engineered to maximize natural daylight and ventilation. The site master plan maintains wide spacing between buildings to ensure open views and privacy for each home.
            </p>

            <p className="text-sm text-[#2D3C25] leading-relaxed font-light">
              The 3 and 4 BHK layouts clearly delineate entertainment and family living areas from quiet bedroom suites. Deep sit-out balconies provide seamless outdoor connections, complemented by durable UPVC sliding glass doors and dedicated kitchen utility zones.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#2D3C25]">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#0D3829]/10 text-[#0D3829] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong className="font-semibold text-[#0D3829]">Sector 22D Location:</strong> Direct connection to arterial sector roads linking to Yamuna Expressway and regional transit routes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#0D3829]/10 text-[#0D3829] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong className="font-semibold text-[#0D3829]">Low-Density Layout:</strong> 75%+ landscaped open area, perimeter tree buffers, and low-density tower planning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#0D3829]/10 text-[#0D3829] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong className="font-semibold text-[#0D3829]">Durable Specifications:</strong> Vitrified tile flooring, modular kitchen provisions, anti-skid balcony surfaces, and 24×7 multi-tier security.</span>
              </li>
            </ul>
          </AnimatedReveal>

          {/* Right Column: Visual Image Slider */}
          <AnimatedReveal direction="left" delay={0.2} className="order-2 lg:order-2 lg:col-span-6 relative">
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(13,58,41,0.12)] bg-[#F4F1DF] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides Container */}
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                {slides.map((slide, idx) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                ))}

                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0D3829]/70 hover:bg-[#0D3829] text-[#FFFCEC] backdrop-blur-md flex items-center justify-center transition shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0D3829]/70 hover:bg-[#0D3829] text-[#FFFCEC] backdrop-blur-md flex items-center justify-center transition shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#0D3829]/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === currentSlide
                          ? "w-6 bg-[#ACC78C]"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

        </div>

      </div>
    </section>
  );
}


