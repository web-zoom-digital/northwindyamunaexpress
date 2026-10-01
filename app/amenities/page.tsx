import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Sparkles, Dumbbell, MapPin, Layers, Trees, ShieldCheck, Building2 } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Amenities, Location & Floor Plans | Northwind Estate",
  description:
    "Explore modern project amenities, location advantages in Sector 22D Yamuna Expressway, and 3 & 4 BHK floor plans at Northwind Estate.",
  alternates: {
    canonical: `${siteConfig.url}/amenities`,
  },
};

export default function AmenitiesPage() {
  return (
    <>
      {/* Amenities Page Full-Screen Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D3829] text-white subtle-grid">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amenities/swimming-pool.jpg"
            alt="Resort Swimming Pool Northwind Estate"
            fill
            priority
            className="object-cover opacity-50 scale-105"
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-[#ACC78C]/15 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Amenities & Location", href: "/amenities" }]} variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
                <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Resort Lifestyle &amp; Connectivity
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight">
                Amenities, Location &amp; <span className="gold-gradient-text">Floor Plans</span>
              </h1>
              <p className="text-sm sm:text-base text-[#FFFCEC]/80 font-light leading-relaxed max-w-2xl">
                Explore the resort-style lifestyle facilities, Sector 22D connectivity advantages near Jewar International Airport, and architectural floor plan layouts at Northwind Estate.
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 text-xs text-[#FFFCEC]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Modern Clubhouse &amp; Lounge
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Temperature-Controlled Pool
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" /> Sector 22D Yamuna Expressway
                </span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-[#ACC78C]/30 bg-[#1E3A2B]/90 backdrop-blur-md p-3 shadow-2xl space-y-3 hover-card-lift">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#0D3829]">
                  <Image
                    src="/images/amenities/clubhouse.jpg"
                    alt="Luxury Clubhouse Lounge Northwind Estate"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#ACC78C] font-serif font-bold">
                    Architectural Clubhouse &amp; Social Lounge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AmenitiesSection />
      <LocationSection />
      <FloorPlanSection />
      <FAQSection />
      <CTASection
        title="Request Amenity List &amp; Floor Plan Booklet"
        subtitle="Get instant access to digital floor plan PDFs and project pricing details."
      />
    </>
  );
}
