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
  FileText, 
  Phone, 
  ShieldCheck, 
  Layers, 
  Home, 
  Calendar 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "3 BHK Luxury Apartment | Northwind Estate Sector 22D Yamuna Expressway",
  description: "Explore premium 3 BHK luxury residences at Northwind Estate, Sector 22D Yamuna Expressway. Spacious living spaces, large balconies, and world-class architectural fittings near Noida International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/3-bhk-luxury-apartment`,
  },
  openGraph: {
    title: "3 BHK Luxury Apartment | Northwind Estate",
    description: "Premium 3 BHK luxury residences on Yamuna Expressway with modern layouts and natural cross ventilation.",
    url: `${siteConfig.url}/configurations/3-bhk-luxury-apartment`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/3-bhk-luxury-apartment-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate 3 BHK Luxury Apartment Living Room",
      },
    ],
  },
};

const threeBhkFaqs: FAQItem[] = [
  {
    question: "What is included in the 3 BHK Luxury Apartment layout?",
    answer: "The 3 BHK luxury apartment features 3 spacious bedrooms, 3 bathrooms, an expansive living and dining hall, a modern gourmet kitchen with utility balcony, and wide outdoor sit-out balconies overlooking the green landscaped courtyards."
  },
  {
    question: "What flooring and architectural specifications are used in 3 BHK?",
    answer: "The apartments feature premium vitrified tile flooring across living, dining, and bedrooms, anti-skid ceramic tiles in balconies and bathrooms, granite kitchen countertops with stainless steel sinks, and toughened glass UPVC balcony railings."
  },
  {
    question: "Are 3 BHK units Vastu compliant and well ventilated?",
    answer: "Yes, 3 BHK residences are designed with optimal orientations to ensure cross-ventilation, ample natural daylight in every room, and adherence to foundational Vastu planning principles."
  },
  {
    question: "How can I get the 3 BHK price sheet and floor plan brochure?",
    answer: "You can submit your query on the lead form or contact our sales desk directly at +91 97177 00596 to receive the latest unit price list, cost breakdown, and high-resolution blueprint PDF."
  },
  {
    question: "Is car parking allocated with 3 BHK residences?",
    answer: "Yes, dedicated multi-tier covered and open car parking spaces are provided within the gated residential complex for residents and visitors."
  }
];

export default function ThreeBhkConfigurationPage() {
  const galleryImages = [
    {
      src: "/images/configurations/3-bhk-gallery-living-room.jpg",
      title: "Spacious Living & Dining Hall",
      subtitle: "Floor-to-ceiling glass with panoramic green estate views",
    },
    {
      src: "/images/configurations/3-bhk-gallery-master-bedroom.jpg",
      title: "Master Bedroom Suite",
      subtitle: "Fluted oak accents, attached bath & morning sun balcony",
    },
    {
      src: "/images/configurations/3-bhk-gallery-kitchen.jpg",
      title: "Gourmet Modular Kitchen",
      subtitle: "Marble island counter, integrated appliances & sage cabinetry",
    },
    {
      src: "/images/configurations/3-bhk-gallery-balcony.jpg",
      title: "Balcony Landscape Views",
      subtitle: "Private sit-out overlooking central water promenade & greens",
    },
  ];

  const keySpecs = [
    { label: "Configuration", value: "3 Bedrooms + Living + Dining" },
    { label: "Balconies", value: "Expansive Balconies with Toughened Glass" },
    { label: "Flooring", value: "Premium Vitrified Tile Flooring" },
    { label: "Kitchen Counter", value: "Granite Counter Top with Stainless Sink" },
    { label: "Ventilation", value: "Dual-Aspect Cross Ventilation" },
    { label: "Pricing & Area", value: "Price on Request" },
  ];

  const roomDetails = [
    {
      title: "Grand Living & Dining Room",
      description: "Designed as the central gathering pavilion with expansive open-plan layout, seamless connection to the outdoor balcony, and vitrified Italian-style tiles.",
      features: ["Double-glazed UPVC windows", "Concealed copper wiring", "Generous natural daylighting"],
    },
    {
      title: "Master Bedroom Retreat",
      description: "A private sanctuary featuring attached luxury bathroom, designated wardrobe alcove, and direct morning sunlight orientation.",
      features: ["Laminated wooden / vitrified finish", "Branded CP sanitary fittings", "Provision for split AC"],
    },
    {
      title: "Modern Gourmet Kitchen",
      description: "Ergonomically planned layout with dedicated utility balcony access, granite countertops, and ceramic tile dado up to 2 feet above platform.",
      features: ["Granite counter with SS sink", "Exhaust fan & water purifier provision", "Separate dry utility zone"],
    },
    {
      title: "Designer Bathrooms",
      description: "Equipped with premium anti-skid ceramic tiles, modern wall-hung sanitary ware, and chrome-plated bath fittings.",
      features: ["Anti-skid floor tiles", "Premium branded sanitaryware", "Hot & cold water supply conduits"],
    },
  ];

  return (
    <>
      {/* Full-Screen Hero Section matching Home Page */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        {/* Full Screen Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/configurations/3-bhk-luxury-apartment-hero.jpg"
            alt="3 BHK Luxury Apartment Interior"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb
            items={[
              { label: "Configurations", href: "/#configurations" },
              { label: "3 BHK Luxury Apartment", href: "/configurations/3-bhk-luxury-apartment" },
            ]}
            variant="dark"
          />

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <span className="w-2 h-2 rounded-full bg-[#ACC78C] animate-ping" />
              <span>Coming Soon • Pre-Launch</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
              <Sparkles className="w-3.5 h-3.5 text-[#B9A148]" /> Premium Residence Floor Layout
            </div>
          </div>

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight">
              3 BHK <span className="gold-gradient-text">Luxury Apartment</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Experience thoughtfully designed modern living in Sector 22D, Yamuna Expressway. Spacious proportions, panoramic nature views, and exquisite finishes engineered for contemporary families.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <BedDouble className="w-4 h-4" /> Bedrooms
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">3 Bedrooms</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Bath className="w-4 h-4" /> Bathrooms
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">3 Luxury Baths</p>
            </div>

            <div className="bg-[#1E3A2B]/80 backdrop-blur-md border border-[#ACC78C]/25 p-3.5 rounded-xl">
              <div className="flex items-center gap-2 text-[#ACC78C] text-xs font-medium">
                <Compass className="w-4 h-4" /> Orientation
              </div>
              <p className="text-lg font-bold text-[#FFFCEC] font-serif pt-1">Vastu Compliant</p>
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
                  Apartment Concept
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Engineered for Light, Space &amp; Privacy
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  The 3 BHK luxury residences at Northwind Estate have been planned with zero dead-space philosophy. Each home features expansive room dimensions, wide sit-out balconies overlooking green landscaping, and large windows that flood the interiors with natural daylight.
                </p>
              </AnimatedReveal>

              {/* Verified Key Specifications Table */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5">
                <h3 className="text-lg font-serif font-bold text-[#0D3829] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#0D3829]" /> Key Architectural Specifications
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
                  Room-by-Room Layout Details
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
                    <span className="text-[11px] font-semibold text-[#0D3829] uppercase tracking-wider block">Schematic Plan</span>
                    <h3 className="text-lg font-serif font-bold text-[#0D3829]">3 BHK Floor Plan Blueprint</h3>
                  </div>
                  <span className="text-xs bg-[#0D3829] text-[#FFFCEC] px-3 py-1 rounded-full font-semibold">
                    Vector Reference
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/10 flex items-center justify-center p-4">
                  <Image
                    src="/images/floor-plans/3bhk-luxury-floor-plan.svg"
                    alt="3 BHK Luxury Floor Plan Schematic Diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-[11px] text-[#5E7168] italic text-center">
                  *Illustrative architectural floor plan schematic. Exact unit layout and carpet area measurements provided in developer cost sheet.
                </p>
              </AnimatedReveal>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant Sales Support
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Enquire 3 BHK Luxury
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Request official pricing, payment plans, site visit free cab pickup, and detailed layout brochure.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="3 BHK Dedicated Page CTA"
                  sourcePage="/configurations/3-bhk-luxury-apartment"
                  defaultConfig="3 BHK Luxury Apartment"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 space-y-2 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Consultation: +91 97177 00596
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
              3 BHK Interior &amp; Landscape Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] font-light">
              Experience the visual elegance and lifestyle aura of Northwind Estate residences.
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
            {/* Card: 4 BHK */}
            <Link
              href="/configurations/4-bhk-ultra-estate-residence"
              className="group bg-[#F4F1DF] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-2xl p-6 shadow-sm transition hover-card-lift flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider bg-[#0D3829]/10 px-2.5 py-1 rounded-full border border-[#0D3829]/20">
                  Ultra Luxury Penthouse
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0D3829] group-hover:text-[#0D3829] transition">
                  4 BHK Ultra Estate Residence
                </h3>
                <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                  Expansive double-height living spaces, 4 en-suite bedrooms, and sweeping panoramic balconies.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3829] pt-2">
                <span>View 4 BHK Details</span>
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

      {/* 3 BHK Dedicated FAQs Section */}
      <FAQSection faqs={threeBhkFaqs} />
    </>
  );
}
