"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Plane, Navigation, GraduationCap, Building, ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export default function LocationSection() {
  const { openLeadModal } = useLeadModal();

  const locationAdvantageList = [
    {
      icon: MapPin,
      title: "Yamuna Expressway Corridor",
      desc: "Direct access to the 6-lane Yamuna Expressway connecting Greater Noida with Delhi, Noida, and Agra."
    },
    {
      icon: Plane,
      title: "Noida International Airport (Jewar)",
      desc: "Close proximity to Jewar Airport, one of Asia's largest upcoming aviation and logistics hubs."
    },
    {
      icon: Navigation,
      title: "Metro & Rapid Rail Expansion",
      desc: "Benefits from proposed metro line expansion and regional rapid transit system (RRTS) alignment."
    },
    {
      icon: GraduationCap,
      title: "Educational & University Hubs",
      desc: "Convenient access to leading universities, international schools, and academic institutions in Greater Noida."
    },
    {
      icon: Building,
      title: "Commercial & Industrial Parks",
      desc: "Surrounded by upcoming IT parks, electronic manufacturing clusters, and film city developments."
    }
  ];

  return (
    <section id="location" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Strategic Connectivity
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Location Advantages — Sector 22D
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Positioned at the epicenter of infrastructure growth on Yamuna Expressway, Greater Noida.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Location Points Column (Left on Desktop, Below Image on Mobile) */}
          <AnimatedReveal direction="right" delay={0.2} className="order-2 lg:order-1 lg:col-span-6 space-y-3 sm:space-y-4 text-left">
            {locationAdvantageList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F4F1DF] p-3.5 sm:p-4 rounded-xl border border-[#0D3829]/15 flex items-start gap-3 sm:gap-4 shadow-xs"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ACC78C]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-[#0D3829] mb-0.5 sm:mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </AnimatedReveal>

          {/* Visual Location Map Column (Right on Desktop, Above Content on Mobile) */}
          <AnimatedReveal direction="left" className="order-1 lg:order-2 lg:col-span-6 relative">
            <TiltCard tiltDegree={4} depth={12}>
              <div className="relative rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-md bg-[#F4F1DF]">
                <div className="aspect-[4/3] relative w-full bg-[#F4F1DF]">
                  <Image
                    src="/images/extracted/Sector22dyamunaexpressway.webp"
                    alt="Sector 22D Yamuna Expressway Location Advantage Corridor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#FFFCEC] border-t border-[#0D3829]/15 text-xs text-[#0D3829] flex items-center justify-between">
                  <span className="font-bold text-[#0D3829]">Sector 22D Growth Corridor</span>
                  <span className="text-[11px] text-[#5E7168] font-medium">Greater Noida, UP</span>
                </div>
              </div>
            </TiltCard>
          </AnimatedReveal>

        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.3} className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Request Location Map & Driving Guide",
                ctaSource: "Location Section CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <span>Request Location Map & Driving Guide</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </button>
        </AnimatedReveal>

      </div>
    </section>
  );
}

