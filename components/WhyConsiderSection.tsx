"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export default function WhyConsiderSection() {
  const { openLeadModal } = useLeadModal();

  const reasons = [
    {
      title: "Strategic Capital Growth Corridor",
      desc: "Yamuna Expressway Sector 22D is benefiting from infrastructure projects including Noida International Airport, Film City, and industrial parks."
    },
    {
      title: "Low-Density Living Concept",
      desc: "Fewer residential units per acre compared to congested city centers, ensuring peaceful open-air living and green views."
    },
    {
      title: "Refined Modern Specifications",
      desc: "Vitrified flooring in living zones, anti-skid balcony tiles, granite kitchen counters with stainless steel sinks, and UPVC toughened glass frames."
    },
    {
      title: "Transparent & Direct Process",
      desc: "Clear documentation, verified layout blueprints, structured price sheets, and professional property consultant guidance at every stage."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F1DF] text-[#0D3829] relative border-t border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Informed Decision Making
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Why Consider Northwind Estate?
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] leading-relaxed font-light">
            Investing in residential real estate requires balancing long-term appreciation, structural quality, and lifestyle convenience. Sector 22D Yamuna Expressway delivers all three.
          </p>
        </AnimatedReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {reasons.map((r, i) => (
            <AnimatedReveal key={i} direction="up" delay={i * 0.05} className="h-full">
              <TiltCard tiltDegree={5} depth={12} className="h-full">
                <div
                  className="bg-[#FFFCEC] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#0D3829]/15 transition space-y-2 sm:space-y-3 shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_12px_30px_rgba(13,58,41,0.12)] flex flex-col justify-between h-full"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center font-bold text-[11px] sm:text-xs">
                      0{i + 1}
                    </div>
                    <h3 className="text-xs sm:text-base font-serif font-bold text-[#0D3829] leading-snug">{r.title}</h3>
                    <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">{r.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>
          ))}
        </div>

        {/* Bottom Centered CTA */}
        <div className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Schedule Private Site Tour",
                ctaSource: "Why Consider CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <span>Schedule Private Site Visit</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </button>
        </div>

      </div>
    </section>
  );
}

