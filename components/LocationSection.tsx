"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  MapPin,
  Plane,
  Navigation,
  Building,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  Film,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

interface LocationNode {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  angleDeg: number;
}

const locationNodes: LocationNode[] = [
  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    category: "6-Lane Highway",
    icon: MapPin,
    angleDeg: 0, // 3 o'clock
  },
  {
    id: "metro-station",
    title: "Proposed Metro",
    category: "Transit Corridor",
    icon: Navigation,
    angleDeg: 45, // 4:30
  },
  {
    id: "jewar-airport",
    title: "Noida Int'l Airport",
    category: "Jewar Aviation Hub",
    icon: Plane,
    angleDeg: 90, // 6 o'clock
  },
  {
    id: "business-hub",
    title: "Business & IT Hub",
    category: "Corporate Zones",
    icon: Building,
    angleDeg: 135, // 7:30
  },
  {
    id: "shopping-retail",
    title: "Shopping & Retail",
    category: "Commercial High Street",
    icon: ShoppingBag,
    angleDeg: 180, // 9 o'clock
  },
  {
    id: "leading-hospitals",
    title: "Leading Hospitals",
    category: "Healthcare Hub",
    icon: HeartPulse,
    angleDeg: 225, // 10:30
  },
  {
    id: "reputed-schools",
    title: "Reputed Schools",
    category: "Education Hub",
    icon: GraduationCap,
    angleDeg: 270, // 12 o'clock
  },
  {
    id: "film-city",
    title: "Film & Sports City",
    category: "Entertainment Corridor",
    icon: Film,
    angleDeg: 315, // 1:30
  },
];

export default function LocationSection() {
  const { openLeadModal } = useLeadModal();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const isOrbitPaused = hoveredNode !== null;

  return (
    <section
      id="location"
      className="py-20 bg-[#FFFCEC] text-[#0D3829] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedReveal
          direction="up"
          className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-[#5E7168] uppercase">
            Regional Connectivity &amp; Access
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
            Location Advantages — Sector 22D
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            Situated along the Yamuna Expressway with convenient arterial access to Greater Noida, regional transit corridors, and the upcoming Noida International Airport at Jewar.
          </p>
        </AnimatedReveal>

        {/* Orbit Visualization Stage */}
        <div className="relative w-full flex items-center justify-center my-4 py-8">
          {/* Main Orbit Stage Container */}
          <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[760px] aspect-square flex items-center justify-center">
            
            {/* Background Static Concentric Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-[#0D3829]/10 pointer-events-none" />
            <div className="absolute inset-[10%] rounded-full border border-dashed border-[#0D3829]/15 pointer-events-none animate-[spin_120s_linear_infinite]" />
            <div className="absolute inset-[24%] rounded-full border border-[#0D3829]/10 pointer-events-none" />
            <div className="absolute inset-[36%] rounded-full border border-dashed border-[#ACC78C]/30 pointer-events-none" />

            {/* Central Luxury Property Image (Stationary) */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px] lg:w-[310px] lg:h-[310px] rounded-full p-1.5 sm:p-2.5 bg-[#FFFCEC] shadow-[0_15px_45px_rgba(13,58,41,0.22)] flex items-center justify-center group"
            >
              {/* Circular Cropped Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-[#0D3829]">
                <Image
                  src="/images/location/luxury-property-center.jpg"
                  alt="Northwind Estate Sector 22D Luxury Residences"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 220px, 310px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

                {/* Central Brand Tag on Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 sm:pb-6 text-center pointer-events-none">
                  <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#ACC78C] bg-[#0D3829]/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#ACC78C]/40 backdrop-blur-md shadow-md">
                    Sector 22D
                  </span>
                  <span className="text-[10px] sm:text-sm font-serif font-bold text-[#FFFCEC] drop-shadow-md pt-0.5">
                    Northwind Estate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Container that spins 360 degrees */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                animation: shouldReduceMotion
                  ? "none"
                  : `location-orbit-spin 48s linear infinite`,
                animationPlayState: isOrbitPaused ? "paused" : "running",
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              {locationNodes.map((node) => {
                const Icon = node.icon;
                const rad = (node.angleDeg * Math.PI) / 180;
                
                // Percent offset from center: radius is ~44% of parent box
                const radiusPct = 43.5;
                const xPct = Math.cos(rad) * radiusPct;
                const yPct = Math.sin(rad) * radiusPct;

                const isHovered = hoveredNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={{
                      position: "absolute",
                      top: `calc(50% + ${yPct}%)`,
                      left: `calc(50% + ${xPct}%)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="pointer-events-auto"
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() =>
                      openLeadModal({
                        title: `Inquire Location Proximity to ${node.title}`,
                        preferredConfig: node.title,
                        ctaSource: `Location Orbit Card - ${node.title}`,
                      })
                    }
                  >
                    {/* Counter-Spin Wrapper keeps the card completely upright */}
                    <div
                      style={{
                        animation: shouldReduceMotion
                          ? "none"
                          : `location-orbit-counter-spin 48s linear infinite`,
                        animationPlayState: isOrbitPaused ? "paused" : "running",
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.12 : 1,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`w-[72px] h-[72px] xs:w-[82px] xs:h-[82px] sm:w-[102px] sm:h-[102px] md:w-[118px] md:h-[118px] rounded-full p-1.5 sm:p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 select-none ${
                          isHovered
                            ? "bg-[#0D3829] text-[#FFFCEC] shadow-[0_12px_32px_rgba(13,58,41,0.35)] scale-110 ring-2 ring-[#ACC78C]/40"
                            : "bg-[#FFFCEC] text-[#0D3829] shadow-[0_8px_20px_rgba(13,58,41,0.12)] hover:shadow-[0_12px_28px_rgba(13,58,41,0.22)]"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mb-1 transition-colors ${
                            isHovered
                              ? "bg-[#ACC78C] text-[#0D3829]"
                              : "bg-[#0D3829]/10 text-[#0D3829]"
                          }`}
                        >
                          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        </div>

                        <span
                          className={`text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs font-serif font-bold leading-tight line-clamp-2 px-1 ${
                            isHovered ? "text-[#FFFCEC]" : "text-[#0D3829]"
                          }`}
                        >
                          {node.title}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.3} className="pt-10 sm:pt-14 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Request Sector 22D Location Map & Distance Chart",
                ctaSource: "Location Orbit Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
          >
            <span>Request Location Map &amp; Driving Guide</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedReveal>

      </div>

      {/* Embedded CSS Keyframes for GPU-accelerated 60fps orbit */}
      <style jsx global>{`
        @keyframes location-orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes location-orbit-counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
