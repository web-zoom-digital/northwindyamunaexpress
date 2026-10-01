import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import TiltCard from "@/components/TiltCard";
import AnimatedReveal from "@/components/AnimatedReveal";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Mail, 
  Calendar,
  Compass
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact Us & Schedule Site Visit | Northwind Estate",
  description:
    "Schedule a complimentary site visit or request pricing and floor plan brochures for Northwind Estate, Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactFaqs: FAQItem[] = [
  {
    question: "How can I schedule a physical site visit to Northwind Estate Sector 22D?",
    answer: "You can submit your contact details on the enquiry form or call our sales desk directly at +91 97177 00596. Our advisory team will coordinate a convenient date and time, including complimentary pickup and drop cab arrangements."
  },
  {
    question: "Is free cab pickup available for site visits across Delhi NCR?",
    answer: "Yes, we provide complimentary VIP cab pickup and drop service from Delhi, Noida, Greater Noida, and Gurugram directly to our Sector 22D site sales office on Yamuna Expressway."
  },
  {
    question: "What are the sales office and site visit operational hours?",
    answer: "Our site sales lounge is open 7 days a week from 9:00 AM to 8:00 PM. Prior appointment is recommended for dedicated senior advisor consultations."
  },
  {
    question: "How quickly will I receive the official price list and floor plan brochure?",
    answer: "Upon submitting your enquiry, our representative will instantly share the digital floor plan PDF, master layout, and latest cost breakdown via WhatsApp and Email within 10–15 minutes."
  },
  {
    question: "Where is the exact location of Northwind Estate?",
    answer: "Northwind Estate is situated in Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh, strategically positioned adjacent to the upcoming Noida International Airport (Jewar) corridor and Eastern Peripheral Expressway."
  }
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* 1. HERO SECTION (Left Content, Right 3D Visual Image) */}
      <section className="relative min-h-[75vh] sm:min-h-[105vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC] subtle-grid">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Official Banner"
            fill
            priority
            className="object-cover opacity-50 "
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-[#ACC78C]/15 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} variant="dark" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Overview & Direct Call/WhatsApp Buttons */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/35 text-xs font-semibold text-[#ACC78C] shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" /> Sector 22D, Yamuna Expressway
                </div>
              
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-[1.18] max-w-2xl">
                Get in Touch &amp; <span className="gold-gradient-text">Schedule Site Visit</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#ACC78C]/90 font-light leading-relaxed max-w-xl">
                Connect directly with our authorized project advisory desk for verified price sheets, floor plan blueprints, payment milestones, and complimentary VIP site visit cab pickup.
              </p>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md transition flex items-center gap-2 cursor-pointer border border-[#ACC78C] active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#0D3829]" />
                  <span>Call +91 97177 00596</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <FaWhatsapp className="w-4.5 h-4.5 text-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Verified Trust Chips */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-[11px] text-[#ACC78C]/90 pt-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Free Cab Pickup &amp; Drop
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant Price Sheets
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> 7 Days Open (9 AM - 8 PM)
                </span>
              </div>
            </div>

            {/* Right Column: Featured Visual Image in 3D Perspective Card */}
            <div className="lg:col-span-5 w-full">
              <TiltCard tiltDegree={6} depth={20} className="w-full">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#1E3A2B] border border-[#ACC78C]/35 p-3 group">
                  <div className="aspect-[4/3] relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D3829]">
                    <Image
                      src="/images/extracted/Banner.jpg"
                      alt="Northwind Estate Sector 22D Architectural Elevation"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/20 to-transparent pointer-events-none" />
                    
                    {/* Floating 3D Badge */}
                    <div className="absolute top-3 left-3 bg-[#0D3829]/90 backdrop-blur-md text-[#FFFCEC] border border-[#ACC78C]/40 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ACC78C] animate-ping" />
                      <span>Sales &amp; Experience Lounge</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-[#FFFCEC]">
                      <span className="text-[10px] uppercase font-bold text-[#ACC78C] block mb-0.5">
                        Sector 22D YEIDA
                      </span>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#FFFCEC]">
                        Northwind Estate Sales Office
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#1E3A2B] rounded-xl flex items-center justify-between text-xs text-[#FFFCEC]/90 mt-1">
                    <div>
                      <span className="text-[10px] text-[#ACC78C] block uppercase font-bold">Location</span>
                      <span className="font-semibold text-xs sm:text-sm">Sector 22D, Yamuna Expy</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#ACC78C] block uppercase font-bold">Hours</span>
                      <span className="font-semibold text-xs sm:text-sm">9:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO CARDS STRIP */}
      <section className="py-10 sm:py-12 bg-[#F4F1DF] text-[#0D3829] border-y border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
            
            {/* Card 1: Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 transition hover-card-lift cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  Phone Enquiry Desk
                </span>
                <p className="text-sm font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition truncate">
                  +91 97177 00596
                </p>
                <span className="text-[10px] text-[#ACC78C] font-semibold block">
                  Instant Support 24x7
                </span>
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 transition hover-card-lift cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  WhatsApp Helpline
                </span>
                <p className="text-sm font-bold text-[#0D3829] group-hover:text-[#25D366] transition truncate">
                  Chat with Consultant
                </p>
                <span className="text-[10px] text-[#25D366] font-semibold block">
                  Quick Brochure on WhatsApp
                </span>
              </div>
            </a>

            {/* Card 3: Location */}
            <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4 cursor-pointer hover-card-lift">
              <div className="w-11 h-11 rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#ACC78C]" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#5E7168] uppercase tracking-wider block">
                  Project Site Address
                </span>
                <p className="text-sm font-bold text-[#0D3829] truncate">
                  Sector 22D, Yamuna Expressway
                </p>
                <span className="text-[10px] text-[#5E7168] font-light block">
                  Greater Noida, Uttar Pradesh
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEDICATED SEPARATE ENQUIRY & LEAD FORM SECTION (Below Hero) */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Direct Sales Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
              Send Us a Message &amp; Request Callback
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light leading-relaxed">
              Fill out the form below to receive official pricing sheets, payment schedules, unit inventory details, and schedule your private site inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form Benefits & Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0D3829]" /> Why Connect With Us Directly?
                </h3>
                
                <ul className="space-y-3 text-xs sm:text-sm text-[#2D3C25]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Official Developer Price Sheets</strong>
                      <span className="font-light text-xs text-[#5E7168]">Get zero-markup pricing directly from the authorized desk.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Complimentary AC Cab Pickup</strong>
                      <span className="font-light text-xs text-[#5E7168]">Door-to-door cab pickup &amp; drop arranged from anywhere in Delhi NCR.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">Exclusive Pre-Launch Unit Inventory</strong>
                      <span className="font-light text-xs text-[#5E7168]">Priority allocation for park-facing and corner 3 &amp; 4 BHK residences.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] font-semibold block">100% Privacy &amp; Data Security</strong>
                      <span className="font-light text-xs text-[#5E7168]">Your phone number and details remain strictly confidential without spam.</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[#0D3829]/10 flex items-center justify-between text-xs text-[#0D3829]">
                  <span className="font-semibold">{siteConfig.rera}</span>
                  <span className="bg-[#0D3829] text-[#FFFCEC] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-[#1E3A2B] text-[#FFFCEC] rounded-2xl p-6 space-y-3 shadow-md border border-[#ACC78C]/20">
                <div className="flex items-center gap-2 text-[#ACC78C] font-semibold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> Sales Lounge Timings
                </div>
                <h4 className="font-serif font-bold text-base text-[#FFFCEC]">
                  Open 7 Days a Week
                </h4>
                <p className="text-xs text-[#FFFCEC]/80 font-light leading-relaxed">
                  Monday to Sunday: <strong>9:00 AM – 8:00 PM</strong>. Evening site inspections are available upon advance reservation.
                </p>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-[#0D3829]/15 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#0D3829]/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#0D3829] font-bold block">
                      Fast Response Guarantee
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                      Enquire for Northwind Estate
                    </h3>
                  </div>

                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/dark-logo.svg"
                        alt="Northwind Sector 22D Official Logo"
                        width={130}
                        height={32}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                    <span className="w-full text-center text-[8px] font-bold tracking-[0.25em] uppercase text-[#0D3829] -mt-0.5">
                      Yamuna
                    </span>
                  </div>
                </div>

                <LeadForm
                  sourceCTA="Contact Dedicated Form Section"
                  sourcePage="/contact"
                />

                <div className="pt-2 text-center text-xs text-[#5E7168] font-light">
                  <span>🔒 Your personal information is encrypted and protected under our </span>
                  <a href="/privacy-policy" className="text-[#0D3829] font-semibold underline hover:text-[#ACC78C] transition">
                    Privacy Policy
                  </a>.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CONTACT & SITE VISIT FAQS SECTION */}
      <FAQSection faqs={contactFaqs} />
    </>
  );
}


