"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Trees,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  Target,
  Sparkles,
  Plane,
  MapPin,
  Dumbbell,
  FileText,
  Calendar,
  Layers,
  Phone,
  Award,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedReveal from "@/components/AnimatedReveal";
import TiltCard from "@/components/TiltCard";
import FAQSection from "@/components/FAQSection";
import { useLeadModal } from "@/components/LeadModalContext";
import { siteConfig } from "@/lib/siteConfig";

export default function AboutClient() {
  const { openLeadModal } = useLeadModal();

  const trustMetrics = [
    {
      icon: Trees,
      value: "Low Density",
      label: "Master Planned Enclave",
      desc: "Fewer units per acre for maximum open green views, natural light, and privacy.",
    },
    {
      icon: MapPin,
      value: "Sector 22D",
      label: "Yamuna Expressway",
      desc: "Direct connectivity to Greater Noida, Noida, Delhi, and Agra via 6-lane expressway.",
    },
    {
      icon: Plane,
      value: "Jewar Airport",
      label: "Growth Corridor",
      desc: "Close proximity to Noida International Airport, driving strong capital appreciation.",
    },
    {
      icon: Building2,
      value: "3 & 4 BHK",
      label: "Luxury Residences",
      desc: "Deep-deck balconies, vitrified flooring, and modern architectural specifications.",
    },
  ];

  const milestones = [
    {
      step: "01",
      title: "Strategic Corridor Selection",
      period: "Corridor Analysis",
      desc: "Identified Sector 22D on Yamuna Expressway as NCR's premier high-growth residential belt with direct access to Jewar Airport and upcoming Film City.",
    },
    {
      step: "02",
      title: "Low-Density Master Planning",
      period: "Architectural Design",
      desc: "Formulated a low-density site layout maximizing open-air ventilation, sun path alignment, and expansive central green landscaping.",
    },
    {
      step: "03",
      title: "Specification & Lifestyle Integration",
      period: "Amenity Planning",
      desc: "Integrated modern clubhouse facilities, resort-grade swimming pool, fitness gym, children's play park, and 3-tier security infrastructure.",
    },
    {
      step: "04",
      title: "Upcoming Project Launch",
      period: "Launch Phase",
      desc: "Preparing for official residential booking roll-out with transparent pricing, verified floor plans, and personalized buyer consultation.",
    },
  ];

  const corePillars = [
    {
      icon: Trees,
      title: "Low-Density Open Living",
      desc: "Designed with lower floor-area density compared to congested city centers, providing serene open-sky living and lush greenery.",
    },
    {
      icon: Plane,
      title: "Aviation Corridor Advantage",
      desc: "Situated strategically near Noida International Airport (Jewar), making it an ideal choice for end-users and smart real estate investors.",
    },
    {
      icon: Building2,
      title: "Contemporary Architecture",
      desc: "Spacious multi-deck balconies with UPVC toughened glass sliding doors, vitrified living zone tiles, and anti-skid balcony flooring.",
    },
    {
      icon: ShieldCheck,
      title: "3-Tier Gated Security",
      desc: "Dual entrance gatehouses with CCTV surveillance, smart access protocols, and 24x7 professional on-site security guards.",
    },
    {
      icon: Dumbbell,
      title: "Resort-Grade Amenities",
      desc: "Complete clubhouse, temperature-regulated swimming pool, fitness center, kids play area, and landscaped Zen garden trails.",
    },
    {
      icon: FileText,
      title: "Transparent Advisory",
      desc: "Clear documentation, verified layout blueprints, structured price sheets, and dedicated property consultant assistance.",
    },
  ];

  const workProcess = [
    {
      num: "01",
      title: "Site & Environmental Feasibility",
      desc: "Rigorous geographical and environmental assessment to maximize cross-ventilation, daylight penetration, and green space ratio.",
    },
    {
      num: "02",
      title: "Architectural Layout Drafting",
      desc: "Precision layout engineering for 3 BHK and 4 BHK homes with dedicated foyers, en-suite bathrooms, and expansive deep balconies.",
    },
    {
      num: "03",
      title: "Premium Material Specifications",
      desc: "Carefully selected vitrified tiles, granite kitchen countertops, stainless steel sinks, and durable UPVC weatherproof window frames.",
    },
    {
      num: "04",
      title: "Consultant-Led Buyer Experience",
      desc: "Dedicated real estate advisory providing end-to-end guidance from site visit cab coordination to payment schedule structuring.",
    },
  ];

  const offerings = [
    {
      title: "3 BHK Luxury Apartment",
      tag: "Popular Choice",
      desc: "Generously proportioned 3-bedroom residence with expansive living and dining hall, wide balconies, and optimal orientation.",
      image: "/images/extracted/Sector22dyamunaexpressway.webp",
      href: "/configurations/3-bhk-luxury-apartment",
    },
    {
      title: "4 BHK Ultra Estate Residence",
      tag: "Executive Living",
      desc: "Ultra-spacious 4-bedroom executive suite designed for multi-generational living with grand double balconies.",
      image: "/images/extracted/herohomes.webp",
      href: "/configurations/4-bhk-ultra-estate-residence",
    },
    {
      title: "Master Site Layout Plan",
      tag: "Gated Enclave",
      desc: "Master layout plan showcasing tower positioning, central green spine, clubhouse zone, and 60M wide sector road connectivity.",
      image: "/images/extracted/Image-3.jpg",
      href: "/configurations/site-master-layout-plan",
    },
  ];

  const aboutFaqs = [
    {
      question: "What makes Northwind Estate different from other developments on Yamuna Expressway?",
      answer: "Northwind Estate is specifically designed with a low-density living philosophy. Unlike high-density crowded projects, Northwind offers fewer residential units per acre, generous tower spacing, deep balconies, and expansive green landscaping.",
    },
    {
      question: "Where exactly is the project located on Yamuna Expressway?",
      answer: "Northwind Estate is situated in Sector 22D on the Yamuna Expressway, Greater Noida, Uttar Pradesh. It enjoys direct expressway access and is in close proximity to the upcoming Noida International Airport at Jewar.",
    },
    {
      question: "What configurations are offered at Northwind Estate?",
      answer: "The development features spacious 3 BHK luxury residences and expansive 4 BHK ultra estate apartments, each equipped with modern specifications and multi-deck balconies.",
    },
    {
      question: "How can I arrange a private site visit?",
      answer: "You can schedule a complimentary site visit by clicking the 'Schedule Site Visit' button on the page or calling our sales desk directly. Our team coordinates convenient site visit assistance.",
    },
    {
      question: "What are the core verified construction specifications?",
      answer: "Northwind Estate residences feature vitrified tile flooring in living and bedroom areas, anti-skid balcony tiles with UPVC toughened glass sliding doors, granite kitchen counters with stainless steel sinks, and Gypsum grid false ceilings.",
    },
  ];

  return (
    <div className="bg-[#FFFCEC] text-[#0D3829] overflow-hidden">
      
      {/* 1. HERO SECTION WITH 3D PERSPECTIVE CARD */}
      <section className="relative min-h-[90vh] flex items-center pt-28 sm:pt-32 pb-20 bg-[#0D3829] text-white overflow-hidden subtle-grid">
        {/* Full-bleed background layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Sector 22D Architectural Vision"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "About Us", href: "/about" }]} variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-xs font-semibold tracking-wider text-[#ACC78C] uppercase block">
                Architectural Pedigree • Sector 22D
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFCEC] leading-[1.12]">
                Crafting Landmark Residences in Yamuna Expressway
              </h1>

              <p className="text-sm sm:text-base text-[#FFFCEC]/85 font-light leading-relaxed max-w-2xl">
                Northwind Estate is a distinguished residential sanctuary in Sector 22D, Yamuna Expressway. Rooted in low-density architectural planning, expansive multi-deck balconies, and biophilic community greens adjacent to the upcoming Noida International Airport (Jewar) growth belt.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() =>
                    openLeadModal({
                      title: "Request Complete Project Overview & Brochure",
                      ctaSource: "About Hero Primary CTA",
                    })
                  }
                  className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md transition duration-300 flex items-center gap-2 cursor-pointer border border-[#ACC78C]"
                >
                  <span>Request Project Brochure</span>
                  <ArrowRight className="w-4 h-4 text-[#0D3829]" />
                </button>

                <button
                  onClick={() =>
                    openLeadModal({
                      title: "Schedule Private Site Tour",
                      ctaSource: "About Hero Secondary CTA",
                    })
                  }
                  className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition duration-300 flex items-center gap-2 cursor-pointer border border-[#0D3829]/20"
                >
                  <Calendar className="w-4 h-4 text-[#0D3829]" />
                  <span>Schedule Site Visit</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#ACC78C]/90 font-medium border-t border-[#ACC78C]/15 w-full">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" /> Low-Density Master Plan
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" /> Sector 22D Growth Corridor
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" /> 3 &amp; 4 BHK Luxury
                </span>
              </div>
            </div>

            {/* Right Column: 3D Interactive Perspective Showcase Card */}
            <div className="lg:col-span-5">
              <TiltCard tiltDegree={8} depth={25} perspective={1200} className="w-full">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#1E3A2B] border border-[#ACC78C]/30 p-3 group">
                  <div className="aspect-[4/3] relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D3829]">
                    <Image
                      src="/images/blog/low-density-luxury-living-sector-22d.jpg"
                      alt="Northwind Estate Architectural Perspective"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/20 to-transparent" />
                    
                    {/* Floating 3D Badge */}
                    <div className="absolute top-4 left-4 bg-[#0D3829]/90 backdrop-blur-md text-[#FFFCEC] border border-[#ACC78C]/40 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ACC78C]" />
                      <span>Low Density Living</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-[#FFFCEC]">
                      <span className="text-[10px] uppercase font-bold text-[#ACC78C] block mb-0.5">
                        Greater Noida, UP
                      </span>
                      <h2 className="text-base sm:text-lg font-serif font-bold text-[#FFFCEC]">
                        Northwind Sanctuary Architecture
                      </h2>
                    </div>
                  </div>

                  <div className="p-4 bg-[#1E3A2B] rounded-xl flex items-center justify-between text-xs text-[#FFFCEC]/90">
                    <div>
                      <span className="text-[10px] text-[#ACC78C] block uppercase font-bold">Location</span>
                      <span className="font-semibold text-sm">Sector 22D, Yamuna Expy</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#ACC78C] block uppercase font-bold">Upcoming</span>
                      <span className="font-semibold text-sm">Jewar Airport Hub</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS STRIP (4 3D CARDS - 2 PER ROW ON MOBILE) */}
      <section className="py-12 sm:py-16 bg-[#F4F1DF] text-[#0D3829] relative border-b border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {trustMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                  <TiltCard tiltDegree={5} depth={12} className="h-full">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_10px_30px_rgba(13,58,41,0.12)] transition-all duration-300 h-full flex flex-col justify-between group">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ACC78C]" />
                        </div>
                        <div>
                          <span className="text-sm sm:text-xl font-serif font-bold text-[#0D3829] block leading-tight">
                            {item.value}
                          </span>
                          <span className="text-[10px] sm:text-xs font-semibold text-[#5E7168] uppercase tracking-wider block mt-0.5">
                            {item.label}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#2D3C25] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & COMPANY INTRODUCTION (Image Left, Content Right) */}
      <section className="py-24 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Column (Left) */}
            <AnimatedReveal direction="right" className="lg:col-span-6 relative">
              <TiltCard tiltDegree={6} depth={20}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(13,58,41,0.1)] bg-white p-3">
                  <div className="aspect-[4/3] relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4F1DF]">
                    <Image
                      src="/images/extracted/Sector22dyamunaexpressway.webp"
                      alt="Northwind Estate Sector 22D Community Architecture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#0D3829]">Northwind Estate Master Layout</h3>
                      <p className="text-xs text-[#5E7168] font-light">Sector 22D Yamuna Expressway</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#0D3829] bg-[#ACC78C]/30 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>

            {/* Content Column (Right) */}
            <AnimatedReveal direction="left" delay={0.15} className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                Company &amp; Project Ethos
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829] leading-tight">
                Who We Are &amp; What We Build
              </h2>

              <p className="text-sm text-[#2D3C25] leading-relaxed font-light">
                <strong className="text-[#0D3829] font-semibold">Northwind Estate</strong> is developed with a singular vision: to create a balanced, low-density residential community in the thriving epicenter of Sector 22D, Yamuna Expressway.
              </p>

              <p className="text-sm text-[#2D3C25] leading-relaxed font-light">
                We cater to modern families and forward-thinking investors who value spacious open living, unhindered skyline vistas, high construction integrity, and direct connectivity to Delhi NCR and the upcoming Noida International Airport at Jewar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#0D3829]">Generous Proportions</h3>
                    <p className="text-xs text-[#5E7168] font-light">Spacious living-dining halls and deep multi-deck balconies for cross-ventilation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#0D3829]">Verified Construction Specifications</h3>
                    <p className="text-xs text-[#5E7168] font-light">Vitrified tile flooring, granite kitchen counters, UPVC glass sliding doors, and anti-skid balcony tiles.</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>

          </div>
        </div>
      </section>

      {/* 4. OUR STORY & DEVELOPMENT HERITAGE (Content Left, Image Right) */}
      <section className="py-24 bg-[#F4F1DF] text-[#0D3829] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Development Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Our Journey &amp; Milestones
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              How Northwind Estate was conceptualized to redefine modern residential living in Sector 22D Yamuna Expressway.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Timeline Column (Left) */}
            <div className="lg:col-span-7 space-y-5">
              {milestones.map((m, idx) => (
                <AnimatedReveal key={idx} direction="up" delay={idx * 0.08}>
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_8px_25px_rgba(13,58,41,0.12)] transition-all duration-300 flex items-start gap-4 sm:gap-5 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#0D3829] text-[#ACC78C] font-serif font-bold text-base flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {m.step}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-[#0D3829]">
                          {m.title}
                        </h3>
                        <span className="text-[10px] font-semibold uppercase text-[#0D3829] bg-[#ACC78C]/25 px-2 py-0.5 rounded">
                          {m.period}
                        </span>
                      </div>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            {/* Visual Column (Right) */}
            <AnimatedReveal direction="left" delay={0.2} className="lg:col-span-5 relative">
              <TiltCard tiltDegree={7} depth={20}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(13,58,41,0.12)] bg-white p-3">
                  <div className="aspect-[4/3] relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D3829]">
                    <Image
                      src="/images/blog/yamuna-expressway-investment-growth.jpg"
                      alt="Yamuna Expressway Investment & Infrastructure Growth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <span className="text-xs font-serif font-bold text-[#0D3829] block">
                      Yamuna Expressway Growth Belt
                    </span>
                    <p className="text-xs text-[#5E7168] font-light mt-0.5">
                      Jewar Airport, Metro connectivity, and upcoming commercial clusters.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>

          </div>

        </div>
      </section>

      {/* 5. MISSION & VISION (2 DISTINCT 3D CARDS) */}
      <section className="py-24 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Core Purpose &amp; Aspiration
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Our Mission &amp; Vision
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Guiding every structural blueprint, material selection, and community standard we implement.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <AnimatedReveal direction="right" delay={0.1}>
              <TiltCard tiltDegree={6} depth={20} className="h-full">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(13,58,41,0.08)] hover:shadow-[0_14px_36px_rgba(13,58,41,0.15)] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Target className="w-7 h-7 text-[#ACC78C]" />
                    </div>
                    <span className="text-xs font-semibold text-[#5E7168] uppercase tracking-wider block">
                      Our Driving Purpose
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0D3829]">
                      Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                      To engineer superior-quality, low-density residences on Yamuna Expressway that balance architectural elegance with open-air wellness. We commit to complete transparency, verified construction standards, and enriching living environments for generations to come.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#0D3829]/10 mt-6 flex items-center gap-2 text-xs font-bold text-[#0D3829]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829]" />
                    <span>Uncompromised Quality &amp; Transparency</span>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>

            {/* Vision Card */}
            <AnimatedReveal direction="left" delay={0.2}>
              <TiltCard tiltDegree={6} depth={20} className="h-full">
                <div className="bg-[#0D3829] text-[#FFFCEC] rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(13,58,41,0.15)] hover:shadow-[0_14px_36px_rgba(13,58,41,0.25)] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#1E3A2B] text-[#ACC78C] flex items-center justify-center border border-[#ACC78C]/30 group-hover:scale-105 transition-transform duration-300">
                      <Eye className="w-7 h-7 text-[#ACC78C]" />
                    </div>
                    <span className="text-xs font-semibold text-[#ACC78C] uppercase tracking-wider block">
                      Long-Term Horizon
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#FFFCEC]">
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FFFCEC]/85 font-light leading-relaxed">
                      To establish Northwind Estate as the gold standard of master-planned community living in Sector 22D, Yamuna Expressway. We envision a flourishing gated ecosystem setting regional benchmarks in low-density density planning, green sustainability, and capital growth.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#ACC78C]/20 mt-6 flex items-center gap-2 text-xs font-bold text-[#ACC78C]">
                    <CheckCircle2 className="w-4 h-4 text-[#ACC78C]" />
                    <span>Premier Residential Benchmark</span>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>

          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE US (6 3D CARDS) */}
      <section className="py-24 bg-[#F4F1DF] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Why Choose Northwind Estate
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Genuine advantages that ensure elevated family living and enduring investment security.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <AnimatedReveal key={idx} direction="up" delay={idx * 0.06} className="h-full">
                  <TiltCard tiltDegree={5} depth={12} className="h-full">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_10px_30px_rgba(13,58,41,0.13)] transition-all duration-300 h-full flex flex-col justify-between group">
                      <div className="space-y-2 sm:space-y-3.5">
                        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ACC78C]" />
                        </div>
                        <h3 className="text-xs sm:text-lg font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#2D3C25] font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedReveal>
              );
            })}
          </div>

          {/* Centered Bottom CTA */}
          <div className="pt-14 text-center">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Speak with Property Consultant",
                  ctaSource: "About Why Choose Us CTA",
                })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
            >
              <span>Consult with Property Advisor</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. WORK PROCESS & QUALITY STANDARDS */}
      <section className="py-24 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Methodology &amp; Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Our Planning &amp; Delivery Process
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Structured stages ensuring precision execution from blueprint drafting to buyer consultation.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {workProcess.map((step, idx) => (
              <AnimatedReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                <div className="bg-[#F4F1DF] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between space-y-2 sm:space-y-4 hover-card-lift cursor-pointer">
                  <div className="space-y-1.5 sm:space-y-3">
                    <span className="text-lg sm:text-2xl font-serif font-bold text-[#0D3829] block">
                      {step.num}
                    </span>
                    <h3 className="text-xs sm:text-base font-serif font-bold text-[#0D3829] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2D3C25] font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FEATURED OFFERINGS PREVIEW (CLICKABLE 3D CARDS) */}
      <section className="py-24 bg-[#F4F1DF] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Residential Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Explore Available Residences
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Discover carefully proportioned 3 &amp; 4 BHK layouts and master site blueprints.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
            {offerings.map((item, idx) => (
              <AnimatedReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                <Link href={item.href} className="cursor-pointer block h-full">
                  <TiltCard tiltDegree={5} depth={12} className="h-full" clickable>
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(13,58,41,0.07)] hover:shadow-[0_12px_32px_rgba(13,58,41,0.14)] transition-all duration-300 h-full flex flex-col justify-between group">
                      <div>
                        <div className="aspect-[16/10] relative w-full bg-[#F4F1DF] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0D3829] text-[#FFFCEC] text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-wider shadow-sm truncate max-w-[85%]">
                            {item.tag}
                          </div>
                        </div>

                        <div className="p-3 sm:p-6 space-y-1 sm:space-y-2">
                          <h3 className="font-serif font-bold text-xs sm:text-base md:text-lg text-[#0D3829] group-hover:text-[#1E3A2B] transition leading-snug line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#2D3C25] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 sm:p-6 pt-0 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#0D3829] group-hover:text-[#1E3A2B]">
                        <span>View Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0D3829] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </AnimatedReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ABOUT FAQ ACCORDION */}
      <FAQSection faqs={aboutFaqs} />

      {/* 10. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 bg-[#0D3829] text-[#FFFCEC] relative subtle-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <AnimatedReveal direction="up" className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#ACC78C] uppercase block">
              Sector 22D Yamuna Expressway
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Ready to Experience Northwind Estate?
            </h2>

            <p className="text-xs sm:text-sm text-[#ACC78C]/90 max-w-xl mx-auto font-light leading-relaxed">
              Schedule a personalized site tour or connect with our consultants for verified price lists and floor plan blueprints.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Free Site Visit",
                    ctaSource: "About Final CTA Schedule Visit",
                  })
                }
                className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md transition duration-300 flex items-center gap-2 cursor-pointer border border-[#ACC78C]"
              >
                <Calendar className="w-4 h-4 text-[#0D3829]" />
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#0D3829]" />
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition duration-300 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0D3829]" />
                <span>Call +91 97177 00596</span>
              </a>
            </div>

            <div className="pt-3 flex items-center justify-center gap-6 text-[11px] text-[#ACC78C]/80 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Verified Floor Plans
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Site Visit Assistance
              </span>
            </div>
          </AnimatedReveal>
        </div>
      </section>

    </div>
  );
}
