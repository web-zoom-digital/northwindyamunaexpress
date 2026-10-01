import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  CheckCircle2, 
  ArrowRight, 
  Maximize2, 
  BedDouble, 
  Bath, 
  Compass, 
  Sparkles, 
  Layers, 
  Phone, 
  ShieldCheck, 
  Crown, 
  Building2 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "4 BHK Ultra Estate Residence | Northwind Estate Sector 22D Yamuna Expressway",
  description: "Discover expansive 4 BHK ultra-luxury residences at Northwind Estate, Sector 22D Yamuna Expressway. Double-height ceilings, private utility space, and panoramic balconies near Noida International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/4-bhk-ultra-estate-residence`,
  },
  openGraph: {
    title: "4 BHK Ultra Estate Residence | Northwind Estate",
    description: "Opulent 4 BHK executive suites on Yamuna Expressway featuring multi-generational luxury floor plans.",
    url: `${siteConfig.url}/configurations/4-bhk-ultra-estate-residence`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/4-bhk-ultra-estate-residence-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate 4 BHK Ultra Estate Residence Penthouse Interior",
      },
    ],
  },
};

const fourBhkFaqs: FAQItem[] = [
  {
    question: "What makes the 4 BHK Ultra Estate Residence unique?",
    answer: "The 4 BHK Ultra Estate residence is the flagship luxury configuration featuring double-height ceiling volumes, 4 grand en-suite bedrooms, private dressing salons, dedicated servant/utility spaces, and sweeping wrap-around sunset balconies."
  },
  {
    question: "What are the interior finishes and ceiling details in 4 BHK?",
    answer: "4 BHK homes include designer gypsum false ceilings, imported Italian-style marble flooring in living areas, premium laminated wooden flooring in master bedrooms, branded luxury sanitary fittings, and acoustic insulated UPVC glass."
  },
  {
    question: "Are corner and park-facing 4 BHK units available?",
    answer: "Yes, premium corner units and central park-facing 4 BHK penthouses are available on higher and middle floors. Consult our VIP sales desk for current floor inventory."
  },
  {
    question: "What is the payment schedule and cost structure for 4 BHK?",
    answer: "Flexible construction-linked and customized installment payment plans are available. Complete official price sheets with milestone breakdowns are shared upon request."
  },
  {
    question: "Can I schedule a private site visit to inspect 4 BHK sample layouts?",
    answer: "Yes, private VIP site visits can be arranged with complimentary pickup and drop cab service from Delhi NCR directly to Sector 22D Yamuna Expressway."
  }
];

export default function FourBhkConfigurationPage() {
  const galleryImages = [
    {
      src: "/images/configurations/4-bhk-gallery-grand-living.jpg",
      title: "Double-Height Grand Living Lounge",
      subtitle: "Curved architectural staircase, cascading chandelier & glass curtain wall",
    },
    {
      src: "/images/configurations/4-bhk-gallery-penthouse-lounge.jpg",
      title: "Executive Penthouse Lounge",
      subtitle: "Backlit onyx bar salon with panoramic evening estate views",
    },
    {
      src: "/images/configurations/4-bhk-gallery-master-suite.jpg",
      title: "Presidential Master Suite",
      subtitle: "Fluted walnut paneling, glass walk-in wardrobe & spa bath",
    },
    {
      src: "/images/configurations/4-bhk-gallery-sky-terrace.jpg",
      title: "Evening Horizon Sky Terrace",
      subtitle: "Private rooftop infinity plunge pool, fire lounge & sunset vistas",
    },
  ];

  const keySpecs = [
    { label: "Configuration", value: "4 Bedrooms + Family Lounge + Utility" },
    { label: "Balconies", value: "Grand Double-Height Wrap-Around Balconies" },
    { label: "Ceiling Finish", value: "Designer Gypsum False Ceiling" },
    { label: "Bathrooms", value: "4 En-Suite Bathrooms with Glass Partitions" },
    { label: "Flooring", value: "Imported Marble & Anti-Skid Ceramic" },
    { label: "Pricing & Area", value: "Price on Request" },
  ];

  const roomDetails = [
    {
      title: "Palatial Living & Dining Gallery",
      description: "A monumental space with double-height volume, imported Italian marble styling, and glass wall openings offering unbroken sunset horizons.",
      features: ["Double-height architectural volume", "Acoustic insulated glass", "Concealed LED mood lighting"],
    },
    {
      title: "Presidential Master Suite",
      description: "Generously sized master bedroom featuring a dedicated walk-in wardrobe salon, private balcony access, and a master bath with twin vanity provision.",
      features: ["Dedicated walk-in dressing area", "En-suite luxury spa bathroom", "Direct panoramic balcony access"],
    },
    {
      title: "3 Junior & Guest Suites",
      description: "Three independent en-suite bedrooms crafted with generous wardrobe recesses, large windows, and premium laminate wooden/vitrified flooring.",
      features: ["Attached designer bathrooms", "Optimal acoustic privacy", "Ample natural sunlight"],
    },
    {
      title: "Chef's Kitchen & Utility Quarters",
      description: "Expanded modern kitchen layout featuring dual granite platforms, separate dry utility balcony, and dedicated staff/service access.",
      features: ["Dual granite prep counters", "Piped gas connection provision", "Separate utility & wash balcony"],
    },
  ];

  return (
    <>
      {/* Full-Screen Hero Section matching Home Page */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        {/* Full Screen Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/4-bhk-ultra-estate-residence-hero.jpg"
            alt="4 BHK Ultra Estate Residence Penthouse Interior"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb
            items={[
              { label: "Configurations", href: "/#configurations" },
              { label: "4 BHK Ultra Estate Residence", href: "/configurations/4-bhk-ultra-estate-residence" },
            ]}
            variant="dark"
          />

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <span className="w-2 h-2 rounded-full bg-[#ACC78C] animate-ping" />
              <span>Coming Soon • Pre-Launch</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9A148]/25 border border-[#B9A148]/40 text-xs font-semibold text-[#FFFCEC]">
              <Crown className="w-3.5 h-3.5 text-[#B9A148]" /> Flagship Executive Residence
            </div>
          </div>

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight">
              4 BHK <span className="gold-gradient-text">Ultra Estate Residence</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              An uncompromised statement of expansive luxury on Yamuna Expressway. Crafted for distinguished multi-generational families demanding grandeur, privacy, and world-class architectural finesse.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <BedDouble className="w-4 h-4" /> Bedrooms
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">4 En-Suite</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Bath className="w-4 h-4" /> Bathrooms
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">4 + Powder</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Building2 className="w-4 h-4" /> Balconies
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">Grand Decks</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Maximize2 className="w-4 h-4" /> Status &amp; Pricing
              </div>
              <p className="text-sm font-bold text-[#ACC78C] uppercase tracking-wider pt-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ACC78C] animate-ping" />
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Form Section */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
            
            {/* Left Column: Specifications & Rooms */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Introduction Card */}
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Grand Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Palatial Proportions with Bespoke Detailing
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  The 4 BHK Ultra Estate residences represent the pinnacle of luxurious high-rise living at Northwind Estate. Designed with expansive square footage, each home features double-height living areas, sweeping wrap-around balconies, private utility rooms, and en-suite privacy for every bedroom.
                </p>
              </AnimatedReveal>

              {/* Verified Key Specifications Table */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5">
                <h3 className="text-lg font-serif font-bold text-[#0D3829] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#0D3829]" /> Premium Residence Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {keySpecs.map((spec) => (
                    <div key={spec.label} className="border-b border-[#0D3829]/10 pb-2">
                      <span className="text-[#5E7168] block text-xs">{spec.label}</span>
                      <span className="font-semibold text-[#0D3829] pt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              {/* Room Breakdown Grid */}
              <AnimatedReveal direction="up" className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                  Architectural Room Layout Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {roomDetails.map((room) => (
                    <div key={room.title} className="bg-white border border-[#0D3829]/15 rounded-xl p-5 shadow-xs hover:border-[#0D3829] transition space-y-3 cursor-pointer">
                      <h4 className="font-serif font-bold text-sm text-[#0D3829]">{room.title}</h4>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{room.description}</p>
                      <ul className="space-y-1.5 pt-1">
                        {room.features.map((feat) => (
                          <li key={feat} className="text-[11px] text-[#2D3C25] flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              {/* Floor Plan Schematic Graphic */}
              <AnimatedReveal direction="up" className="bg-white border border-[#0D3829]/15 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#0D3829] uppercase tracking-wider block">Blueprint Plan</span>
                    <h3 className="text-lg font-serif font-bold text-[#0D3829]">4 BHK Estate Floor Plan Blueprint</h3>
                  </div>
                  <span className="text-xs bg-[#1E3A2B] text-[#FFFCEC] px-3 py-1 rounded-full font-semibold">
                    Vector Reference
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/10 flex items-center justify-center p-4">
                  <Image
                    src="/images/floor-plans/4bhk-estate-floor-plan.svg"
                    alt="4 BHK Ultra Estate Floor Plan Schematic Diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-[11px] text-[#5E7168] italic text-center">
                  *Illustrative architectural floor plan schematic. Exact unit specifications and carpet areas provided in developer price list.
                </p>
              </AnimatedReveal>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> VIP Consultation Desk
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Enquire 4 BHK Ultra Estate
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Request official price sheet, corner unit availability, customized payment schedule, and VIP site visit cab pickup.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="4 BHK Dedicated Page CTA"
                  sourcePage="/configurations/4-bhk-ultra-estate-residence"
                  defaultConfig="4 BHK Ultra Estate Residence"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 space-y-2 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct VIP Desk: +91 97177 00596
                  </p>
                  <p className="text-[11px] text-[#5E7168]">
                    {siteConfig.rera}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-16 bg-[#F4F1DF] text-[#0D3829] border-t border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
              4 BHK Residence &amp; Penthouse Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Glimpses into the luxury scale, double-height volumes, and horizon views of 4 BHK residences.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {galleryImages.map((img) => (
              <div key={img.title} className="group bg-white border border-[#0D3829]/15 rounded-xl overflow-hidden shadow-xs hover-card-lift cursor-pointer">
                <div className="aspect-[4/3] relative bg-[#0D3829] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 sm:p-4 space-y-0.5 sm:space-y-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0D3829] line-clamp-1 sm:line-clamp-none">{img.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#5E7168] font-light line-clamp-2">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Configuration Navigation */}
      <section className="py-16 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">Explore Further</span>
              <h2 className="text-2xl font-serif font-bold text-[#0D3829]">Other Configurations &amp; Plans</h2>
            </div>
            <Link
              href="/#configurations"
              className="text-xs font-bold text-[#0D3829] hover:text-[#ACC78C] flex items-center gap-1 transition"
            >
              <span>View All Residences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card: 3 BHK */}
            <Link
              href="/configurations/3-bhk-luxury-apartment"
              className="group bg-[#F4F1DF] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-6 shadow-sm transition hover-card-lift flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2.5 py-1 rounded-full border border-[#0D3829]/20">
                  Luxury Family Living
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0D3829] group-hover:text-[#0D3829] transition">
                  3 BHK Luxury Apartment
                </h3>
                <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                  Thoughtfully proportioned 3-bedroom residences with large sit-out balconies and dual-aspect cross ventilation.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3829] pt-2">
                <span>View 3 BHK Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card: Master Plan */}
            <Link
              href="/configurations/site-master-layout-plan"
              className="group bg-[#F4F1DF] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-6 shadow-sm transition hover-card-lift flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2.5 py-1 rounded-full border border-[#0D3829]/20">
                  Township Architecture
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0D3829] group-hover:text-[#0D3829] transition">
                  Site &amp; Master Layout Plan
                </h3>
                <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                  Low-density residential township planning with lush botanical landscape gardens and clubhouse.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3829] pt-2">
                <span>Inspect Master Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 BHK Dedicated FAQs Section */}
      <FAQSection faqs={fourBhkFaqs} />
    </>
  );
}
