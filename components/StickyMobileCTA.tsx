"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";

export default function StickyMobileCTA() {
  const { openLeadModal } = useLeadModal();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-[95] w-full max-w-[95vw] pointer-events-auto">
      <div className="bg-[#0D3829]/80  border border-[#ACC78C]/40 px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-[0_12px_40px_rgba(13,56,41,0.5)] flex items-center justify-center gap-24 sm:gap-20 ring-1 ring-white/10">
        
        {/* 1. Call Icon Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center gap-1 group transition-transform active:scale-95"
          aria-label="Call Sales Desk"
          title="Call Sales Desk"
        >
          <div className="w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-[#1E3A2B] hover:bg-[#254a37] text-[#ACC78C] flex items-center justify-center border border-[#ACC78C]/30 shadow-md transition-all group-hover:scale-105">
            <Phone className="w-5 h-5 text-[#ACC78C]" />
          </div>
          
        </a>

        {/* 2. WhatsApp Icon Button (Center Highlight) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 group transition-transform active:scale-95"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] border border-white/25 transition-all group-hover:scale-105">
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
          
        </a>

        {/* 3. Schedule Visit Icon Button */}
        <button
          onClick={() =>
            openLeadModal({
              title: "Schedule Site Visit",
              ctaSource: "Sticky Bottom Bar Schedule Visit",
            })
          }
          className="flex flex-col items-center gap-1 group transition-transform active:scale-95 cursor-pointer"
          aria-label="Schedule Site Visit"
          title="Schedule Site Visit"
        >
          <div className="w-11 h-11 sm:w-11 sm:h-11 rounded-full bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] flex items-center justify-center border border-[#ACC78C] shadow-md transition-all group-hover:scale-105">
            <Calendar className="w-5 h-5 text-[#0D3829]" />
          </div>
          
        </button>

      </div>
    </div>
  );
}




