import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import ConfigurationCards from "@/components/ConfigurationCards";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import Gallery from "@/components/Gallery";
import WhyConsiderSection from "@/components/WhyConsiderSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProjectOverview />
      <Highlights />
      <ConfigurationCards />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlanSection />
      <Gallery />
      <WhyConsiderSection />
      <BlogSection />
      <FAQSection />
      <CTASection
        title="Plan a Physical Site Visit to Northwind Estate"
        subtitle="Walk through the Sector 22D location, examine tower orientation and site plans, and request verified pricing from our advisory desk."
      />
    </>
  );
}
