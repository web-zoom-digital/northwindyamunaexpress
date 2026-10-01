"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar, ShieldCheck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadFormProps {
  sourceCTA?: string;
  sourcePage?: string;
  defaultConfig?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadForm({
  sourceCTA = "Lead Form",
  sourcePage = "/",
  defaultConfig = "",
  onSuccess,
  compact = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    configuration: defaultConfig,
    budget: "",
    visitDate: "",
    message: "",
    consent: true,
    bot_check: "", // Honeypot field
  });

  const [utmParams, setUtmParams] = useState({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utmSource: searchParams.get("utm_source") || "",
        utmMedium: searchParams.get("utm_medium") || "",
        utmCampaign: searchParams.get("utm_campaign") || "",
        utmTerm: searchParams.get("utm_term") || "",
        utmContent: searchParams.get("utm_content") || "",
      });
    }
  }, []);

  useEffect(() => {
    if (defaultConfig) {
      setFormData((prev) => ({ ...prev, configuration: defaultConfig }));
    }
  }, [defaultConfig]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the consent terms to proceed.");
      return;
    }

    setLoading(true);

    try {
      const currentPage = typeof window !== "undefined" ? window.location.pathname : sourcePage;

      const payload = {
        ...formData,
        sourceCTA,
        sourcePage: currentPage,
        ...utmParams,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2500);
        }
      } else {
        setErrorMessage(result.error || "Form submission failed. Please try calling us directly.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/80 border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm"
      >
        <div className="w-14 h-14 bg-[#0D3829] text-[#ACC78C] rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8 text-[#ACC78C]" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829]">
            Enquiry Received
          </h3>
          <p className="text-[#2D3C25] text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-light">
            Thank you for reaching out. Our dedicated property advisor will connect with you shortly with official floor plans and pricing details.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              configuration: defaultConfig,
              budget: "",
              visitDate: "",
              message: "",
              consent: true,
              bot_check: "",
            });
          }}
          className="text-xs text-[#0D3829] hover:text-[#1E3A2B] font-semibold underline underline-offset-4 pt-2 inline-block cursor-pointer transition"
        >
          Submit another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-4">
      {/* Honeypot Field (Invisible to real users) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="bot_check"
          tabIndex={-1}
          value={formData.bot_check}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* Error Message Alert */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="bg-rose-50/90 border border-rose-200 text-rose-800 text-xs p-3 rounded-xl flex items-start gap-2.5 shadow-xs"
          >
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span className="leading-snug">{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Input Fields Grid */}
      <div className={`grid ${compact ? "grid-cols-1 sm:grid-cols-2 gap-3" : "grid-cols-1 sm:grid-cols-2 gap-3.5"}`}>
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Full Name <span className="text-[#0D3829]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder-[#5E7168]/50 focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs"
          />
        </div>

        {/* Mobile Number */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Mobile Number <span className="text-[#0D3829]">*</span>
          </label>
          <div className="flex rounded-xl overflow-hidden shadow-xs border border-[#0D3829]/20 bg-white/95 focus-within:border-[#0D3829] focus-within:ring-2 focus-within:ring-[#0D3829]/15 focus-within:bg-white transition-all">
            <span className="inline-flex items-center px-3 bg-[#F4F1DF]/70 text-[#0D3829] font-medium text-xs border-r border-[#0D3829]/15 select-none">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              required
              maxLength={10}
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent text-[#0D3829] px-3.5 py-2.5 text-xs sm:text-sm placeholder-[#5E7168]/50 focus:outline-none"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Email Address <span className="text-[#5E7168] lowercase font-normal">(optional)</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder-[#5E7168]/50 focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs"
          />
        </div>

        {/* Configuration Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Configuration
          </label>
          <div className="relative">
            <select
              name="configuration"
              value={formData.configuration}
              onChange={handleChange}
              className="w-full appearance-none bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 pr-8 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs cursor-pointer"
            >
              <option value="">Select Configuration</option>
              <option value="3 BHK Luxury Apartment">3 BHK Luxury Apartment</option>
              <option value="4 BHK Ultra Estate Residence">4 BHK Ultra Estate Residence</option>
              <option value="Site Master Plan">Site Master Plan Dossier</option>
              <option value="Penthouse / Custom">Penthouse / Custom Layout</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#5E7168] pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Budget Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Budget Range <span className="text-[#5E7168] lowercase font-normal">(optional)</span>
          </label>
          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full appearance-none bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 pr-8 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs cursor-pointer"
            >
              <option value="">Select Budget</option>
              <option value="Under ₹1 Cr">Under ₹1 Cr</option>
              <option value="₹1 Cr - ₹1.5 Cr">₹1 Cr - ₹1.5 Cr</option>
              <option value="₹1.5 Cr - ₹2 Cr">₹1.5 Cr - ₹2 Cr</option>
              <option value="Above ₹2 Cr">Above ₹2 Cr</option>
              <option value="Price on Request">Request Complete Price List</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#5E7168] pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Preferred Visit Date */}
        {!compact ? (
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
              Site Visit Date <span className="text-[#5E7168] lowercase font-normal">(optional)</span>
            </label>
            <input
              type="date"
              name="visitDate"
              value={formData.visitDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs"
            />
          </div>
        ) : null}
      </div>

      {/* Query / Message Field (Shown on standard layout) */}
      {!compact && (
        <div className="space-y-1.5 pt-0.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0D3829]">
            Query / Message <span className="text-[#5E7168] lowercase font-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            rows={2}
            placeholder="e.g. Please share payment schedule, brochure PDF & site visit cab availability."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/95 text-[#0D3829] border border-[#0D3829]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder-[#5E7168]/50 focus:bg-white focus:outline-none focus:border-[#0D3829] focus:ring-2 focus:ring-[#0D3829]/15 transition-all shadow-xs resize-none"
          />
        </div>
      )}

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 rounded-md border-[#0D3829]/30 text-[#0D3829] focus:ring-[#0D3829] accent-[#0D3829] cursor-pointer"
        />
        <label htmlFor="consent" className="text-[11px] text-[#2D3C25] leading-snug cursor-pointer select-none">
          I consent to receive project brochures, pricing details, and property updates via Phone, WhatsApp &amp; Email.
        </label>
      </div>

      {/* Submit Action Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-[#0D3829] hover:bg-[#164936] text-[#FFFCEC] font-medium ${
          compact ? "py-3 text-xs" : "py-3.5 text-xs sm:text-sm"
        } rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 tracking-wide uppercase disabled:opacity-60 cursor-pointer border border-[#ACC78C]/25`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#FFFCEC]" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send className="w-3.5 h-3.5 text-[#ACC78C]" />
          </>
        )}
      </button>

      {/* Confidentiality Assurance */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5E7168] pt-0.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0D3829]/70" />
        <span>Your contact details are kept strictly confidential and secure.</span>
      </div>
    </form>
  );
}
