"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

interface BenefitCardItem {
  id: string;
  title: string;
  image: string;
}

const benefitItems: BenefitCardItem[] = [
  {
    id: "growth-corridor",
    title: "Sector 22D Regional Connectivity",
    image: "/images/blog/yamuna-expressway-investment-growth.jpg",
  },
  {
    id: "low-density",
    title: "Low-Density Green Master Plan",
    image: "/images/blog/low-density-luxury-living-sector-22d.jpg",
  },
  {
    id: "modern-specs",
    title: "Durable Interior Specifications",
    image: "/images/blog/modular-kitchens-designer-interiors.jpg",
  },
  {
    id: "direct-process",
    title: "Gated Security & Facilities",
    image: "/images/blog/smart-sustainable-residences-yamuna.jpg",
  },
];

export default function WhyConsiderSection() {
  const { openLeadModal } = useLeadModal();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking along the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });

  return (
    <section
      ref={sectionRef}
      id="why-consider"
      className="py-20 sm:py-24 bg-[#F4F1DF] text-[#0D3829] relative overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D3829_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <AnimatedReveal
          direction="up"
          className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D3829]/10 text-[#0D3829] text-xs font-semibold uppercase tracking-wider">
            <span>Key Project Considerations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3829]">
            Why Consider Northwind Estate?
          </h2>

          <p className="text-xs sm:text-sm text-[#5E7168] leading-relaxed font-light max-w-2xl mx-auto">
            When evaluating a residential property, balancing location accessibility, building density, interior space efficiency, and community facilities is essential. Here is how Northwind Estate is structured across these core areas.
          </p>
        </AnimatedReveal>

        {/* ========================================================================= */}
        {/* DESKTOP CONNECTED FLOW (Horizontal 4-Step Animated Grid with SVG Connectors) */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {benefitItems.map((item, idx) => {
            const itemStart = idx * 0.22;
            const itemEnd = itemStart + 0.25;

            return (
              <div key={item.id} className="relative flex flex-col h-full">
                {/* Desktop Connecting Animated Arrow */}
                {idx < benefitItems.length - 1 && (
                  <DesktopConnector
                    idx={idx}
                    scrollYProgress={scrollYProgress}
                    start={0.18 + idx * 0.24}
                    end={0.38 + idx * 0.24}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                )}

                <PureImageFlowCard
                  item={item}
                  index={idx}
                  scrollYProgress={scrollYProgress}
                  activeStart={itemStart}
                  activeEnd={itemEnd}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET CONNECTED FLOW (Vertical Animated Sequence with Down Arrows) */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col space-y-4 sm:space-y-6 max-w-xl mx-auto">
          {benefitItems.map((item, idx) => {
            const itemStart = idx * 0.22;
            const itemEnd = itemStart + 0.24;

            return (
              <React.Fragment key={item.id}>
                <PureImageFlowCard
                  item={item}
                  index={idx}
                  scrollYProgress={scrollYProgress}
                  activeStart={itemStart}
                  activeEnd={itemEnd}
                  prefersReducedMotion={prefersReducedMotion}
                />

                {/* Mobile Vertical Downward Connector */}
                {idx < benefitItems.length - 1 && (
                  <MobileConnector
                    idx={idx}
                    scrollYProgress={scrollYProgress}
                    start={0.16 + idx * 0.23}
                    end={0.34 + idx * 0.23}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 sm:pt-16 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Schedule Private Site Tour & Advisory Session",
                ctaSource: "Why Consider Flow Section CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
          >
            <span>Schedule Private Site Visit</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedReveal>

      </div>
    </section>
  );
}

/**
 * Pure Full-Bleed Animated Image Card for Why Consider flow
 */
interface PureImageFlowCardProps {
  item: BenefitCardItem;
  index: number;
  scrollYProgress: any;
  activeStart: number;
  activeEnd: number;
  prefersReducedMotion: boolean | null;
}

function PureImageFlowCard({
  item,
  index,
  scrollYProgress,
  activeStart,
  activeEnd,
  prefersReducedMotion,
}: PureImageFlowCardProps) {
  // Scroll animations
  const cardScale = useTransform(
    scrollYProgress,
    [0, activeStart, activeEnd, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.94, 0.94, 1.0, 1.0]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, activeStart, activeStart + (activeEnd - activeStart) * 0.6, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.35, 0.35, 1.0, 1.0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, activeStart, activeEnd, 1.0],
    prefersReducedMotion ? [0, 0, 0, 0] : [14, 14, 0, 0]
  );

  const borderGlow = useTransform(
    scrollYProgress,
    [activeStart, activeEnd],
    ["rgba(13, 58, 41, 0.12)", "rgba(13, 58, 41, 0.45)"]
  );

  return (
    <motion.div
      style={{
        scale: cardScale,
        opacity: cardOpacity,
        y: cardY,
      }}
      className="h-full flex flex-col relative z-10"
    >
      <motion.div
        style={{ borderColor: borderGlow }}
        className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 relative group"
      >
        {/* Full Bleed Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Subtle Hover Magnify Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/15">
          <div className="w-10 h-10 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize2 className="w-4 h-4 text-[#0D3829]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Desktop SVG Horizontal Connector with animated stroke and glowing traveling bead
 */
function DesktopConnector({
  idx,
  scrollYProgress,
  start,
  end,
  prefersReducedMotion,
}: {
  idx: number;
  scrollYProgress: any;
  start: number;
  end: number;
  prefersReducedMotion: boolean | null;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [0, start, end, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 0, 1.0, 1.0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, start, start + 0.05, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.2, 0.2, 1.0, 1.0]
  );

  const headFill = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.8, end],
    ["rgba(13, 58, 41, 0.2)", "#0D3829"]
  );

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -right-[26px] w-[28px] h-[24px] z-20 pointer-events-none hidden lg:flex items-center justify-center">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Line */}
        <path
          d="M 0 12 L 20 12"
          stroke="#0D3829"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeOpacity="0.2"
        />

        {/* Animated Drawing Active Stroke */}
        <motion.path
          d="M 0 12 L 20 12"
          stroke="#0D3829"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />

        {/* Arrowhead */}
        <motion.polygon
          points="20,7 28,12 20,17"
          style={{ fill: headFill }}
          className="transition-colors"
        />

        {/* Moving glowing bead along connector */}
        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            cy="12"
            fill="#ACC78C"
            stroke="#0D3829"
            strokeWidth="1.5"
            style={{
              cx: useTransform(pathLength, [0, 1], [0, 20]),
              opacity: useTransform(pathLength, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
            }}
          />
        )}
      </svg>
    </div>
  );
}

/**
 * Mobile Vertical Downward Connector with animated path
 */
function MobileConnector({
  idx,
  scrollYProgress,
  start,
  end,
  prefersReducedMotion,
}: {
  idx: number;
  scrollYProgress: any;
  start: number;
  end: number;
  prefersReducedMotion: boolean | null;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [0, start, end, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0, 0, 1.0, 1.0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, start, start + 0.05, 1.0],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.25, 0.25, 1.0, 1.0]
  );

  return (
    <div className="flex flex-col items-center justify-center my-0.5 pointer-events-none">
      <svg
        className="w-[24px] h-[34px] overflow-visible"
        viewBox="0 0 24 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Line */}
        <path
          d="M 12 0 L 12 24"
          stroke="#0D3829"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeOpacity="0.2"
        />

        {/* Active Animated Path */}
        <motion.path
          d="M 12 0 L 12 24"
          stroke="#0D3829"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />

        {/* Downward Arrowhead */}
        <motion.polygon
          points="7,22 12,30 17,22"
          fill="#0D3829"
          style={{ opacity }}
        />

        {/* Moving glowing pulse on mobile */}
        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            cx="12"
            fill="#ACC78C"
            stroke="#0D3829"
            strokeWidth="1.5"
            style={{
              cy: useTransform(pathLength, [0, 1], [0, 24]),
              opacity: useTransform(pathLength, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
            }}
          />
        )}
      </svg>
    </div>
  );
}



