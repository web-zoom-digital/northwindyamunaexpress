"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Layers,
  Download,
  CheckCircle2,
  Maximize2,
  X,
  Home,
  Building,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

type ViewMode = "architectural" | "blueprint";
type PlanKey = "3BHK" | "4BHK" | "SECTOR22";

interface FloorPlanOption {
  key: PlanKey;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
  architecturalImage: string;
  blueprintImage: string;
  highlights: string[];
}

const planOptions: Record<PlanKey, FloorPlanOption> = {
  "3BHK": {
    key: "3BHK",
    label: "3 BHK",
    badge: "3 BHK Layout",
    title: "3 BHK Residential Layout",
    subtitle: "3 Bedrooms, 3 Bathrooms, Living & Dining, and Dual Balconies",
    architecturalImage: "/images/configurations/3-bhk-luxury-apartment-hero.jpg",
    blueprintImage: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
    highlights: [
      "Separate living and dining areas connecting to main balcony",
      "Master bedroom with dedicated wardrobe zone and en-suite bath",
      "Kitchen layout with adjoining utility space for laundry and storage",
    ],
  },
  "4BHK": {
    key: "4BHK",
    label: "4 BHK",
    badge: "4 BHK Layout",
    title: "4 BHK Estate Layout",
    subtitle: "4 En-Suite Bedrooms, Family Lounge, Servant Suite, and 3 Balconies",
    architecturalImage: "/images/configurations/4-bhk-ultra-estate-residence-hero.jpg",
    blueprintImage: "/images/floor-plans/4bhk-estate-floor-plan.svg",
    highlights: [
      "Spacious four-bedroom layout with dedicated family lounge",
      "Independent servant room with separate service entry",
      "Three wrap-around balcony decks providing multi-directional airflow",
    ],
  },
  "SECTOR22": {
    key: "SECTOR22",
    label: "Sector 22",
    badge: "Master Site Plan",
    title: "Sector 22D Master Site Layout",
    subtitle: "Low-Density Residential Enclave with Central Green Buffer",
    architecturalImage: "/images/configurations/site-master-layout-plan-hero.jpg",
    blueprintImage: "/images/floor-plans/site-master-plan.svg",
    highlights: [
      "Oriented tower footprints maximizing natural light and setbacks",
      "Central landscaped green zone, walking tracks, and children's play area",
      "Gated access points with dedicated vehicular and pedestrian circulation",
    ],
  },
};

export default function FloorPlanSection() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("3BHK");
  const [viewMode, setViewMode] = useState<ViewMode>("architectural");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const { openLeadModal } = useLeadModal();

  const currentOption = planOptions[selectedPlan];
  const activeImageSrc =
    viewMode === "architectural"
      ? currentOption.architecturalImage
      : currentOption.blueprintImage;

  const activeImageTitle = `${currentOption.title} (${
    viewMode === "architectural" ? "Architectural View" : "2D Blueprint Layout"
  })`;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };

    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <section
      id="floor-plans"
      className="py-20 bg-[#F4F1DF] text-[#0D3829] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedReveal
          direction="up"
          className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
            Floor Plans &amp; Site Layouts
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
            Apartment Floor Plans &amp; Master Site Layout
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            Review 3 BHK and 4 BHK floor plans alongside the complete Sector 22D master site plan. Switch between rendered views and detailed 2D architectural schematics.
          </p>
        </AnimatedReveal>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE — Controls Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* View Mode Segmented Control Bar */}
            <div className="bg-[#FFFCEC] p-1.5 rounded-2xl shadow-sm grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setViewMode("architectural")}
                className={`py-3 px-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  viewMode === "architectural"
                    ? "bg-[#0D3829] text-[#FFFCEC] shadow-md"
                    : "text-[#0D3829] hover:bg-[#0D3829]/10"
                }`}
              >
                <Building className="w-4 h-4 flex-shrink-0" />
                <span>Architectural View</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("blueprint")}
                className={`py-3 px-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  viewMode === "blueprint"
                    ? "bg-[#0D3829] text-[#FFFCEC] shadow-md"
                    : "text-[#0D3829] hover:bg-[#0D3829]/10"
                }`}
              >
                <Home className="w-4 h-4 flex-shrink-0" />
                <span>2D Blueprint Layout</span>
              </button>
            </div>

            {/* Selectable Floor Plan Cards List */}
            <div className="space-y-3">
              {(Object.keys(planOptions) as PlanKey[]).map((key) => {
                const plan = planOptions[key];
                const isSelected = selectedPlan === key;
                const thumbSrc =
                  viewMode === "architectural"
                    ? plan.architecturalImage
                    : plan.blueprintImage;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPlan(key)}
                    className={`w-full p-4 rounded-2xl transition-all duration-300 text-left flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? "bg-[#FFFCEC] shadow-lg ring-2 ring-[#0D3829]"
                        : "bg-[#FFFCEC]/80 hover:bg-[#FFFCEC] shadow-xs hover:shadow-md"
                    }`}
                  >
                    {/* Thumbnail Box */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#F4F1DF] shadow-xs flex-shrink-0">
                      <Image
                        src={thumbSrc}
                        alt={plan.title}
                        fill
                        sizes="90px"
                        className={`object-cover transition-transform duration-500 ${
                          viewMode === "blueprint" ? "object-contain p-1.5 bg-[#FFFCEC]" : "group-hover:scale-110"
                        }`}
                      />
                      <div className="absolute top-1 left-1 bg-[#0D3829]/90 text-[#FFFCEC] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {plan.label}
                      </div>
                    </div>

                    {/* Card Text Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D3829] bg-[#ACC78C]/40 px-2 py-0.5 rounded-md">
                          {plan.badge}
                        </span>
                        <span className="text-[10px] text-[#5E7168] font-medium">
                          {viewMode === "architectural" ? "3D Render" : "2D Blueprint"}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#0D3829] truncate">
                        {plan.title}
                      </h3>

                      <p className="text-xs text-[#5E7168] font-light truncate mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Active Selected Checkmark */}
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center flex-shrink-0 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: `Download ${currentOption.title} Blueprint PDF`,
                    preferredConfig: currentOption.label,
                    ctaSource: `Floor Plans Panel - ${currentOption.label}`,
                  })
                }
                className="w-full bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ACC78C]" />
                <span>Download {currentOption.label} Official Plan PDF</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE — Large Image Preview (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Image Preview Container */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full bg-[#FFFCEC] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedPlan}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeImageSrc}
                    alt={activeImageTitle}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`transition-all duration-300 ${
                      viewMode === "blueprint"
                        ? "object-contain p-4 sm:p-6 bg-[#FFFCEC]"
                        : "object-cover"
                    }`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top Overlay Badge Bar */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 pointer-events-none">
                <div className="bg-[#0D3829]/90 text-[#FFFCEC] text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md backdrop-blur-md flex items-center gap-2">
                  <span>{currentOption.label}</span>
                  <span className="text-[#ACC78C]">•</span>
                  <span>{viewMode === "architectural" ? "Architectural View" : "2D Blueprint"}</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: activeImageSrc,
                      title: activeImageTitle,
                    })
                  }
                  className="pointer-events-auto bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  aria-label="Zoom floor plan preview"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#0D3829]" />
                  <span>Zoom Plan</span>
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#FFFCEC]">
                  {currentOption.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#ACC78C] font-light truncate">
                  {currentOption.subtitle}
                </p>
              </div>
            </div>



          </div>

        </div>

        {/* Bottom Centered Global CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Download All Floor Plans & Master Layout Brochure",
                ctaSource: "Floor Plans Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
          >
            <span>Download All Floor Plans &amp; Site Brochure</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedReveal>

      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[130] bg-[#0D3829]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full bg-[#FFFCEC] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 text-[#0D3829]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#0D3829]/15">
                <h3 className="font-serif font-bold text-[#0D3829] text-base sm:text-lg">
                  {lightboxImage.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-2 rounded-full bg-[#0D3829]/10 hover:bg-[#0D3829]/20 text-[#0D3829] transition cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/15 flex items-center justify-center">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxImage(null);
                    openLeadModal({
                      title: `Download ${lightboxImage.title} PDF`,
                      preferredConfig: currentOption.label,
                      ctaSource: "Floor Plan Lightbox Zoom",
                    });
                  }}
                  className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer border border-[#ACC78C]/30 shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#ACC78C]" />
                  <span>Download Official PDF</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
