import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { ShieldCheck, Lock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy | Northwind Estate",
  description: "Privacy policy regarding lead collection and personal data protection for Northwind Estate property enquiries.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Full-Screen Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC] subtle-grid">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Image-3.jpg"
            alt="Northwind Estate Landscaping"
            fill
            priority
            className="object-cover opacity-25 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/85 to-[#0D3829]/95" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#ACC78C]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
          <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} variant="dark" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
            <Lock className="w-3.5 h-3.5 text-[#ACC78C]" /> Data Protection &amp; Confidentiality
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
            Our commitment to visitor confidentiality, data privacy, and secure lead processing for Northwind Estate, Sector 22D Yamuna Expressway.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-[#2D3C25] text-xs sm:text-sm font-light leading-relaxed">

          <p>
            At <strong>Northwind Estate</strong>, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Northwind Estate and how we use it.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you register an enquiry on our website, we may collect personal information including your:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#2D3C25]">
            <li>Full Name</li>
            <li>Mobile Phone Number</li>
            <li>Email Address</li>
            <li>Property Configuration Preference (e.g. 3 BHK or 4 BHK)</li>
            <li>Budget Range &amp; Site Visit Preferences</li>
            <li>IP Address and UTM Campaign Parameters</li>
          </ul>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            2. How We Use Your Information
          </h2>
          <p>
            We collect and use your information solely for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#2D3C25]">
            <li>Responding to your property enquiries and providing e-brochures.</li>
            <li>Scheduling site visits and providing sales support.</li>
            <li>Communicating via Phone, SMS, Email, or WhatsApp regarding project updates.</li>
            <li>Preventing spam and improving our website experience.</li>
          </ul>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            3. Data Sharing &amp; Protection
          </h2>
          <p>
            We do not sell, trade, or rent your personal identification information to third parties or marketing agencies. Your information is accessed strictly by authorized property consultants for addressing your specific real estate query.
          </p>

          <h2 className="text-lg font-serif font-bold text-[#0D3829] pt-2">
            4. Consent
          </h2>
          <p>
            By submitting your details on our forms, you hereby consent to our Privacy Policy and agree to be contacted regarding your property enquiry.
          </p>

          <p className="pt-4 text-xs text-[#5E7168]">
            Last updated: September 2026. For privacy concerns, please contact our support desk at +91 97177 00596.
          </p>
        </div>
      </section>
    </>
  );
}
