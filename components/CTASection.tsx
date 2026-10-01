"use client";

import React from "react";
import { Calendar, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export default function CTASection({
  title = "Plan a Physical Site Visit to Northwind Estate",
  subtitle = "Walk through the Sector 22D location, review tower orientation and master plans, and request verified pricing from our advisory desk.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="py-12 sm:py-16 bg-[#0D3829] text-[#FFFCEC] relative subtle-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <AnimatedReveal direction="up" className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#ACC78C] uppercase block">
            Sector 22D • Yamuna Expressway
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#FFFCEC] leading-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-[#ACC78C]/90 max-w-xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Schedule a Site Visit",
                  ctaSource: "Bottom CTA Section",
                })
              }
              className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition flex items-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0D3829]" />
              <span>Schedule a Site Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0D3829]" />
            </button>

            <button
              onClick={() =>
                openLeadModal({
                  title: "Request Instant Call Back from Sales Desk",
                  ctaSource: "Bottom CTA Section Call Button",
                })
              }
              className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold px-5 py-3 rounded-xl text-xs transition flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#0D3829]" />
              <span>Call Sales (+91 97177 00596)</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-[#ACC78C]/80 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Location Consultation
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Floor Plan Overviews
            </span>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}

