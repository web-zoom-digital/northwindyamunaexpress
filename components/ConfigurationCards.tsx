"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  BedDouble,
  Bath,
  Compass,
  Download,
  Layers,
  ShieldCheck,
  Eye,
  ExternalLink,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export interface GalleryImage {
  src: string;
  title: string;
  caption: string;
}

export interface BHKConfigItem {
  id: string;
  bhk: string;
  badge: string;
  categoryBadge: string;
  tagline: string;
  carpetArea: string;
  superArea: string;
  price: string;
  status: string;
  bedrooms: string;
  bathrooms: string;
  balconies: string;
  facing: string;
  shortDesc: string;
  longDesc: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  mainImage: string;
  gallery: GalleryImage[];
  floorPlanImage: string;
  pageUrl: string;
}

const bhkConfigurations: BHKConfigItem[] = [
  {
    id: "3-bhk",
    bhk: "3 BHK Luxury Residence",
    badge: "3 BHK Luxury",
    categoryBadge: "Spacious Family Layout",
    tagline: "Three-Bedroom Home with Dual Balconies and Dedicated Utility Area",
    carpetArea: "Price / Area on Request",
    superArea: "Optimal Low-Density Layout",
    price: "Price on Request",
    status: "Coming Soon",
    bedrooms: "3 En-Suite Bedrooms",
    bathrooms: "3 Bathrooms",
    balconies: "2 Wide Sit-Out Balconies",
    facing: "Central Greens / Sector Road",
    shortDesc:
      "Thoughtfully proportioned 3-bedroom residence with an expansive living and dining area, dual sit-out balconies, and optimal orientation for cross-ventilation.",
    longDesc: [
      "Designed with functional spatial zoning, the 3 BHK residences at Northwind Estate offer an open-plan living and dining hall that extends directly onto a generous outdoor balcony.",
      "Each bedroom includes dedicated wardrobe alcoves, large UPVC double-glazed windows, and dual-aspect openings to support natural airflow throughout the home.",
      "Equipped with vitrified tile flooring, anti-skid balcony surfaces, modular kitchen connections, and an adjoining dry utility area.",
    ],
    features: [
      "Vitrified Tile Flooring across Living & Bedrooms",
      "Anti-Skid Weatherproof Balcony Flooring",
      "Granite Countertop Sink with Dedicated Utility",
      "UPVC Toughened Glass Balconies & Windows",
      "Double-Glazed Acoustic Noise Protection",
      "High-Speed Smart Elevator Access",
    ],
    specifications: [
      { label: "Layout Format", value: "3 Bed + 3 Bath + Living/Dining + 2 Balconies" },
      { label: "Living / Dining", value: "Open-Plan Living & Dining Area with Balcony Link" },
      { label: "Kitchen", value: "Granite Counter with Dry Utility Balcony" },
      { label: "Balcony Deck", value: "Wide Sit-Out Deck with Toughened Glass Railings" },
      { label: "Ventilation", value: "Dual-Aspect Optimal Cross Ventilation" },
      { label: "Structure", value: "Zone-IV Earthquake Resistant RCC Frame" },
    ],
    mainImage: "/images/configurations/3-bhk-luxury-apartment-hero.jpg",
    gallery: [
      {
        src: "/images/configurations/3-bhk-luxury-apartment-hero.jpg",
        title: "Master Living & Bedroom Showcase",
        caption: "Contemporary residential layout with generous natural daylighting",
      },
      {
        src: "/images/configurations/3-bhk-gallery-living-room.jpg",
        title: "Living & Dining Hall",
        caption: "Open-plan entertaining area with direct balcony connectivity",
      },
      {
        src: "/images/configurations/3-bhk-gallery-master-bedroom.jpg",
        title: "Master Bedroom Suite",
        caption: "Spacious master bedroom with attached bath and dressing alcove",
      },
      {
        src: "/images/configurations/3-bhk-gallery-balcony.jpg",
        title: "Sit-Out Balcony Deck",
        caption: "Private balcony overlooking central landscaped grounds",
      },
      {
        src: "/images/configurations/3-bhk-gallery-kitchen.jpg",
        title: "Modular Kitchen Layout",
        caption: "Ergonomic kitchen counter setup with adjacent utility space",
      },
      {
        src: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
        title: "2D Architectural Floor Plan",
        caption: "Schematic representation of 3 BHK layout and room dimensions",
      },
    ],
    floorPlanImage: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
    pageUrl: "/configurations/3-bhk-luxury-apartment",
  },
  {
    id: "4-bhk",
    bhk: "4 BHK Estate Residence",
    badge: "4 BHK Estate",
    categoryBadge: "Large-Format Layout",
    tagline: "Four-Bedroom Residence with Servant Suite and Wrap-Around Balconies",
    carpetArea: "Price / Area on Request",
    superArea: "Low-Density Estate Layout",
    price: "Price on Request",
    status: "Coming Soon",
    bedrooms: "4 En-Suite Bedrooms",
    bathrooms: "4 Bathrooms + Servant Bath",
    balconies: "3 Expansive Wrap-Around Balconies",
    facing: "Central Landscaped Greens",
    shortDesc:
      "Spacious four-bedroom home planned for multi-generational comfort, featuring separate servant quarters, a private foyer entry, and three expansive balconies.",
    longDesc: [
      "The 4 BHK Estate Residences provide generous room proportions, private bedroom corridors, and multiple outdoor sit-out decks overlooking landscaped grounds.",
      "Includes four en-suite bedrooms, a separate utility area, an independent servant suite with private access, and a spacious central family lounge.",
      "Constructed within an earthquake-resistant Zone-IV RCC frame, featuring vitrified flooring, concealed electrical conduits, and high-speed elevator access.",
    ],
    features: [
      "4 En-Suite Bedrooms with Private Dressing Zones",
      "Wrap-Around Balcony Decks with Open Views",
      "Dedicated Servant Room with Independent Entry",
      "Concealed Electrical & Air-Conditioning Conduits",
      "Weatherproof Balconies with Toughened Glass",
      "Private Foyer & Controlled Elevator Access",
    ],
    specifications: [
      { label: "Layout Format", value: "4 Bed + 4 Bath + Servant Suite + 3 Balconies" },
      { label: "Living / Dining", value: "Spacious Living Pavilion & Formal Dining Area" },
      { label: "Kitchen", value: "Modular Kitchen Layout with Dedicated Utility" },
      { label: "Balcony Deck", value: "Wrap-Around Balconies with Toughened Glass" },
      { label: "Elevator", value: "High-Speed Passenger Elevators" },
      { label: "Structure", value: "Zone-IV Earthquake Resistant RCC Frame" },
    ],
    mainImage: "/images/configurations/4-bhk-ultra-estate-residence-hero.jpg",
    gallery: [
      {
        src: "/images/configurations/4-bhk-ultra-estate-residence-hero.jpg",
        title: "4 BHK Estate Living Overview",
        caption: "High-ceiling residential elevation with panoramic outlook",
      },
      {
        src: "/images/configurations/4-bhk-gallery-grand-living.jpg",
        title: "Spacious Living & Dining Room",
        caption: "Expansive living area planned for family gatherings and hosting",
      },
      {
        src: "/images/configurations/4-bhk-gallery-master-suite.jpg",
        title: "Master Bedroom Suite",
        caption: "Spacious suite with private dressing area and attached bath",
      },
      {
        src: "/images/configurations/4-bhk-gallery-penthouse-lounge.jpg",
        title: "Family Lounge & Foyer",
        caption: "Central lounge linking bedroom suites with privacy separation",
      },
      {
        src: "/images/configurations/4-bhk-gallery-sky-terrace.jpg",
        title: "Wrap-Around Balcony Deck",
        caption: "Open-air balcony deck overlooking peripheral tree buffers",
      },
      {
        src: "/images/floor-plans/4bhk-estate-floor-plan.svg",
        title: "2D Architectural Floor Plan",
        caption: "Schematic of 4 BHK layout, servant room, and dimensions",
      },
    ],
    floorPlanImage: "/images/floor-plans/4bhk-estate-floor-plan.svg",
    pageUrl: "/configurations/4-bhk-ultra-estate-residence",
  },
];

export default function ConfigurationCards() {
  const { openLeadModal } = useLeadModal();
  const [selectedConfig, setSelectedConfig] = useState<BHKConfigItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs">("overview");

  // Close modal handler
  const handleCloseModal = useCallback(() => {
    setSelectedConfig(null);
    setActiveImageIndex(0);
    setActiveTab("overview");
  }, []);

  // Open modal for a specific config
  const handleOpenModal = (config: BHKConfigItem) => {
    setSelectedConfig(config);
    setActiveImageIndex(0);
    setActiveTab("overview");
  };

  // Keyboard Escape listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedConfig) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedConfig, handleCloseModal]);

  // Next / Prev Image Handlers
  const handleNextImage = () => {
    if (!selectedConfig) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedConfig.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedConfig) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedConfig.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="configurations"
      className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedReveal
          direction="up"
          className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
            Residences &amp; Configurations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
            Available BHK Configurations
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            Explore 3 BHK and 4 BHK luxury residences in Sector 22D, Yamuna Expressway. Click any card to view detailed specifications, high-res galleries, and floor plans.
          </p>
        </AnimatedReveal>

        {/* Pure Image-Focused Cards Grid (Borderless with deep shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {bhkConfigurations.map((config, idx) => (
            <AnimatedReveal
              key={config.id}
              direction="up"
              delay={0.1 * (idx + 1)}
              className="h-full"
            >
              <TiltCard tiltDegree={3} depth={12} className="h-full">
                <div
                  onClick={() => handleOpenModal(config)}
                  className="bg-[#F4F1DF] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full cursor-pointer relative"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenModal(config);
                    }
                  }}
                  aria-label={`View details and gallery for ${config.bhk}`}
                >
                  {/* Full Card Visual Image */}
                  <div className="aspect-[4/3] sm:aspect-[16/11] relative w-full bg-[#F4F1DF] overflow-hidden">
                    <Image
                      src={config.mainImage}
                      alt={`${config.bhk} - Northwind Estate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={idx === 0}
                    />

                    {/* Gradient Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-90 group-hover:opacity-95 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 flex items-center gap-2">
                      <span className="bg-[#0D3829]/95 text-[#FFFCEC] text-xs font-semibold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md backdrop-blur-md">
                        {config.badge}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5">
                      <span className="bg-[#FFFCEC]/95 text-[#0D3829] text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md backdrop-blur-md">
                        {config.status}
                      </span>
                    </div>

                    {/* Center Hover Eye Cue */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-5 h-5 text-[#0D3829]" />
                      </div>
                    </div>

                    {/* Bottom Overlay Info & Arrow */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-medium tracking-widest text-[#ACC78C] uppercase block mb-0.5">
                            {config.categoryBadge}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFFCEC] leading-tight">
                            {config.bhk}
                          </h3>
                        </div>

                        <div className="w-9 h-9 rounded-full bg-[#0D3829]/90 text-[#FFFCEC] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#ACC78C] group-hover:text-[#0D3829] transition-colors">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>
          ))}
        </div>

        {/* Centered Bottom Action Button */}
        <AnimatedReveal direction="up" delay={0.3} className="pt-12 sm:pt-16 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Inquire Complete Project Cost Sheet & Payment Plans",
                ctaSource: "Configurations Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-5 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group text-center"
          >
            <span>Request Complete Price &amp; Payment Schedule</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </AnimatedReveal>
      </div>

      {/* POPUP / HALF-SCREEN DETAIL PANEL (Holds all rich info when opened) */}
      <AnimatePresence>
        {selectedConfig && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#0D3829]/80 backdrop-blur-md cursor-pointer"
              aria-label="Close modal overlay"
            />

            {/* Modal Window Container (Borderless with deep shadow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#FFFCEC] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 text-[#0D3829]"
            >
              {/* Top Header Bar */}
              <div className="px-5 py-4 sm:px-7 sm:py-5 border-b border-[#0D3829]/10 flex items-center justify-between bg-white/70 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3">
                  <span className="bg-[#0D3829] text-[#FFFCEC] text-xs font-semibold px-3 py-1 rounded-lg uppercase tracking-wider shadow-xs">
                    {selectedConfig.badge}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-serif font-bold text-[#0D3829] leading-tight">
                      {selectedConfig.bhk}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#5E7168] font-light hidden sm:block">
                      Northwind Estate • Sector 22D, Yamuna Expressway
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={selectedConfig.pageUrl}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D3829] hover:text-[#1E3A2B] bg-[#0D3829]/10 hover:bg-[#0D3829]/20 px-3 py-1.5 rounded-lg transition"
                  >
                    <span>Full Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={handleCloseModal}
                    className="p-2 rounded-full bg-[#0D3829]/10 hover:bg-[#0D3829] text-[#0D3829] hover:text-[#FFFCEC] transition cursor-pointer"
                    aria-label="Close detail panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#0D3829]/10">
                {/* LEFT SIDE: Image Gallery & Carousel */}
                <div className="lg:col-span-6 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4 bg-[#F4F1DF]/40">
                  <div className="space-y-3">
                    {/* Featured Image Viewer with Navigation */}
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full bg-[#0D3829]/10 rounded-2xl overflow-hidden shadow-inner group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeImageIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.25 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={selectedConfig.gallery[activeImageIndex].src}
                            alt={selectedConfig.gallery[activeImageIndex].title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Image Gradient Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                        <span className="bg-[#0D3829]/90 text-[#FFFCEC] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-md">
                          Photo {activeImageIndex + 1} of {selectedConfig.gallery.length}
                        </span>
                        <span className="bg-black/50 text-[#ACC78C] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-md">
                          {selectedConfig.status}
                        </span>
                      </div>

                      {/* Prev / Next Navigation Arrows */}
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition backdrop-blur-md cursor-pointer shadow-lg"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleNextImage}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition backdrop-blur-md cursor-pointer shadow-lg"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFCEC]">
                          {selectedConfig.gallery[activeImageIndex].title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[#ACC78C] font-light truncate">
                          {selectedConfig.gallery[activeImageIndex].caption}
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail Strip Gallery */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-[#0D3829]">
                        <span>Thumbnail Gallery</span>
                        <span className="text-[#5E7168] font-light">Select image to switch</span>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {selectedConfig.gallery.map((img, idx) => {
                          const isActive = activeImageIndex === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIndex(idx)}
                              className={`relative aspect-square rounded-xl overflow-hidden transition-all cursor-pointer bg-[#F4F1DF] ${
                                isActive
                                  ? "shadow-md scale-105 ring-2 ring-[#0D3829]"
                                  : "opacity-70 hover:opacity-100"
                              }`}
                              aria-label={`Select image ${idx + 1}: ${img.title}`}
                            >
                              <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                sizes="80px"
                                className="object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Floor Plan Direct Shortcut Box */}
                  <div className="bg-white rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829]/10 flex items-center justify-center flex-shrink-0 text-[#0D3829]">
                        <Layers className="w-5 h-5 text-[#0D3829]" />
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0D3829]">
                          2D Blueprint &amp; Layout Plan
                        </h5>
                        <p className="text-[10px] text-[#5E7168] font-light">
                          High-res architectural layout vector
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const floorPlanIndex = selectedConfig.gallery.findIndex((g) =>
                          g.src.includes("floor-plan")
                        );
                        if (floorPlanIndex !== -1) {
                          setActiveImageIndex(floorPlanIndex);
                        }
                      }}
                      className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] text-[11px] font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View Plan</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: Detailed Content, Specs & Lead Action */}
                <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    {/* Header Info */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#0D3829]/10 text-[#0D3829] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                          {selectedConfig.categoryBadge}
                        </span>
                        <span className="bg-[#ACC78C]/30 text-[#0D3829] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                          {selectedConfig.facing}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                        {selectedConfig.bhk}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0D3829] font-medium leading-snug">
                        {selectedConfig.tagline}
                      </p>
                    </div>

                    {/* Quick Specs 4-Box Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="bg-[#F4F1DF] p-2.5 rounded-xl text-center shadow-xs">
                        <BedDouble className="w-4 h-4 text-[#0D3829] mx-auto mb-1" />
                        <span className="text-[10px] text-[#5E7168] block">Bedrooms</span>
                        <span className="text-xs font-bold text-[#0D3829]">{selectedConfig.bedrooms}</span>
                      </div>
                      <div className="bg-[#F4F1DF] p-2.5 rounded-xl text-center shadow-xs">
                        <Bath className="w-4 h-4 text-[#0D3829] mx-auto mb-1" />
                        <span className="text-[10px] text-[#5E7168] block">Bathrooms</span>
                        <span className="text-xs font-bold text-[#0D3829]">{selectedConfig.bathrooms}</span>
                      </div>
                      <div className="bg-[#F4F1DF] p-2.5 rounded-xl text-center shadow-xs">
                        <Compass className="w-4 h-4 text-[#0D3829] mx-auto mb-1" />
                        <span className="text-[10px] text-[#5E7168] block">Balconies</span>
                        <span className="text-xs font-bold text-[#0D3829]">{selectedConfig.balconies}</span>
                      </div>
                      <div className="bg-[#F4F1DF] p-2.5 rounded-xl text-center shadow-xs">
                        <Maximize2 className="w-4 h-4 text-[#0D3829] mx-auto mb-1" />
                        <span className="text-[10px] text-[#5E7168] block">Carpet Area</span>
                        <span className="text-xs font-bold text-[#0D3829]">On Request</span>
                      </div>
                    </div>

                    {/* Tabs Navigation for Detailed View */}
                    <div className="space-y-4">
                      <div className="flex border-b border-[#0D3829]/10 gap-4 text-xs font-semibold">
                        <button
                          onClick={() => setActiveTab("overview")}
                          className={`pb-2 transition-all cursor-pointer border-b-2 -mb-[1px] ${
                            activeTab === "overview"
                              ? "border-[#0D3829] text-[#0D3829] font-bold"
                              : "border-transparent text-[#5E7168] hover:text-[#0D3829]"
                          }`}
                        >
                          Overview &amp; Concept
                        </button>
                        <button
                          onClick={() => setActiveTab("specs")}
                          className={`pb-2 transition-all cursor-pointer border-b-2 -mb-[1px] ${
                            activeTab === "specs"
                              ? "border-[#0D3829] text-[#0D3829] font-bold"
                              : "border-transparent text-[#5E7168] hover:text-[#0D3829]"
                          }`}
                        >
                          Specifications &amp; Features
                        </button>
                      </div>

                      {/* Tab Content 1: Overview */}
                      {activeTab === "overview" && (
                        <div className="space-y-3 text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                          {selectedConfig.longDesc.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Tab Content 2: Specifications */}
                      {activeTab === "specs" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {selectedConfig.specifications.map((spec, i) => (
                              <div
                                key={i}
                                className="bg-[#F4F1DF]/70 rounded-lg p-2.5 shadow-xs"
                              >
                                <span className="text-[#5E7168] text-[10px] block uppercase font-medium">
                                  {spec.label}
                                </span>
                                <span className="font-semibold text-[#0D3829] block pt-0.5">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2">
                            <h5 className="text-xs font-serif font-bold text-[#0D3829] mb-2 uppercase tracking-wider">
                              Included Highlights
                            </h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2D3C25]">
                              {selectedConfig.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sticky Bottom Action Buttons */}
                  <div className="pt-5 border-t border-[#0D3829]/10 space-y-2.5">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={() => {
                          handleCloseModal();
                          openLeadModal({
                            title: `Inquire ${selectedConfig.bhk} Price & Allotment`,
                            preferredConfig: selectedConfig.bhk,
                            ctaSource: `${selectedConfig.badge} Popup Primary CTA`,
                          });
                        }}
                        className="flex-1 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <span>Enquire Now &amp; Get Price Sheet</span>
                      </button>

                      <button
                        onClick={() => {
                          handleCloseModal();
                          openLeadModal({
                            title: `Request ${selectedConfig.bhk} Floor Plan PDF`,
                            preferredConfig: selectedConfig.bhk,
                            ctaSource: `${selectedConfig.badge} Popup Floor Plan PDF`,
                          });
                        }}
                        className="bg-white hover:bg-[#F4F1DF] text-[#0D3829] font-semibold py-3 px-5 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-[#0D3829]" />
                        <span>Download Blueprint PDF</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#5E7168] text-center font-light flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0D3829]" />
                      <span>Direct Developer Pricing • Priority Booking Allotment</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

