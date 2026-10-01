"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Bath,
  Compass,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Phone,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  SunMedium,
  Wind,
  Home,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";

interface ThreeBhkClientProps {
  faqs: FAQItem[];
}

export default function ThreeBhkClient({ faqs }: ThreeBhkClientProps) {
  const [activeRoomTab, setActiveRoomTab] = useState<number>(0);

  const keySpecs = [
    { label: "Configuration", value: "3 Bedrooms + Grand Living + Dining" },
    { label: "Balconies", value: "Dual-Aspect Expansive Sit-out Balconies" },
    { label: "Flooring", value: "Premium Vitrified Tiles in Living & Bedrooms" },
    { label: "Kitchen Counter", value: "Polished Granite Counter with Double SS Sink" },
    { label: "Ventilation", value: "Dual-Aspect Cross Ventilation & Daylight" },
    { label: "Balcony Railings", value: "Toughened Safety Glass with UPVC Frames" },
    { label: "Electrical", value: "Concealed Copper Wiring with Modular Switches" },
    { label: "Pricing & Status", value: "Pre-Launch • Price on Request" },
  ];

  const spatialRooms = [
    {
      id: "living",
      title: "Grand Living & Dining Pavilion",
      subtitle: "The central entertainment hub connecting seamlessly to outdoor greens",
      image: "/images/configurations/3-bhk-gallery-living-room.jpg",
      dimensions: "Expansive Open Plan",
      highlights: [
        "Floor-to-ceiling double-glazed UPVC windows",
        "Direct access to panoramic landscaped sit-out balcony",
        "Concealed provisions for ambient LED cove lighting",
        "Premium large-format vitrified Italian-style tiles",
      ],
      description:
        "Designed with zero dead-space philosophy, the expansive living and dining salon accommodates comfortable family gatherings and formal guest entertaining with abundant natural light.",
    },
    {
      id: "master",
      title: "Master Bedroom Suite",
      subtitle: "A private retreat oriented for morning sunrise and acoustic tranquility",
      image: "/images/configurations/3-bhk-gallery-master-bedroom.jpg",
      dimensions: "King-Size Suite + En-Suite Bath",
      highlights: [
        "Dedicated wardrobe dressing alcove",
        "En-suite designer bathroom with branded CP fittings",
        "Private morning balcony with panoramic garden vista",
        "Acoustic insulated walls for quiet relaxation",
      ],
      description:
        "The master bedroom offers a soothing private haven with warm wooden-texture finishes, expansive wardrobe provisions, and an attached luxury bathroom.",
    },
    {
      id: "kitchen",
      title: "Gourmet Modular Kitchen",
      subtitle: "Ergonomic culinary space with separate dry service balcony",
      image: "/images/configurations/3-bhk-gallery-kitchen.jpg",
      dimensions: "Dual Counter Layout",
      highlights: [
        "Granite prep countertop with double bowl stainless steel sink",
        "Ceramic dado tiling up to 2 feet above counter",
        "Dedicated utility balcony for washing machine & storage",
        "Provision for chimney, RO water purifier & piped gas",
      ],
      description:
        "Engineered for modern cooking, the modular kitchen integrates ample storage, optimal work-triangle ergonomics, and natural exhaust airflow through the utility zone.",
    },
    {
      id: "balcony",
      title: "Balcony Landscape Sit-Out",
      subtitle: "Private open-air terrace overlooking central water promenade",
      image: "/images/configurations/3-bhk-gallery-balcony.jpg",
      dimensions: "Wide Deep Sit-out",
      highlights: [
        "Toughened safety glass railing with anti-skid floor tiles",
        "Unobstructed views over podium greens and water fountains",
        "Weatherproof external electrical sockets",
        "Ideal space for morning coffee or evening reading",
      ],
      description:
        "Extending the interior living zones into the fresh outdoors, the deep sit-out balconies provide refreshing views across Yamuna Expressway's lush green township courtyards.",
    },
  ];

  return (
    <div className="bg-[#FFFCEC] text-[#0D3829] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/3-bhk-luxury-apartment-hero.jpg"
            alt="3 BHK Luxury Apartment Interior Northwind Estate"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 text-center mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight text-center drop-shadow-lg">
              3 BHK <span className="text-[#ACC78C]">Luxury Apartment</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed text-center max-w-2xl drop-shadow">
              Thoughtfully engineered for modern family living. Enjoy generous proportions, dual-aspect natural light, expansive balconies, and zero dead-space efficiency in Sector 22D.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SPATIAL ARCHITECTURE PILLARS (OVERVIEW) */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimatedReveal direction="up" className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Residential Planning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Engineered for Light, Space &amp; Quiet Functionality
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Every square foot of the 3 BHK layout is carefully optimized to enhance natural cross-ventilation, eliminate wasted corridor square footage, and create distinct zones for social entertaining and peaceful sleep.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedReveal
              direction="up"
              delay={0.1}
              className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-[#0D3829]/40 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center">
                <SunMedium className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0D3829]">Dual-Aspect Natural Sunlight</h3>
              <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                Strategic corner window placements ensure daylight fills both the central living salon and private bedrooms throughout the morning and afternoon.
              </p>
            </AnimatedReveal>

            <AnimatedReveal
              direction="up"
              delay={0.2}
              className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-[#0D3829]/40 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center">
                <Wind className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0D3829]">Continuous Cross-Ventilation</h3>
              <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                Opposing balcony openings create continuous natural air drafts, reducing artificial cooling requirements and keeping interior air fresh.
              </p>
            </AnimatedReveal>

            <AnimatedReveal
              direction="up"
              delay={0.3}
              className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-[#0D3829]/40 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center">
                <Home className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0D3829]">Zero Dead-Space Efficiency</h3>
              <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                Corridors are minimized to dedicate maximum usable square footage to functional living areas, bedroom suites, and utility balconies.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* 3. ROOM-BY-ROOM INTERACTIVE TOUR */}
      <section className="py-16 sm:py-20 bg-[#F4F1DF] border-t border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedReveal direction="up" className="max-w-2xl space-y-2 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Spatial Tour
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Room-by-Room Interior Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light">
              Explore the architectural highlights and thoughtful finishes of each space within the 3 BHK layout.
            </p>
          </AnimatedReveal>

          {/* Room Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#0D3829]/15 pb-3">
            {spatialRooms.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeRoomTab === idx
                    ? "bg-[#0D3829] text-[#FFFCEC] shadow-md"
                    : "bg-[#FFFCEC] text-[#0D3829] hover:bg-[#0D3829]/10 border border-[#0D3829]/10"
                }`}
              >
                {room.title}
              </button>
            ))}
          </div>

          {/* Active Room Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-xl bg-[#0D3829]">
                <Image
                  src={spatialRooms[activeRoomTab].image}
                  alt={spatialRooms[activeRoomTab].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 bg-[#FFFCEC] border border-[#0D3829]/15 p-6 sm:p-8 rounded-2xl shadow-xs">
              <div>
                <span className="text-xs font-semibold text-[#0D3829] uppercase tracking-wider block">
                  {spatialRooms[activeRoomTab].dimensions}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829] pt-1">
                  {spatialRooms[activeRoomTab].title}
                </h3>
                <p className="text-xs text-[#5E7168] italic pt-0.5">
                  {spatialRooms[activeRoomTab].subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                {spatialRooms[activeRoomTab].description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#0D3829]/10">
                <p className="text-xs font-bold text-[#0D3829] uppercase tracking-wider">Key Specifications:</p>
                <ul className="space-y-1.5">
                  {spatialRooms[activeRoomTab].highlights.map((item) => (
                    <li key={item} className="text-xs text-[#2D3C25] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED SPECIFICATIONS TABLE */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] border-t border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedReveal direction="up" className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
              Architectural Standard
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
              Key Specifications &amp; Material Schedule
            </h2>
            <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
              Every fixture and fitting is chosen to ensure enduring durability, easy maintenance, and refined aesthetics.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {keySpecs.map((spec, i) => (
              <AnimatedReveal
                key={spec.label}
                direction="up"
                delay={i * 0.05}
                className="bg-white border border-[#0D3829]/15 rounded-xl p-3.5 sm:p-5 shadow-xs hover:border-[#0D3829] transition"
              >
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#5E7168] uppercase tracking-wider block">
                  {spec.label}
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0D3829] font-serif pt-1">
                  {spec.value}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY & SALES DESK SECTION */}
      <section id="enquire" className="py-16 sm:py-20 bg-[#FFFCEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal direction="up" className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3829] block">
                  Official Sales Desk
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0D3829]">
                  Enquire for 3 BHK Pricing &amp; Site Visit
                </h2>
                <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  Connect directly with our dedicated real estate advisors for authentic pre-launch cost sheets, customized installment schedules, and priority site visit bookings.
                </p>
              </AnimatedReveal>

              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
                <h4 className="font-serif font-bold text-[#0D3829]">What You Receive:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Official 3 BHK Price Breakdown &amp; Payment Schedule</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>High-Resolution Architectural Floor Plan Blueprint PDF</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#2D3C25]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0" />
                    <span>Complimentary Site Visit Free Cab Pick-up Service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-5 sm:p-8 shadow-xl">
                <div className="mb-6 space-y-1 text-center lg:text-left">
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request 3 BHK Brochure &amp; Price List
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light">
                    Submit your details to receive instant digital floor plans and cost breakdown.
                  </p>
                </div>
                <LeadForm
                  sourceCTA="3 BHK Page Bottom Form"
                  sourcePage="/configurations/3-bhk-luxury-apartment"
                  defaultConfig="3 BHK"
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
