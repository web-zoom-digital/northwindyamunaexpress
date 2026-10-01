"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb({
  items,
  variant = "dark",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark" | "transparent";
}) {
  const fullItems = [{ label: "Home", href: "/" }, ...items];

  // BreadcrumbList JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${siteConfig.url}${item.href}`
    }))
  };

  const isDark = variant === "dark";

  return (
    <div className={`py-2 text-xs ${isDark ? "text-[#FFFCEC]/80" : "text-[#2D3C25]"}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="flex items-center gap-2 flex-wrap">
        {fullItems.map((item, idx) => {
          const isLast = idx === fullItems.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight
                  className={`w-3.5 h-3.5 ${isDark ? "text-[#ACC78C]/60" : "text-[#5E7168]"}`}
                />
              )}
              {isLast ? (
                <span className={`font-bold ${isDark ? "text-[#ACC78C]" : "text-[#0D3829]"}`}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition flex items-center gap-1 font-medium ${
                    isDark
                      ? "text-[#FFFCEC]/80 hover:text-[#ACC78C]"
                      : "text-[#2D3C25] hover:text-[#0D3829]"
                  }`}
                >
                  {idx === 0 && (
                    <Home
                      className={`w-3.5 h-3.5 ${isDark ? "text-[#ACC78C]" : "text-[#5E7168]"}`}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
