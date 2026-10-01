"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFCEC]/95 backdrop-blur-md border-b border-[#0D3829]/15 py-3 shadow-xs"
            : "bg-[#FFFCEC]/90 backdrop-blur-sm border-b border-[#0D3829]/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-center group focus:outline-none" onClick={closeMobileMenu}>
            <div className="relative h-8 sm:h-9 flex items-center justify-center">
              <Image
                src="/images/dark-logo.svg"
                alt="Northwind Estates Logo"
                width={190}
                height={42}
                className="h-7 sm:h-8.5 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                priority
              />
            </div>
            <span className="w-full text-center text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-[#0D3829] -mt-0.5">
              Yamuna
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all hover:text-[#0D3829] relative py-1 ${
                    isActive ? "text-[#0D3829] font-bold" : "text-[#173A2C]/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D3829] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Request Call Back from Sales Desk",
                  ctaSource: "Header Desktop Call Button",
                })
              }
              className="flex items-center gap-2 text-xs font-semibold text-[#0D3829] hover:bg-[#0D3829]/10 px-3.5 py-2.5 rounded-lg bg-[#0D3829]/5 border border-[#0D3829]/15 transition shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D3829]" />
              <span>Call Sales</span>
            </button>

            <button
              onClick={() =>
                openLeadModal({
                  title: "Schedule Site Visit",
                  ctaSource: "Header Desktop CTA",
                })
              }
              className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase shadow-xs transition flex items-center gap-1.5 cursor-pointer border border-[#ACC78C]/30"
            >
              <Calendar className="w-4 h-4 text-[#ACC78C]" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-[#0D3829]/5 hover:bg-[#0D3829]/10 border border-[#0D3829]/15 text-[#0D3829] flex items-center justify-center focus:outline-none transition active:scale-95 cursor-pointer shadow-xs"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#0D3829]" /> : <Menu className="w-5 h-5 text-[#0D3829]" />}
          </button>
        </div>

        {/* Mobile Navigation Backdrop & Drawer */}
        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 top-[68px] bg-[#0D3829]/40 backdrop-blur-xs z-40 animate-fade-in"
              onClick={closeMobileMenu}
            />

            <div className="md:hidden fixed inset-x-0 top-[68px] z-50 bg-[#FFFCEC] border-b border-[#0D3829]/15 p-5 space-y-5 animate-slide-up-fade shadow-2xl rounded-b-2xl">
              <div className="space-y-1.5">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-[#0D3829]/10 text-[#0D3829] border border-[#0D3829]/20 font-bold"
                          : "text-[#173A2C] hover:bg-[#0D3829]/5 hover:text-[#0D3829]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#0D3829]" : "text-[#5E7168]"}`} />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#0D3829]/10 space-y-2.5">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    openLeadModal({
                      title: "Schedule Site Visit",
                      ctaSource: "Header Mobile Drawer",
                    });
                  }}
                  className="w-full bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-[#ACC78C]/30"
                >
                  <Calendar className="w-4 h-4 text-[#ACC78C]" />
                  <span>Schedule Site Visit</span>
                </button>

                <button
                  onClick={() => {
                    closeMobileMenu();
                    openLeadModal({
                      title: "Request Direct Call Back (+91 97177 00596)",
                      ctaSource: "Header Mobile Call Button",
                    });
                  }}
                  className="w-full bg-[#0D3829]/5 hover:bg-[#0D3829]/10 text-[#0D3829] border border-[#0D3829]/15 font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0D3829]" />
                  <span>Call Direct (+91 97177 00596)</span>
                </button>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

