import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts } from "@/lib/blogData";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Real Estate Insights & Blog | Northwind Estate Sector 22D Yamuna Expressway",
  description:
    "Explore in-depth articles, investment analysis, architectural trends, and infrastructure updates on Sector 22D Yamuna Expressway and Noida International Airport corridor.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Northwind Estate Journal & Real Estate Insights",
    description:
      "Expert market commentary, architectural guides, and community insights on Sector 22D Yamuna Expressway.",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: `${siteConfig.url}/images/blog/yamuna-expressway-investment-growth.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate Real Estate Journal",
      },
    ],
  },
};

export default function BlogListingPage() {
  return (
    <>
      {/* Hero Header Section */}
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Yamuna Expressway"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb
            items={[{ label: "Journal & Insights", href: "/blog" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-5 text-center sm:text-left mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3829]/90 border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C] shadow-md">
              <span>Northwind Journal • Sector 22D Insights</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight tracking-tight drop-shadow-md">
              Real Estate Insights &amp; Architectural Journal
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#FFFCEC] font-normal leading-relaxed max-w-2xl drop-shadow-sm">
              Stay informed with expert analysis on the Yamuna Expressway growth corridor, low-density luxury living, interior design trends, and upcoming infrastructure milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles Listing Section */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient initialPosts={blogPosts} />
        </div>
      </section>

      {/* Newsletter & Tour CTA */}
      <CTASection
        title="Stay Ahead of the Yamuna Expressway Growth Story"
        subtitle="Schedule a private VIP tour to experience the low-density master plan and location advantages in Sector 22D."
      />
    </>
  );
}
