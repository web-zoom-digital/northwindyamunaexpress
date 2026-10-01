"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";

export default function Footer() {
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="bg-[#08241A] border-t border-[#ACC78C]/20 text-[#FFFCEC]/80 text-xs pt-16 pb-28 md:pb-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#ACC78C]/15">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FFFCEC] block">
                Northwind Estate
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#ACC78C] block">
                Yamuna Expressway • Sector 22D
              </span>
            </div>

            <p className="text-[#FFFCEC]/75 text-xs leading-relaxed font-light pr-2">
              Spacious 3 &amp; 4 BHK residential apartments in Sector 22D, Yamuna Expressway, Greater Noida. A low-density gated community with dedicated resident amenities and direct arterial road connectivity.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center text-[11px] font-medium text-[#ACC78C] bg-[#0D3829] border border-[#ACC78C]/25 px-3 py-1.5 rounded-full">
                {siteConfig.rera}
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs font-semibold text-[#ACC78C] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFFCEC]/80 hover:text-[#ACC78C] transition-colors duration-200 inline-flex items-center py-0.5 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Configurations Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs font-semibold text-[#ACC78C] uppercase tracking-widest">
              Configurations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/configurations/3-bhk-luxury-apartment"
                  className="text-[#FFFCEC]/80 hover:text-[#ACC78C] transition-colors duration-200 inline-flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    3 BHK Luxury Apartment
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]/70 group-hover:text-[#ACC78C] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/configurations/4-bhk-ultra-estate-residence"
                  className="text-[#FFFCEC]/80 hover:text-[#ACC78C] transition-colors duration-200 inline-flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    4 BHK Estate Residence
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]/70 group-hover:text-[#ACC78C] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/configurations/site-master-layout-plan"
                  className="text-[#FFFCEC]/80 hover:text-[#ACC78C] transition-colors duration-200 inline-flex items-center gap-1.5 py-0.5 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    Site &amp; Master Layout Plan
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]/70 group-hover:text-[#ACC78C] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Sales Advisory & Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs font-semibold text-[#ACC78C] uppercase tracking-widest">
              Sales Advisory
            </h4>
            <p className="text-xs text-[#FFFCEC]/75 font-light leading-relaxed">
              For site visit scheduling, verified cost sheets, and official floor plan brochures:
            </p>
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Request Instant Call Back from Sales Advisory",
                    ctaSource: "Footer Phone Button",
                  })
                }
                className="inline-flex items-center gap-2.5 text-[#FFFCEC] font-semibold hover:text-[#ACC78C] transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-[#0D3829] border border-[#ACC78C]/30 flex items-center justify-center group-hover:border-[#ACC78C] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#ACC78C]" />
                </div>
                <span className="tracking-wide">+91 97177 00596</span>
              </button>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    openLeadModal({
                      title: "Request Advisory Callback",
                      ctaSource: "Footer Callback Button",
                    })
                  }
                  className="w-full bg-[#ACC78C] hover:bg-[#b8d298] text-[#08241A] font-bold py-2.5 px-4 rounded-lg text-xs transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-center"
                >
                  Request an Advisory Callback
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FFFCEC]/60">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>© {new Date().getFullYear()} Northwind Estate. All rights reserved.</p>
            <p>
              Design And Developed By —{" "}
              <a
                href="https://www.zoomdigital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ACC78C] hover:text-[#ACC78C]/80 transition-colors duration-200 font-medium"
              >
                Zoom Digital
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#ACC78C] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#ACC78C] transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-[#ACC78C] transition-colors duration-200">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
