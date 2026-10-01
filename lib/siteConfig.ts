// Central site configuration for Northwind Estate
export const siteConfig = {
  name: "Northwind Estate",
  altName: "Northwind Sector 22D Yamuna Expressway",
  tagline: "Low-Density 3 & 4 BHK Residences in Sector 22D, Yamuna Expressway",
  description:
    "Northwind Estate offers 3 & 4 BHK low-density apartments in Sector 22D, Yamuna Expressway, Greater Noida. Featuring open green spaces, spacious balconies, and convenient arterial road access.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://northwindestate.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+919717700596",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919717700596",
  whatsappMessage: "Hi, I am interested in Northwind Estate, Sector 22D Yamuna Expressway. Please share project details and pricing.",
  
  // Project Specifications verified from reference data
  location: {
    sector: "Sector 22D",
    corridor: "Yamuna Expressway",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    landmark: "Adjacent to Upcoming Noida International Airport Corridor",
  },
  configurations: [
    {
      type: "3 BHK Luxury Apartment",
      bhk: "3 BHK",
      status: "Coming Soon",
      size: "Price / Area on Request",
      price: "Price on Request",
      highlights: [
        "Spacious Living & Dining with Large Balcony",
        "Master Bedroom with Attached Bath & Dressing Space",
        "Vitrified Flooring & UPVC Toughened Glass Balconies",
        "Optimized Natural Light & Cross Ventilation"
      ]
    },
    {
      type: "4 BHK Ultra Estate Residence",
      bhk: "4 BHK",
      status: "Coming Soon",
      size: "Price / Area on Request",
      price: "Price on Request",
      highlights: [
        "Expansive Double-Height Balcony Options",
        "4 Bedrooms with En-Suite Bathrooms",
        "Separate Utility & Servant Space",
        "Premium Fixtures & Anti-Skid Balcony Tiles"
      ]
    }
  ],
  rera: "RERA Details: To be updated",
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Amenities & Location", href: "/amenities" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" }
  ]
};
