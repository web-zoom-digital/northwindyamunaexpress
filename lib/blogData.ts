export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  isoDate: string;
  excerpt: string;
}

export const blogCategories = [
  "All Articles",
  "Floor Plan Planning",
  "Buyer Due Diligence",
  "Property Advisory",
  "Location Analysis",
  "Community Planning",
  "Architecture & Planning",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-compare-3-bhk-and-4-bhk-floor-plans",
    title: "How to Compare 3 BHK and 4 BHK Floor Plans",
    category: "Floor Plan Planning",
    date: "October 2025",
    isoDate: "2025-10-18",
    excerpt:
      "When comparing three-bedroom and four-bedroom layouts, evaluate functional spatial zoning, balcony distribution, en-suite bathroom privacy, and long-term household expansion requirements rather than assessing total gross square footage alone.",
  },
  {
    slug: "carpet-area-vs-super-built-up-area-explained",
    title: "Carpet Area vs. Super Built-up Area Explained",
    category: "Buyer Due Diligence",
    date: "October 2025",
    isoDate: "2025-10-09",
    excerpt:
      "A clear understanding of RERA carpet area—the net usable floor area bounded by internal walls—versus super built-up area helps homebuyers evaluate genuine living space and assess true price-per-square-foot metrics across residential developments.",
  },
  {
    slug: "important-things-to-consider-before-buying-a-property",
    title: "Important Things to Consider Before Buying a Property",
    category: "Property Advisory",
    date: "September 2025",
    isoDate: "2025-09-29",
    excerpt:
      "Key technical and civic factors to examine prior to property commitment include structural earthquake resistance ratings, internal tower setbacks, low-density zoning, vehicular circulation plans, and access to arterial road networks.",
  },
  {
    slug: "how-to-evaluate-a-propertys-location",
    title: "How to Evaluate a Property's Location",
    category: "Location Analysis",
    date: "September 2025",
    isoDate: "2025-09-22",
    excerpt:
      "A thorough location assessment looks beyond immediate surroundings to analyze published authority master plans, regional expressway corridors, planned transit links, social infrastructure, and planned green buffer distances.",
  },
  {
    slug: "understanding-floor-plans-and-space-utilization",
    title: "Understanding Floor Plans and Space Utilization",
    category: "Floor Plan Planning",
    date: "September 2025",
    isoDate: "2025-09-15",
    excerpt:
      "Efficient floor layouts prioritize direct circulation paths, minimize dead hallway corridors, separate guest entertainment zones from family sleeping quarters, and ensure dedicated dry utility spaces for household chores.",
  },
  {
    slug: "amenities-to-consider-when-choosing-a-residential-property",
    title: "Amenities to Consider When Choosing a Residential Property",
    category: "Community Planning",
    date: "August 2025",
    isoDate: "2025-08-30",
    excerpt:
      "Long-term satisfaction in a residential community depends on well-planned amenities such as dedicated fitness spaces, multi-tiered security gatehouses, landscaped walking trails, and adequate resident parking that remain practical to maintain.",
  },
  {
    slug: "questions-to-ask-before-finalizing-a-property",
    title: "Questions to Ask Before Finalizing a Property",
    category: "Buyer Due Diligence",
    date: "August 2025",
    isoDate: "2025-08-22",
    excerpt:
      "Essential questions for property consultants should cover verified construction specifications, window and balcony glazing standards, power backup capacities, water treatment systems, and structured payment milestones.",
  },
  {
    slug: "a-practical-checklist-for-first-time-homebuyers",
    title: "A Practical Checklist for First-Time Homebuyers",
    category: "Property Advisory",
    date: "August 2025",
    isoDate: "2025-08-15",
    excerpt:
      "A structured checklist guiding new buyers through project blueprint reviews, layout efficiency calculations, verified developer documentation, site orientation checks, and transparent payment milestone schedules.",
  },
  {
    slug: "evaluating-natural-light-and-cross-ventilation-in-high-rise-towers",
    title: "Evaluating Natural Light and Cross-Ventilation in Residential Towers",
    category: "Architecture & Planning",
    date: "July 2025",
    isoDate: "2025-07-28",
    excerpt:
      "Dual-aspect tower positioning, generous window-to-wall ratios, and deep balcony overhangs allow natural cross-breezes and daylight to permeate living zones, reducing artificial lighting and climate control loads.",
  },
  {
    slug: "low-density-vs-high-density-master-planning",
    title: "Low-Density vs. High-Density Master Planning in Modern Enclaves",
    category: "Community Planning",
    date: "July 2025",
    isoDate: "2025-07-14",
    excerpt:
      "Low-density master planning limits the number of homes per acre, resulting in quieter corridors, lower elevator wait times, expansive central open lawns, and greater privacy for every resident.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
