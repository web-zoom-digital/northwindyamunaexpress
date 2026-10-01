# Northwind Estate — Real Estate Lead Generation Website

A production-ready, SEO-optimized, high-converting real-estate website built for **Northwind Estate** (Sector 22D, Yamuna Expressway, Greater Noida). Designed with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

---

## Table of Contents
1. [Features & Architecture](#features--architecture)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running Locally](#running-locally)
5. [Environment Variables Setup](#environment-variables-setup)
6. [Google Sheets Lead Storage Integration](#google-sheets-lead-storage-integration)
7. [Deployment Guide](#deployment-guide)
8. [Google Search Console & Sitemap Submission](#google-search-console--sitemap-submission)
9. [How to Replace Images](#how-to-replace-images)
10. [How to Change Project Information](#how-to-change-project-information)
11. [How to Change WhatsApp & Contact Numbers](#how-to-change-whatsapp--contact-numbers)
12. [How to Change Lead Destination / Storage Provider](#how-to-change-lead-destination--storage-provider)

---

## Features & Architecture

- **4 Primary Pages**:
  - **Home (`/`)**: Hero section, project overview, key highlights, 3 & 4 BHK cards, amenities grid, location advantages, floor plan blueprints, gallery, FAQs, lead form.
  - **About (`/about`)**: Detailed project vision, architecture, and construction specifications.
  - **Amenities & Location (`/amenities`)**: Lifestyle facilities, Yamuna Expressway & Jewar Airport connectivity, interactive floor plans.
  - **Contact & Site Visit (`/contact`)**: High-conversion lead capture form, direct call CTA, floating WhatsApp CTA.
- **Supporting Legal Pages**: Privacy Policy (`/privacy-policy`), Terms & Conditions (`/terms-and-conditions`), Disclaimer (`/disclaimer`).
- **Technical SEO**: JSON-LD Structured Data (`RealEstateAgent`, `WebSite`, `BreadcrumbList`, `FAQPage`), dynamic XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), OpenGraph, Twitter Cards, canonical metadata.
- **Machine Readable Files**: `/llms.txt`, `/llm.txt`, `/manifest.webmanifest`.
- **Form Security & Lead Pipeline**: Server-side Zod validation, honeypot spam protection, rate-limiting, Google Sheets API with local fallback.

---

## Prerequisites

- Node.js v18.0.0 or higher
- npm (v9+) or yarn/pnpm

---

## Installation

1. Clone or open the project folder:
   ```bash
   cd northwind
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Locally

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To validate the production build locally:
```bash
npm run build
npm run start
```

---

## Environment Variables Setup

Create a `.env.local` file in the root directory based on `.env.example`:

```env
# Domain URL
NEXT_PUBLIC_SITE_URL=https://northwindestate.com

# Direct Contact & WhatsApp Numbers
NEXT_PUBLIC_CONTACT_PHONE=+919717700596
NEXT_PUBLIC_WHATSAPP_NUMBER=919717700596

# Google Sheets API Credentials
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id
```

---

## Google Sheets Lead Storage Integration

Every lead submitted via the frontend forms is processed server-side via `POST /api/leads`.

### Step-by-Step Setup:
1. **Google Cloud Console**:
   - Go to Google Cloud Console and create a new project.
   - Enable the **Google Sheets API**.
   - Create a **Service Account** under *Credentials*.
   - Generate a JSON Key for the Service Account and download it.
2. **Google Sheet Setup**:
   - Create a new Google Sheet (e.g. "Northwind Estate Leads").
   - Create column headers in Row 1:
     `Date | Time | Name | Phone | Email | Configuration | Budget | Visit Date | Message | Source Page | Source CTA | UTM Source | UTM Medium | UTM Campaign | UTM Term | UTM Content | Consent | User IP`
   - Share the Google Sheet with your `GOOGLE_SERVICE_ACCOUNT_EMAIL` giving it **Editor** permissions.
3. **Configure Environment Variables**:
   - Copy `client_email` to `GOOGLE_SERVICE_ACCOUNT_EMAIL`.
   - Copy `private_key` to `GOOGLE_PRIVATE_KEY`.
   - Copy the Spreadsheet ID from your Google Sheet URL (`https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`) to `GOOGLE_SHEET_ID`.

> **Fallback Mode**: If Google Sheets credentials are not set during development, leads are saved to `scratch/leads_log.json` and printed to the server console.

---

## Deployment Guide

### Deploying on Vercel:
1. Push the project repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`) in Vercel Project Settings.
4. Click **Deploy**.

---

## Google Search Console & Sitemap Submission

1. **Add Property**: Log into Google Search Console and add your domain (e.g. `https://northwindestate.com`).
2. **HTML Meta Verification**: If using meta verification, paste your code in `app/layout.tsx` inside `<head>`.
3. **Submit Sitemap**: Go to *Sitemaps* menu in GSC and submit:
   ```
   https://northwindestate.com/sitemap.xml
   ```

---

## How to Replace Images

All site images are stored inside `/public/images/`:
- `/public/images/hero/`
- `/public/images/project/`
- `/public/images/amenities/`
- `/public/images/location/`
- `/public/images/floor-plans/`
- `/public/images/gallery/`
- `/public/images/icons/`

To replace any visual asset, replace the file in `/public/images/` or update the file path inside `lib/siteConfig.ts` and relevant components. Refer to `docs/IMAGE_ASSET_MAP.md` for copyright auditing.

---

## How to Change Project Information

All project configurations, specifications, RERA notices, and location highlights are centralized in `/lib/siteConfig.ts`.

Modify `siteConfig` values to update text across the entire site instantly:
```ts
export const siteConfig = {
  name: "Northwind Estate",
  location: { ... },
  configurations: [ ... ],
  // ...
};
```

---

## How to Change WhatsApp & Contact Numbers

Update environment variables in `.env.local` or edit `lib/siteConfig.ts`:
```env
NEXT_PUBLIC_CONTACT_PHONE=+919717700596
NEXT_PUBLIC_WHATSAPP_NUMBER=919717700596
```

---

## How to Change Lead Destination / Storage Provider

Lead processing logic resides in `lib/leadStorage.ts`.

To add a new CRM provider (e.g., Salesforce, HubSpot, Zoho CRM, Webhook):
1. Open `lib/leadStorage.ts`.
2. Add your custom API call inside `saveLead(lead: LeadData)`.
3. Return `{ success: true, provider: "CRM Name" }`.
