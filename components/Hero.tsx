"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

interface ProjectCard {
  id: string;
  src: string;
  title: string;
  conceptLabel: string;
  realityLabel: string;
}

const PROJECT_CARDS: ProjectCard[] = [
  {
    id: "card-1",
    src: "/images/configurations/3-bhk-gallery-living-room.jpg",
    title: "Living Room Layout",
    conceptLabel: "Interior Architecture",
    realityLabel: "Living & Dining Area",
  },
  {
    id: "card-2",
    src: "/images/configurations/4-bhk-gallery-master-suite.jpg",
    title: "Master Bedroom Suite",
    conceptLabel: "Space Planning",
    realityLabel: "Master Suite & Alcove",
  },
  {
    id: "card-3",
    src: "/images/extracted/Banner.jpg",
    title: "Building Elevation",
    conceptLabel: "Architectural Elevation",
    realityLabel: "Tower Facade & Balconies",
  },
  {
    id: "card-4",
    src: "/images/configurations/4-bhk-gallery-grand-living.jpg",
    title: "Family Dining & Lounge",
    conceptLabel: "Open-Plan Layout",
    realityLabel: "Dining & Family Space",
  },
  {
    id: "card-5",
    src: "/images/extracted/Image-3.jpg",
    title: "Landscaped Tower Greens",
    conceptLabel: "Site Master Plan",
    realityLabel: "Low-Density Green Enclave",
  },
  {
    id: "card-6",
    src: "/images/configurations/4-bhk-gallery-sky-terrace.jpg",
    title: "Outdoor Balcony Deck",
    conceptLabel: "Balcony Design",
    realityLabel: "Private Sunlit Balconies",
  },
  {
    id: "card-7",
    src: "/images/amenities/clubhouse.jpg",
    title: "Resident Clubhouse",
    conceptLabel: "Community Facility",
    realityLabel: "Clubhouse & Lounge",
  },
  {
    id: "card-8",
    src: "/images/amenities/swimming-pool.jpg",
    title: "Swimming Pool & Deck",
    conceptLabel: "Landscape Planning",
    realityLabel: "Swimming Pool Area",
  },
];

// 6 fixed 3D spatial card slots across the panoramic half-arc
const CARD_SLOTS = [
  { slotIndex: 0, isLeftHalf: true, rotationY: 20, translateZ: -24, scale: 0.94, name: "Far Left" },
  { slotIndex: 1, isLeftHalf: true, rotationY: 12, translateZ: -8, scale: 0.97, name: "Mid Left" },
  { slotIndex: 2, isLeftHalf: true, rotationY: 4, translateZ: 0, scale: 1.0, name: "Inner Left" },
  { slotIndex: 3, isLeftHalf: false, rotationY: -4, translateZ: 0, scale: 1.0, name: "Inner Right" },
  { slotIndex: 4, isLeftHalf: false, rotationY: -12, translateZ: -8, scale: 0.97, name: "Mid Right" },
  { slotIndex: 5, isLeftHalf: false, rotationY: -20, translateZ: -24, scale: 0.94, name: "Far Right" },
];

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  const totalCards = PROJECT_CARDS.length;

  const rotateLeftToRight = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      rotateLeftToRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, rotateLeftToRight]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-14 overflow-hidden text-[#FFFCEC]">
      {/* Background Depth Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1E3A2B]/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#0D3829] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* TOP HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-3 flex flex-col items-center"
        >
         

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-[1.15] max-w-4xl">
            Low-Density 3 &amp; 4 BHK Residences <br className="hidden sm:inline" />
            <span className="text-[#ACC78C]">on Yamuna Expressway</span>
          </h1>

        </motion.div>

        {/* 3D CARD ROTATION PANORAMIC ARC */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full my-5 sm:my-8 py-2 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3D Perspective Card Stage */}
          <div className="relative w-full flex items-center justify-center overflow-x-auto sm:overflow-visible no-scrollbar py-4">
            <div
              className="relative flex items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 px-4 min-w-[760px] sm:min-w-0"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* 6 Fixed 3D Perspective Card Slots */}
              {CARD_SLOTS.map((slot) => {
                const cardIndex = (startIndex + slot.slotIndex) % totalCards;
                const currentCard = PROJECT_CARDS[cardIndex];
                const isHovered = hoveredSlot === slot.slotIndex;
                const isLeftHalf = slot.isLeftHalf;

                return (
                  <motion.div
                    key={`card-slot-${slot.slotIndex}`}
                    onMouseEnter={() => setHoveredSlot(slot.slotIndex)}
                    onMouseLeave={() => setHoveredSlot(null)}
                    onClick={() =>
                      openLeadModal({
                        title: `Inquiry for ${currentCard.title}`,
                        ctaSource: `Hero Card Slot ${slot.slotIndex + 1}`,
                      })
                    }
                    style={{
                      transform: `rotateY(${slot.rotationY}deg) translateZ(${
                        isHovered ? slot.translateZ + 20 : slot.translateZ
                      }px) scale(${isHovered ? slot.scale * 1.02 : slot.scale})`,
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                      transformStyle: "preserve-3d",
                    }}
                    className="relative w-[130px] h-[190px] xs:w-[155px] xs:h-[225px] sm:w-[185px] sm:h-[265px] md:w-[210px] md:h-[295px] lg:w-[220px] lg:h-[310px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shrink-0 shadow-lg bg-[#0D3829] border border-[#ACC78C]/15 transition-all duration-300"
                  >
                    {/* Animated Card Image with smooth crossfade rotation */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentCard.id}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.7 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={currentCard.src}
                          alt={currentCard.title}
                          fill
                          sizes="(max-width: 640px) 155px, (max-width: 768px) 185px, (max-width: 1024px) 210px, 220px"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Card Meta Description */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3.5 z-10">
                      <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-[#ACC78C] block">
                        {isLeftHalf ? currentCard.conceptLabel : currentCard.realityLabel}
                      </span>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#FFFCEC] truncate mt-0.5">
                        {currentCard.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ACTION BUTTONS & PROPERTY HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Request Cost Sheet & Floor Plans",
                  ctaSource: "Hero Primary CTA",
                })
              }
              className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-semibold px-7 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Residences &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                openLeadModal({
                  title: "Schedule a Site Visit",
                  ctaSource: "Hero Site Visit CTA",
                })
              }
              className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#0D3829]" />
              <span>Schedule a Site Visit</span>
            </button>
          </div>

          {/* Feature Specs */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[#ACC78C] font-light pt-1">
            <span>3 &amp; 4 BHK Low-Density Towers</span>
            <span>•</span>
            <span>Dual-Balcony Floor Layouts</span>
            <span>•</span>
            <span>Noida International Airport Growth Belt</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
