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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC]">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Image-2.jpg"
            alt="Northwind Estate Elevation"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl bg-[#0D3829]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#ACC78C]/25 shadow-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Real Estate Information Notice
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Disclaimer <span className="text-[#ACC78C]">Notice</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed">
              Legal notice regarding architectural renderings, RERA disclosures, unit availability, and informational usage for Northwind Estate, Sector 22D Yamuna Expressway.
            </p>
          </div>
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
