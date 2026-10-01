"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Building,
  Trees,
  ShieldCheck,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  ArrowRight,
  CheckCircle2,
  Car,
  Waves,
  Eye,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";

interface MasterPlanClientProps {
  faqs: FAQItem[];
}

export default function MasterPlanClient({ faqs }: MasterPlanClientProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeLayer, setActiveLayer] = useState<string>("all");

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const siteLayers: Record<string, { title: string; subtitle: string; desc: string; highlights: string[] }> = {
    all: {
      title: "Comprehensive Master Plan Layout",
      subtitle: "Integrated low-density residential township in Sector 22D Yamuna Expressway",
      desc: "An architectural master plan prioritizing expansive central greens, unobstructed solar orientation, seamless vehicular loop circulation, and pedestrian safety.",
      highlights: [
        "Low-density tower positioning with maximized open-to-sky courtyard ratios",
        "Continuous central landscape corridor featuring water bodies & jogging trails",
        "Dedicated perimeter vehicular access preventing internal traffic conflicts",
      ],
    },
    towers: {
      title: "Residential Towers & Sky Residences",
      subtitle: "Aerodynamic tower placement for dual-aspect wind and light penetration",
      desc: "Residential blocks are positioned along the periphery with staggered alignments to ensure every residence enjoys panoramic internal garden vistas and natural privacy.",
      highlights: [
        "Staggered tower footprints minimizing mutual window overlooking",
        "North-East and South-East oriented living balconies",
        "Dedicated lobby drop-offs with sheltered double-height entrances",
      ],
    },
    greens: {
      title: "Central Green Spine & Botanical Courtyards",
      subtitle: "Unbroken green promenade connecting residents to nature",
      desc: "Vast central lawn expanse featuring indigenous shade trees, zen meditation corners, reflexology walkways, and shaded outdoor seating pavilions.",
      highlights: [
        "Multi-tiered landscaped gardens and flower beds",
        "Central water cascade promenade and fountain features",
        "100% vehicle-free central pedestrian green boulevard",
      ],
    },
    clubhouse: {
      title: "Clubhouse & Sports Precinct",
      subtitle: "Resort lifestyle destination anchored at the township heart",
      desc: "The multi-level social clubhouse features a resort-style swimming pool, indoor badminton & squash courts, gym, banquet hall, and outdoor sports facilities.",
      highlights: [
        "Half-Olympic swimming pool with poolside sun deck & kids splash zone",
        "Modern fitness centre, yoga terrace & indoor recreation lounge",
        "Multi-purpose lawn for resident events and celebrations",
      ],
    },
    entry: {
      title: "Boulevard Entry & Security Gatehouse",
      subtitle: "Grand ceremonial arrival with multi-tier access security",
      desc: "A wide tree-lined access boulevard leads to the architectural entry plaza, equipped with RFID boom barriers, CCTV surveillance, and separate visitor lanes.",
      highlights: [
        "Grand security gatehouse with 24/7 security personnel post",
        "Dedicated deceleration lanes off Sector 22D main arterial road",
        "Separate pedestrian turnstiles and delivery drop-off zone",
      ],
    },
  };

  const architecturalPillars = [
    {
      icon: Trees,
      title: "Open Landscape & Sky Ratio",
      desc: "Substantial land area dedicated to open-to-sky landscaped courtyards, water promenades, and sports grounds, ensuring a clean and low-density environment.",
    },
    {
      icon: Car,
      title: "Peripheral Traffic Engineering",
      desc: "Vehicles enter directly into peripheral loop roads and subterranean parking, creating an entirely pedestrian-safe central courtyard for children and elders.",
    },
    {
      icon: Compass,
      title: "Solar & Vastu Path Alignment",
      desc: "Towers are calculated to maximize morning winter sunlight while deflecting intense afternoon solar radiation, ensuring energy-efficient microclimates.",
    },
    {
      icon: Waves,
      title: "Integrated Water Features",
      desc: "Central water promenade and fountain cascades help cool ambient air temperatures and produce soothing acoustic background ambiance across the estate.",
    },
  ];

  const siteDataSheet = [
    { label: "Project Name", value: "Northwind Estate" },
    { label: "Location", value: "Sector 22D, Yamuna Expressway (YEIDA)" },
    { label: "Development Type", value: "Gated Residential Township" },
    { label: "Density Profile", value: "Low-Density High-Rise Living" },
    { label: "Configurations", value: "3 BHK & 4 BHK Luxury Residences" },
    { label: "Connectivity", value: "Direct Access to Expressway & Jewar Airport" },
    { label: "Key Landmarks", value: "Noida Intl Airport, F1 Circuit, Film City" },
    { label: "Current Status", value: "Pre-Launch • Expressions of Interest" },
  ];

  const townshipGallery = [
    {
      src: "/images/configurations/master-plan-gallery-aerial.jpg",
      title: "Township Aerial Master Overview",
      tag: "Master Layout",
    },
    {
      src: "/images/configurations/master-plan-gallery-entrance.jpg",
      title: "Grand Boulevard Gatehouse",
      tag: "Arrival Plaza",
    },
    {
      src: "/images/configurations/master-plan-gallery-clubhouse-pool.jpg",
      title: "Clubhouse & Resort Pool",
      tag: "Recreation Hub",
    },
    {
      src: "/images/configurations/master-plan-gallery-botanical-park.jpg",
      title: "Central Botanical Courtyard",
      tag: "Green Promenade",
    },
  ];

  return (
    <div className="bg-[#FFFCEC] text-[#0D3829] overflow-hidden">
      {/* 1. ARCHITECTURAL TECHNICAL HERO */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/site-master-layout-plan-hero.jpg"
            alt="Northwind Estate Master Layout Plan Aerial Rendering"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 text-center mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight text-center drop-shadow-lg">
              Site &amp; <span className="text-[#ACC78C]">Master Layout</span> Plan
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed text-center max-w-2xl drop-shadow">
              Explore the architectural master planning of Northwind Estate in Sector 22D Yamuna Expressway. Low-density residential footprint framing expansive central botanical greens and resort lifestyle amenities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE MASTER PLAN BLUEPRINT EXPLORER */}
      <section className="py-16 sm:py-24 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
                Plan Viewer &amp; Layer Inspector
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
                Interactive Township Master Plan
              </h2>
              <p className="text-xs sm:text-sm text-[#2D3C25] font-light">
                Use the layer tabs to explore specific zones, or use the zoom controls to inspect layout details.
              </p>
            </div>

            {/* Layer Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {[
                { id: "all", label: "Full Township" },
                { id: "towers", label: "Residential Towers" },
                { id: "greens", label: "Central Green Spine" },
                { id: "clubhouse", label: "Clubhouse & Pool" },
                { id: "entry", label: "Boulevard Entry" },
              ].map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    activeLayer === layer.id
                      ? "bg-[#0D3829] text-[#FFFCEC] shadow-md"
                      : "bg-[#F4F1DF] text-[#0D3829] hover:bg-[#0D3829]/10"
                  }`}
                >
                  {layer.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Master Plan Canvas Viewport with Zoom Tools */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              {/* Zoom Controls Bar */}
              <div className="flex items-center justify-between border-b border-[#0D3829]/10 pb-3">
                <span className="text-xs font-semibold text-[#0D3829] flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0D3829]" />
                  <span>Master Plan Vector Blueprint</span>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomIn}
                    aria-label="Zoom In"
                    className="p-1.5 rounded-lg bg-[#F4F1DF] hover:bg-[#0D3829] hover:text-[#FFFCEC] transition cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    aria-label="Zoom Out"
                    className="p-1.5 rounded-lg bg-[#F4F1DF] hover:bg-[#0D3829] hover:text-[#FFFCEC] transition cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    aria-label="Reset Zoom"
                    className="p-1.5 rounded-lg bg-[#F4F1DF] hover:bg-[#0D3829] hover:text-[#FFFCEC] transition cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-[#5E7168] pl-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </div>
              </div>

              {/* Viewport Container */}
              <div className="relative aspect-[16/10] bg-[#F4F1DF]/50 rounded-xl overflow-hidden flex items-center justify-center p-4 group/viewer">
                <motion.div
                  animate={{ scale: zoomLevel }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src="/images/floor-plans/site-master-plan.svg"
                    alt="Northwind Estate Master Layout Vector Blueprint"
                    fill
                    className="object-contain p-2 transition-transform duration-500 ease-out group-hover/viewer:scale-105"
                  />
                </motion.div>
              </div>

              <p className="text-[11px] text-[#5E7168] italic text-center">
                *Architectural master plan diagram for spatial reference. Exact tower coordinates and landscaping details provided in developer blueprints.
              </p>
            </div>

            {/* Active Layer Description Panel */}
            <div className="lg:col-span-4 bg-[#0D3829] text-[#FFFCEC] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="border-b border-[#ACC78C]/20 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
                  Zoning Details
                </span>
                <h3 className="text-xl font-serif font-bold text-[#FFFCEC] pt-1">
                  {siteLayers[activeLayer].title}
                </h3>
                <p className="text-xs text-[#ACC78C] italic pt-0.5">
                  {siteLayers[activeLayer].subtitle}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-xs sm:text-sm text-[#FFFCEC]/85 font-light leading-relaxed">
                    {siteLayers[activeLayer].desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs">
                    {siteLayers[activeLayer].highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[#ACC78C]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="pt-4 border-t border-[#ACC78C]/20">
                <a
                  href="#enquire"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-[#ACC78C] text-[#0D3829] text-xs font-bold hover:bg-[#ACC78C]/90 transition"
                >
                  Download CAD / PDF Master Plan <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SITE PLANNING & ARCHITECTURAL PILLARS */}
      <section className="py-16 sm:py-24 bg-[#F4F1DF] border-y border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Planning Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Four Pillars of Northwind Master Planning
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Every dimension of the site layout is engineered for long-term resident comfort, ecological harmony, and seamless daily logistics.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedReveal
                  key={pillar.title}
                  direction="up"
                  delay={i * 0.08}
                  className="bg-white border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#0D3829] transition space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#ACC78C]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0D3829]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TOWNSHIP PERSPECTIVES GALLERY */}
      <section className="py-16 sm:py-24 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedReveal direction="up" className="max-w-3xl space-y-2 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Architectural Visualizations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Township Perspectives &amp; Master Renderings
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light">
              Visual impressions illustrating the arrival plaza, central courtyard, and resort clubhouse.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {townshipGallery.map((item, idx) => (
              <AnimatedReveal
                key={item.title}
                direction="up"
                delay={idx * 0.06}
                className="group rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-sm bg-[#0D3829]"
              >
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D3829]/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#ACC78C] border border-[#ACC78C]/20">
                    {item.tag}
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-white border-t border-[#0D3829]/10">
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#0D3829] line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h4>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY LAND & TECHNICAL DATA SHEET */}
      <section className="py-16 sm:py-20 bg-[#F4F1DF] border-t border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedReveal direction="up" className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Official Project Parameters
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Key Land &amp; Master Layout Data Sheet
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Verified project parameters for Northwind Estate, Sector 22D Yamuna Expressway.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {siteDataSheet.map((item, i) => (
              <AnimatedReveal
                key={item.label}
                direction="up"
                delay={i * 0.04}
                className="bg-white border border-[#0D3829]/15 rounded-xl p-5 shadow-xs hover:border-[#0D3829] transition"
              >
                <span className="text-[11px] font-semibold text-[#5E7168] uppercase tracking-wider block">
                  {item.label}
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0D3829] font-serif pt-1">
                  {item.value}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY & SALES DESK SECTION */}
      <section id="enquire" className="py-16 sm:py-24 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal direction="up" className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
                  Master Plan Downloads
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
                  Request High-Resolution Master Plan PDF
                </h2>
                <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  Submit your contact information to receive the complete township architectural booklet, CAD layout schematics, and schedule a priority site tour in Sector 22D Yamuna Expressway.
                </p>
              </AnimatedReveal>

              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
                <h4 className="font-serif font-bold text-[#0D3829]">Documentation Package:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Official High-Resolution Master Layout Plan PDF</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Tower Orientation, Sun Path &amp; Elevation Drawings</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Complimentary Site Visit Free Cab Pick-Up</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-5 sm:p-8 shadow-xl">
                <div className="mb-6 space-y-1 text-center lg:text-left">
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Download Site &amp; Master Layout Dossier
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light">
                    Receive high-resolution architectural layout PDFs and location maps.
                  </p>
                </div>
                <LeadForm
                  sourceCTA="Master Plan Page Bottom Form"
                  sourcePage="/configurations/site-master-layout-plan"
                  defaultConfig="Site Master Plan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <FAQSection faqs={faqs} />
    </div>
  );
}
