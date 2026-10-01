"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "main-elevation",
    title: "Residential Tower Elevation",
    category: "Architecture",
    image: "/images/extracted/Banner.jpg",
    caption: "Contemporary building facade designed with deep sit-out balconies and expansive glass openings.",
  },
  {
    id: "tower-perspective",
    title: "Tower Perspective & Greens",
    category: "Exterior",
    image: "/images/extracted/Image-2.jpg",
    caption: "Low-density residential towers oriented for optimal sunlight and peripheral open views.",
  },
  {
    id: "living-room",
    title: "Living & Dining Area",
    category: "Interiors",
    image: "/images/configurations/3-bhk-gallery-living-room.jpg",
    caption: "Open-plan living space connecting directly to a private outdoor balcony deck.",
  },
  {
    id: "master-suite",
    title: "Master Bedroom Suite",
    category: "Master Suite",
    image: "/images/configurations/4-bhk-gallery-master-suite.jpg",
    caption: "Spacious master bedroom with dedicated wardrobe alcove and adjoining bath.",
  },
  {
    id: "sky-terrace",
    title: "Outdoor Balcony Deck",
    category: "Balconies",
    image: "/images/configurations/4-bhk-gallery-sky-terrace.jpg",
    caption: "Deep sit-out balcony providing expansive views across the landscaped grounds.",
  },
  {
    id: "resort-pool",
    title: "Resident Swimming Pool & Deck",
    category: "Amenities",
    image: "/images/blog/resort-style-amenities-gated-community.jpg",
    caption: "Central swimming pool and relaxation deck surrounded by landscaped trees.",
  },
];

// Grid offsets for 3 columns x 2 rows layout (Desktop)
const desktopOffsets = [
  { x: 104, y: 54 },   // Top-Left (Row 0, Col 0) -> center
  { x: 0, y: 54 },     // Top-Center (Row 0, Col 1) -> center
  { x: -104, y: 54 },  // Top-Right (Row 0, Col 2) -> center
  { x: 104, y: -54 },  // Bottom-Left (Row 1, Col 0) -> center
  { x: 0, y: -54 },    // Bottom-Center (Row 1, Col 1) -> center
  { x: -104, y: -54 }, // Bottom-Right (Row 1, Col 2) -> center
];

// Grid offsets for 2 columns x 3 rows layout (Tablet / Mobile)
const mobileOffsets = [
  { x: 52, y: 104 },   // Row 0, Col 0 (Top-Left)
  { x: -52, y: 104 },  // Row 0, Col 1 (Top-Right)
  { x: 52, y: 0 },     // Row 1, Col 0 (Mid-Left)
  { x: -52, y: 0 },    // Row 1, Col 1 (Mid-Right)
  { x: 52, y: -104 },  // Row 2, Col 0 (Bottom-Left)
  { x: -52, y: -104 }, // Row 2, Col 1 (Bottom-Right)
];

// Smooth staggered timing per card index for fluid organic motion
const staggerConfigs = [
  { startExpand: 0.10, endExpand: 0.44, startMerge: 0.70, endMerge: 0.94 },
  { startExpand: 0.12, endExpand: 0.46, startMerge: 0.68, endMerge: 0.92 },
  { startExpand: 0.14, endExpand: 0.48, startMerge: 0.66, endMerge: 0.90 },
  { startExpand: 0.11, endExpand: 0.45, startMerge: 0.69, endMerge: 0.93 },
  { startExpand: 0.13, endExpand: 0.47, startMerge: 0.67, endMerge: 0.91 },
  { startExpand: 0.15, endExpand: 0.49, startMerge: 0.65, endMerge: 0.89 },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobileGrid, setIsMobileGrid] = useState(false);
  const { openLeadModal } = useLeadModal();
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progress along the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track responsive screen size for transform calculations
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileGrid(window.innerWidth < 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Central Image Motion Values (Smooth continuous fade & scale)
  const centralScale = useTransform(
    scrollYProgress,
    [0, 0.10, 0.44, 0.70, 0.94, 1.0],
    [1.0, 1.0, 0.82, 0.82, 1.0, 1.0]
  );
  const centralOpacity = useTransform(
    scrollYProgress,
    [0, 0.10, 0.38, 0.72, 0.94, 1.0],
    [1.0, 1.0, 0.0, 0.0, 1.0, 1.0]
  );
  const centralPointerEvents = useTransform(
    scrollYProgress,
    (v) => (v < 0.20 || v > 0.85 ? "auto" : "none")
  );

  // Lightbox handlers
  const activeLightboxItem =
    lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
  }, [lightboxIndex]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === 0 ? galleryItems.length - 1 : prev! - 1
    );
  }, [lightboxIndex]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleNext, handlePrev, handleCloseLightbox]);

  // If user prefers reduced motion, render static responsive grid
  if (prefersReducedMotion) {
    return (
      <section
        id="gallery"
        className="py-20 bg-[#FFFCEC] text-[#0D3829] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Project Photography
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Northwind Estate Visual Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Explore photography of the residential tower architecture, apartment interiors, private balconies, and landscaped community grounds.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="aspect-[16/11] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="relative bg-[#FFFCEC] text-[#0D3829]">
      {/* Pinned Scroll Container */}
      <div
        ref={containerRef}
        className="relative h-[290vh] sm:h-[320vh] w-full"
      >
        {/* Sticky Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between px-3 sm:px-6 lg:px-8 py-5 sm:py-7 overflow-hidden select-none">
          
          {/* 1. CLEAN SECTION HEADER */}
          <div className="w-full max-w-4xl mx-auto text-center shrink-0 z-20 space-y-2">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Project Photography
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D3829] tracking-tight">
              Northwind Estate Visual Gallery
            </h2>

            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-xl mx-auto">
              Explore photography of building elevations, apartment interiors, private balconies, and landscaped grounds.
            </p>
          </div>

          {/* 2. MAIN VISUAL STAGE (Pure Clean Photo Presentation) */}
          <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto min-h-[360px] sm:min-h-[440px] max-h-[66vh] sm:max-h-[70vh]">
            
            {/* 2A. SINGLE LARGE CENTRAL IMAGE (Pure Image - No Text Overlays) */}
            <motion.div
              style={{
                scale: centralScale,
                opacity: centralOpacity,
                pointerEvents: centralPointerEvents,
              }}
              className="absolute inset-0 m-auto w-full h-full max-w-4xl max-h-[58vh] sm:max-h-[64vh] z-30 flex items-center justify-center cursor-pointer group"
              onClick={() => setLightboxIndex(0)}
            >
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#0D3829]/20 shadow-2xl relative">
                <Image
                  src="/images/extracted/Banner.jpg"
                  alt="Northwind Main Residential Grand Elevation"
                  fill
                  priority
                  sizes="(max-width: 1200px) 90vw, 1000px"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Subtle Hover Magnify Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/10">
                  <div className="w-12 h-12 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 text-[#0D3829]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2B. THE SIX INDIVIDUAL GALLERY CARDS GRID (Pure Images - Full Bleed) */}
            <div className="absolute inset-0 w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 z-20">
              {galleryItems.map((item, idx) => {
                const offsets = isMobileGrid
                  ? mobileOffsets[idx]
                  : desktopOffsets[idx];
                const config = staggerConfigs[idx];

                return (
                  <GalleryAnimatedCard
                    key={item.id}
                    item={item}
                    index={idx}
                    scrollYProgress={scrollYProgress}
                    offsetX={offsets.x}
                    offsetY={offsets.y}
                    startExpand={config.startExpand}
                    endExpand={config.endExpand}
                    startMerge={config.startMerge}
                    endMerge={config.endMerge}
                    onOpenLightbox={() => setLightboxIndex(idx)}
                  />
                );
              })}
            </div>

          </div>

          {/* 3. CLEAN BOTTOM CTA BUTTON */}
          <div className="w-full max-w-6xl mx-auto shrink-0 z-20 flex items-center justify-center pt-2">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Request Complete High-Resolution Visual Gallery & Brochure",
                  ctaSource: "Gallery Interactive Scroll Section",
                })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-6 py-2.5 sm:py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
            >
              <span>Download Complete High-Res Brochure</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Lightbox Preview Modal (Displays full HD photo with details on click) */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-5">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleCloseLightbox}
              className="absolute inset-0 bg-[#0D3829]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Lightbox Modal Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#FFFCEC] border border-[#0D3829]/25 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Top Header */}
              <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[#0D3829]/15 flex items-center justify-between bg-white/80 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3">
                  <span className="bg-[#0D3829] text-[#FFFCEC] text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {activeLightboxItem.category}
                  </span>
                  <span className="text-xs text-[#5E7168] font-medium">
                    Photo {lightboxIndex + 1} of {galleryItems.length}
                  </span>
                </div>

                <button
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-full bg-[#0D3829]/10 hover:bg-[#0D3829] text-[#0D3829] hover:text-[#FFFCEC] transition cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Container with Arrows */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-black/90 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLightboxItem.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeLightboxItem.image}
                      alt={activeLightboxItem.title}
                      fill
                      priority
                      sizes="(max-width: 1200px) 95vw, 1100px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition border border-white/20 backdrop-blur-md cursor-pointer shadow-lg"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition border border-white/20 backdrop-blur-md cursor-pointer shadow-lg"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Caption & Action */}
              <div className="p-4 sm:p-6 bg-white border-t border-[#0D3829]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0D3829]">
                    {activeLightboxItem.title}
                  </h4>
                  <p className="text-xs text-[#5E7168] font-light max-w-xl">
                    {activeLightboxItem.caption}
                  </p>
                </div>

                <button
                  onClick={() => {
                    handleCloseLightbox();
                    openLeadModal({
                      title: `Inquire About ${activeLightboxItem.title}`,
                      preferredConfig: activeLightboxItem.title,
                      ctaSource: `Gallery Lightbox - ${activeLightboxItem.title}`,
                    });
                  }}
                  className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg shrink-0"
                >
                  <span>Enquire This Visual</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ACC78C]" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Pure Full-Bleed Animated Image Card with seamless scroll transforms
 */
interface GalleryAnimatedCardProps {
  item: GalleryItem;
  index: number;
  scrollYProgress: any;
  offsetX: number;
  offsetY: number;
  startExpand: number;
  endExpand: number;
  startMerge: number;
  endMerge: number;
  onOpenLightbox: () => void;
}

function GalleryAnimatedCard({
  item,
  index,
  scrollYProgress,
  offsetX,
  offsetY,
  startExpand,
  endExpand,
  startMerge,
  endMerge,
  onOpenLightbox,
}: GalleryAnimatedCardProps) {
  // Translate X: smooth glide from center offsetX% to 0% in grid, and back to offsetX%
  const x = useTransform(
    scrollYProgress,
    [0, startExpand, endExpand, startMerge, endMerge, 1.0],
    [`${offsetX}%`, `${offsetX}%`, "0%", "0%", `${offsetX}%`, `${offsetX}%`]
  );

  // Translate Y: smooth glide from center offsetY% to 0% in grid, and back to offsetY%
  const y = useTransform(
    scrollYProgress,
    [0, startExpand, endExpand, startMerge, endMerge, 1.0],
    [`${offsetY}%`, `${offsetY}%`, "0%", "0%", `${offsetY}%`, `${offsetY}%`]
  );

  // Scale: smooth transition from 0.65 -> 1.0 -> 0.65
  const scale = useTransform(
    scrollYProgress,
    [0, startExpand, endExpand, startMerge, endMerge, 1.0],
    [0.65, 0.65, 1.0, 1.0, 0.65, 0.65]
  );

  // Opacity: buttery smooth fade curve
  const opacity = useTransform(
    scrollYProgress,
    [
      0,
      startExpand,
      startExpand + (endExpand - startExpand) * 0.75,
      startMerge,
      endMerge,
      1.0,
    ],
    [0, 0, 1.0, 1.0, 0, 0]
  );

  // Pointer events: only active when settled in grid
  const pointerEvents = useTransform(scrollYProgress, (v: number) =>
    v >= endExpand * 0.88 && v <= startMerge * 1.08 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
        pointerEvents,
      }}
      className="w-full h-full"
    >
      <div
        onClick={onOpenLightbox}
        className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#0D3829]/15 hover:border-[#0D3829] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group relative"
      >
        {/* Pure Full Bleed Image */}
        <div className="relative w-full h-full min-h-0 bg-[#F4F1DF] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Subtle Hover Magnify Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/15">
            <div className="w-10 h-10 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-4 h-4 text-[#0D3829]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


