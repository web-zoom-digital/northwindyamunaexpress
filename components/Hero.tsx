"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, CheckCircle2, Sparkles } from "lucide-react";
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
    title: "Expansive Living Room",
    conceptLabel: "Interior Blueprint",
    realityLabel: "Luxury Living Suite",
  },
  {
    id: "card-2",
    src: "/images/configurations/4-bhk-gallery-master-suite.jpg",
    title: "Master Bedroom Suite",
    conceptLabel: "Spatial Drafting",
    realityLabel: "Bespoke Master Suite",
  },
  {
    id: "card-3",
    src: "/images/extracted/Banner.jpg",
    title: "Main Elevation & Facade",
    conceptLabel: "Architectural 3D Model",
    realityLabel: "Contemporary Facade",
  },
  {
    id: "card-4",
    src: "/images/configurations/4-bhk-gallery-grand-living.jpg",
    title: "Grand Lounge & Dining",
    conceptLabel: "Layout Optimization",
    realityLabel: "Grand Dining & Lounge",
  },
  {
    id: "card-5",
    src: "/images/extracted/Image-3.jpg",
    title: "Tower Architecture & Greens",
    conceptLabel: "Structural Wireframe",
    realityLabel: "Low Density Enclave",
  },
  {
    id: "card-6",
    src: "/images/configurations/4-bhk-gallery-sky-terrace.jpg",
    title: "Panoramic Sky Balconies",
    conceptLabel: "Balcony Deck Plan",
    realityLabel: "Sky Deck Living",
  },
  {
    id: "card-7",
    src: "/images/amenities/clubhouse.jpg",
    title: "Clubhouse & Recreation",
    conceptLabel: "Amenity Framework",
    realityLabel: "Signature Modern Clubhouse",
  },
  {
    id: "card-8",
    src: "/images/amenities/swimming-pool.jpg",
    title: "Resort Swimming Pool",
    conceptLabel: "Landscape Schema",
    realityLabel: "Resort-Style Azure Pool",
  },
];

// 6 fixed 3D spatial card slots across the panoramic half-arc
const CARD_SLOTS = [
  { slotIndex: 0, isLeftHalf: true, rotationY: 24, translateZ: -32, scale: 0.92, name: "Far Left" },
  { slotIndex: 1, isLeftHalf: true, rotationY: 14, translateZ: -10, scale: 0.96, name: "Mid Left" },
  { slotIndex: 2, isLeftHalf: true, rotationY: 4, translateZ: 0, scale: 1.0, name: "Inner Left" },
  { slotIndex: 3, isLeftHalf: false, rotationY: -4, translateZ: 0, scale: 1.0, name: "Inner Right" },
  { slotIndex: 4, isLeftHalf: false, rotationY: -14, translateZ: -10, scale: 0.96, name: "Mid Right" },
  { slotIndex: 5, isLeftHalf: false, rotationY: -24, translateZ: -32, scale: 0.92, name: "Far Right" },
];

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  const totalCards = PROJECT_CARDS.length;

  // Smooth Card-by-Card rotation from Left to Right
  const rotateLeftToRight = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Automatic Card-by-Card Rotation (Every 3.0s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      rotateLeftToRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, rotateLeftToRight]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-14 overflow-hidden bg-[#0D3829] text-[#FFFCEC]">
      {/* Brand Background (Deep Emerald Green & Warm Gold Lighting) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1E3A2B] via-[#0D3829] to-transparent opacity-80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] sm:h-[500px] bg-gradient-to-b from-[#ACC78C]/20 via-[#1E3A2B]/40 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* TOP HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-3.5 flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/40 text-xs text-[#ACC78C] font-semibold shadow-sm backdrop-blur-md">
              <span>Sector 22D Yamuna Expressway • New Launch</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3A2B]/70 border border-[#ACC78C]/20 text-xs text-[#FFFCEC]/90">
              <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" />
              <span>Greater Noida NCR</span>
            </div>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-[1.15] max-w-4xl">
            Transform Your Vision <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Into Reality</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/85 leading-relaxed max-w-2xl font-light">
            Bring your creative ideas to life with powerful architectural spaces.
            <br className="hidden sm:inline" />
            Experience bespoke <strong className="text-[#FFFCEC] font-semibold">3 &amp; 4 BHK low-density luxury residences</strong> at Northwind Estates.
          </p>
        </motion.div>

        {/* 3D CARD ROTATION PANORAMIC ARC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full my-5 sm:my-8 py-2 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Half View Header Labels */}
          

          {/* 3D Perspective Card Stage */}
          <div className="relative w-full flex items-center justify-center overflow-x-auto sm:overflow-visible no-scrollbar py-4">
            <div
              className="relative flex items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 px-4 min-w-[760px] sm:min-w-0"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Center Luminous Laser Beam & "Get Started" CTA */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center justify-center">
                {/* Vertical Glowing Light Streak */}
                <div className="w-[3px] h-[230px] sm:h-[280px] md:h-[320px] bg-gradient-to-b from-transparent via-[#ACC78C] via-[#FFFCEC] to-transparent shadow-[0_0_18px_#ACC78C,0_0_35px_#ACC78C]" />

                {/* Floating Center CTA Pill Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    openLeadModal({
                      title: "Transform Your Vision Into Reality",
                      ctaSource: "Hero Center Card Rotation CTA",
                    })
                  }
                  className="absolute pointer-events-auto bg-[#0D3829]/95 hover:bg-[#1E3A2B] text-[#FFFCEC] font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#ACC78C] shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_22px_rgba(172,199,140,0.6)] flex items-center gap-2 cursor-pointer transition-all duration-300 backdrop-blur-md group whitespace-nowrap"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ACC78C]" />
                </motion.button> */}
              </div>

              {/* 6 Fixed 3D Perspective Card Slots (Slightly smaller, sleek dimensions) */}
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
                        isHovered ? slot.translateZ + 35 : slot.translateZ
                      }px) scale(${isHovered ? slot.scale * 1.04 : slot.scale})`,
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease",
                      transformStyle: "preserve-3d",
                    }}
                    className={`relative w-[130px] h-[190px] xs:w-[155px] xs:h-[225px] sm:w-[185px] sm:h-[265px] md:w-[210px] md:h-[295px] lg:w-[220px] lg:h-[310px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shrink-0 shadow-[0_15px_35px_rgba(0,0,0,0.45)] border-2 transition-all duration-300 ${
                      isLeftHalf
                        ? "border-[#ACC78C]/35 hover:border-[#ACC78C]/70 bg-[#1E3A2B]"
                        : "border-[#ACC78C] hover:border-[#FFFCEC] shadow-[0_0_18px_rgba(172,199,140,0.25)] bg-[#0D3829]"
                    }`}
                  >
                    {/* Animated Card Image with smooth crossfade rotation */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentCard.id}
                        initial={{ opacity: 0.6, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.6, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={currentCard.src}
                          alt={currentCard.title}
                          fill
                          sizes="(max-width: 640px) 155px, (max-width: 768px) 185px, (max-width: 1024px) 210px, 220px"
                          className={`object-cover transition-all duration-500 ${
                            isLeftHalf
                              ? "grayscale contrast-[180%] brightness-[1.08]"
                              : "contrast-[105%] saturate-[1.12] hover:scale-105"
                          }`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Halftone / Dot-Matrix Overlay (Applied only on Left Half View) */}
                    {isLeftHalf && (
                      <div
                        className="absolute inset-0 pointer-events-none opacity-85 mix-blend-multiply"
                        style={{
                          backgroundImage:
                            "radial-gradient(#0D3829 1.2px, transparent 1.2px), radial-gradient(#0D3829 1.2px, transparent 1.2px)",
                          backgroundSize: "4px 4px",
                          backgroundPosition: "0 0, 2px 2px",
                        }}
                      />
                    )}

                    {/* Architectural Blueprint Grid Pattern on Left Half */}
                    {isLeftHalf && (
                      <div
                        className="absolute inset-0 pointer-events-none opacity-25"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(172,199,140,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(172,199,140,0.4) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    )}

                    {/* Subtle Gradient Shadow */}
                    <div
                      className={`absolute inset-0 pointer-events-none ${
                        isLeftHalf
                          ? "bg-gradient-to-t from-[#0D3829]/95 via-transparent to-[#0D3829]/30"
                          : "bg-gradient-to-t from-[#0D3829]/90 via-transparent to-[#ACC78C]/15"
                      }`}
                    />

                    {/* Card Meta Description & Badge */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3.5 z-10 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/80 to-transparent">
                      <span
                        className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider block ${
                          isLeftHalf ? "text-[#ACC78C]/85" : "text-[#ACC78C]"
                        }`}
                      >
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-4 sm:space-y-5"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Inquiry Price List & Availability",
                  ctaSource: "Hero Bottom Inquiry Price",
                })
              }
              className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-7 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer group border border-[#ACC78C]"
            >
              <span>Inquiry Price &amp; Brochure</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                openLeadModal({
                  title: "Schedule Site Visit",
                  ctaSource: "Hero Bottom Site Visit",
                })
              }
              className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold border border-[#0D3829]/20 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#0D3829]" />
              <span>Schedule Site Visit</span>
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 text-xs text-[#FFFCEC]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> 3 &amp; 4 BHK Low-Density Residences
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Expansive Balconies &amp; Greens
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Jewar Airport Growth Corridor
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
