"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "./BlogCard";
import AnimatedReveal from "./AnimatedReveal";

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="journal" className="py-20 bg-[#FFFCEC] text-[#0D3829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D3829]/10 text-[#0D3829] text-xs font-semibold uppercase tracking-wider">
            <span>Articles &amp; Planning Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Real Estate Insights &amp; Buyer Guides
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light max-w-2xl mx-auto">
            Practical analyses on floor plan selection, carpet area calculations, space utilization, and residential location assessments.
          </p>
        </AnimatedReveal>

        {/* 3 Latest Text-Only Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {latestPosts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} index={idx} />
          ))}
        </div>

        {/* Bottom Link to Full Blog Editorial */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
          >
            <span>View All Editorial Guides</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedReveal>

      </div>
    </section>
  );
}
