import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EuroWorkMatch — Smart Global Recruitment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroWorkMatch — Connecting Skilled Workers from India to Europe",
    description:
      "Intelligent platform matching skilled professionals from India with European companies. GDPR compliant, 90%+ automation.",
    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
