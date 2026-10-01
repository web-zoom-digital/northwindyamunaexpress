import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Site Visit | Northwind Estate",
  description:
    "Schedule a complimentary site visit or request pricing and floor plan brochures for Northwind Estate, Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Us | Northwind Estate Sector 22D Yamuna Expressway",
    description:
      "Schedule a physical site visit or request verified cost sheets and floor plans for Northwind Estate, Sector 22D Yamuna Expressway.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/extracted/Banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Northwind Estate Sector 22D Yamuna Expressway",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Northwind Estate",
    "description":
      "Contact the sales desk and schedule a site visit for Northwind Estate in Sector 22D Yamuna Expressway.",
    "url": `${siteConfig.url}/contact`,
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 22D, Yamuna Expressway",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "203201",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
