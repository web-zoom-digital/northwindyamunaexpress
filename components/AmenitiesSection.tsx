"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

interface AmenityImageItem {
  id: string;
  image: string;
  alt: string;
}

const amenityImages: AmenityImageItem[] = [
  {
    id: "swimming-pool",
    image: "/images/amenities/swimming-pool.jpg",
    alt: "Swimming Pool & Resort Deck",
  },
  {
    id: "fitness-gym",
    image: "/images/amenities/fitness-gym.jpg",
    alt: "Modern Fitness Gymnasium",
  },
  {
    id: "zen-gardens",
    image: "/images/amenities/zen-gardens.jpg",
    alt: "Landscaped Zen & Botanical Gardens",
  },
  {
    id: "clubhouse",
    image: "/images/amenities/clubhouse.jpg",
    alt: "Architectural Clubhouse & Lounge",
  },
  {
    id: "kids-play",
    image: "/images/amenities/kids-play.jpg",
    alt: "Children's Adventure Play Area",
  },
  {
    id: "jogging-track",
    image: "/images/blog/green-buffers-botanical-parks.jpg",
    alt: "Botanical Jogging Circuit & Green Buffers",
  },
  {
    id: "security",
    image: "/images/amenities/security-gate.jpg",
    alt: "24x7 Multi-Tier Smart Security Gatehouse",
  },
];

export default function AmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openLeadModal } = useLeadModal();

  // Touch swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = amenityImages.length;
  const currentItem = amenityImages[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic 2-Second Transition Loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Remaining preview images starting after currentIndex
  const getPreviewSlides = () => {
    const previewList: { item: AmenityImageItem; originalIndex: number }[] = [];
    for (let i = 1; i < total; i++) {
      const idx = (currentIndex + i) % total;
      previewList.push({ item: amenityImages[idx], originalIndex: idx });
    }
    return previewList;
  };

  const previewSlides = getPreviewSlides();

  return (
    <section id="amenities" className="py-20 bg-[#F4F1DF] text-[#0D3829] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
            Resident Amenities &amp; Facilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
            Community Amenities Planned for Daily Living
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            From a resident clubhouse and fitness center to landscaped walking circuits and dedicated children&apos;s recreation zones, every facility is planned for practical everyday use.
          </p>
        </AnimatedReveal>

        {/* Pure Image Animated Slider Showcase (Auto 2s, Seamless Images) */}
        <AnimatedReveal direction="up" delay={0.1}>
          <div
            className="relative h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0D3829] select-none flex flex-col justify-center p-4 sm:p-6 md:p-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Active Main Background Image with 2s Smooth Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* Middle / Right Floating Image Preview Strip */}
            <div className="relative z-10 flex justify-end items-center my-auto">
              <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x max-w-full md:max-w-xl lg:max-w-2xl">
                {previewSlides.map(({ item, originalIndex }) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => handleSelect(originalIndex)}
                    className="relative h-28 sm:h-36 md:h-44 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-black/40 cursor-pointer flex-shrink-0 group snap-start backdrop-blur-xs"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </AnimatedReveal>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Download Full Amenities & Clubhouse Brochure",
                ctaSource: "Amenities Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <span>Request Complete Amenities Brochure</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </button>
        </AnimatedReveal>

      </div>
    </section>
  );
}
