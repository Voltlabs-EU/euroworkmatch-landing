import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "EuroWorkMatch Terms of Service — understand your rights and responsibilities when using our platform.",
  alternates: {
    canonical: "https://euroworkmatch.com/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
