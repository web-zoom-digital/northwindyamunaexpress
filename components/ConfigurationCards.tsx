"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export default function ConfigurationCards() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="configurations" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Residences &amp; Configurations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Available BHK Configurations
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Elegantly proportioned 3 BHK and 4 BHK residential apartments in Sector 22D, Yamuna Expressway.
          </p>
        </AnimatedReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-8">
          
          {/* Card 1: 3 BHK */}
          <AnimatedReveal direction="up" delay={0.1} className="h-full">
            <TiltCard tiltDegree={4} depth={14} className="h-full">
              <div className="bg-white border border-[#0D3829]/15 hover:border-[#0D3829] rounded-xl sm:rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  {/* Card Visual Banner */}
                  <div className="aspect-[16/9] relative bg-[#F4F1DF] overflow-hidden">
                    <Image
                      src="/images/extracted/Sector22dyamunaexpressway.webp"
                      alt="Northwind Estate 3 BHK Luxury Residences"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#0D3829] text-[#FFFCEC] text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider shadow-xs border border-[#ACC78C]/30">
                      3 BHK Luxury
                    </div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#0D3829]/95 text-[#FFFCEC] border border-[#ACC78C]/60 text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider shadow-md backdrop-blur-xs">
                      <span>Coming Soon</span>
                    </div>
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#FFFCEC]/95 text-[#0D3829] border border-[#0D3829]/15 text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md shadow-xs">
                      Area: On Request
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-7 space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 sm:pb-3 border-b border-[#0D3829]/10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-xl font-serif font-bold text-[#0D3829] leading-snug">3 BHK Luxury</h3>
                        <span className="text-[9px] sm:text-[10px] text-[#0D3829] font-bold bg-[#ACC78C]/30 px-2 py-0.5 rounded-md border border-[#0D3829]/20 uppercase tracking-wide">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-[#0D3829] font-semibold bg-[#0D3829]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#0D3829]/20 w-fit">
                        On Request
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                      Generously proportioned 3-bedroom residence with expansive living and dining hall, wide balconies, and optimal orientation for daylight.
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                      <h4 className="text-[10px] sm:text-xs font-serif font-bold text-[#0D3829] uppercase tracking-wider">Specifications</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#2D3C25]">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Vitrified Tile Flooring</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Anti-Skid Balcony Tiles</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Granite Counter Sink</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>UPVC Toughened Glass</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="p-3.5 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() =>
                      openLeadModal({
                        title: "Inquiry 3 BHK Price & Cost Sheet",
                        preferredConfig: "3 BHK Luxury Apartment",
                        ctaSource: "3BHK Inquiry Price",
                      })
                    }
                    className="w-full sm:flex-1 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs uppercase tracking-wider shadow-xs transition text-center cursor-pointer"
                  >
                    Inquiry Price
                  </button>
                  <button
                    onClick={() =>
                      openLeadModal({
                        title: "Request 3 BHK Detailed Floor Plan",
                        preferredConfig: "3 BHK Luxury Apartment",
                        ctaSource: "3BHK Floor Plan CTA",
                      })
                    }
                    className="w-full sm:flex-1 bg-white hover:bg-[#F4F1DF] text-[#0D3829] font-semibold border border-[#0D3829]/20 hover:border-[#0D3829] py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs transition text-center shadow-xs cursor-pointer"
                  >
                    Floor Plan
                  </button>
                </div>
              </div>
            </TiltCard>
          </AnimatedReveal>

          {/* Card 2: 4 BHK */}
          <AnimatedReveal direction="up" delay={0.2} className="h-full">
            <TiltCard tiltDegree={4} depth={14} className="h-full">
              <div className="bg-white border border-[#0D3829]/15 hover:border-[#0D3829] rounded-xl sm:rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  {/* Card Visual Banner */}
                  <div className="aspect-[16/9] relative bg-[#F4F1DF] overflow-hidden">
                    <Image
                      src="/images/extracted/herohomes.webp"
                      alt="Northwind Estate 4 BHK Ultra Estate Residences"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#1E3A2B] text-[#FFFCEC] text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider shadow-xs border border-[#ACC78C]/30">
                      4 BHK Estate
                    </div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#0D3829]/95 text-[#FFFCEC] border border-[#ACC78C]/60 text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider shadow-md backdrop-blur-xs">
                      <span>Coming Soon</span>
                    </div>
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#FFFCEC]/95 text-[#0D3829] border border-[#0D3829]/15 text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md shadow-xs">
                      Area: On Request
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-7 space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 sm:pb-3 border-b border-[#0D3829]/10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-xl font-serif font-bold text-[#0D3829] leading-snug">4 BHK Estate</h3>
                        <span className="text-[9px] sm:text-[10px] text-[#0D3829] font-bold bg-[#ACC78C]/30 px-2 py-0.5 rounded-md border border-[#0D3829]/20 uppercase tracking-wide">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-[#0D3829] font-semibold bg-[#0D3829]/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#0D3829]/20 w-fit">
                        On Request
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                      Ultra-spacious 4-bedroom executive suite designed for multi-generational living with grand balcony layout.
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                      <h4 className="text-[10px] sm:text-xs font-serif font-bold text-[#0D3829] uppercase tracking-wider">Specifications</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#2D3C25]">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>4 En-Suite Bedrooms</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Grand Double Balconies</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Gypsum False Ceiling</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                          <span>Weatherproof Balconies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="p-3.5 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() =>
                      openLeadModal({
                        title: "Inquiry 4 BHK Price & Cost Sheet",
                        preferredConfig: "4 BHK Ultra Estate Residence",
                        ctaSource: "4BHK Inquiry Price",
                      })
                    }
                    className="w-full sm:flex-1 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs uppercase tracking-wider shadow-xs transition text-center cursor-pointer"
                  >
                    Inquiry Price
                  </button>
                  <button
                    onClick={() =>
                      openLeadModal({
                        title: "Request 4 BHK Detailed Floor Plan",
                        preferredConfig: "4 BHK Ultra Estate Residence",
                        ctaSource: "4BHK Floor Plan CTA",
                      })
                    }
                    className="w-full sm:flex-1 bg-white hover:bg-[#F4F1DF] text-[#0D3829] font-semibold border border-[#0D3829]/20 hover:border-[#0D3829] py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs transition text-center shadow-xs cursor-pointer"
                  >
                    Floor Plan
                  </button>
                </div>
              </div>
            </TiltCard>
          </AnimatedReveal>
        </div>

        {/* Centered Bottom Action Button */}
        <AnimatedReveal direction="up" delay={0.3} className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Inquire Complete Project Cost Sheet",
                ctaSource: "Configurations Bottom CTA",
              })
            }
            className="inline-flex items-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-sm cursor-pointer group"
          >
            <span>Request Complete Price &amp; Payment Schedule</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedReveal>

      </div>
    </section>
  );
}

