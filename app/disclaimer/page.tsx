import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Disclaimer | Northwind Estate",
  description: "Official real estate disclaimer and information notice for Northwind Estate, Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Full-Screen Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC] subtle-grid">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Image-2.jpg"
            alt="Northwind Estate Elevation"
            fill
            priority
            className="object-cover opacity-25 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/85 to-[#0D3829]/95" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#ACC78C]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
          <Breadcrumb items={[{ label: "Disclaimer", href: "/disclaimer" }]} variant="dark" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#ACC78C]" /> Real Estate Information Notice
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
            Disclaimer <span className="gold-gradient-text">Notice</span>
          </h1>

          <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
            Legal notice regarding architectural renderings, RERA disclosures, unit availability, and informational usage for Northwind Estate, Sector 22D Yamuna Expressway.
          </p>
        </div>
      </section>

      {/* Main Disclaimer Text Section */}
      <section className="py-16 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-[#2D3C25] text-xs sm:text-sm font-light leading-relaxed">
          <p>
            The content provided on this website ({siteConfig.url}) is for general informational and lead-generation purposes regarding <strong>Northwind Estate</strong> in Sector 22D, Yamuna Expressway, Greater Noida.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            1. Artistic Renderings &amp; Visuals
          </h2>
          <p>
            All elevation renderings, interior visuals, floor plans, and layout maps displayed are artistic impressions and conceptual representations. Actual completed structures, colors, materials, and land area dimensions may vary as per final architect specifications and regulatory approvals.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            2. RERA &amp; Pricing Notice
          </h2>
          <p>
            {siteConfig.rera}. Official price sheets, payment plans, and unit availability are provided on request upon direct consultation with authorized sales representatives.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            3. Non-Binding Information
          </h2>
          <p>
            This website does not constitute a legal offer, contract, or binding agreement for allotment. Prospective buyers are advised to independently verify all details, regulatory approvals, and land records prior to entering into any transaction.
          </p>

          <p className="pt-4 text-xs text-[#5E7168]">
            Last updated: September 2026.
          </p>
        </div>
      </section>
    </>
  );
}
