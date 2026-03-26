import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://euroworkmatch.com"),
  title: {
    default: "EuroWorkMatch",
    template: "%s | EuroWorkMatch",
  },
  description:
    "EuroWorkMatch is the intelligent platform that matches skilled professionals from India with European companies facing labour shortages — fully automated, GDPR compliant, no recruiters required.",
  keywords: [
    "hire Indian workers Europe",
    "skilled worker visa EU",
    "GDPR staffing platform",
    "labour matching platform",
    "India Europe recruitment",
    "automated recruitment",
    "cross-border employment",
  ],
  authors: [{ name: "EuroWorkMatch" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://euroworkmatch.com",
    siteName: "EuroWorkMatch",
    title: "EuroWorkMatch — Connecting Skilled Workers from India to Europe",
    description:
      "Intelligent platform matching skilled professionals from India with European companies. GDPR compliant, 90%+ automation, no recruiters needed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroWorkMatch — Connecting Skilled Workers from India to Europe",
    description:
      "Intelligent platform matching skilled professionals from India with European companies. GDPR compliant, 90%+ automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://euroworkmatch.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
