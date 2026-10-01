import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms and Conditions | Northwind Estate",
  description: "Terms and conditions governing the use of Northwind Estate lead generation portal.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC]">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/banner-young-homz.jpg"
            alt="Northwind Estate Master Residence Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl bg-[#0D3829]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#ACC78C]/25 shadow-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Terms of Use &amp; Service Agreement
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Terms &amp; <span className="text-[#ACC78C]">Conditions</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed">
              Standard portal terms governing user access, intellectual property, and real estate inquiry conditions for Northwind Estate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-[#2D3C25] text-xs sm:text-sm font-light leading-relaxed">

          <p>
            Welcome to <strong>Northwind Estate</strong> ({siteConfig.url}). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            1. Informational Portal Purpose
          </h2>
          <p>
            This website serves as an informational lead-generation and project showcase portal. Content provided regarding Northwind Estate (Sector 22D Yamuna Expressway) is intended for general guidance and preliminary enquiry.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            2. Intellectual Property
          </h2>
          <p>
            All original graphics, logos, text copy, layout designs, and code on this website are protected under copyright laws. Unauthorized copying or redistribution without written permission is prohibited.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            3. Limitation of Liability
          </h2>
          <p>
            While we strive to maintain accurate information, project specifications, floor plan dimensions, and pricing are subject to builder verification. We shall not be held liable for inaccuracies or updates occurring in real-time developer filings.
          </p>

          <p className="pt-4 text-xs text-[#5E7168]">
            Last updated: September 2026.
          </p>
        </div>
      </section>
    </>
  );
}
