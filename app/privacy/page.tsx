import type { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EuroWorkMatch Privacy Policy — how we collect, use, and protect your personal data in compliance with GDPR.",
  alternates: {
    canonical: "https://euroworkmatch.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
