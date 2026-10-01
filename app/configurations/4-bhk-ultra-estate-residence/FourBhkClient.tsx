"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Bath,
  Compass,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Crown,
  Layers,
  Sparkles,
  Phone,
  ShieldCheck,
  ChevronRight,
  Maximize,
  Sliders,
  Feather,
  Sparkle,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";

interface FourBhkClientProps {
  faqs: FAQItem[];
}

export default function FourBhkClient({ faqs }: FourBhkClientProps) {
  const executiveSpecs = [
    { label: "Total Bedrooms", value: "4 En-Suite Bedrooms + Powder Room", icon: BedDouble },
    { label: "Balcony Expanse", value: "Triple-Aspect Panoramic Sky Terraces", icon: Maximize2 },
    { label: "Living Salon", value: "Grand Formal Salon + Family Lounge", icon: Crown },
    { label: "Kitchen Suite", value: "Chef's Kitchen with Dry Utility Quarters", icon: Layers },
    { label: "Vastu & Light", value: "100% Vastu Orientations with 270° Vista", icon: Compass },
    { label: "Acoustics & Glass", value: "Double Glazed Acoustic UPVC Fenestration", icon: ShieldCheck },
  ];

  const alternatingWings = [
    {
      wing: "The Grand Entertaining Pavilion",
      subtitle: "Formal salon, dining terrace & family lounge",
      image: "/images/configurations/4-bhk-gallery-grand-living.jpg",
      points: [
        "Floor-to-ceiling panoramic glass walls with sweeping estate horizon views",
        "Direct connection to private outdoor sunset sky terrace",
        "Seamless open-plan design accommodating grand banquet dining",
        "Acoustically buffered from private sleeping quarters",
      ],
      description:
        "The social anchor of the residence. Conceived for effortless entertaining, this expansive salon combines generous proportions, dramatic natural daylighting, and direct indoor-outdoor flow onto the wide sunset terrace.",
      reverse: false,
    },
    {
      wing: "The Presidential Master Sanctuary",
      subtitle: "Private suite, dressing salon & spa bathroom",
      image: "/images/configurations/4-bhk-gallery-master-suite.jpg",
      points: [
        "Spacious bedroom suite positioned for gentle morning sunlight",
        "Dedicated walk-in wardrobe and vanity alcove",
        "Spa-grade en-suite bath with premium sanitaryware",
        "Private morning coffee balcony overlooking central greens",
      ],
      description:
        "An exclusive sanctuary of calm. Tucked away in a dedicated private wing, the master bedroom delivers an uncompromised hotel-suite experience with custom dressing spaces and an attached luxury bathroom.",
      reverse: true,
    },
    {
      wing: "Penthouse Social Lounge & Sky Terraces",
      subtitle: "Relaxed family pavilion with elevated green vistas",
      image: "/images/configurations/4-bhk-gallery-penthouse-lounge.jpg",
      points: [
        "Second dedicated family lounge for movie nights and reading",
        "Deep shaded balcony designed for all-weather outdoor lounging",
        "Vitrified slip-resistant designer tile flooring",
        "Unobstructed views over Yamuna Expressway's central green courtyards",
      ],
      description:
        "Providing flexibility for modern multi-generational families, the secondary family lounge serves as a relaxed evening retreat, separate from the primary formal entertaining salon.",
      reverse: false,
    },
  ];

  return (
    <div className="bg-[#FFFCEC] text-[#0D3829] overflow-hidden">
      {/* 1. EDITORIAL IMMERSIVE HERO */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/4-bhk-ultra-estate-residence-hero.jpg"
            alt="4 BHK Ultra Estate Residence Penthouse Interior"
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
              4 BHK <span className="text-[#ACC78C]">Ultra Estate</span> Residence
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed text-center max-w-2xl drop-shadow">
              An uncompromised statement of expansive luxury on Yamuna Expressway. Crafted for multi-generational families demanding generous scale, complete acoustic privacy, and panoramic sky terraces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ASYMMETRICAL EDITORIAL INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Left Column: Editorial Philosophy */}
            <AnimatedReveal direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
                The Ultra Estate Concept
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829] leading-tight">
                Architectural Grandeur Designed for Family Legacies
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#2D3C25] font-light leading-relaxed">
                The 4 BHK Ultra Estate residences at Northwind Estate represent the pinnacle of architectural space planning. Designed with a dual-wing layout, they gracefully decouple lively social gatherings from tranquil sleeping quarters.
              </p>

              <div className="border-l-2 border-[#0D3829] pl-4 py-1 space-y-1 bg-[#F4F1DF]/50 rounded-r-xl">
                <p className="font-serif italic text-sm text-[#0D3829]">
                  &quot;True luxury is the abundance of space, daylight, and acoustic quietude.&quot;
                </p>
                <p className="text-[11px] text-[#5E7168] uppercase tracking-wider">
                  — Northwind Architectural Design Ethos
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-[#2D3C25]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                  <span>Triple-aspect corner vistas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                  <span>Dual entertainment lounges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                  <span>Dedicated powder room for guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                  <span>Staff utility access corridor</span>
                </div>
              </div>
            </AnimatedReveal>

            {/* Right Column: Asymmetrical Featured Visual Card */}
            <AnimatedReveal direction="right" className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#0D3829]/15 shadow-2xl bg-[#0D3829]">
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src="/images/configurations/4-bhk-gallery-sky-terrace.jpg"
                    alt="Northwind Estate Sky Terrace Sunset View"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[#0D3829] text-[#FFFCEC] space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
                    Sky Terrace Panorama
                  </p>
                  <p className="text-sm font-serif font-medium">
                    Expansive open-air terraces framing the central water promenades and landscaped podiums.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* 3. DUAL-WING SPATIAL ARCHITECTURE (ALTERNATING SECTIONS) */}
      <section className="py-16 sm:py-24 bg-[#F4F1DF] border-y border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Spatial Zoning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Dual-Wing Layout: Entertaining vs. Quiet Privacy
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Explore how each wing of the 4 BHK Ultra Estate residence is purpose-built to deliver distinct lifestyle experiences.
            </p>
          </AnimatedReveal>

          {alternatingWings.map((item, idx) => (
            <div
              key={item.wing}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Block */}
              <AnimatedReveal
                direction={item.reverse ? "right" : "left"}
                className={`lg:col-span-7 ${item.reverse ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-xl bg-[#0D3829]">
                  <Image
                    src={item.image}
                    alt={item.wing}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </AnimatedReveal>

              {/* Text Block */}
              <AnimatedReveal
                direction={item.reverse ? "left" : "right"}
                className={`lg:col-span-5 space-y-4 ${item.reverse ? "lg:order-1" : "lg:order-2"}`}
              >
                <div>
                  <span className="text-xs font-semibold text-[#0D3829] uppercase tracking-wider block">
                    Wing 0{idx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829] pt-1">
                    {item.wing}
                  </h3>
                  <p className="text-xs text-[#5E7168] italic pt-0.5">{item.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#0D3829]/10">
                  {item.points.map((pt) => (
                    <li key={pt} className="text-xs text-[#2D3C25] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BESPOKE SPECIFICATIONS GRID */}
      <section className="py-16 sm:py-20 bg-[#F4F1DF] border-t border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedReveal direction="up" className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Executive Fit-Outs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Ultra Estate Material Schedule &amp; Specifications
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Crafted with premium architectural fittings, double-glazed fenestration, and durable finishes engineered for lasting value.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {executiveSpecs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <AnimatedReveal
                  key={spec.label}
                  direction="up"
                  delay={i * 0.05}
                  className="bg-white border border-[#0D3829]/15 rounded-2xl p-4 sm:p-6 shadow-xs hover:border-[#0D3829] transition space-y-2.5 sm:space-y-3"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0D3829]/10 text-[#0D3829] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#0D3829]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5E7168] uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#0D3829] font-serif pt-0.5 sm:pt-1">
                      {spec.value}
                    </p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. VIP CONSULTATION & FORM */}
      <section id="enquire" className="py-16 sm:py-24 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal direction="up" className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
                  Private Sales Desk
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
                  Book a Private 4 BHK Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  Our senior portfolio managers provide one-on-one walkthroughs, customized payment structuring, and private cab pickup to Northwind Estate Sector 22D Yamuna Expressway.
                </p>
              </AnimatedReveal>

              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
                <h4 className="font-serif font-bold text-[#0D3829]">VIP Privileges Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Exclusive Pre-Launch Pricing &amp; Penthouse Tier Allotment</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Comprehensive Vector Floor Plan Dossier PDF</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Complimentary Private Cab Pick-Up for Site Inspection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-5 sm:p-8 shadow-xl">
                <div className="mb-6 space-y-1 text-center lg:text-left">
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request 4 BHK Ultra Estate Dossier
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light">
                    Submit your details for authentic price breakdowns and floor plan PDFs.
                  </p>
                </div>
                <LeadForm
                  sourceCTA="4 BHK Page Bottom Form"
                  sourcePage="/configurations/4-bhk-ultra-estate-residence"
                  defaultConfig="4 BHK"
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
