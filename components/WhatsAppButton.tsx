"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="hidden md:flex fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex-col items-center gap-3 sm:gap-4 pointer-events-auto">
      {/* WhatsApp Circular Button (Top - Green) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform group-hover:scale-105" />
      </a>

      {/* Phone Call Circular Button (Bottom - Blue) */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1D64E5] hover:bg-[#1855c4] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(29,100,229,0.45)] hover:shadow-[0_12px_32px_rgba(29,100,229,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Call Sales Desk"
        title="Call Sales Desk"
      >
        <Phone className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2] text-white transition-transform group-hover:scale-105" />
      </a>
    </div>
  );
}

