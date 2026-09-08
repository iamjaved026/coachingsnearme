import { Metadata } from "next";
import { constructMetadata } from "@/config/seo";

export const metadata: Metadata = constructMetadata({
  title: "Request Early Access — Priority Onboarding Pass",
  description:
    "Join the exclusive early access list for CoachingsNearMe. Discover nearby coaching institutes, compare authentic student reviews, manage batches, and organize homework & notes in one platform.",
  keywords: [
    "coachings near me early access",
    "coaching waitlist Teghra",
    "Bihar coaching registration",
    "student batch app beta",
    "join coachings near me",
    "coaching discovery early pass",
  ],
});

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
