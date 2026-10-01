"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, Download, CheckCircle2, Maximize2, X, Home, Building } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

interface FloorPlanItem {
  id: "3BHK" | "4BHK" | "MASTER";
  title: string;
  subtitle: string;
  bhk: string;
  size: string;
  price: string;
  image: string;
  realVisual: string;
  features: string[];
}

export default function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState<"3BHK" | "4BHK" | "MASTER">("3BHK");
  const [viewMode, setViewMode] = useState<"blueprint" | "render">("render");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
  const { openLeadModal } = useLeadModal();

  const floorPlansData: Record<"3BHK" | "4BHK" | "MASTER", FloorPlanItem> = {
    "3BHK": {
      id: "3BHK",
      title: "3 BHK Luxury Floor Layout",
      subtitle: "Spacious 3 Bedroom Residence with Dual Balconies",
      bhk: "3 BHK",
      size: "Price / Area on Request",
      price: "Price on Request",
      image: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
      realVisual: "/images/extracted/Image-2.jpg",
      features: [
        "Spacious Foyer & Living/Dining Area (24'0\" x 16'6\")",
        "Large Balconies with UPVC Toughened Glass",
        "Master Suite with Attached Bath & Dressing Room",
        "Vitrified Tiles & Gypsum False Ceiling Setup",
        "Optimized Natural Cross Ventilation"
      ]
    },
    "4BHK": {
      id: "4BHK",
      title: "4 BHK Ultra Estate Layout",
      subtitle: "Expansive 4 Bedroom Residence with Servant Utility",
      bhk: "4 BHK",
      size: "Price / Area on Request",
      price: "Price on Request",
      image: "/images/floor-plans/4bhk-estate-floor-plan.svg",
      realVisual: "/images/extracted/Banner.jpg",
      features: [
        "4 Bedrooms with En-Suite Bathrooms",
        "Double-Height Balcony Access Options",
        "Dedicated Utility & Servant Quarter",
        "Anti-Skid Balcony Tiles & Premium CP Fittings",
        "Private Foyer & High-Speed Elevator Access"
      ]
    },
    "MASTER": {
      id: "MASTER",
      title: "Sector 22D Master Site Plan",
      subtitle: "Low-Density Gated Community Master Layout",
      bhk: "Master Plan",
      size: "Low-Density Layout",
      price: "Master Layout Plan",
      image: "/images/floor-plans/site-master-plan.svg",
      realVisual: "/images/extracted/Image-3.jpg",
      features: [
        "Low-Density Residential Towers with Maximum Greenery",
        "Central Zen Park, Jogging & Walking Circuits",
        "Podium-Level Amenities, Clubhouse & Swimming Pool",
        "3-Tier Multi-Layer Security & Dual Gatehouses",
        "Direct Access to 60M Wide Sector Road"
      ]
    }
  };

  const currentPlan = floorPlansData[activeTab];

  return (
    <section id="floor-plans" className="py-20 bg-[#F4F1DF] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Architectural Master &amp; Floor Layouts
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Project Floor &amp; Master Plans
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Explore 2D blueprint layouts, architectural renders, and the master site layout for Northwind Estate, Sector 22D Yamuna Expressway.
          </p>
        </div>

        {/* Top Cards Quick Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {(Object.keys(floorPlansData) as Array<"3BHK" | "4BHK" | "MASTER">).map((key) => {
            const plan = floorPlansData[key];
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 rounded-xl border transition-all text-left flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#FFFCEC] border-[#0D3829] shadow-md ring-1 ring-[#0D3829]"
                    : "bg-[#FFFCEC]/80 border-[#0D3829]/15 hover:border-[#0D3829]/40"
                }`}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F4F1DF] border border-[#0D3829]/15 flex-shrink-0">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-1 left-1 bg-[#0D3829]/90 text-[#FFFCEC] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    {plan.bhk}
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h3 className="font-serif font-bold text-sm text-[#0D3829] truncate">
                      {plan.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#0D3829] bg-[#ACC78C]/35 border border-[#0D3829]/20 px-1.5 py-0.5 rounded-md flex-shrink-0">
                      Coming Soon
                    </span>
                    <p className="text-xs text-[#5E7168] truncate font-light">
                      {plan.size}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Floor Plan Interactive Showcase */}
        <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Floor Blueprint Container */}
            <div className="order-1 lg:order-1 lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/15 group">
                <Image
                  src={viewMode === "render" ? currentPlan.realVisual : currentPlan.image}
                  alt={currentPlan.title}
                  fill
                  className={`transition-all duration-300 ${
                    viewMode === "render" ? "object-cover" : "object-contain p-4 bg-[#FFFCEC]"
                  }`}
                  priority
                />
                
                {/* Overlay Top Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="bg-[#0D3829] text-[#FFFCEC] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs border border-[#ACC78C]/30 flex items-center gap-2">
                    <span>{currentPlan.bhk} • {viewMode === "render" ? "Architectural Elevation" : "2D Blueprint"}</span>
                    <span className="bg-[#ACC78C] text-[#0D3829] font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>

                  <button
                    onClick={() => setLightboxImage({
                      src: viewMode === "render" ? currentPlan.realVisual : currentPlan.image,
                      title: `${currentPlan.title} (${viewMode === "render" ? "Architectural Elevation" : "2D Blueprint"})`
                    })}
                    className="pointer-events-auto bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs border border-[#0D3829]/20 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#0D3829]" />
                    <span>Zoom Plan</span>
                  </button>
                </div>
              </div>

              {/* View Mode Switcher Pills */}
              <div className="flex items-center justify-center gap-3 pt-1">
                
                <button
                  onClick={() => setViewMode("render")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer border flex items-center gap-2 ${
                    viewMode === "render"
                      ? "bg-[#0D3829] text-[#FFFCEC] border-[#0D3829]"
                      : "bg-[#0D3829]/10 text-[#0D3829] border-[#0D3829]/15 hover:bg-[#0D3829]/20"
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Architectural Elevation</span>
                </button>
                <button
                  onClick={() => setViewMode("blueprint")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer border flex items-center gap-2 ${
                    viewMode === "blueprint"
                      ? "bg-[#0D3829] text-[#FFFCEC] border-[#0D3829]"
                      : "bg-[#0D3829]/10 text-[#0D3829] border-[#0D3829]/15 hover:bg-[#0D3829]/20"
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>2D Blueprint Layout</span>
                </button>
              </div>
            </div>

            {/* Plan Details & Lead CTA */}
            <div className="order-2 lg:order-2 lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-semibold text-[#0D3829] uppercase tracking-wider block mb-1">
                  Architectural Specification
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0D3829] mb-2">
                  {currentPlan.title}
                </h3>
                <p className="text-xs text-[#5E7168] font-light mb-4 leading-relaxed">
                  {currentPlan.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#0D3829]">
                  <span className="bg-[#0D3829] text-[#FFFCEC] px-3 py-1.5 rounded-lg border border-[#ACC78C]/40 font-bold uppercase tracking-wider text-[10px]">
                    Coming Soon
                  </span>
                  <span className="bg-[#F4F1DF] px-3.5 py-1.5 rounded-lg border border-[#0D3829]/15 font-semibold">
                    Dimensions: {currentPlan.size}
                  </span>
                  <span className="bg-[#0D3829]/10 text-[#0D3829] px-3.5 py-1.5 rounded-lg border border-[#0D3829]/20 font-bold">
                    {currentPlan.price}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#0D3829]/15">
                <h4 className="text-xs font-serif font-bold text-[#0D3829] uppercase tracking-wider">
                  Key Layout Highlights
                </h4>
                <ul className="space-y-2 text-xs text-[#2D3C25]">
                  {currentPlan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                      <span className="font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() =>
                    openLeadModal({
                      title: `Request ${currentPlan.title} PDF`,
                      preferredConfig: currentPlan.bhk,
                      ctaSource: `Floor Plan Section ${currentPlan.bhk}`,
                    })
                  }
                  className="w-full bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold py-3 px-6 rounded-lg text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#ACC78C]" />
                  <span>Download High-Res {currentPlan.bhk} Plan PDF</span>
                </button>

                <p className="text-[11px] text-[#5E7168] text-center font-light">
                  Includes exact room dimensions, balcony layout &amp; payment schedule.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Centered CTA */}
        <div className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Download Complete Floor Plans & Master Brochure",
                ctaSource: "Floor Plans Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#ACC78C]" />
            <span>Download All Floor Plans &amp; Master Brochure</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Zooming Floor Plan Images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0D3829]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#FFFCEC] rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 text-[#0D3829]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#0D3829]/15">
              <h3 className="font-serif font-bold text-[#0D3829] text-base sm:text-lg">
                {lightboxImage.title}
              </h3>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-full bg-[#0D3829]/10 hover:bg-[#0D3829]/20 text-[#0D3829] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/15">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setLightboxImage(null);
                  openLeadModal({
                    title: `Download ${lightboxImage.title} PDF`,
                    ctaSource: "Floor Plan Lightbox Zoom",
                  });
                }}
                className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer border border-[#ACC78C]/30"
              >
                <Download className="w-4 h-4 text-[#ACC78C]" />
                <span>Download Official Plan PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

