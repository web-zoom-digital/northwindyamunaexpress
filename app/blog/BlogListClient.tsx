import React from "react";
import { BlogPost } from "@/lib/blogData";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  return (
    <div className="divide-y divide-[#0D3829]/10">
      {initialPosts.map((post) => (
        <article key={post.slug} className="py-8 first:pt-0 last:pb-0 space-y-3">
          {/* Category & Date */}
          <div className="flex items-center gap-2.5 text-xs text-[#5E7168]">
            <span className="font-semibold text-[#0D3829] tracking-wider uppercase text-[11px]">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.isoDate} className="font-light">
              {post.date}
            </time>
          </div>

          {/* Title as Plain Text Heading */}
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829] leading-snug">
            {post.title}
          </h2>

          {/* Informative Text Excerpt */}
          <p className="text-sm sm:text-base text-[#2D3C25] font-light leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </article>
      ))}
    </div>
  );
}
