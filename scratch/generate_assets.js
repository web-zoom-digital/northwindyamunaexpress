const fs = require("fs");
const path = require("path");

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const baseDir = path.join(__dirname, "..", "public", "images");

// 1. 3 BHK Architectural Floor Plan SVG
const svg3BHK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF9F6"/>
      <stop offset="100%" stop-color="#F1EFE9"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059"/>
      <stop offset="100%" stop-color="#B38E46"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" stroke-width="1"/>
    </pattern>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  <rect width="1200" height="800" fill="url(#grid)"/>

  <!-- Main Blueprint Container -->
  <g filter="url(#shadow)" transform="translate(100, 80)">
    <!-- Outer Walls -->
    <rect x="0" y="0" width="1000" height="640" rx="16" fill="#FFFFFF" stroke="#B38E46" stroke-width="4"/>
    <rect x="12" y="12" width="976" height="616" rx="8" fill="none" stroke="#0F172A" stroke-width="1.5" stroke-dasharray="6,6"/>

    <!-- Room Layout Rooms -->
    <!-- Living & Dining Hall -->
    <rect x="40" y="40" width="460" height="340" fill="#FAF9F6" stroke="#0F172A" stroke-width="3"/>
    <text x="270" y="200" font-family="serif" font-weight="bold" font-size="22" fill="#0F172A" text-anchor="middle">LIVING &amp; DINING HALL</text>
    <text x="270" y="230" font-family="sans-serif" font-size="14" fill="#B38E46" text-anchor="middle">24'0" x 16'6"</text>

    <!-- Master Bedroom -->
    <rect x="520" y="40" width="440" height="280" fill="#FAF9F6" stroke="#0F172A" stroke-width="3"/>
    <text x="740" y="160" font-family="serif" font-weight="bold" font-size="20" fill="#0F172A" text-anchor="middle">MASTER SUITE (BEDROOM 1)</text>
    <text x="740" y="190" font-family="sans-serif" font-size="14" fill="#B38E46" text-anchor="middle">16'0" x 14'0"</text>

    <!-- Attached Bath & Dress -->
    <rect x="760" y="320" width="200" height="150" fill="#F8FAFC" stroke="#0F172A" stroke-width="2"/>
    <text x="860" y="395" font-family="sans-serif" font-weight="bold" font-size="13" fill="#64748B" text-anchor="middle">ATTACHED BATH</text>

    <!-- Bedroom 2 -->
    <rect x="40" y="400" width="340" height="200" fill="#FAF9F6" stroke="#0F172A" stroke-width="3"/>
    <text x="210" y="490" font-family="serif" font-weight="bold" font-size="18" fill="#0F172A" text-anchor="middle">BEDROOM 2</text>
    <text x="210" y="515" font-family="sans-serif" font-size="13" fill="#B38E46" text-anchor="middle">14'0" x 12'0"</text>

    <!-- Bedroom 3 -->
    <rect x="400" y="400" width="340" height="200" fill="#FAF9F6" stroke="#0F172A" stroke-width="3"/>
    <text x="570" y="490" font-family="serif" font-weight="bold" font-size="18" fill="#0F172A" text-anchor="middle">BEDROOM 3</text>
    <text x="570" y="515" font-family="sans-serif" font-size="13" fill="#B38E46" text-anchor="middle">13'6" x 12'0"</text>

    <!-- Kitchen -->
    <rect x="520" y="320" width="220" height="70" fill="#FFFBEB" stroke="#0F172A" stroke-width="2"/>
    <text x="630" y="360" font-family="sans-serif" font-weight="bold" font-size="14" fill="#8A6624" text-anchor="middle">MODULAR KITCHEN</text>

    <!-- Grand Balcony -->
    <rect x="40" y="605" width="920" height="30" fill="url(#goldGrad)" rx="6"/>
    <text x="500" y="626" font-family="sans-serif" font-weight="bold" font-size="13" fill="#FFFFFF" text-anchor="middle">EXPANSIVE LANDSCAPED BALCONY (6' FT WIDE)</text>

    <!-- Dimension Compass Overlay -->
    <g transform="translate(930, 560)">
      <circle r="28" fill="#FFFFFF" stroke="#B38E46" stroke-width="2"/>
      <path d="M 0 -20 L 6 0 L -6 0 Z" fill="#B38E46"/>
      <text x="0" y="-22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#0F172A" text-anchor="middle">N</text>
    </g>
  </g>

  <!-- Title Badge -->
  <rect x="100" y="24" width="420" height="40" rx="8" fill="#FFFFFF" stroke="#B38E46" stroke-width="2"/>
  <text x="310" y="50" font-family="serif" font-weight="bold" font-size="16" fill="#0F172A" text-anchor="middle">NORTHWIND ESTATE — 3 BHK LUXURY BLUEPRINT</text>
</svg>`;

// 2. 4 BHK Architectural Floor Plan SVG
const svg4BHK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF9F6"/>
      <stop offset="100%" stop-color="#EBE8E0"/>
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B4D3E"/>
      <stop offset="100%" stop-color="#0F3329"/>
    </linearGradient>
    <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" stroke-width="1"/>
    </pattern>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.1"/>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#bgGrad2)"/>
  <rect width="1200" height="800" fill="url(#grid2)"/>

  <g filter="url(#shadow2)" transform="translate(80, 80)">
    <rect x="0" y="0" width="1040" height="640" rx="16" fill="#FFFFFF" stroke="#1B4D3E" stroke-width="4"/>

    <!-- Master Suite 1 -->
    <rect x="40" y="40" width="460" height="260" fill="#F0FDF4" stroke="#0F172A" stroke-width="3"/>
    <text x="270" y="160" font-family="serif" font-weight="bold" font-size="20" fill="#0F172A" text-anchor="middle">EXECUTIVE MASTER SUITE 1</text>
    <text x="270" y="190" font-family="sans-serif" font-size="14" fill="#1B4D3E" text-anchor="middle">18'0" x 15'0" (En-Suite Bath &amp; Dress)</text>

    <!-- Bedrooms 2, 3 & 4 -->
    <rect x="520" y="40" width="480" height="260" fill="#FAF9F6" stroke="#0F172A" stroke-width="3"/>
    <text x="760" y="160" font-family="serif" font-weight="bold" font-size="20" fill="#0F172A" text-anchor="middle">BEDROOM 2 &amp; BEDROOM 3</text>
    <text x="760" y="190" font-family="sans-serif" font-size="14" fill="#B38E46" text-anchor="middle">Attached Bathrooms &amp; Balconies</text>

    <!-- Grand Foyer & Double Height Living -->
    <rect x="40" y="320" width="600" height="280" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
    <text x="340" y="450" font-family="serif" font-weight="bold" font-size="24" fill="#0F172A" text-anchor="middle">DOUBLE-HEIGHT LIVING &amp; DINING HALL</text>
    <text x="340" y="480" font-family="sans-serif" font-size="14" fill="#1B4D3E" text-anchor="middle">28'0" x 18'0"</text>

    <!-- Bedroom 4 / Guest Suite -->
    <rect x="660" y="320" width="340" height="280" fill="#F8FAFC" stroke="#0F172A" stroke-width="3"/>
    <text x="830" y="450" font-family="serif" font-weight="bold" font-size="18" fill="#0F172A" text-anchor="middle">GUEST SUITE (BEDROOM 4)</text>
    <text x="830" y="480" font-family="sans-serif" font-size="13" fill="#B38E46" text-anchor="middle">15'0" x 13'6"</text>

    <!-- Double Height Sky Deck Balcony -->
    <rect x="40" y="605" width="960" height="30" fill="url(#emeraldGrad)" rx="6"/>
    <text x="520" y="626" font-family="sans-serif" font-weight="bold" font-size="13" fill="#FFFFFF" text-anchor="middle">DOUBLE-HEIGHT SKY DECK BALCONY (8' FT WIDE)</text>
  </g>

  <!-- Title Badge -->
  <rect x="80" y="24" width="460" height="40" rx="8" fill="#FFFFFF" stroke="#1B4D3E" stroke-width="2"/>
  <text x="310" y="50" font-family="serif" font-weight="bold" font-size="16" fill="#0F172A" text-anchor="middle">NORTHWIND ESTATE — 4 BHK ULTRA ESTATE BLUEPRINT</text>
</svg>`;

// Write generated visual assets
ensureDir(path.join(baseDir, "floor-plans"));
fs.writeFileSync(path.join(baseDir, "floor-plans", "3bhk-luxury-floor-plan.svg"), svg3BHK);
fs.writeFileSync(path.join(baseDir, "floor-plans", "4bhk-estate-floor-plan.svg"), svg4BHK);

console.log("Successfully generated visual assets!");
