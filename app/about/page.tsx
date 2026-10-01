import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Northwind Estate Sector 22D Yamuna Expressway",
  description:
    "Discover Northwind Estate in Sector 22D, Yamuna Expressway. Learn about our low-density residential master plan, architectural excellence, 3 & 4 BHK luxury residences near Jewar International Airport.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Northwind Estate | Sector 22D Yamuna Expressway",
    description:
      "Explore Northwind Estate — Greater Noida's premier low-density residential enclave with contemporary architecture and lifestyle amenities near Jewar Airport.",
    url: `${siteConfig.url}/about`,
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

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Northwind Estate",
    "description":
      "Northwind Estate is a premier low-density residential project in Sector 22D, Yamuna Expressway, Greater Noida offering luxury 3 BHK and 4 BHK residences.",
    "url": `${siteConfig.url}/about`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
