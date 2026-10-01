"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Building2,
  Trees,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  Target,
  Plane,
  MapPin,
  Dumbbell,
  FileText,
  Calendar,
  Layers,
  Phone,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Maximize2,
  BedDouble,
  Bath,
  Download,
  ExternalLink,
  Navigation,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Film,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedReveal from "@/components/AnimatedReveal";
import TiltCard from "@/components/TiltCard";
import FAQSection from "@/components/FAQSection";
import { useLeadModal } from "@/components/LeadModalContext";
import { siteConfig } from "@/lib/siteConfig";

// Interactive Amenity Showcase Images (2s Auto-slider like Home Page)
const amenityImages = [
  {
    id: "swimming-pool",
    image: "/images/amenities/swimming-pool.jpg",
    alt: "Swimming Pool & Resort Deck",
    title: "Resort-Style Swimming Pool",
  },
  {
    id: "fitness-gym",
    image: "/images/amenities/fitness-gym.jpg",
    alt: "Modern Fitness Gymnasium",
    title: "State-of-the-Art Fitness Gym",
  },
  {
    id: "zen-gardens",
    image: "/images/amenities/zen-gardens.jpg",
    alt: "Landscaped Zen & Botanical Gardens",
    title: "Themed Botanical & Zen Parks",
  },
  {
    id: "clubhouse",
    image: "/images/amenities/clubhouse.jpg",
    alt: "Architectural Clubhouse & Lounge",
    title: "Multi-Purpose Clubhouse Pavilion",
  },
  {
    id: "kids-play",
    image: "/images/amenities/kids-play.jpg",
    alt: "Children's Adventure Play Area",
    title: "Safe Children's Adventure Zone",
  },
  {
    id: "jogging-track",
    image: "/images/blog/green-buffers-botanical-parks.jpg",
    alt: "Botanical Jogging Circuit & Green Buffers",
    title: "Perimeter Jogging & Cycling Track",
  },
  {
    id: "security",
    image: "/images/amenities/security-gate.jpg",
    alt: "24x7 Multi-Tier Smart Security Gatehouse",
    title: "Multi-Tier Smart Access Security",
  },
];

// Location Orbit Nodes for Regional Connectivity Section
interface LocationNode {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  angleDeg: number;
}

const locationNodes: LocationNode[] = [
  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    category: "6-Lane Highway",
    icon: MapPin,
    angleDeg: 0, // 3 o'clock
  },
  {
    id: "metro-station",
    title: "Proposed Metro",
    category: "Transit Corridor",
    icon: Navigation,
    angleDeg: 45, // 4:30
  },
  {
    id: "jewar-airport",
    title: "Noida Int'l Airport",
    category: "Jewar Aviation Hub",
    icon: Plane,
    angleDeg: 90, // 6 o'clock
  },
  {
    id: "business-hub",
    title: "Business & IT Hub",
    category: "Corporate Zones",
    icon: Building2,
    angleDeg: 135, // 7:30
  },
  {
    id: "shopping-retail",
    title: "Shopping & Retail",
    category: "Commercial High Street",
    icon: ShoppingBag,
    angleDeg: 180, // 9 o'clock
  },
  {
    id: "leading-hospitals",
    title: "Leading Hospitals",
    category: "Healthcare Hub",
    icon: HeartPulse,
    angleDeg: 225, // 10:30
  },
  {
    id: "reputed-schools",
    title: "Reputed Universities",
    category: "Education Hub",
    icon: GraduationCap,
    angleDeg: 270, // 12 o'clock
  },
  {
    id: "film-city",
    title: "Film & Sports City",
    category: "Entertainment Corridor",
    icon: Film,
    angleDeg: 315, // 1:30
  },
];

// BHK Configuration Modal Data
interface BHKConfigItem {
  id: string;
  bhk: string;
  badge: string;
  categoryBadge: string;
  tagline: string;
  status: string;
  bedrooms: string;
  bathrooms: string;
  balconies: string;
  facing: string;
  longDesc: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  mainImage: string;
  gallery: { src: string; title: string; caption: string }[];
  pageUrl: string;
}

const bhkConfigurations: BHKConfigItem[] = [
  {
    id: "3-bhk",
    bhk: "3 BHK Luxury Residence",
    badge: "3 BHK Luxury",
    categoryBadge: "Spacious Family Layout",
    tagline: "Three-Bedroom Home with Dual Balconies and Dedicated Utility Area",
    status: "Coming Soon",
    bedrooms: "3 En-Suite Bedrooms",
    bathrooms: "3 Bathrooms",
    balconies: "2 Wide Sit-Out Balconies",
    facing: "Central Greens / Sector Road",
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
        src: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
        title: "2D Architectural Floor Plan",
        caption: "Schematic representation of 3 BHK layout and room dimensions",
      },
    ],
    pageUrl: "/configurations/3-bhk-luxury-apartment",
  },
  {
    id: "4-bhk",
    bhk: "4 BHK Estate Residence",
    badge: "4 BHK Estate",
    categoryBadge: "Large-Format Layout",
    tagline: "Four-Bedroom Residence with Servant Suite and Wrap-Around Balconies",
    status: "Coming Soon",
    bedrooms: "4 En-Suite Bedrooms",
    bathrooms: "4 Bathrooms + Servant Bath",
    balconies: "3 Expansive Wrap-Around Balconies",
    facing: "Central Landscaped Greens",
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
        src: "/images/floor-plans/4bhk-estate-floor-plan.svg",
        title: "2D Architectural Floor Plan",
        caption: "Schematic of 4 BHK layout, servant room, and dimensions",
      },
    ],
    pageUrl: "/configurations/4-bhk-ultra-estate-residence",
  },
];

export default function AboutClient() {
  const { openLeadModal } = useLeadModal();
  const shouldReduceMotion = useReducedMotion();

  // Process Section Scroll Tracking Ref
  const processSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: processScrollYProgress } = useScroll({
    target: processSectionRef,
    offset: ["start 75%", "end 30%"],
  });



  // Amenity Slider state
  const [currentAmenityIndex, setCurrentAmenityIndex] = useState(0);
  const [isAmenityPaused, setIsAmenityPaused] = useState(false);

  // Location Orbit State
  const [hoveredLocationNode, setHoveredLocationNode] = useState<string | null>(null);

  // BHK Interactive Modal state
  const [selectedConfig, setSelectedConfig] = useState<BHKConfigItem | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "specs">("overview");

  // Touch swipe refs for amenity slider
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Amenity Slider Controls (2s auto cycle like Home Page)
  const totalAmenities = amenityImages.length;
  const currentAmenity = amenityImages[currentAmenityIndex];

  const handleNextAmenity = useCallback(() => {
    setCurrentAmenityIndex((prev) => (prev + 1) % totalAmenities);
  }, [totalAmenities]);

  const handlePrevAmenity = useCallback(() => {
    setCurrentAmenityIndex((prev) => (prev === 0 ? totalAmenities - 1 : prev - 1));
  }, [totalAmenities]);

  useEffect(() => {
    if (isAmenityPaused) return;
    const timer = setInterval(() => {
      handleNextAmenity();
    }, 2500);
    return () => clearInterval(timer);
  }, [handleNextAmenity, isAmenityPaused]);

  // Amenity Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNextAmenity();
    else if (distance < -50) handlePrevAmenity();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPreviewSlides = () => {
    const previewList: { item: typeof amenityImages[0]; originalIndex: number }[] = [];
    for (let i = 1; i < totalAmenities; i++) {
      const idx = (currentAmenityIndex + i) % totalAmenities;
      previewList.push({ item: amenityImages[idx], originalIndex: idx });
    }
    return previewList;
  };

  // BHK Modal Handlers
  const handleOpenConfigModal = (config: BHKConfigItem) => {
    setSelectedConfig(config);
    setActiveModalImageIndex(0);
    setActiveModalTab("overview");
  };

  const handleCloseConfigModal = useCallback(() => {
    setSelectedConfig(null);
    setActiveModalImageIndex(0);
    setActiveModalTab("overview");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseConfigModal();
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
  }, [selectedConfig, handleCloseConfigModal]);

  const trustMetrics = [
    {
      icon: Trees,
      value: "Low Density",
      label: "Master Planned Enclave",
      desc: "Fewer residential units per acre maximizing open sky, sunlight, and uninterrupted green views.",
    },
    {
      icon: MapPin,
      value: "Sector 22D",
      label: "Yamuna Expressway",
      desc: "Prime arterial connectivity to Greater Noida, Noida, Delhi, and Agra via wide 6-lane expressways.",
    },
    {
      icon: Plane,
      value: "Jewar Airport",
      label: "Aviation Corridor",
      desc: "Minutes from the upcoming Noida International Airport (Jewar), assuring enduring long-term capital appreciation.",
    },
    {
      icon: Building2,
      value: "3 & 4 BHK",
      label: "Luxury Residences",
      desc: "Deep-deck balconies, vitrified flooring, modular fittings, and earthquake-resistant Zone-IV RCC engineering.",
    },
  ];

  const corePillars = [
    {
      icon: Trees,
      title: "Low-Density Open Living",
      desc: "Engineered with fewer units per acre compared to congested urban centers, providing serene open-sky living, tree-lined avenues, and botanical tranquility.",
    },
    {
      icon: Plane,
      title: "Jewar Airport Growth Belt",
      desc: "Strategically located along the high-speed aviation and infrastructure growth corridor of Yamuna Expressway, delivering unmatched capital value appreciation.",
    },
    {
      icon: Building2,
      title: "Contemporary Architecture",
      desc: "Spacious multi-deck balconies with UPVC toughened glass sliding doors, premium vitrified living zone tiles, and anti-skid balcony flooring.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-Tier Smart Security",
      desc: "Grand entry and exit gatehouses with round-the-clock CCTV surveillance, smart visitor management protocols, and trained security personnel.",
    },
    {
      icon: Dumbbell,
      title: "Resort-Grade Amenities",
      desc: "Comprehensive resident clubhouse, swimming pool with sun deck, fully equipped gymnasium, children's park, and landscaped jogging circuits.",
    },
    {
      icon: FileText,
      title: "Transparent Advisory",
      desc: "Developer-verified documentation, clear layout blueprints, structured payment schedules, and dedicated property consultant assistance.",
    },
  ];

  const workProcess = [
    {
      num: "01",
      step: "Phase 01",
      title: "Site & Environmental Feasibility",
      desc: "Rigorous orientation and sun-path analysis to ensure maximum natural daylight, natural cross-ventilation, and vast green space buffers.",
      image: "/images/blog/yamuna-expressway-investment-growth.jpg",
      icon: Compass,
      tag: "Master Planning",
    },
    {
      num: "02",
      step: "Phase 02",
      title: "Architectural Layout Drafting",
      desc: "Precision layout drafting for 3 BHK and 4 BHK homes with private entry foyers, en-suite bathrooms, and expansive outdoor balconies.",
      image: "/images/blog/master-bedroom-suite-luxury-interiors.jpg",
      icon: Layers,
      tag: "Design Drafting",
    },
    {
      num: "03",
      step: "Phase 03",
      title: "Premium Material Specifications",
      desc: "Verified vitrified tiles, granite kitchen countertops, stainless steel sink fittings, and weatherproof UPVC double-glazed window frames.",
      image: "/images/blog/modular-kitchens-designer-interiors.jpg",
      icon: ShieldCheck,
      tag: "Quality Control",
    },
    {
      num: "04",
      step: "Phase 04",
      title: "Consultant-Led Buyer Experience",
      desc: "Dedicated property advisory providing end-to-end guidance from complimentary site visit coordination to personalized payment plan structuring.",
      image: "/images/blog/smart-sustainable-residences-yamuna.jpg",
      icon: CheckCircle2,
      tag: "Consultation",
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
    {
      question: "Is Sector 22D Yamuna Expressway good for long-term real estate investment?",
      answer: "Yes, Sector 22D is located along the YEIDA high-growth corridor adjacent to Jewar International Airport, the upcoming International Film City, Olympic City, and multimodal logistics hubs, making it one of NCR's highest appreciating real estate micro-markets.",
    },
  ];

  const isLocationOrbitPaused = hoveredLocationNode !== null;

  return (
    <div className="bg-[#FFFCEC] text-[#0D3829] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        {/* Full-bleed background image - clearly visible without dark gradient overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Sector 22D Architectural Vision"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl space-y-3 text-center mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Sector 22D Yamuna Expressway • Architectural Pedigree
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight drop-shadow-lg">
              Crafting Landmark Residences on Yamuna Expressway
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed drop-shadow">
              Northwind Estate is a distinguished residential sanctuary in Sector 22D, Yamuna Expressway. Rooted in low-density architectural planning, expansive multi-deck balconies, and biophilic community greens adjacent to the upcoming Noida International Airport (Jewar) growth belt.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS STRIP (4 3D CARDS - 2 PER ROW ON MOBILE) */}
      <section className="py-12 sm:py-16 bg-[#F4F1DF] text-[#0D3829] relative border-b border-[#0D3829]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {trustMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                  <TiltCard tiltDegree={5} depth={12} className="h-full">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_12px_32px_rgba(13,58,41,0.12)] transition-all duration-300 h-full flex flex-col justify-between group cursor-pointer border border-[#0D3829]/5">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
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

      {/* 3. PROJECT OVERVIEW SECTION (Text & Key Highlights with Aligned Margins) */}
      <section id="project-overview" className="py-20 sm:py-24 bg-[#FFFCEC] text-[#0D3829] relative overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0D3829_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Section Header */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Project Overview
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Who We Are &amp; What We Build
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Northwind Estate is engineered around low-density master planning, open skyline vistas, and sustainable community architecture on Yamuna Expressway.
            </p>
          </AnimatedReveal>

          {/* Centered Structured Content Card */}
          <AnimatedReveal direction="up" delay={0.15}>
            <div className="bg-[#F4F1DF]/70 border border-[#0D3829]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
              
              <div className="space-y-4 max-w-3xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829] leading-tight">
                  Apartment Architecture Focused on Space, Daylight, and Serenity
                </h3>
                <p className="text-sm sm:text-base text-[#2D3C25] leading-relaxed font-light">
                  <strong className="text-[#0D3829] font-semibold">Northwind Estate</strong> is developed with a singular vision: to create a balanced, low-density residential community in the high-growth epicenter of Sector 22D, Yamuna Expressway.
                </p>
                <p className="text-xs sm:text-sm text-[#5E7168] leading-relaxed font-light">
                  We cater to modern families and forward-thinking investors who value spacious open living, unhindered skyline vistas, high construction integrity, and direct connectivity to Delhi NCR and the upcoming Noida International Airport at Jewar.
                </p>
              </div>

              {/* Two-column Feature Highlights with Balanced Spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                <div className="flex items-start gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-[#0D3829]/5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#ACC78C]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#0D3829]">
                      Generous Proportions &amp; Cross Ventilation
                    </h4>
                    <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                      Spacious living-dining halls and deep multi-deck balconies oriented for dual-aspect natural airflow and maximum daylighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-[#0D3829]/5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#ACC78C]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#0D3829]">
                      Verified Construction Specifications
                    </h4>
                    <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                      Vitrified tile flooring, granite kitchen counters, UPVC double-glazed sliding doors, and anti-skid balcony tiles with Zone-IV RCC engineering.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedReveal>

        </div>
      </section>

      {/* 4. REGIONAL CONNECTIVITY & ACCESS ORBIT SECTION (Replaced Old Milestones) */}
      <section id="location" className="py-20 sm:py-24 bg-[#F4F1DF] text-[#0D3829] relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[750px] h-[750px] rounded-full bg-[#FFFCEC]/60 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Regional Connectivity &amp; Access
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Location Advantages — Sector 22D
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Situated along the Yamuna Expressway with convenient arterial access to Greater Noida, regional transit corridors, and the upcoming Noida International Airport at Jewar.
            </p>
          </AnimatedReveal>

          {/* 360-Degree Animated Interactive Orbit Stage */}
          <div className="relative w-full flex items-center justify-center my-2 py-6">
            <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[760px] aspect-square flex items-center justify-center">
              
              {/* Background Concentric Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-[#0D3829]/10 pointer-events-none" />
              <div className="absolute inset-[10%] rounded-full border border-dashed border-[#0D3829]/15 pointer-events-none animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-[24%] rounded-full border border-[#0D3829]/10 pointer-events-none" />
              <div className="absolute inset-[36%] rounded-full border border-dashed border-[#ACC78C]/30 pointer-events-none" />

              {/* Central Luxury Property Image */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px] lg:w-[310px] lg:h-[310px] rounded-full p-1.5 sm:p-2.5 bg-[#FFFCEC] shadow-[0_15px_45px_rgba(13,58,41,0.22)] flex items-center justify-center group"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-[#0D3829]">
                  <Image
                    src="/images/location/luxury-property-center.jpg"
                    alt="Northwind Estate Sector 22D Luxury Residences"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 220px, 310px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

                  {/* Central Tag */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 sm:pb-6 text-center pointer-events-none">
                    <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#ACC78C] bg-[#0D3829]/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#ACC78C]/40 backdrop-blur-md shadow-md">
                      Sector 22D
                    </span>
                    <span className="text-[10px] sm:text-sm font-serif font-bold text-[#FFFCEC] drop-shadow-md pt-0.5">
                      Northwind Estate
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Container that spins 360 degrees */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  animation: shouldReduceMotion
                    ? "none"
                    : `location-orbit-spin 48s linear infinite`,
                  animationPlayState: isLocationOrbitPaused ? "paused" : "running",
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
              >
                {locationNodes.map((node) => {
                  const Icon = node.icon;
                  const rad = (node.angleDeg * Math.PI) / 180;
                  const radiusPct = 43.5;
                  const xPct = Math.cos(rad) * radiusPct;
                  const yPct = Math.sin(rad) * radiusPct;
                  const isHovered = hoveredLocationNode === node.id;

                  return (
                    <div
                      key={node.id}
                      style={{
                        position: "absolute",
                        top: `calc(50% + ${yPct}%)`,
                        left: `calc(50% + ${xPct}%)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className="pointer-events-auto"
                      onMouseEnter={() => setHoveredLocationNode(node.id)}
                      onMouseLeave={() => setHoveredLocationNode(null)}
                      onClick={() =>
                        openLeadModal({
                          title: `Inquire Location Proximity to ${node.title}`,
                          preferredConfig: node.title,
                          ctaSource: `About Location Orbit - ${node.title}`,
                        })
                      }
                    >
                      <div
                        style={{
                          animation: shouldReduceMotion
                            ? "none"
                            : `location-orbit-counter-spin 48s linear infinite`,
                          animationPlayState: isLocationOrbitPaused ? "paused" : "running",
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.12 : 1,
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className={`w-[72px] h-[72px] xs:w-[82px] xs:h-[82px] sm:w-[102px] sm:h-[102px] md:w-[118px] md:h-[118px] rounded-full p-1.5 sm:p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 select-none ${
                            isHovered
                              ? "bg-[#0D3829] text-[#FFFCEC] shadow-[0_12px_32px_rgba(13,58,41,0.35)] scale-110 ring-2 ring-[#ACC78C]/40"
                              : "bg-[#FFFCEC] text-[#0D3829] shadow-[0_8px_20px_rgba(13,58,41,0.12)] hover:shadow-[0_12px_28px_rgba(13,58,41,0.22)]"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mb-1 transition-colors ${
                              isHovered
                                ? "bg-[#ACC78C] text-[#0D3829]"
                                : "bg-[#0D3829]/10 text-[#0D3829]"
                            }`}
                          >
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                          </div>

                          <span
                            className={`text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs font-serif font-bold leading-tight line-clamp-2 px-1 ${
                              isHovered ? "text-[#FFFCEC]" : "text-[#0D3829]"
                            }`}
                          >
                            {node.title}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

            </div>
          </div>

          {/* Quick Distance Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl text-center border border-[#0D3829]/10 shadow-xs">
              <span className="text-[10px] text-[#5E7168] uppercase font-bold block">Jewar Airport</span>
              <span className="text-xs sm:text-sm font-bold text-[#0D3829]">15 Mins Drive</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl text-center border border-[#0D3829]/10 shadow-xs">
              <span className="text-[10px] text-[#5E7168] uppercase font-bold block">Film City</span>
              <span className="text-xs sm:text-sm font-bold text-[#0D3829]">10 Mins Drive</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl text-center border border-[#0D3829]/10 shadow-xs">
              <span className="text-[10px] text-[#5E7168] uppercase font-bold block">Pari Chowk</span>
              <span className="text-xs sm:text-sm font-bold text-[#0D3829]">20 Mins Drive</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl text-center border border-[#0D3829]/10 shadow-xs">
              <span className="text-[10px] text-[#5E7168] uppercase font-bold block">Delhi &amp; Noida</span>
              <span className="text-xs sm:text-sm font-bold text-[#0D3829]">Direct Expressway</span>
            </div>
          </div>

          {/* Bottom Centered CTA */}
          <AnimatedReveal direction="up" delay={0.3} className="pt-10 text-center">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Request Sector 22D Location Map & Driving Route",
                  ctaSource: "About Location Orbit Section Bottom CTA",
                })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              <span>Request Location Map &amp; Driving Guide</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedReveal>

        </div>
      </section>

      {/* 5. MISSION & VISION (2 DISTINCT 3D INTERACTIVE CARDS) */}
      <section className="py-20 sm:py-24 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Core Purpose &amp; Aspiration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Our Mission &amp; Vision
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Guiding every structural blueprint, material selection, and community standard we implement.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <AnimatedReveal direction="right" delay={0.1}>
              <TiltCard tiltDegree={6} depth={20} className="h-full">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(13,58,41,0.08)] hover:shadow-[0_14px_36px_rgba(13,58,41,0.15)] transition-all duration-300 h-full flex flex-col justify-between group border border-[#0D3829]/10">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
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
                <div className="bg-[#0D3829] text-[#FFFCEC] rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(13,58,41,0.15)] hover:shadow-[0_14px_36px_rgba(13,58,41,0.25)] transition-all duration-300 h-full flex flex-col justify-between group border border-[#ACC78C]/20">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#1E3A2B] text-[#ACC78C] flex items-center justify-center border border-[#ACC78C]/30 group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <Eye className="w-7 h-7 text-[#ACC78C]" />
                    </div>
                    <span className="text-xs font-semibold text-[#ACC78C] uppercase tracking-wider block">
                      Long-Term Horizon
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#FFFCEC]">
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FFFCEC]/85 font-light leading-relaxed">
                      To establish Northwind Estate as the gold standard of master-planned community living in Sector 22D, Yamuna Expressway. We envision a flourishing gated ecosystem setting regional benchmarks in low-density planning, green sustainability, and enduring capital growth.
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

      {/* 6. WHY CHOOSE NORTHWIND ESTATE (6 3D CARDS WITH HOVER LIFT) */}
      <section className="py-20 sm:py-24 bg-[#F4F1DF] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Why Choose Northwind Estate
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Genuine advantages that ensure elevated family living and enduring investment security.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <AnimatedReveal key={idx} direction="up" delay={idx * 0.06} className="h-full">
                  <TiltCard tiltDegree={5} depth={12} className="h-full">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_12px_32px_rgba(13,58,41,0.13)] transition-all duration-300 h-full flex flex-col justify-between group border border-[#0D3829]/5 cursor-pointer">
                      <div className="space-y-2 sm:space-y-3.5">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
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
              className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition duration-300 cursor-pointer group"
            >
              <span>Consult with Property Advisor</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. AMENITIES SHOWCASE SLIDER (2s Auto-Cycle Crossfade Slider from Home Page) */}
      <section className="py-20 sm:py-24 bg-[#0D3829] text-[#FFFCEC] relative overflow-hidden subtle-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#ACC78C] uppercase">
              Resident Amenities &amp; Facilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FFFCEC]">
              Community Amenities Planned for Daily Living
            </h2>
            <p className="text-xs sm:text-sm text-[#ACC78C]/90 font-light max-w-2xl mx-auto">
              From a resident clubhouse and fitness center to landscaped walking circuits and dedicated children&apos;s recreation zones, every facility is planned for practical everyday use.
            </p>
          </AnimatedReveal>

          {/* Pure Image Animated Slider Showcase (Auto 2s, Seamless Images) */}
          <AnimatedReveal direction="up" delay={0.1}>
            <div
              className="relative h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0D3829] select-none flex flex-col justify-center p-4 sm:p-6 md:p-8 border border-[#ACC78C]/30"
              onMouseEnter={() => setIsAmenityPaused(true)}
              onMouseLeave={() => setIsAmenityPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Active Main Background Image with 2s Smooth Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAmenity.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={currentAmenity.image}
                    alt={currentAmenity.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

                  {/* Active Slide Info Overlay */}
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 text-white max-w-md">
                    <span className="bg-[#0D3829]/90 text-[#ACC78C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2 inline-block backdrop-blur-md">
                      Featured Amenity
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#FFFCEC]">
                      {currentAmenity.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Middle / Right Floating Image Preview Strip */}
              <div className="relative z-10 flex justify-end items-center my-auto">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x max-w-full md:max-w-xl lg:max-w-2xl">
                  {getPreviewSlides().map(({ item, originalIndex }) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.06, y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setCurrentAmenityIndex(originalIndex)}
                      className="relative h-28 sm:h-36 md:h-44 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-black/40 cursor-pointer flex-shrink-0 group snap-start backdrop-blur-xs border border-white/20"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-2 left-2 right-2 text-white text-[10px] sm:text-xs font-semibold truncate bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                        {item.title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedReveal>

          {/* Bottom Centered CTA */}
          <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Download Full Amenities & Clubhouse Brochure",
                  ctaSource: "About Amenities Section Bottom CTA",
                })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <span>Request Complete Amenities Brochure</span>
              <ArrowRight className="w-4 h-4 text-[#0D3829]" />
            </button>
          </AnimatedReveal>

        </div>
      </section>

      {/* 8. AVAILABLE RESIDENCES & INTERACTIVE DETAIL CARDS (Same Modal / Animation as Home Page) */}
      <section className="py-20 sm:py-24 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Residences &amp; Configurations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Explore Available Residences
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
              Discover carefully proportioned 3 &amp; 4 BHK layouts with deep balconies. Click any residence to view high-resolution galleries, room layouts, and specifications.
            </p>
          </AnimatedReveal>

          {/* Configuration Cards Grid */}
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
                    onClick={() => handleOpenConfigModal(config)}
                    className="bg-[#F4F1DF] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full cursor-pointer relative"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenConfigModal(config);
                      }
                    }}
                    aria-label={`View details and gallery for ${config.bhk}`}
                  >
                    <div className="aspect-[4/3] sm:aspect-[16/11] relative w-full bg-[#F4F1DF] overflow-hidden rounded-2xl sm:rounded-3xl">
                      <Image
                        src={config.mainImage}
                        alt={`${config.bhk} - Northwind Estate`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority={idx === 0}
                      />

                      {/* Subtle hover overlay with preview icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/15">
                        <div className="w-12 h-12 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-5 h-5 text-[#0D3829]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal direction="up" delay={0.3} className="pt-12 sm:pt-16 text-center">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Inquire Complete Project Cost Sheet & Payment Plans",
                  ctaSource: "About Configurations Bottom CTA",
                })
              }
              className="inline-flex items-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>Request Complete Price &amp; Payment Schedule</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedReveal>

        </div>
      </section>

      {/* 9. WORK PROCESS & QUALITY METHODOLOGY (Connected Flow with Animated SVG Arrow Connectors) */}
      <section
        ref={processSectionRef}
        id="delivery-process"
        className="py-20 sm:py-24 bg-[#F4F1DF] text-[#0D3829] relative overflow-hidden"
      >
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0D3829_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Header */}
          <AnimatedReveal
            direction="up"
            className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
          >
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Methodology &amp; Quality Standards
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Our Planning &amp; Delivery Process
            </h2>

            <p className="text-xs sm:text-sm text-[#5E7168] leading-relaxed font-light max-w-2xl mx-auto">
              Structured progressive stages ensuring precision execution from master layout drafting to personalized buyer consultation.
            </p>
          </AnimatedReveal>

          {/* DESKTOP CONNECTED FLOW (Horizontal 4-Step Animated Grid with SVG Connectors) */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {workProcess.map((step, idx) => {
              const itemStart = idx * 0.22;
              const itemEnd = itemStart + 0.25;

              return (
                <div key={step.num} className="relative flex flex-col h-full">
                  {/* Desktop Connecting Animated Arrow */}
                  {idx < workProcess.length - 1 && (
                    <DesktopProcessConnector
                      idx={idx}
                      scrollYProgress={processScrollYProgress}
                      start={0.18 + idx * 0.24}
                      end={0.38 + idx * 0.24}
                      prefersReducedMotion={shouldReduceMotion}
                    />
                  )}

                  <ProcessFlowCard
                    step={step}
                    index={idx}
                    scrollYProgress={processScrollYProgress}
                    activeStart={itemStart}
                    activeEnd={itemEnd}
                    prefersReducedMotion={shouldReduceMotion}
                    onOpenModal={() =>
                      openLeadModal({
                        title: `Inquire Process: ${step.title}`,
                        ctaSource: `About Process Card ${step.num}`,
                      })
                    }
                  />
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET CONNECTED FLOW (Vertical Animated Sequence with Down Arrows) */}
          <div className="lg:hidden flex flex-col space-y-4 sm:space-y-6 max-w-xl mx-auto">
            {workProcess.map((step, idx) => {
              const itemStart = idx * 0.22;
              const itemEnd = itemStart + 0.24;

              return (
                <React.Fragment key={step.num}>
                  <ProcessFlowCard
                    step={step}
                    index={idx}
                    scrollYProgress={processScrollYProgress}
                    activeStart={itemStart}
                    activeEnd={itemEnd}
                    prefersReducedMotion={shouldReduceMotion}
                    onOpenModal={() =>
                      openLeadModal({
                        title: `Inquire Process: ${step.title}`,
                        ctaSource: `About Mobile Process Card ${step.num}`,
                      })
                    }
                  />

                  {/* Mobile Vertical Downward Connector */}
                  {idx < workProcess.length - 1 && (
                    <MobileProcessConnector
                      idx={idx}
                      scrollYProgress={processScrollYProgress}
                      start={0.16 + idx * 0.23}
                      end={0.34 + idx * 0.23}
                      prefersReducedMotion={shouldReduceMotion}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Bottom Centered Action CTA */}
          <AnimatedReveal direction="up" delay={0.2} className="pt-12 sm:pt-16 text-center">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Inquire Complete Construction Standards & Project Brief",
                  ctaSource: "About Process Section Bottom CTA",
                })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
            >
              <span>Schedule Technical Consultation &amp; Site Tour</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedReveal>

        </div>
      </section>

      {/* 10. ABOUT FAQ ACCORDION */}
      <FAQSection faqs={aboutFaqs} />

      {/* 11. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 bg-[#0D3829] text-[#FFFCEC] relative subtle-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <AnimatedReveal direction="up" className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#ACC78C] uppercase block">
              Sector 22D Yamuna Expressway
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
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
                className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2 cursor-pointer border border-[#ACC78C] group"
              >
                <Calendar className="w-4 h-4 text-[#0D3829]" />
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#0D3829] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  openLeadModal({
                    title: "Request Instant Call Back from Property Consultant",
                    ctaSource: "About Final CTA Call Button",
                  })
                }
                className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0D3829]" />
                <span>Call +91 97177 00596</span>
              </button>
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

      {/* POPUP / HALF-SCREEN DETAIL PANEL FOR BHK CONFIGURATIONS */}
      <AnimatePresence>
        {selectedConfig && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleCloseConfigModal}
              className="absolute inset-0 bg-[#0D3829]/80 backdrop-blur-md cursor-pointer"
              aria-label="Close modal overlay"
            />

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
                    onClick={handleCloseConfigModal}
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
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full bg-[#0D3829]/10 rounded-2xl overflow-hidden shadow-inner group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeModalImageIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.25 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={selectedConfig.gallery[activeModalImageIndex].src}
                            alt={selectedConfig.gallery[activeModalImageIndex].title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                        <span className="bg-[#0D3829]/90 text-[#FFFCEC] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-md">
                          Photo {activeModalImageIndex + 1} of {selectedConfig.gallery.length}
                        </span>
                        <span className="bg-black/50 text-[#ACC78C] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-md">
                          {selectedConfig.status}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          setActiveModalImageIndex((prev) =>
                            prev === 0 ? selectedConfig.gallery.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition backdrop-blur-md cursor-pointer shadow-lg"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() =>
                          setActiveModalImageIndex((prev) => (prev + 1) % selectedConfig.gallery.length)
                        }
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0D3829] text-white flex items-center justify-center transition backdrop-blur-md cursor-pointer shadow-lg"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#FFFCEC]">
                          {selectedConfig.gallery[activeModalImageIndex].title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[#ACC78C] font-light truncate">
                          {selectedConfig.gallery[activeModalImageIndex].caption}
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-[#0D3829]">
                        <span>Thumbnail Gallery</span>
                        <span className="text-[#5E7168] font-light">Select image to switch</span>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {selectedConfig.gallery.map((img, idx) => {
                          const isActive = activeModalImageIndex === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveModalImageIndex(idx)}
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

                  {/* Floor Plan Direct Shortcut */}
                  <div className="bg-white rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829]/10 flex items-center justify-center flex-shrink-0 text-[#0D3829]">
                        <Layers className="w-5 h-5 text-[#0D3829]" />
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0D3829]">
                          2D Architectural Layout Plan
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
                          setActiveModalImageIndex(floorPlanIndex);
                        }
                      }}
                      className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] text-[11px] font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View Plan</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: Content, Specs & Actions */}
                <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
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

                    {/* Tabs Navigation */}
                    <div className="space-y-4">
                      <div className="flex border-b border-[#0D3829]/10 gap-4 text-xs font-semibold">
                        <button
                          onClick={() => setActiveModalTab("overview")}
                          className={`pb-2 transition-all cursor-pointer border-b-2 -mb-[1px] ${
                            activeModalTab === "overview"
                              ? "border-[#0D3829] text-[#0D3829] font-bold"
                              : "border-transparent text-[#5E7168] hover:text-[#0D3829]"
                          }`}
                        >
                          Overview &amp; Concept
                        </button>
                        <button
                          onClick={() => setActiveModalTab("specs")}
                          className={`pb-2 transition-all cursor-pointer border-b-2 -mb-[1px] ${
                            activeModalTab === "specs"
                              ? "border-[#0D3829] text-[#0D3829] font-bold"
                              : "border-transparent text-[#5E7168] hover:text-[#0D3829]"
                          }`}
                        >
                          Specifications &amp; Features
                        </button>
                      </div>

                      {activeModalTab === "overview" && (
                        <div className="space-y-3 text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                          {selectedConfig.longDesc.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {activeModalTab === "specs" && (
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
                          handleCloseConfigModal();
                          openLeadModal({
                            title: `Inquire ${selectedConfig.bhk} Price & Allotment`,
                            preferredConfig: selectedConfig.bhk,
                            ctaSource: `About ${selectedConfig.badge} Popup Primary CTA`,
                          });
                        }}
                        className="flex-1 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <span>Enquire Now &amp; Get Price Sheet</span>
                      </button>

                      <button
                        onClick={() => {
                          handleCloseConfigModal();
                          openLeadModal({
                            title: `Request ${selectedConfig.bhk} Floor Plan PDF`,
                            preferredConfig: selectedConfig.bhk,
                            ctaSource: `About ${selectedConfig.badge} Popup Floor Plan PDF`,
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

    </div>
  );
}

/**
 * Animated Process Flow Card with Scroll Tracking & Interactive Hover (Image & Heading Only)
 */
interface ProcessFlowCardProps {
  step: {
    num: string;
    step: string;
    title: string;
    desc: string;
    image: string;
    icon: React.ComponentType<{ className?: string }>;
    tag: string;
  };
  index: number;
  scrollYProgress: any;
  activeStart: number;
  activeEnd: number;
  prefersReducedMotion: boolean | null;
  onOpenModal: () => void;
}

function ProcessFlowCard({
  step,
  index,
  scrollYProgress,
  activeStart,
  activeEnd,
  prefersReducedMotion,
  onOpenModal,
}: ProcessFlowCardProps) {
  const cardScale = useTransform(
    scrollYProgress,
    [0, activeStart, activeEnd, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.94, 0.94, 1.0, 1.0]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, activeStart, activeStart + (activeEnd - activeStart) * 0.6, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.45, 0.45, 1.0, 1.0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, activeStart, activeEnd, 1.0],
    prefersReducedMotion ? [0, 0, 0, 0] : [14, 14, 0, 0]
  );

  const borderGlow = useTransform(
    scrollYProgress,
    [activeStart, activeEnd],
    ["rgba(13, 58, 41, 0.08)", "rgba(13, 58, 41, 0.35)"]
  );

  return (
    <motion.div
      style={{
        scale: cardScale,
        opacity: cardOpacity,
        y: cardY,
      }}
      className="h-full flex flex-col relative z-10"
    >
      <motion.div
        style={{ borderColor: borderGlow }}
        onClick={onOpenModal}
        className="bg-white rounded-2xl overflow-hidden border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer relative"
      >
        {/* Step Image */}
        <div className="relative aspect-[16/11] overflow-hidden bg-[#0D3829]/5">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Heading Only */}
        <div className="p-4 sm:p-5 flex items-center justify-center flex-1 text-center">
          <h3 className="text-sm sm:text-base font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition-colors leading-snug">
            {step.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Desktop SVG Horizontal Connector with animated stroke and glowing traveling bead
 */
function DesktopProcessConnector({
  idx,
  scrollYProgress,
  start,
  end,
  prefersReducedMotion,
}: {
  idx: number;
  scrollYProgress: any;
  start: number;
  end: number;
  prefersReducedMotion: boolean | null;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [0, start, end, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 0, 1.0, 1.0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, start, start + 0.05, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.2, 0.2, 1.0, 1.0]
  );

  const headFill = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.8, end],
    ["rgba(13, 58, 41, 0.2)", "#0D3829"]
  );

  return (
    <div className="absolute top-[35%] -translate-y-1/2 -right-[26px] w-[28px] h-[24px] z-20 pointer-events-none hidden lg:flex items-center justify-center">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Line */}
        <path
          d="M 0 12 L 20 12"
          stroke="#0D3829"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeOpacity="0.2"
        />

        {/* Animated Drawing Active Stroke */}
        <motion.path
          d="M 0 12 L 20 12"
          stroke="#0D3829"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />

        {/* Arrowhead */}
        <motion.polygon
          points="20,7 28,12 20,17"
          style={{ fill: headFill }}
          className="transition-colors"
        />

        {/* Moving glowing bead along connector */}
        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            cy="12"
            fill="#ACC78C"
            stroke="#0D3829"
            strokeWidth="1.5"
            style={{
              cx: useTransform(pathLength, [0, 1], [0, 20]),
              opacity: useTransform(pathLength, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
            }}
          />
        )}
      </svg>
    </div>
  );
}

/**
 * Mobile Vertical Downward Connector with animated path
 */
function MobileProcessConnector({
  idx,
  scrollYProgress,
  start,
  end,
  prefersReducedMotion,
}: {
  idx: number;
  scrollYProgress: any;
  start: number;
  end: number;
  prefersReducedMotion: boolean | null;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [0, start, end, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 0, 1.0, 1.0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, start, start + 0.05, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.25, 0.25, 1.0, 1.0]
  );

  return (
    <div className="flex flex-col items-center justify-center my-0.5 pointer-events-none">
      <svg
        className="w-[24px] h-[34px] overflow-visible"
        viewBox="0 0 24 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Line */}
        <path
          d="M 12 0 L 12 24"
          stroke="#0D3829"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeOpacity="0.2"
        />

        {/* Active Animated Path */}
        <motion.path
          d="M 12 0 L 12 24"
          stroke="#0D3829"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />

        {/* Downward Arrowhead */}
        <motion.polygon
          points="7,22 12,30 17,22"
          fill="#0D3829"
          style={{ opacity }}
        />

        {/* Moving glowing pulse on mobile */}
        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            cx="12"
            fill="#ACC78C"
            stroke="#0D3829"
            strokeWidth="1.5"
            style={{
              cy: useTransform(pathLength, [0, 1], [0, 24]),
              opacity: useTransform(pathLength, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
            }}
          />
        )}
      </svg>
    </div>
  );
}
