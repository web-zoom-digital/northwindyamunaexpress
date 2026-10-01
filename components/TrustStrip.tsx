"use client";

import React from "react";
import { Trees, ShieldCheck, Plane, MapPin } from "lucide-react";
import AnimatedReveal from "./AnimatedReveal";

export default function TrustStrip() {
  const trustMetrics = [
    {
      icon: Trees,
      value: "Low-Density Layout",
      label: "75%+ Landscaped Area",
      highlight: "Enhanced Natural Daylight"
    },
    {
      icon: MapPin,
      value: "Sector 22D YEIDA",
      label: "Direct Arterial Road Access",
      highlight: "Yamuna Expressway Link"
    },
    {
      icon: Plane,
      value: "Airport Growth Belt",
      label: "Noida International Airport",
      highlight: "Strategic NCR Location"
    },
    {
      icon: ShieldCheck,
      value: "Gated Community",
      label: "Multi-Tier Access Control",
      highlight: "Power Backup & Security"
    }
  ];

  return (
    <section className="bg-[#1E3A2B] text-[#FFFCEC] py-8 sm:py-10 relative z-20 border-b border-[#ACC78C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trustMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal
                key={idx}
                direction="up"
                delay={idx * 0.05}
                className="h-full"
              >
                <div className="bg-[#0D3829] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border border-[#ACC78C]/15 h-full">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#1E3A2B] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-serif font-bold text-[#FFFCEC] block leading-tight">
                      {item.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-[#ACC78C] font-medium block mt-0.5">
                      {item.label}
                    </span>
                    <span className="text-[9px] sm:text-[11px] text-[#FFFCEC]/70 font-light block line-clamp-1 sm:line-clamp-none mt-0.5">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
