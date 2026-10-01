"use client";

import React from "react";
import { Trees, ShieldCheck, Plane, MapPin } from "lucide-react";
import AnimatedReveal from "./AnimatedReveal";

import TiltCard from "./TiltCard";

export default function TrustStrip() {
  const trustMetrics = [
    {
      icon: Trees,
      value: "Low-Density Enclave",
      label: "75%+ Open Green Spaces",
      highlight: "Max Privacy & Light"
    },
    {
      icon: MapPin,
      value: "Sector 22D YEIDA",
      label: "60M Wide Arterial Access",
      highlight: "Yamuna Expressway"
    },
    {
      icon: Plane,
      value: "Jewar Airport Corridor",
      label: "High Appreciation Belt",
      highlight: "Strategic Proximity"
    },
    {
      icon: ShieldCheck,
      value: "3-Tier Gated Security",
      label: "100% Power & Surveillance",
      highlight: "24x7 Monitored"
    }
  ];

  return (
    <section className="bg-[#1E3A2B] border-y border-[#ACC78C]/20 text-[#FFFCEC] py-8 sm:py-10 relative z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {trustMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal
                key={idx}
                direction="up"
                delay={idx * 0.05}
                className="h-full"
              >
                <TiltCard tiltDegree={5} depth={12} className="h-full">
                  <div className="bg-[#0D3829]/90 border border-[#ACC78C]/25 hover:border-[#ACC78C]/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-lg transition-all duration-300 group h-full">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#1E3A2B] border border-[#ACC78C]/40 text-[#ACC78C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-sm font-serif font-bold text-[#FFFCEC] block leading-tight">
                        {item.value}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#ACC78C] font-medium block mt-0.5">
                        {item.label}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-[#FFFCEC]/70 font-light block line-clamp-1 sm:line-clamp-none">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
