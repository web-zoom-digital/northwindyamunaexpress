import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Site & Master Layout Plan | Northwind Estate Sector 22D Yamuna Expressway",
  description: "View the official site and master layout plan for Northwind Estate in Sector 22D, Yamuna Expressway. Low-density residential township planning with green botanical courtyards, sports pavilion, and clubhouse.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/site-master-layout-plan`,
  },
  openGraph: {
    title: "Site & Master Layout Plan | Northwind Estate",
    description: "Low-density residential master plan on Yamuna Expressway featuring expansive parks, sports courts, and luxury towers.",
    url: `${siteConfig.url}/configurations/site-master-layout-plan`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/site-master-layout-plan-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate Master Layout Plan Aerial Rendering",
      },
    ],
  },
};

export default function SitePlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
