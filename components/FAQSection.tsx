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
    question: "What BHK configurations are available at Northwind Estate?",
    answer:
      "Northwind Estate offers spacious 3 BHK luxury apartments and 4 BHK ultra estate residences featuring modern layout planning, vitrified flooring, large balconies, and UPVC toughened glass doors."
  },
  {
    question: "Where is Northwind Estate located on Yamuna Expressway?",
    answer:
      "The project is situated in Sector 22D on Yamuna Expressway, Greater Noida. The location offers seamless connectivity to Greater Noida, Noida, Delhi, and Agra, and is in close proximity to the upcoming Noida International Airport (Jewar)."
  },
  {
    question: "What amenities are included in the gated society?",
    answer:
      "Residents enjoy access to a modern clubhouse, swimming pool with kids pool, fully-equipped fitness center, landscaped Zen gardens, children's play zone, 24x7 multi-tier security, and 100% power backup."
  },
  {
    question: "How can I request official pricing and payment schedules?",
    answer:
      "Official unit pricing, cost sheets, and payment plans are available on request. You can click 'Inquiry Price' or complete the quick lead enquiry form to receive complete pricing details from our sales team."
  },
  {
    question: "How do I schedule a physical site visit?",
    answer:
      "You can schedule a site visit by clicking 'Schedule Site Visit' on the website or contacting our sales desk directly. Site visit cab assistance can also be coordinated upon request."
  },
  {
    question: "Are detailed floor plans and master site layouts available?",
    answer:
      "Yes, digital floor plan layouts for both 3 BHK and 4 BHK apartments along with the Sector 22D site master plan can be requested in high-resolution PDF format via our lead form."
  },
  {
    question: "What is the RERA registration status for Northwind Estate?",
    answer:
      "RERA details and official registration updates are to be updated. Please consult our property representatives for the latest official regulatory filing information."
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
    <section id="faq" className="py-20 bg-[#F4F1DF] text-[#0D3829] border-t border-[#0D3829]/15">
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
                  className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-xl overflow-hidden transition-all duration-200 shadow-xs hover-card-lift"
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
          <div className="text-center bg-[#FFFCEC] border border-[#0D3829]/15 rounded-xl p-6 space-y-3 shadow-xs hover-card-lift">
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
              className="inline-flex items-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-xs cursor-pointer"
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
