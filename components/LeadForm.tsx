"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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
          }, 3000);
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
      <div className="bg-[#0D3829]/10 border border-[#0D3829]/20 rounded-xl p-6 sm:p-8 text-center space-y-4 animate-fade-in shadow-xs">
        <div className="w-16 h-16 bg-[#0D3829] text-[#FFFCEC] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-[#ACC78C]" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#0D3829]">Enquiry Submitted!</h3>
        <p className="text-[#2D3C25] text-sm leading-relaxed max-w-md mx-auto font-light">
          Thank you! Our property consultant will contact you shortly with complete brochures, floor plans, and pricing details.
        </p>
        <button
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
          className="text-xs text-[#0D3829] hover:underline font-semibold pt-2 block mx-auto cursor-pointer"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? "space-y-3" : "space-y-4"} text-left`}>
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

      {errorMessage && (
        <div className="bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm p-3 rounded-lg flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label className={`block font-semibold text-[#0D3829] ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"}`}>
          Full Name <span className="text-[#0D3829]">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg ${compact ? "px-3 py-2 text-xs" : "px-3.5 py-2.5 text-sm"} placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs`}
        />
      </div>

      {/* Phone */}
      <div>
        <label className={`block font-semibold text-[#0D3829] ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"}`}>
          Mobile Number <span className="text-[#0D3829]">*</span>
        </label>
        <div className="flex">
          <span className={`inline-flex items-center rounded-l-lg border border-r-0 border-[#0D3829]/25 bg-[#F4F1DF] text-[#0D3829] font-semibold ${compact ? "px-2.5 text-[11px]" : "px-3 text-xs"}`}>
            +91
          </span>
          <input
            type="tel"
            name="phone"
            required
            maxLength={10}
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-r-lg ${compact ? "px-3 py-2 text-xs" : "px-3.5 py-2.5 text-sm"} placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs`}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={`block font-semibold text-[#0D3829] ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"}`}>
          Email Address <span className="text-[#5E7168] font-normal">(Optional)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg ${compact ? "px-3 py-2 text-xs" : "px-3.5 py-2.5 text-sm"} placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs`}
        />
      </div>

      {/* Configuration & Budget Row */}
      <div className={`grid ${compact ? "grid-cols-2 gap-2" : "grid-cols-1 sm:grid-cols-2 gap-3"}`}>
        <div>
          <label className={`block font-semibold text-[#0D3829] ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"}`}>
            Configuration
          </label>
          <select
            name="configuration"
            value={formData.configuration}
            onChange={handleChange}
            className={`w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg ${compact ? "px-2 py-2 text-[11px]" : "px-3 py-2.5 text-xs sm:text-sm"} focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs`}
          >
            <option value="">Select Configuration</option>
            <option value="3 BHK Luxury Apartment">3 BHK Luxury Apartment</option>
            <option value="4 BHK Ultra Estate Residence">4 BHK Ultra Estate Residence</option>
            <option value="Penthouse / Custom">Penthouse / Custom Layout</option>
          </select>
        </div>

        <div>
          <label className={`block font-semibold text-[#0D3829] ${compact ? "text-[11px] mb-1" : "text-xs mb-1.5"}`}>
            Budget Range <span className="text-[#5E7168] font-normal">(Optional)</span>
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg ${compact ? "px-2 py-2 text-[11px]" : "px-3 py-2.5 text-xs sm:text-sm"} focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs`}
          >
            <option value="">Select Budget Range</option>
            <option value="Under ₹1 Cr">Under ₹1 Cr</option>
            <option value="₹1 Cr - ₹1.5 Cr">₹1 Cr - ₹1.5 Cr</option>
            <option value="₹1.5 Cr - ₹2 Cr">₹1.5 Cr - ₹2 Cr</option>
            <option value="Above ₹2 Cr">Above ₹2 Cr</option>
            <option value="Price on Request">Request Complete Price List</option>
          </select>
        </div>
      </div>

      {/* Visit Date & Message */}
      {!compact && (
        <>
          <div>
            <label className="block text-xs font-semibold text-[#0D3829] mb-1.5">
              Preferred Site Visit Date <span className="text-[#5E7168] font-normal">(Optional)</span>
            </label>
            <input
              type="date"
              name="visitDate"
              value={formData.visitDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0D3829] mb-1.5">
              Specific Query / Message <span className="text-[#5E7168] font-normal">(Optional)</span>
            </label>
            <textarea
              name="message"
              rows={2}
              placeholder="e.g. Please share floor plans, payment schedule & site visit cab availability."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border border-[#0D3829]/25 focus:border-[#0D3829] text-[#0D3829] rounded-lg px-3.5 py-2 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0D3829] transition shadow-xs"
            />
          </div>
        </>
      )}

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-0.5">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-0.5 h-3.5 w-3.5 rounded border-[#0D3829]/30 bg-white text-[#0D3829] focus:ring-[#0D3829] accent-[#0D3829]"
        />
        <label htmlFor="consent" className="text-[10px] sm:text-[11px] text-[#2D3C25] leading-snug">
          I agree to be contacted regarding this property enquiry via Phone, WhatsApp &amp; Email.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-bold ${compact ? "py-2.5 px-4 text-xs mt-1" : "py-3.5 px-6 text-sm mt-2"} rounded-lg shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-70 cursor-pointer border border-[#ACC78C]/30`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#FFFCEC]" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send className="w-3.5 h-3.5 text-[#ACC78C]" />
          </>
        )}
      </button>

      <p className="text-[9px] sm:text-[10px] text-[#5E7168] text-center pt-0.5 font-light">
        Your details are strictly confidential.
      </p>
    </form>
  );
}
