import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Dumbbell, MapPin, Layers, Trees, ShieldCheck, Building2 } from "lucide-react";
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
      {/* Amenities Page Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amenities/swimming-pool.jpg"
            alt="Resort Swimming Pool Northwind Estate"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Resort Lifestyle &amp; Connectivity
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight drop-shadow-lg">
              Amenities, Location &amp; <span className="text-[#ACC78C]">Floor Plans</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed drop-shadow">
              Explore the resort-style lifestyle facilities, Sector 22D connectivity advantages near Jewar International Airport, and architectural floor plan layouts at Northwind Estate.
            </p>
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
