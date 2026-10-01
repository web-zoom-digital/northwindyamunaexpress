"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, Trees, ShieldCheck, Waves, Smile, Building2, ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export default function AmenitiesSection() {
  const { openLeadModal } = useLeadModal();

  const amenityCards = [
    {
      title: "Clubhouse & Social Lounge",
      desc: "Architecturally styled clubhouse for community events, indoor recreation, and private gatherings.",
      icon: Building2,
      image: "/images/amenities/clubhouse.jpg",
      tag: "Social Hub"
    },
    {
      title: "Swimming Pool & Kids Pool",
      desc: "Refresh and relax with a temperature-controlled swimming pool complete with sun loungers and deck space.",
      icon: Waves,
      image: "/images/amenities/swimming-pool.jpg",
      tag: "Aqua Zone"
    },
    {
      title: "Fully-Equipped Fitness Gym",
      desc: "State-of-the-art cardiovascular and strength training equipment for health-conscious residents.",
      icon: Dumbbell,
      image: "/images/amenities/fitness-gym.jpg",
      tag: "Wellness"
    },
    {
      title: "Landscaped Zen Gardens",
      desc: "Expansive green spaces, flower beds, and shaded walking trails designed for peaceful evening walks.",
      icon: Trees,
      image: "/images/amenities/zen-gardens.jpg",
      tag: "Greenery"
    },
    {
      title: "Children's Play Area",
      desc: "Soft-paved outdoor play zone with modern swing sets, slides, and rubberized safety flooring.",
      icon: Smile,
      image: "/images/amenities/kids-play.jpg",
      tag: "Kids Zone"
    },
    {
      title: "24x7 Security & Power Backup",
      desc: "Multi-tiered security checkpoint with CCTV monitoring, smart card access, and 100% power backup.",
      icon: ShieldCheck,
      image: "/images/amenities/security-gate.jpg",
      tag: "Security & Utilities"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-[#F4F1DF] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Lifestyle Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Curated Project Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Everything you need for a comfortable, healthy, and secure lifestyle in Sector 22D, Yamuna Expressway.
          </p>
        </AnimatedReveal>

        {/* Amenity Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {amenityCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={idx} direction="up" delay={idx * 0.05} className="h-full">
                <TiltCard tiltDegree={5} depth={12} className="h-full">
                  <div
                    className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(13,58,41,0.06)] hover:shadow-[0_12px_30px_rgba(13,58,41,0.12)] transition-all duration-300 group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="aspect-[16/10] relative bg-[#F4F1DF] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#0D3829] text-[#FFFCEC] text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#ACC78C]/30 uppercase tracking-wider shadow-xs">
                          {item.tag}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-6 space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[#0D3829] mb-0.5 sm:mb-1">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#0D3829]" />
                          <h3 className="text-xs sm:text-lg font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-6 pt-0">
                      <button
                        onClick={() =>
                          openLeadModal({
                            title: `Enquire About ${item.title}`,
                            ctaSource: `Amenity Card ${item.title}`,
                          })
                        }
                        className="w-full bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[10px] sm:text-xs font-semibold transition flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ACC78C]" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Download Full Amenities & Clubhouse Brochure",
                ctaSource: "Amenities Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <span>Request Complete Amenities Brochure</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </button>
        </AnimatedReveal>

      </div>
    </section>
  );
}

