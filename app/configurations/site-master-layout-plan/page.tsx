"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Maximize2, 
  Sparkles, 
  Layers, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Trees, 
  Compass, 
  Building, 
  ZoomIn, 
  X, 
  Download 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

const masterPlanFaqs: FAQItem[] = [
  {
    question: "What is the layout concept and density of the Northwind Estate master plan?",
    answer: "Northwind Estate is planned as a low-density gated residential township in Sector 22D Yamuna Expressway. Towers are positioned with wide spacing to maximize green views, natural airflow, and resident privacy."
  },
  {
    question: "Where are the central clubhouse and swimming pool located on the site plan?",
    answer: "The clubhouse pavilion and azure swimming pool deck are centrally situated within the botanical parkland, offering equidistant and safe pedestrian access from all residential towers."
  },
  {
    question: "How is vehicular traffic and parking managed in the master plan?",
    answer: "The master plan features wide 12M peripheral arterial roads with central pedestrian-only green plazas, multi-tier basement and covered parking, ensuring a safe, vehicle-free walking environment for children and seniors."
  },
  {
    question: "How close is Northwind Estate Sector 22D to Noida International Airport?",
    answer: "Sector 22D is strategically located on the Yamuna Expressway corridor just a short drive from the upcoming Noida International Airport (Jewar), Film City, and the Eastern Peripheral Expressway (EPE)."
  },
  {
    question: "How can I obtain a high-resolution Master Plan PDF?",
    answer: "You can request the official vector master layout plan, tower elevation drawings, and location connectivity map by filling out the enquiry form or contacting our sales desk."
  }
];

export default function SiteMasterPlanPage() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [selectedPlanView, setSelectedPlanView] = useState<"aerial" | "schematic">("aerial");

  const planningFeatures = [
    {
      title: "Low-Density Township Layout",
      description: "Carefully calibrated tower orientation ensuring vast open green spaces between high-rise residential towers for optimal daylight and breeze.",
      icon: Building,
    },
    {
      title: "Botanical Central Parkland",
      description: "Expansive green central courtyards, manicured lawns, serene water body accents, and pedestrian-friendly walkways.",
      icon: Trees,
    },
    {
      title: "Clubhouse & Recreation Pavilion",
      description: "Centrally located lifestyle clubhouse featuring a swimming pool deck, sports courts, indoor games lounge, and gymnasium.",
      icon: Sparkles,
    },
    {
      title: "Multi-Tier Infrastructure & Security",
      description: "Tree-lined internal vehicular circulation roads, designated visitor parking, and 24/7 guarded security perimeter.",
      icon: ShieldCheck,
    },
  ];

  const siteHighlights = [
    "Located in Sector 22D, Yamuna Expressway, Greater Noida",
    "Adjacent to Upcoming Noida International Airport Corridor",
    "Gated residential complex with dedicated entry / exit boulevards",
    "Seamless connectivity to Eastern Peripheral Expressway (EPE)",
    "Vastu-compliant residential tower planning & cross airflow",
    "Dedicated children's play zones & senior citizen sit-outs",
  ];

  const galleryImages = [
    {
      src: "/images/configurations/master-plan-gallery-aerial.jpg",
      title: "3D Aerial Township Master Layout",
      subtitle: "Vast central green courtyards, lakes & low-density tower zoning",
    },
    {
      src: "/images/configurations/master-plan-gallery-entrance.jpg",
      title: "Grand Arrival Boulevard & Fountain",
      subtitle: "Monumental stone entrance gate with 24/7 security gatehouse",
    },
    {
      src: "/images/configurations/master-plan-gallery-clubhouse-pool.jpg",
      title: "Central Clubhouse & Azure Pool Deck",
      subtitle: "Resort-style recreational hub situated within botanical parklands",
    },
    {
      src: "/images/configurations/master-plan-gallery-botanical-park.jpg",
      title: "Botanical Zen Parklands & Walking Trails",
      subtitle: "Pedestrian-only green promenades, reflexology streams & pergolas",
    },
  ];

  return (
    <>
      {/* Full-Screen Hero Section matching Home Page */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        {/* Full Screen Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/site-master-layout-plan-hero.jpg"
            alt="Northwind Estate Master Layout Plan Aerial Rendering"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb
            items={[
              { label: "Configurations", href: "/#configurations" },
              { label: "Site & Master Layout Plan", href: "/configurations/site-master-layout-plan" },
            ]}
            variant="dark"
          />

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <span className="w-2 h-2 rounded-full bg-[#ACC78C] animate-ping" />
              <span>Coming Soon • Master Layout</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
              <Compass className="w-3.5 h-3.5 text-[#B9A148]" /> Township Architecture &amp; Master Planning
            </div>
          </div>

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Site &amp; <span className="gold-gradient-text">Master Layout Plan</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore the architectural master plan of Northwind Estate in Sector 22D, Yamuna Expressway. Low-density gated residential layout featuring vast central green courtyards, sports amenities, and clubhouse.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <MapPin className="w-4 h-4" /> Location
              </div>
              <p className="text-sm sm:text-base font-bold text-[#FFFCEC] font-serif pt-1">Sector 22D YEIDA</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Building className="w-4 h-4" /> Density
              </div>
              <p className="text-sm sm:text-base font-bold text-[#FFFCEC] font-serif pt-1">Low Density</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Trees className="w-4 h-4" /> Greenery
              </div>
              <p className="text-sm sm:text-base font-bold text-[#FFFCEC] font-serif pt-1">Landscaped Parks</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <ShieldCheck className="w-4 h-4" /> Security
              </div>
              <p className="text-sm sm:text-base font-bold text-[#FFFCEC] font-serif pt-1">Gated 24x7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Master Plan Showcase */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
            
            {/* Left Column: Plan Viewer & Highlights */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Plan Switcher Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0D3829]/15 pb-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                    Interactive Plan Viewer
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#0D3829]">
                    Master Layout Visualization
                  </h2>
                </div>

                {/* View Switcher Pills */}
                <div className="flex items-center bg-[#F4F1DF] border border-[#0D3829]/15 p-1 rounded-xl">
                  <button
                    onClick={() => setSelectedPlanView("aerial")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      selectedPlanView === "aerial"
                        ? "bg-[#0D3829] text-[#FFFCEC] shadow-xs"
                        : "text-[#0D3829] hover:text-[#0D3829]"
                    }`}
                  >
                    3D Aerial Concept
                  </button>
                  <button
                    onClick={() => setSelectedPlanView("schematic")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      selectedPlanView === "schematic"
                        ? "bg-[#0D3829] text-[#FFFCEC] shadow-xs"
                        : "text-[#0D3829] hover:text-[#0D3829]"
                    }`}
                  >
                    Schematic Vector
                  </button>
                </div>
              </div>

              {/* Layout Visual Container with Click to Zoom */}
              <div 
                onClick={() => setIsZoomOpen(true)}
                className="group relative bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl overflow-hidden shadow-md cursor-pointer hover-card-lift aspect-[16/10]"
              >
                <Image
                  src={
                    selectedPlanView === "aerial"
                      ? "/images/configurations/site-master-layout-plan-hero.jpg"
                      : "/images/floor-plans/site-master-plan.svg"
                  }
                  alt="Northwind Estate Master Plan Diagram"
                  fill
                  className={`object-cover group-hover:scale-102 transition-transform duration-500 ${
                    selectedPlanView === "schematic" ? "object-contain p-6" : ""
                  }`}
                />

                {/* Zoom Badge Overlay */}
                <div className="absolute bottom-4 right-4 bg-[#0D3829]/90 text-[#FFFCEC] backdrop-blur-md border border-[#ACC78C]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg group-hover:bg-[#0D3829] transition">
                  <ZoomIn className="w-3.5 h-3.5 text-[#ACC78C]" /> Click to Zoom Fullscreen
                </div>

                <div className="absolute top-4 left-4 bg-[#FFFCEC]/95 text-[#0D3829] border border-[#0D3829]/20 px-3 py-1 rounded-md text-[11px] font-bold shadow-xs">
                  {selectedPlanView === "aerial" ? "3D Concept Rendering" : "Schematic Vector Blueprint"}
                </div>
              </div>

              {/* Disclaimer Note */}
              <p className="text-xs text-[#5E7168] bg-[#F4F1DF] border border-[#0D3829]/10 p-3.5 rounded-xl italic leading-relaxed">
                <strong>Disclaimer Note:</strong> Visualizations and diagrams are illustrative conceptual representations for architectural intent only. Final site dimensions, tower configurations, and landscaping are subject to developer verification and regulatory filings.
              </p>

              {/* Master Planning Principles */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                  Township Planning Highlights
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planningFeatures.map((feat) => {
                    const IconComponent = feat.icon;
                    return (
                      <div key={feat.title} className="bg-white border border-[#0D3829]/15 rounded-xl p-5 shadow-xs space-y-2.5 hover:border-[#0D3829] transition cursor-pointer">
                        <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#FFFCEC] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#ACC78C]" />
                        </div>
                        <h4 className="font-serif font-bold text-sm text-[#0D3829]">{feat.title}</h4>
                        <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{feat.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Site Features Checklist */}
              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-serif font-bold text-[#0D3829]">
                  Key Strategic Master Plan Advantages
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {siteHighlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2 text-[#2D3C25]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Master Plan Inquiries
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request Official Site Plan
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Receive high-resolution master plan PDF, tower orientation map, unit availability, and schedule a site visit.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Master Plan Dedicated Page CTA"
                  sourcePage="/configurations/site-master-layout-plan"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 space-y-2 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Sales Desk: +91 97177 00596
                  </p>
                  <p className="text-[11px] text-[#5E7168]">
                    {siteConfig.rera}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Township Visual Gallery Section */}
      <section className="py-16 bg-[#F4F1DF] text-[#0D3829] border-t border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
              Township Architecture &amp; Master Plan Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Explore the master-planned low-density grounds, grand arrival plazas, and botanical landscape aura of Northwind Estate.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {galleryImages.map((img) => (
              <div key={img.title} className="group bg-white border border-[#0D3829]/15 rounded-xl overflow-hidden shadow-xs hover-card-lift cursor-pointer">
                <div className="aspect-[4/3] relative bg-[#0D3829] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 sm:p-4 space-y-0.5 sm:space-y-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0D3829] line-clamp-1 sm:line-clamp-none">{img.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#5E7168] font-light line-clamp-2">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Configuration Navigation */}
      <section className="py-16 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">Residences</span>
              <h2 className="text-2xl font-serif font-bold text-[#0D3829]">Available BHK Floor Plans</h2>
            </div>
            <Link
              href="/#configurations"
              className="text-xs font-bold text-[#0D3829] hover:text-[#ACC78C] flex items-center gap-1 transition"
            >
              <span>View All Configurations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card: 3 BHK */}
            <Link
              href="/configurations/3-bhk-luxury-apartment"
              className="group bg-white border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-6 shadow-sm transition hover-card-lift flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2.5 py-1 rounded-full border border-[#0D3829]/20">
                  Luxury Family Living
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0D3829] group-hover:text-[#0D3829] transition">
                  3 BHK Luxury Apartment
                </h3>
                <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                  Generously proportioned 3-bedroom residences with large sit-out balconies and dual-aspect cross ventilation.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3829] pt-2">
                <span>View 3 BHK Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card: 4 BHK */}
            <Link
              href="/configurations/4-bhk-ultra-estate-residence"
              className="group bg-white border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-6 shadow-sm transition hover-card-lift flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2.5 py-1 rounded-full border border-[#0D3829]/20">
                  Ultra Luxury Penthouse
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0D3829] group-hover:text-[#0D3829] transition">
                  4 BHK Ultra Estate Residence
                </h3>
                <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                  Expansive double-height living spaces, 4 en-suite bedrooms, and sweeping panoramic balconies.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3829] pt-2">
                <span>View 4 BHK Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Master Plan Dedicated FAQs Section */}
      <FAQSection faqs={masterPlanFaqs} />

      {/* Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D3829]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-5xl bg-[#FFFCEC] border border-[#0D3829]/30 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#0D3829]/15 pb-3">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#0D3829]">
                  Site &amp; Master Layout Plan Fullscreen
                </h3>
                <p className="text-xs text-[#5E7168]">
                  Sector 22D Yamuna Expressway, Greater Noida
                </p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="w-9 h-9 rounded-full bg-[#F4F1DF] hover:bg-[#0D3829] text-[#0D3829] hover:text-[#FFFCEC] flex items-center justify-center transition cursor-pointer"
                aria-label="Close Fullscreen View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#F4F1DF] rounded-xl overflow-hidden">
              <Image
                src={
                  selectedPlanView === "aerial"
                    ? "/images/configurations/site-master-layout-plan-hero.jpg"
                    : "/images/floor-plans/site-master-plan.svg"
                }
                alt="Fullscreen Master Plan"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
