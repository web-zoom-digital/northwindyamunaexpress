"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost, blogCategories } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import AnimatedReveal from "@/components/AnimatedReveal";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = initialPosts[0];
  const regularPosts = filteredPosts;

  return (
    <div className="space-y-12">
      {/* Featured Highlight Article (Visible when viewing All and no search) */}
      {selectedCategory === "All Articles" && !searchQuery && featuredPost && (
        <AnimatedReveal direction="up" className="mb-14">
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(13,58,41,0.08)] hover:shadow-[0_14px_36px_rgba(13,58,41,0.14)] transition-all duration-300 group hover-card-lift">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Featured Image */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[360px] bg-[#F4F1DF] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-[#0D3829] text-[#FFFCEC] border border-[#ACC78C]/40 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md">
                  <span>Featured Analysis</span>
                </div>
              </div>

              {/* Featured Content Details */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#5E7168]">
                    <span className="font-semibold text-[#0D3829] bg-[#0D3829]/10 px-2.5 py-1 rounded-md border border-[#0D3829]/15">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0D3829]" />
                      <span>{featuredPost.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0D3829]" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                    {featuredPost.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0D3829]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#5E7168]">
                    <User className="w-4 h-4 text-[#0D3829]" />
                    <div>
                      <span className="block font-medium text-[#0D3829]">{featuredPost.author.name}</span>
                      <span className="text-[11px] font-light">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#0D3829] bg-[#ACC78C]/20 border border-[#0D3829]/15 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                    Sector 22D Insights
                  </span>
                </div>

              </div>
            </div>
          </div>
        </AnimatedReveal>
      )}

      {/* Controls Bar: Search Input & Category Pills */}
      
      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {regularPosts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} index={idx} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#0D3829]/15 rounded-2xl p-12 text-center space-y-4">
          <p className="text-base font-serif font-bold text-[#0D3829]">No articles found</p>
          <p className="text-xs sm:text-sm text-[#5E7168]">
            We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or selecting another category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Articles");
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D3829] bg-[#0D3829]/10 px-4 py-2 rounded-lg border border-[#0D3829]/20 hover:bg-[#0D3829]/15 transition cursor-pointer"
          >
            Clear Filters &amp; View All
          </button>
        </div>
      )}
    </div>
  );
}
