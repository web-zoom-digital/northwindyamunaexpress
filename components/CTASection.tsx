"use client";

import React from "react";
import { Calendar, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export default function CTASection({
  title = "Ready to Experience Northwind Estate?",
  subtitle = "Schedule a site visit today or request verified unit availability & official cost sheets.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="py-12 sm:py-16 bg-[#0D3829] text-[#FFFCEC] relative border-t border-[#ACC78C]/20 subtle-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <AnimatedReveal direction="up" className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#ACC78C] uppercase block">
            Sector 22D Yamuna Expressway
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
                  title: "Schedule Free Site Visit",
                  ctaSource: "Bottom CTA Section",
                })
              }
              className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition flex items-center gap-2 group cursor-pointer border border-[#ACC78C]"
            >
              <Calendar className="w-4 h-4 text-[#0D3829]" />
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0D3829]" />
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] border border-[#0D3829]/20 font-semibold px-5 py-3 rounded-xl text-xs transition flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0D3829]" />
              <span>Call +91 97177 00596</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-[#ACC78C]/80 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Site Visit Assistance
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Price Sheets Available
            </span>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}

