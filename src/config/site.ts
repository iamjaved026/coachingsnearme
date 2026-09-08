export const siteConfig = {
  name: "CoachingsNearMe",
  url: "https://coachingsnearme.in",
  tagline: "The Future Infrastructure for Coaching Students",
  description:
    "Find nearby coaching institutes, compare student reviews, explore batch timings, connect with teachers, and manage homework, notes, announcements, and recordings—all in one student-first platform.",
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
    twitter: "https://x.com/iamjaved026",
    instagram: "https://instagram.com/iamjaved026",
    linkedin: "https://linkedin.com/in/iamjaved026",
    github: "https://github.com/iamjaved026",
  },

  founder: {
    name: "Javed Hussain",
    displayName: "Javed Hussain",
    username: "iamjaved026",
  },

  navigation: [
    { name: "Features", href: "/#features" },
    { name: "Discover", href: "/#discover" },
    { name: "Batch Workspace", href: "/#batches" },
    { name: "Reviews", href: "/#reviews" },
    { name: "About", href: "/about" },
    { name: "Early Access", href: "/early-access" },
    { name: "FAQ", href: "/#faq" },
  ],

  footerLinks: {
    platform: [
      { name: "Features", href: "/#features" },
      { name: "Discover Coachings", href: "/#discover" },
      { name: "Batch Workspace", href: "/#batches" },
      { name: "Student Reviews", href: "/#reviews" },
      { name: "Early Access Program", href: "/early-access" },
    ],
    support: [
      { name: "About Us", href: "/about" },
      { name: "Contact Support", href: "/contact" },
      { name: "Join Waitlist", href: "/early-access" },
      { name: "FAQ", href: "/#faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Tester Terms & Conditions", href: "/tester-terms" },
      { name: "Tester Privacy Policy", href: "/tester-privacy" },
      { name: "Tester NDA Agreement", href: "/tester-nda" },
    ],
  },

  cta: {
    primary: "Request Early Access",
    secondary: "Contact Us",
  }
};

export type SiteConfig = typeof siteConfig;
