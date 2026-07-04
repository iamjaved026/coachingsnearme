import { Metadata } from "next";
import { siteConfig } from "./site";

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  keywords = [
    "coaching near me",
    "best coaching in Teghra",
    "Bihar coaching platform",
    "coaching discovery app",
    "tuition discovery",
    "JEE coaching near me",
    "NEET coaching near me",
    "coaching management app",
    "student batch management",
    "coaching search platform",
    "local coaching discovery",
    "Javed Hussain",
    "Mohammed Javed Hussain",
    "iamjaved026",
    "@iamjaved026",
    "javedhussain",
    "coachings near me app",

  ],
  image = "/assets/og-image.png",
  noIndex = false,
}: SeoProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : `CoachingsNearMe | Find, Compare & Manage Coaching Institutes Near You`,
    description,
    keywords,
    authors: [{ name: siteConfig.founder.name, url: `https://github/${siteConfig.founder.username}` }],
    creator: siteConfig.founder.name,
    publisher: siteConfig.name,
    metadataBase: new URL(defaultUrl),
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : `CoachingsNearMe | Find, Compare & Manage Coaching Institutes Near You`,
      description,
      url: defaultUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Platform Preview`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : `CoachingsNearMe | Find, Compare & Manage Coaching Institutes Near You`,
      description,
      images: [image],
      creator: "@iamjaved026",
    },
    icons: {
      icon: "/icon",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    manifest: "/manifest.webmanifest",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
