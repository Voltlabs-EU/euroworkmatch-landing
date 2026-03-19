"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BusinessModelSection = () => {
  const workerFeatures = [
    "Create & manage your profile",
    "Upload certifications & documents",
    "Swipe on job listings",
    "Get matched with employers",
    "Message matched employers",
  ];

  const employerFeatures = [
    { label: "Browse worker profiles (limited)", paid: false },
    { label: "Swipe on worker profiles", paid: false },
    { label: "View full profile + documents", paid: true },
    { label: "Contact & message workers", paid: true },
    { label: "Post job listings", paid: true },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Business Model
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Free for Workers.
              <br />
              <span className="text-gradient">Paid for Access.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              EuroWorkMatch only facilitates digital introductions — we are not a
              staffing agency. The platform connects employers and candidates
              directly, with no employment responsibility.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Who Pays What?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Workers:</strong> Always free — no hidden costs
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Employers:</strong> Browse free, pay to unlock & contact
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Two-panel comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Workers panel */}
            <div className="rounded-2xl border border-accent/30 overflow-hidden">
              <div className="px-5 py-3 bg-accent/10 border-b border-accent/20 flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">🇮🇳 Workers</span>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Always Free</span>
              </div>
              <div className="divide-y divide-border">
                {workerFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 px-5 py-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employers panel */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="px-5 py-3 bg-muted/50 border-b border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">🇪🇺 Employers</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Free + Paid</span>
              </div>
              <div className="divide-y divide-border">
                {employerFeatures.map((feat) => (
                  <div key={feat.label} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feat.paid ? "bg-primary/10" : "bg-accent/10"}`}>
                        <Check className={`w-3 h-3 ${feat.paid ? "text-primary" : "text-accent"}`} />
                      </div>
                      <span className="text-sm text-foreground">{feat.label}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                      feat.paid
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}>
                      {feat.paid ? "Paid" : "Free"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
