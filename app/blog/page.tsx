import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on cross-border recruitment, EU labour markets, skilled worker visas, and GDPR-compliant staffing.",
  alternates: {
    canonical: "https://euroworkmatch.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Euro<span className="text-accent">WorkMatch</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
          Coming Soon
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground mb-6">
          EuroWorkMatch Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Insights on cross-border recruitment, EU labour market trends, skilled
          worker visa processes, and GDPR-compliant staffing — coming soon.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
          {[
            "How to hire Indian workers for European companies",
            "GDPR compliance for international staffing platforms",
            "Skilled worker visa EU: complete guide for employers",
          ].map((topic) => (
            <div
              key={topic}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <p className="text-sm text-muted-foreground">{topic}</p>
              <span className="inline-flex items-center gap-1 text-xs text-accent mt-2">
                Coming soon <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="https://app.euroworkmatch.com/auth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
          >
            Get started on the platform
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
