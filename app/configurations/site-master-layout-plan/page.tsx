import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { FAQItem } from "@/components/FAQSection";
import MasterPlanClient from "./MasterPlanClient";

export const metadata: Metadata = {
  title: "Site & Master Layout Plan | Northwind Estate Sector 22D Yamuna Expressway",
  description:
    "Explore the architectural site and master layout plan of Northwind Estate, Sector 22D Yamuna Expressway. Low-density residential planning, central botanical courtyards, and sports clubhouse near Noida International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/site-master-layout-plan`,
  },
  openGraph: {
    title: "Site & Master Layout Plan | Northwind Estate",
    description:
      "Architectural master layout plan of Northwind Estate on Yamuna Expressway with vast central courtyards and dedicated amenities.",
    url: `${siteConfig.url}/configurations/site-master-layout-plan`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/site-master-layout-plan-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate Master Layout Plan Aerial Rendering",
      },
    ],
  },
};

const masterPlanFaqs: FAQItem[] = [
  {
    question: "What is the key zoning concept behind the Northwind Estate Master Plan?",
    answer:
      "Northwind Estate is planned as a low-density residential community where residential towers are positioned along the periphery, enclosing an expansive central green park and water promenade free from internal vehicular traffic.",
  },
  {
    question: "How is vehicular traffic managed within the site layout?",
    answer:
      "Vehicular traffic is routed along peripheral loop roads directly into designated covered parking zones. This keeps the central core completely pedestrian-safe for walking, jogging, and children's recreation.",
  },
  {
    question: "What lifestyle amenities are integrated into the master plan?",
    answer:
      "The master plan features a multi-tiered clubhouse, resort swimming pool, badminton/tennis courts, jogging tracks, botanical gardens, children's play zones, and senior citizen seating pavilions.",
  },
  {
    question: "How can I obtain a high-resolution CAD or PDF master plan copy?",
    answer:
      "You can submit an inquiry through the form on this page or call +91 97177 00596 to receive the official master plan PDF and high-resolution CAD schematic dossier.",
  },
  {
    question: "Is Northwind Estate directly accessible from the Yamuna Expressway?",
    answer:
      "Yes, Northwind Estate is situated in Sector 22D with convenient wide arterial road access to the Yamuna Expressway, connecting quickly to the upcoming Noida International Airport at Jewar.",
  },
];

export default function MasterPlanConfigurationPage() {
  return <MasterPlanClient faqs={masterPlanFaqs} />;
}
