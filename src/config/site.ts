export const siteConfig = {
  name: "CoachingsNearMe",
  url: "https://coachingsnearme.in",
  tagline: "The Future Infrastructure for Coaching Students",
  description:
    "Discover nearby coachings, compare institutes, manage classes, and organize your educational life in one premium ecosystem. Escaping WhatsApp coaching chaos.",
  launchCity: "Teghra, Bihar",

  support: {
    email: "support@coachingsnearme.in",
    phone: "+91 6207069013", // Update with real number later
    hours: "Mon-Sat, 9 AM - 6 PM",
  },

  address: {
    street: "Teghra Main Road",
    city: "Teghra",
    state: "Bihar",
    pincode: "851133",
    country: "India",
  },

  socials: {
    twitter: "",
    instagram: "",
    linkedin: "",
  },

  navigation: [
    { name: "Features", href: "/#features" },
    { name: "Discover", href: "/#discover" },
    { name: "Batch Workspace", href: "/#batches" },
    { name: "Reviews", href: "/#reviews" },
  ],

  footerLinks: {
    platform: [
      { name: "Features", href: "/#features" },
      { name: "Discover Coachings", href: "/#discover" },
      { name: "Batch Workspace", href: "/#batches" },
      { name: "Student Reviews", href: "/#reviews" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/contact" }, // Can separate later
      { name: "Join Waitlist", href: "/#early-access" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/terms" }, // Pointing to terms for now
    ],
  },

  cta: {
    primary: "Request Early Access",
    secondary: "Contact Us",
  }
};

export type SiteConfig = typeof siteConfig;
