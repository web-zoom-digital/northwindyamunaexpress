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
      {/* Full-Screen Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC] subtle-grid">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/banner-young-homz.jpg"
            alt="Northwind Estate Master Residence Banner"
            fill
            priority
            className="object-cover opacity-25 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/85 to-[#0D3829]/95" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#ACC78C]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
          <Breadcrumb items={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]} variant="dark" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
            <FileText className="w-3.5 h-3.5 text-[#ACC78C]" /> Terms of Use &amp; Service Agreement
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
            Terms &amp; <span className="gold-gradient-text">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
            Standard portal terms governing user access, intellectual property, and real estate inquiry conditions for Northwind Estate.
          </p>
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
