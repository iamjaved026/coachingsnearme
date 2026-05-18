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

export const metadata: Metadata = {
  title: "CoachingsNearMe.in — Discover & Manage Coachings Near You",
  description:
    "The modern platform to discover nearby coachings, compare institutes, manage batches, access homework & notes, and organize your entire coaching life in one place.",
  keywords: [
    "coaching near me",
    "tuition near me",
    "coaching finder",
    "batch management",
    "student platform",
    "education technology",
    "coaching discovery",
    "coaching reviews",
  ],
  openGraph: {
    title: "CoachingsNearMe.in — The Future of Coaching Discovery",
    description:
      "Find, compare, and manage coachings near you. Your entire coaching life, organized.",
    type: "website",
    url: "https://coachingsnearme.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
