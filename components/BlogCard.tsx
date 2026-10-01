"use client";

import React from "react";
import { BlogPost } from "@/lib/blogData";
import AnimatedReveal from "./AnimatedReveal";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <AnimatedReveal direction="up" delay={index * 0.05} className="h-full">
      <article className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0D3829]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full space-y-4">
        <div className="space-y-3">
          {/* Category & Date Meta */}
          <div className="flex items-center gap-2 text-xs text-[#5E7168]">
            <span className="font-semibold text-[#0D3829] tracking-wider uppercase text-[11px]">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.isoDate} className="font-light">
              {post.date}
            </time>
          </div>

          {/* Plain Text Title */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#0D3829] leading-snug">
            {post.title}
          </h3>

          {/* Informative Text Excerpt */}
          <p className="text-xs sm:text-sm text-[#2D3C25] leading-relaxed font-light">
            {post.excerpt}
          </p>
        </div>
      </article>
    </AnimatedReveal>
  );
}
