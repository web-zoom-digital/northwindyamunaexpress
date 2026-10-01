"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blogData";
import AnimatedReveal from "./AnimatedReveal";
import TiltCard from "./TiltCard";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <AnimatedReveal direction="up" delay={index * 0.05} className="h-full">
      <TiltCard tiltDegree={5} depth={14} className="h-full">
        <article className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(13,58,41,0.07)] hover:shadow-[0_12px_32px_rgba(13,58,41,0.14)] transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer">
          <div>
            {/* Card Visual with 16:9 Ratio */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#F4F1DF] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0D3829]/95 text-[#FFFCEC] border border-[#ACC78C]/40 text-[8px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-wider shadow-sm truncate max-w-[85%]">
                {post.category}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
              {/* Meta Info */}
              <div className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-[#5E7168] font-light flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0D3829]" />
                  <span>{post.date}</span>
                </span>
                <span className="text-[#0D3829]/30 hidden sm:inline">•</span>
                <span className="items-center gap-1 hidden sm:flex">
                  <Clock className="w-3.5 h-3.5 text-[#0D3829]" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xs sm:text-base md:text-lg text-[#0D3829] group-hover:text-[#1E3A2B] transition leading-snug line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[11px] sm:text-sm text-[#2D3C25] leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </div>
        </article>
      </TiltCard>
    </AnimatedReveal>
  );
}
