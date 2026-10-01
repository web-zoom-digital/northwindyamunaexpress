# Image Asset Mapping & Audit Document

## Overview
This document maps visual assets referenced from the reference websites (`https://northwindestate.com/` and `https://www.northwindyamunaexpressway.com/`) to original, optimized assets created for the Northwind Estate project website.

---

## Asset Inventory & Copyright Audit

| Asset ID | Purpose | Reference Source URL | Status / Risk Assessment | Replacement Strategy / Local Path |
|---|---|---|---|---|
| `HERO_01` | Primary Hero Banner | `https://northwindestate.com/images/banner.jpg` | Proprietary elevation render. Do not scrape directly. | Custom high-resolution architecture visual saved to `/public/images/hero/northwind-yamuna-expressway-hero.svg` |
| `HERO_02` | Secondary Hero Carousel | `https://www.northwindyamunaexpressway.com/images/floor-plan/Banner.jpg` | Proprietary banner graphic. | Custom minimalist luxury facade visual saved to `/public/images/hero/northwind-sanctuary-banner.svg` |
| `PROJ_01` | Project Elevation Overview | `https://northwindestate.com/images/canvas3.jpg` | Proprietary render. | Custom multi-tower architectural facade saved to `/public/images/project/architecture-elevation.svg` |
| `PROJ_02` | Gated Community Lifestyle | `https://northwindestate.com/images/banner1.jpg` | Unclear rights. | Original vector landscape & residential design saved to `/public/images/project/low-density-gated-community.svg` |
| `AMEN_01` | Modern Clubhouse | Reference Amenities | Stock/Proprietary | Original lifestyle clubhouse lounge vector graphic saved to `/public/images/amenities/modern-clubhouse.svg` |
| `AMEN_02` | Swimming Pool & Deck | Reference Amenities | Stock/Proprietary | High quality azure infinity pool visual saved to `/public/images/amenities/swimming-pool.svg` |
| `AMEN_03` | Fitness Gymnasium | Reference Amenities | Stock/Proprietary | Modern wellness center interior graphic saved to `/public/images/amenities/fitness-gymnasium.svg` |
| `AMEN_04` | Landscaped Gardens | Reference Amenities | Stock/Proprietary | Verdant parkland & jogging trail graphic saved to `/public/images/amenities/landscaped-gardens.svg` |
| `AMEN_05` | Children's Play Zone | Reference Amenities | Stock/Proprietary | Safe play equipment illustration saved to `/public/images/amenities/children-play-area.svg` |
| `FLOOR_3BHK` | 3 BHK Layout Plan | `https://www.northwindyamunaexpressway.com/images/floor-plan/Coming-Soon.jpg` | Placeholder / Proprietary layout. | Custom architectural 3 BHK layout plan vector saved to `/public/images/floor-plans/3bhk-luxury-floor-plan.svg` |
| `FLOOR_4BHK` | 4 BHK Layout Plan | `https://www.northwindyamunaexpressway.com/images/floor-plan/Coming-Soon.jpg` | Placeholder / Proprietary layout. | Custom architectural 4 BHK layout plan vector saved to `/public/images/floor-plans/4bhk-estate-floor-plan.svg` |
| `MASTER_PLAN` | Site Master Plan | Reference Master Plan | Placeholders | Custom Sector 22D master layout diagram saved to `/public/images/floor-plans/site-master-plan.svg` |
| `MAP_01` | Sector 22D Location & Airport Connectivity | Reference Location Map | Static Placeholder | Vector connectivity map showing Yamuna Expressway, Jewar Airport, Noida & Delhi saved to `/public/images/location/yamuna-expressway-location-map.svg` |
| `GALLERY_01..06` | Architectural & Interior Gallery | Reference Gallery | Stock/Placeholders | Set of 6 original high-definition property visuals in `/public/images/gallery/` |
| `LOGO_01` | Brand Logo & Favicon | `https://northwindestate.com/images/logo1.png` | Proprietary Logo. | Original vector monogram & emblem branding for Northwind Estate in `/public/images/icons/` |

---

## Technical Standards Applied
- **Formats**: SVG / WebP for optimal compression and crisp rendering across crisp Retina & mobile displays.
- **Optimization**: All local vectors & images use standard `next/image` attributes (`width`, `height`, `alt`, `priority`/`lazy`).
- **Legal Compliance**: Zero unauthorized scraping or re-publishing of copyrighted materials. All assets are custom original vector graphics & responsive diagrams built specifically for this lead-generation platform.
