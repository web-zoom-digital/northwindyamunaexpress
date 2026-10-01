import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { LeadModalProvider } from "@/components/LeadModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadModal from "@/components/LeadModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D3829",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Northwind Estate | Premium 3 & 4 BHK Residences Yamuna Expressway",
    template: "%s | Northwind Estate Sector 22D",
  },
  description: siteConfig.description,
  keywords: [
    "Northwind Estate",
    "Northwind Yamuna Expressway",
    "Northwind Sector 22D",
    "3 BHK Yamuna Expressway",
    "4 BHK Yamuna Expressway",
    "residential projects Yamuna Expressway",
    "apartments near Jewar Airport",
    "property in Sector 22D Greater Noida",
    "luxury apartments Greater Noida",
    "Noida International Airport property"
  ],
  authors: [{ name: "Northwind Estate Sales" }],
  creator: "Northwind Estate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Northwind Estate | Premium 3 & 4 BHK Residences Yamuna Expressway",
    description: siteConfig.description,
    siteName: "Northwind Estate",
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 4200,
        height: 4200,
        alt: "Northwind Estate Yamuna Expressway Tower Elevation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Estate | Premium 3 & 4 BHK Residences Yamuna Expressway",
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo-s.webp", type: "image/webp" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Schema markup (RealEstateAgent & WebSite)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Northwind Estate",
    "alternateName": "Northwind Sector 22D Yamuna Expressway",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo-s.webp`,
    "image": `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Yamuna Expressway, Greater Noida, Uttar Pradesh"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Northwind Estate",
    "url": siteConfig.url,
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo-s.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFCEC] text-[#0D3829] selection:bg-[#ACC78C] selection:text-[#0D3829]">
        <LeadModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCTA />
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}
