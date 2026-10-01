"use client";

import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import TiltCard from "@/components/TiltCard";
import AnimatedReveal from "@/components/AnimatedReveal";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  Building,
  Navigation,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "@/components/LeadModalContext";

const contactFaqs: FAQItem[] = [
  {
    question: "How can I schedule a private site visit to Northwind Estate Sector 22D?",
    answer: "You can submit your contact details through the enquiry form or reach our property advisory desk directly at +91 97177 00596. Our dedicated team will coordinate a convenient appointment and guide you through tower orientations and master layouts."
  },
  {
    question: "Where is the Northwind Estate Experience Centre located?",
    answer: "Our project sales lounge is located directly in Sector 22D on the Yamuna Expressway, Greater Noida, Uttar Pradesh, strategically positioned along the high-growth corridor minutes away from the upcoming Noida International Airport at Jewar."
  },
  {
    question: "What are the sales office operational hours?",
    answer: "Our Experience Centre and sales desk are open 7 days a week from 9:00 AM to 8:00 PM. Prior scheduling is recommended to ensure a dedicated consultant is reserved for your visit."
  },
  {
    question: "How soon will I receive the official price list and layout brochure?",
    answer: "Once you submit your details, our authorized advisory team will share the verified digital brochures, 3 & 4 BHK layout blueprints, and current payment schedules directly via WhatsApp and Email within minutes."
  },
  {
    question: "Can I receive guidance on home loan and bank approvals?",
    answer: "Yes, our advisory desk provides comprehensive guidance on structured payment plans, bank financing options, and documentation assistance for prospective homebuyers."
  }
];

export default function ContactClient() {
  const { openLeadModal } = useLeadModal();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC]">
        {/* Full-bleed background image - clearly visible without dark gradient overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/master-plan-gallery-aerial.jpg"
            alt="Northwind Estate Sector 22D Aerial Enclave Master View"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl space-y-3 text-center mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Direct Advisory Desk • Sector 22D Yamuna Expressway
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-tight drop-shadow-lg">
              Connect With Our <span className="text-[#ACC78C]">Project Advisory Desk</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#ACC78C]/90 font-light leading-relaxed drop-shadow">
              Speak directly with authorized consultants for verified 3 &amp; 4 BHK price lists, unit availability, floor plan blueprints, and scheduled private site tours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO STRIP */}
      <section className="py-10 sm:py-12 bg-[#F4F1DF] text-[#0D3829] border-y border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
            
            {/* Card 1: Phone */}
            <button
              onClick={() =>
                openLeadModal({
                  title: `Request Instant Phone Callback (${siteConfig.phone})`,
                  ctaSource: "Contact Page Strip Phone Card",
                })
              }
              className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 transition hover-card-lift cursor-pointer group text-left w-full"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  Sales Phone Desk
                </span>
                <p className="text-sm font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition truncate">
                  {siteConfig.phone}
                </p>
                <span className="text-[10px] text-[#0D3829] font-semibold block">
                  Click to Request Callback
                </span>
              </div>
            </button>

            {/* Card 2: WhatsApp */}
            <button
              onClick={() =>
                openLeadModal({
                  title: "Connect via WhatsApp & Request Brochure",
                  ctaSource: "Contact Page Strip WhatsApp Card",
                })
              }
              className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 transition hover-card-lift cursor-pointer group text-left w-full"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  WhatsApp Helpline
                </span>
                <p className="text-sm font-bold text-[#0D3829] group-hover:text-[#25D366] transition truncate">
                  Chat with Consultant
                </p>
                <span className="text-[10px] text-[#25D366] font-semibold block">
                  Instant Brochure via WhatsApp
                </span>
              </div>
            </button>

            {/* Card 3: Location */}
            <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 cursor-pointer hover-card-lift">
              <div className="w-11 h-11 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  Project Site Address
                </span>
                <p className="text-sm font-bold text-[#0D3829] truncate">
                  Sector 22D, Yamuna Expressway
                </p>
                <span className="text-[10px] text-[#5E7168] font-light block">
                  Greater Noida, Uttar Pradesh
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEDICATED SEPARATE ENQUIRY & LEAD FORM SECTION */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
              Direct Property Advisory
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
              Request Information &amp; Schedule Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light leading-relaxed max-w-2xl mx-auto">
              Submit your inquiry to receive verified cost sheets, 3 &amp; 4 BHK payment plans, unit allotment guidance, and private site inspection coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form Benefits & Schedule Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0D3829]" /> Direct Consultation Advantages
                </h3>
                
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#2D3C25]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Official Developer Pricing Sheets</strong>
                      <span className="font-light text-xs text-[#5E7168]">Verified transparent cost breakdowns directly from the project advisory desk.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">3 BHK &amp; 4 BHK Layout Consultation</strong>
                      <span className="font-light text-xs text-[#5E7168]">Detailed room dimensions, balcony orientations, and tower position analysis.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Priority Allotment Assistance</strong>
                      <span className="font-light text-xs text-[#5E7168]">Early access to preferred park-facing and corner tower configurations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Confidential &amp; Verified Advisory</strong>
                      <span className="font-light text-xs text-[#5E7168]">Your inquiry is handled strictly by senior consultants with complete privacy.</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[#0D3829]/10 flex items-center justify-between text-xs text-[#0D3829]">
                  <span className="font-semibold">{siteConfig.rera}</span>
                  <span className="bg-[#0D3829] text-[#FFFCEC] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Authorized Desk
                  </span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-[#1E3A2B] text-[#FFFCEC] rounded-2xl p-6 space-y-3 shadow-md border border-[#ACC78C]/20">
                <div className="flex items-center gap-2 text-[#ACC78C] font-semibold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> Experience Lounge Timings
                </div>
                <h4 className="font-serif font-bold text-base text-[#FFFCEC]">
                  Open 7 Days a Week
                </h4>
                <p className="text-xs text-[#FFFCEC]/80 font-light leading-relaxed">
                  Monday to Sunday: <strong>9:00 AM – 8:00 PM</strong>. Advance appointments ensure dedicated consultant time and personalized layout walkthroughs.
                </p>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-[#0D3829]/15 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#0D3829]/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#0D3829] font-bold block">
                      Direct Sales Assistance
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                      Inquire for Northwind Estate
                    </h3>
                  </div>

                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/dark-logo.svg"
                        alt="Northwind Sector 22D Official Logo"
                        width={130}
                        height={32}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                    <span className="w-full text-center text-[8px] font-bold tracking-[0.25em] uppercase text-[#0D3829] -mt-0.5">
                      Yamuna
                    </span>
                  </div>
                </div>

                <LeadForm
                  sourceCTA="Contact Dedicated Form Section"
                  sourcePage="/contact"
                />

                <div className="pt-2 text-center text-xs text-[#5E7168] font-light">
                  <span>🔒 Your personal information is encrypted and protected under our </span>
                  <a href="/privacy-policy" className="text-[#0D3829] font-semibold underline hover:text-[#ACC78C] transition">
                    Privacy Policy
                  </a>.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CONTACT & SITE VISIT FAQS SECTION */}
      <FAQSection faqs={contactFaqs} />
    </>
  );
}
