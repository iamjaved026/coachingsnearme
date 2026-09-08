import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

import { constructMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/icon-512x512.png`
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": ["WebApplication", "SoftwareApplication"],
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      author: {
        "@type": "Person",
        name: siteConfig.founder.name,
        url: siteConfig.socials.github,
        sameAs: [
          siteConfig.socials.twitter,
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.github
        ]
      },
      featureList: [
        "Hyperlocal Coaching Discovery",
        "Verified Anonymous Student Reviews",
        "Interactive Batch Timetable & Attendance",
        "Homework & Study Notes Distribution",
        "Institute Listing & Directory",
        "Early Access Beta Registration"
      ],
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon-512x512.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.support.phone,
          contactType: "customer service",
          email: siteConfig.support.email,
          areaServed: siteConfig.address.country,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Early Access",
          item: `${siteConfig.url}/early-access`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.founder.name,
      url: siteConfig.socials.github,
      sameAs: [
        siteConfig.socials.twitter,
        siteConfig.socials.instagram,
        siteConfig.socials.linkedin,
        siteConfig.socials.github
      ],
      jobTitle: "Founder & Creator",
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name
      }
    }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
