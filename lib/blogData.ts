export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export const blogCategories = [
  "All Articles",
  "Investment & Growth",
  "Architecture & Planning",
  "Luxury Interiors",
  "Home Design",
  "Lifestyle & Amenities",
  "Infrastructure & Transit"
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "yamuna-expressway-real-estate-investment-growth-2025",
    title: "Why Sector 22D Yamuna Expressway is NCR's Highest Potential Investment Corridor",
    subtitle: "Catalyzed by the Noida International Airport, Film City, and industrial megaprojects, Sector 22D is transforming into Greater Noida's prime residential hub.",
    excerpt: "Discover why infrastructure catalysts including Noida International Airport and Film City are driving unprecedented capital appreciation and end-user demand in Sector 22D Yamuna Expressway.",
    coverImage: "/images/blog/yamuna-expressway-investment-growth.jpg",
    category: "Investment & Growth",
    date: "October 12, 2025",
    isoDate: "2025-10-12",
    readTime: "5 min read",
    author: {
      name: "Northwind Research Desk",
      role: "Infrastructure & Real Estate Analyst"
    },
    tags: ["Yamuna Expressway", "Sector 22D", "Jewar Airport", "Real Estate Investment", "Capital Appreciation"]
  },
  {
    slug: "low-density-living-sector-22d-yamuna-expressway",
    title: "The Rise of Low-Density Luxury Living: Why Space & Greenery Matter More Than Ever",
    subtitle: "How modern gated communities with fewer homes per acre and expansive forest greens are redefining urban well-being and privacy.",
    excerpt: "Explore how low-density residential enclaves offer superior privacy, cleaner air, and expansive natural buffers compared to congested urban centers.",
    coverImage: "/images/blog/low-density-luxury-living-sector-22d.jpg",
    category: "Architecture & Planning",
    date: "October 08, 2025",
    isoDate: "2025-10-08",
    readTime: "6 min read",
    author: {
      name: "Northwind Architectural Team",
      role: "Urban Planning & Landscape Design"
    },
    tags: ["Low Density Living", "Green Architecture", "Urban Planning", "Private Living", "Sustainable Homes"]
  },
  {
    slug: "luxury-3bhk-4bhk-interior-design-balcony-living",
    title: "Inside Modern Luxury Residences: Expansive Balconies, Cross-Ventilation & Smart Layouts",
    subtitle: "A detailed look into the architectural nuances of 3 BHK and 4 BHK luxury residences built for modern multi-generational comfort.",
    excerpt: "Step inside contemporary 3 & 4 BHK residences designed with expansive sit-out balconies, master suites, and bespoke architectural specifications.",
    coverImage: "/images/blog/luxury-3bhk-4bhk-balcony-living.jpg",
    category: "Luxury Interiors",
    date: "September 28, 2025",
    isoDate: "2025-09-28",
    readTime: "4 min read",
    author: {
      name: "Northwind Design Studio",
      role: "Interior Architecture Specialist"
    },
    tags: ["3 BHK Luxury", "4 BHK Estate", "Balcony Living", "Interior Design", "Floor Plans"]
  },
  {
    slug: "master-bedroom-suite-design-modern-apartments",
    title: "Crafting the Ultimate Master Bedroom Suite: A Harmony of Light, Texture & Serenity",
    subtitle: "From tailored ambient lighting to acoustic glass insulation, explore the essential design elements of a private sanctuary.",
    excerpt: "Discover how tailored lighting, warm textures, and ergonomic layouts transform master bedrooms into private luxury retreats.",
    coverImage: "/images/blog/master-bedroom-suite-luxury-interiors.jpg",
    category: "Home Design",
    date: "September 20, 2025",
    isoDate: "2025-09-20",
    readTime: "5 min read",
    author: {
      name: "Northwind Design Studio",
      role: "Interior Architecture Specialist"
    },
    tags: ["Master Bedroom", "Interior Styling", "Lighting Design", "Home Decor", "Luxury Bedrooms"]
  },
  {
    slug: "resort-style-amenities-gated-community-yamuna",
    title: "Resort-Inspired Amenities: Transforming Everyday Living into a Vacation Experience",
    subtitle: "How dedicated swimming pavilions, Zen gardens, and fitness clubs foster wellness and vibrant community bonds.",
    excerpt: "From Olympic-length swimming pools and Zen gardens to multi-tier security, explore the lifestyle amenities shaping modern gated communities.",
    coverImage: "/images/blog/resort-style-amenities-gated-community.jpg",
    category: "Lifestyle & Amenities",
    date: "September 15, 2025",
    isoDate: "2025-09-15",
    readTime: "4 min read",
    author: {
      name: "Northwind Lifestyle Desk",
      role: "Community Experience Curator"
    },
    tags: ["Resort Amenities", "Clubhouse", "Swimming Pool", "Gated Community", "Wellness"]
  },
  {
    slug: "yeida-master-plan-2041-future-infrastructure",
    title: "YEIDA Master Plan 2041: How Sector 22D is Positioned for Next-Gen Urban Growth",
    subtitle: "Comprehensive analysis of planned 60m sector arterial roads, underground drainage conduits, and dedicated green safety buffers.",
    excerpt: "An overview of the Yamuna Expressway Master Plan 2041, highlighting how Sector 22D stands at the center of planned commercial zones, educational clusters, and high-speed transit networks.",
    coverImage: "/images/blog/yeida-master-plan-infrastructure.jpg",
    category: "Infrastructure & Transit",
    date: "September 10, 2025",
    isoDate: "2025-09-10",
    readTime: "5 min read",
    author: {
      name: "Northwind Research Desk",
      role: "Infrastructure & Policy Specialist"
    },
    tags: ["YEIDA Master Plan", "Sector 22D", "Urban Infrastructure", "Expressway Development"]
  },
  {
    slug: "vastu-principles-cross-ventilation-modern-homes",
    title: "Harmonizing Vastu Principles with Contemporary Architecture in 3 & 4 BHK Flats",
    subtitle: "Balancing directional energy flows with dual-aspect cross ventilation for a serene, health-first living space.",
    excerpt: "How thoughtful building orientation ensures positive natural daylighting, morning sun exposure, and strict adherence to foundational Vastu Shastra layout guidelines.",
    coverImage: "/images/blog/vastu-cross-ventilation-luxury-homes.jpg",
    category: "Home Design",
    date: "September 05, 2025",
    isoDate: "2025-09-05",
    readTime: "4 min read",
    author: {
      name: "Northwind Design Studio",
      role: "Vastu & Space Planning Consultant"
    },
    tags: ["Vastu Shastra", "Cross Ventilation", "Floor Planning", "Natural Daylight"]
  },
  {
    slug: "smart-sustainable-residences-yamuna-expressway",
    title: "Sustainable & Energy-Efficient Living: The Future of Premium High-Rise Living",
    subtitle: "Rainwater harvesting, solar podium illumination, and insulated UPVC double-glazed windows for eco-conscious families.",
    excerpt: "Explore the modern green technologies integrated into low-density luxury towers that reduce carbon footprints while lowering long-term maintenance overheads.",
    coverImage: "/images/blog/smart-sustainable-residences-yamuna.jpg",
    category: "Architecture & Planning",
    date: "August 28, 2025",
    isoDate: "2025-08-28",
    readTime: "5 min read",
    author: {
      name: "Northwind Green Architecture Desk",
      role: "Sustainability Engineer"
    },
    tags: ["Green Homes", "Eco Living", "Energy Efficiency", "UPVC Glazing"]
  },
  {
    slug: "metro-connectivity-jewar-airport-delhi-ncr",
    title: "Upcoming Metro & High-Speed Rail: Connecting Yamuna Expressway to Delhi & Noida",
    subtitle: "From the dedicated Jewar Airport Metro link to the Eastern Peripheral Expressway, seamless transit is redefining daily commutes.",
    excerpt: "A deep dive into upcoming multimodal transport hubs, connecting Sector 22D to Central Delhi, Noida Electronic City, and the Indira Gandhi International Airport.",
    coverImage: "/images/blog/metro-connectivity-jewar-delhi-ncr.jpg",
    category: "Infrastructure & Transit",
    date: "August 20, 2025",
    isoDate: "2025-08-20",
    readTime: "4 min read",
    author: {
      name: "Northwind Research Desk",
      role: "Transit & Infrastructure Analyst"
    },
    tags: ["Metro Connectivity", "Airport Metro", "Rapid Transit", "Delhi NCR Commute"]
  },
  {
    slug: "green-buffers-botanical-parks-lifestyle-impact",
    title: "The Therapeutic Power of Botanical Parks & Reflexology Walkways in Gated Enclaves",
    subtitle: "How dedicated landscaped water gardens and shaded jogging trails promote physical wellness and everyday mental calm.",
    excerpt: "Discover how nature-integrated landscaping with native tree species, meditation lawns, and therapeutic water pavilions enrich daily routines for all age groups.",
    coverImage: "/images/blog/green-buffers-botanical-parks.jpg",
    category: "Lifestyle & Amenities",
    date: "August 14, 2025",
    isoDate: "2025-08-14",
    readTime: "4 min read",
    author: {
      name: "Northwind Landscape Studio",
      role: "Botanical & Wellness Designer"
    },
    tags: ["Botanical Parks", "Zen Gardens", "Wellness Walkways", "Mental Health"]
  },
  {
    slug: "modular-kitchens-designer-interiors-guide",
    title: "Gourmet Modular Kitchens: Combining Granite Counters, Utility Zones & Ergonomics",
    subtitle: "Design strategies for clutter-free culinary spaces featuring dry utility balconies and high-durability surface finishes.",
    excerpt: "A practical guide to kitchen interior architecture in luxury apartments, focusing on optimal appliance zoning, ventilation conduits, and resilient surface selections.",
    coverImage: "/images/blog/modular-kitchens-designer-interiors.jpg",
    category: "Luxury Interiors",
    date: "August 08, 2025",
    isoDate: "2025-08-08",
    readTime: "4 min read",
    author: {
      name: "Northwind Design Studio",
      role: "Modular Kitchen Specialist"
    },
    tags: ["Modular Kitchen", "Granite Countertops", "Utility Balcony", "Interior Specs"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
