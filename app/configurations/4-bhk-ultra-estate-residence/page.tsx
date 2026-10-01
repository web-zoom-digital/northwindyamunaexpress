import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { FAQItem } from "@/components/FAQSection";
import FourBhkClient from "./FourBhkClient";

export const metadata: Metadata = {
  title: "4 BHK Ultra Estate Residence | Northwind Estate Sector 22D Yamuna Expressway",
  description:
    "Explore expansive 4 BHK ultra estate luxury penthouses & residences at Northwind Estate, Sector 22D Yamuna Expressway. Large balconies, staff quarters, and world-class architectural fittings near Noida International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/4-bhk-ultra-estate-residence`,
  },
  openGraph: {
    title: "4 BHK Ultra Estate Residence | Northwind Estate",
    description:
      "Expansive 4 BHK ultra luxury residences on Yamuna Expressway with panoramic views, dual-wing layout, and modern cross ventilation.",
    url: `${siteConfig.url}/configurations/4-bhk-ultra-estate-residence`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/4-bhk-ultra-estate-residence-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate 4 BHK Ultra Estate Residence Interior",
      },
    ],
  },
};

const fourBhkFaqs: FAQItem[] = [
  {
    question: "What is included in the 4 BHK Ultra Estate layout?",
    answer:
      "The 4 BHK Ultra Estate residence features 4 expansive bedrooms with en-suite bathrooms, an additional guest powder room, a grand formal living salon, family lounge, chef's kitchen with utility quarters, and triple-aspect wrap-around sky balconies.",
  },
  {
    question: "How does the dual-wing layout work in 4 BHK residences?",
    answer:
      "The layout separates the social entertaining pavilion (formal living, dining, and sunset balcony) from the private master sanctuary wing, ensuring acoustic privacy for resting family members while hosting guests.",
  },
  {
    question: "What specifications are offered in the master bedroom suite?",
    answer:
      "The master suite features a dedicated walk-in dressing space, a spa-grade en-suite bath with premium sanitary fixtures, laminated wooden texture flooring, and a private sunrise balcony.",
  },
  {
    question: "How can I schedule a private consultation and receive the floor plan PDF?",
    answer:
      "Submit your enquiry using the booking form on this page or connect with our sales team at +91 97177 00596 to receive the high-resolution blueprint PDF and schedule a complimentary cab site visit.",
  },
  {
    question: "Is dedicated car parking provided for 4 BHK residences?",
    answer:
      "Yes, dedicated covered parking spaces are allocated within the secure basement/podium structure for residents and visitors.",
  },
];

export default function FourBhkConfigurationPage() {
  return <FourBhkClient faqs={fourBhkFaqs} />;
}
