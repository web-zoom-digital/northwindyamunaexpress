"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    question: "What apartment configurations are available at Northwind Estate?",
    answer:
      "Northwind Estate offers 3 BHK and 4 BHK low-density residences. Layouts are planned with dedicated living and dining areas, large sit-out balconies, UPVC double-glazed windows, and separate kitchen utility zones."
  },
  {
    question: "Where is the development located?",
    answer:
      "The project is situated in Sector 22D on the Yamuna Expressway, Greater Noida. The location offers direct connectivity to major arterial sector roads, regional commercial hubs, and the upcoming Noida International Airport corridor at Jewar."
  },
  {
    question: "What community amenities are planned for residents?",
    answer:
      "The community includes a resident clubhouse, a swimming pool with leisure deck, a fully equipped fitness gym, landscaped gardens, jogging tracks, a children's play zone, 24x7 gated security, and power backup provisions."
  },
  {
    question: "How can prospective buyers request cost sheets and pricing details?",
    answer:
      "Detailed cost sheets, payment schedules, and unit availability are available on request. You can submit an inquiry through our website or connect directly with our property advisory team."
  },
  {
    question: "How can I arrange a physical site visit?",
    answer:
      "Site visits can be scheduled via our online form or by calling our sales desk directly. Our advisory team coordinates on-site walk-throughs, orientation guidance, and floor plan consultations."
  },
  {
    question: "Can I download official floor plans and site layouts?",
    answer:
      "Yes, detailed architectural floor plan schematics for 3 BHK and 4 BHK layouts, along with the Sector 22D master site layout, can be requested in digital PDF format."
  },
  {
    question: "What is the regulatory and RERA registration status?",
    answer:
      "Official RERA registration and statutory disclosures are being processed in compliance with regulatory standards. Please consult our representatives for the latest official filing updates."
  }
];

export default function FAQSection({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openLeadModal } = useLeadModal();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-[#F4F1DF] text-[#0D3829]">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Everything You Need to Know
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Verified information regarding location, layout configurations, amenities, and site visit scheduling.
          </p>
        </AnimatedReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedReveal key={idx} direction="up" delay={idx * 0.05}>
                <div
                  className="bg-[#FFFCEC] rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-[#0D3829] hover:text-[#1E3A2B] transition focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0D3829] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#2D3C25] leading-relaxed font-light">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <AnimatedReveal direction="up" delay={0.3} className="mt-12">
          <div className="text-center bg-[#FFFCEC] rounded-xl p-6 space-y-3 shadow-md">
            <h3 className="text-base font-serif font-bold text-[#0D3829]">Have additional questions regarding Northwind Estate?</h3>
            <p className="text-xs text-[#5E7168] font-light">
              Our property consultants are ready to assist you with customized cost sheets and floor plan details.
            </p>
            <button
              onClick={() =>
                openLeadModal({
                  title: "Ask a Property Consultant",
                  ctaSource: "FAQ Section Ask Question",
                })
              }
              className="inline-flex items-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-sm hover:shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#ACC78C]" />
              <span>Ask a Consultant</span>
            </button>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
