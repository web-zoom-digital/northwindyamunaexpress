"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Eye, X, ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { openLeadModal } = useLeadModal();

  const galleryItems = [
    {
      title: "Northwind Main Residential Elevation",
      category: "Architecture",
      image: "/images/extracted/Banner.jpg",
    },
    {
      title: "Sector 22D Tower Perspective & Balconies",
      category: "Exterior",
      image: "/images/extracted/Image-2.jpg",
    },
    {
      title: "Low-Density Forest Canopy Master Plan",
      category: "Master Plan",
      image: "/images/blog/low-density-luxury-living-sector-22d.jpg",
    },
    {
      title: "Twilight Illuminated Luxury Towers",
      category: "Night Elevation",
      image: "/images/blog/yamuna-expressway-investment-growth.jpg",
    },
    {
      title: "Expansive Sunset Balcony & Water Views",
      category: "Residences",
      image: "/images/blog/luxury-3bhk-4bhk-balcony-living.jpg",
    },
    {
      title: "Curated Resort Swimming Pool & Deck",
      category: "Amenities",
      image: "/images/blog/resort-style-amenities-gated-community.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FFFCEC] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Project Visuals &amp; Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Northwind Estate Visual Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Architectural renderings, interior lifestyle vistas, and landscaped community green spaces.
          </p>
        </AnimatedReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {galleryItems.map((item, idx) => (
            <AnimatedReveal key={idx} direction="up" delay={idx * 0.05} className="h-full">
              <TiltCard
                tiltDegree={6}
                depth={15}
                clickable
                onClick={() => setSelectedImage(item.image)}
                className="h-full"
              >
                <div
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(13,58,41,0.07)] hover:shadow-[0_12px_32px_rgba(13,58,41,0.14)] cursor-pointer group transition-all duration-300 relative h-full flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] relative w-full bg-[#F4F1DF] overflow-hidden hover-zoom-img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0D3829]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFCEC] text-[#0D3829] flex items-center justify-center shadow-lg">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D3829]" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0D3829] text-[#FFFCEC] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm truncate max-w-[85%]">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-5 bg-white">
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </TiltCard>
            </AnimatedReveal>
          ))}
        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <button
            onClick={() =>
              openLeadModal({
                title: "Request High-Resolution Visual Gallery & Walkthrough",
                ctaSource: "Gallery Section Bottom CTA",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <span>Request Complete High-Res Gallery &amp; Walkthrough</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </button>
        </AnimatedReveal>

        {/* Lightbox Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[110] bg-[#0D3829]/80 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#FFFCEC] border border-[#0D3829]/30 rounded-2xl overflow-hidden p-2 shadow-2xl cursor-default"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 bg-[#0D3829] text-[#FFFCEC] p-2 rounded-full border border-[#ACC78C]/40 hover:bg-[#1E3A2B] transition cursor-pointer"
                >
                  <X className="w-6 h-6 text-[#FFFCEC]" />
                </button>
                <div className="aspect-[16/10] relative w-full rounded-xl overflow-hidden bg-[#F4F1DF]">
                  <Image
                    src={selectedImage}
                    alt="Enlarged Northwind Estate Gallery View"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
