import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { FAQItem } from "@/components/FAQSection";
import ThreeBhkClient from "./ThreeBhkClient";

export const metadata: Metadata = {
  title: "3 BHK Luxury Apartment | Northwind Estate Sector 22D Yamuna Expressway",
  description:
    "Explore premium 3 BHK luxury residences at Northwind Estate, Sector 22D Yamuna Expressway. Spacious living spaces, large balconies, and world-class architectural fittings near Noida International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/3-bhk-luxury-apartment`,
  },
  openGraph: {
    title: "3 BHK Luxury Apartment | Northwind Estate",
    description:
      "Premium 3 BHK luxury residences on Yamuna Expressway with modern layouts and natural cross ventilation.",
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
    answer:
      "The 3 BHK luxury apartment features 3 spacious bedrooms, 3 bathrooms, an expansive living and dining hall, a modern gourmet kitchen with utility balcony, and wide outdoor sit-out balconies overlooking the green landscaped courtyards.",
  },
  {
    question: "What flooring and architectural specifications are used in 3 BHK?",
    answer:
      "The apartments feature premium vitrified tile flooring across living, dining, and bedrooms, anti-skid ceramic tiles in balconies and bathrooms, granite kitchen countertops with stainless steel sinks, and toughened glass UPVC balcony railings.",
  },
  {
    question: "Are 3 BHK units Vastu compliant and well ventilated?",
    answer:
      "Yes, 3 BHK residences are designed with optimal orientations to ensure cross-ventilation, ample natural daylight in every room, and adherence to foundational Vastu planning principles.",
  },
  {
    question: "How can I get the 3 BHK price sheet and floor plan brochure?",
    answer:
      "You can submit your query on the lead form or contact our sales desk directly at +91 97177 00596 to receive the latest unit price list, cost breakdown, and high-resolution blueprint PDF.",
  },
  {
    question: "Is car parking allocated with 3 BHK residences?",
    answer:
      "Yes, dedicated multi-tier covered and open car parking spaces are provided within the gated residential complex for residents and visitors.",
  },
];

export default function ThreeBhkConfigurationPage() {
  return <ThreeBhkClient faqs={threeBhkFaqs} />;
}
