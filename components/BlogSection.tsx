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
    <section id="journal" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Northwind Journal &amp; Updates
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Latest Real Estate Insights
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Explore in-depth market analysis, architectural highlights, and infrastructure growth updates across Yamuna Expressway.
          </p>
        </AnimatedReveal>

        {/* 3 Latest Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {latestPosts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} index={idx} />
          ))}
        </div>

        {/* Bottom Centered CTA */}
        <AnimatedReveal direction="up" delay={0.2} className="pt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
          </Link>
        </AnimatedReveal>

      </div>
    </section>
  );
}
