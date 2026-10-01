"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "./LeadModalContext";
import LeadForm from "./LeadForm";
import { X, Building2, ShieldCheck } from "lucide-react";

export default function LeadModal() {
  const { isOpen, modalTitle, ctaSource, preferredConfig, closeLeadModal } = useLeadModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLeadModal}
            className="fixed inset-0 bg-[#0D3829]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-xl bg-[#FFFCEC] border border-[#0D3829]/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-[#0D3829]"
          >
            {/* Header Ribbon */}
            <div className="bg-[#F4F1DF] p-5 sm:p-6 border-b border-[#0D3829]/15 relative">
              <button
                onClick={closeLeadModal}
                className="absolute top-4 right-4 text-[#0D3829]/70 hover:text-[#0D3829] p-1.5 rounded-full hover:bg-[#0D3829]/10 transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#ACC78C]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#0D3829] font-semibold block">
                    Northwind Estate
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829] leading-tight">
                    {modalTitle}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#5E7168] font-light">
                Fill in your details below to receive verified e-brochures, floor plan layouts, and current unit availability.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
              <LeadForm
                sourceCTA={ctaSource}
                defaultConfig={preferredConfig}
                onSuccess={closeLeadModal}
                compact={true}
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-[#F4F1DF] px-6 py-3 border-t border-[#0D3829]/15 text-[11px] text-[#5E7168] flex items-center justify-between">
              <span className="flex items-center gap-1 text-[#0D3829] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Sales Support
              </span>
              <span className="text-[#5E7168]">Sector 22D, Yamuna Expressway</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

