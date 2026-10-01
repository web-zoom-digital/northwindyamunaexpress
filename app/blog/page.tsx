import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts } from "@/lib/blogData";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Real Estate Insights & Planning Guides | Northwind Estate",
  description:
    "Explore practical guides on floor plan comparisons, carpet area measurements, property due diligence, and residential planning.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Real Estate Insights & Planning Guides | Northwind Estate",
    description:
      "Explore practical guides on floor plan comparisons, carpet area measurements, property due diligence, and residential planning.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogListingPage() {
  return (
    <>
      {/* Hero Header Section */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 md:pb-20 bg-[#0D3829] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Sector 22D Yamuna Expressway"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ACC78C]">
              Articles &amp; Planning Guides
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight drop-shadow-lg">
              Real Estate Insights &amp; Planning Guides
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/90 font-light leading-relaxed drop-shadow">
              An editorial collection of practical analyses covering floor plan comparisons, carpet area evaluations, space utilization, and residential property due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Text-Only Editorial Articles Section */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient initialPosts={blogPosts} />
        </div>
      </section>
    </>
  );
}
