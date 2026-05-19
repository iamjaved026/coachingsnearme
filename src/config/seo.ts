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
  ],
  image = "/opengraph-image",
  noIndex = false,
}: SeoProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — The Future Infrastructure for Coaching Students`,
    description,
    keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(defaultUrl),
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — The Future Infrastructure for Coaching Students`,
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
      title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — The Future Infrastructure for Coaching Students`,
      description,
      images: [image],
      creator: "@coachingsnearme",
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
