"use client";

import { useEffect, useRef } from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Check } from "lucide-react";

const BusinessModelSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: ReturnType<typeof import("gsap")["default"]["context"]> | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".bm-left", {
          scrollTrigger: { trigger: ".bm-left", start: "top 85%" },
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(".bm-right", {
          scrollTrigger: { trigger: ".bm-right", start: "top 85%" },
          opacity: 0,
          x: 30,
          duration: 0.6,
          ease: "power3.out",
        });
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

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
    <section ref={sectionRef} className="py-32 lg:py-40 bg-[#0F0F12]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="bm-left">
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
              Business Model
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Free for Workers.
              <br />
              <span className="text-silver-matte">Paid for Access.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-500 font-light leading-relaxed">
              EuroWorkMatch only facilitates digital introductions — we are not a
              staffing agency. The platform connects employers and candidates
              directly, with no employment responsibility.
            </p>

            <SpotlightCard className="mt-8">
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Who Pays What?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm text-zinc-500">
                      <strong className="text-foreground">Workers:</strong> Always free — no hidden costs
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-zinc-400" />
                    </div>
                    <span className="text-sm text-zinc-500">
                      <strong className="text-foreground">Employers:</strong> Browse free, pay to unlock & contact
                    </span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </div>

          {/* Right: Two-panel comparison */}
          <div className="bm-right space-y-4">
            {/* Workers panel */}
            <div className="rounded-2xl border border-green-500/20 overflow-hidden bg-[#1C1C22]">
              <div className="px-5 py-3 bg-green-500/5 border-b border-green-500/10 flex items-center justify-between">
                <span className="text-sm font-semibold text-green-400">🇮🇳 Workers</span>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                  Always Free
                </span>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {workerFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 px-5 py-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-sm text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employers panel */}
            <div className="rounded-2xl border border-zinc-700 overflow-hidden bg-[#1C1C22]">
              <div className="px-5 py-3 bg-white/[0.02] border-b border-zinc-700 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">🇪🇺 Employers</span>
                <span className="text-xs font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                  Free + Paid
                </span>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {employerFeatures.map((feat) => (
                  <div key={feat.label} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        feat.paid ? "bg-zinc-800" : "bg-green-500/10"
                      }`}>
                        <Check className={`w-3 h-3 ${feat.paid ? "text-zinc-400" : "text-green-400"}`} />
                      </div>
                      <span className="text-sm text-foreground">{feat.label}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                      feat.paid
                        ? "bg-zinc-800 text-zinc-400"
                        : "bg-green-500/10 text-green-400"
                    }`}>
                      {feat.paid ? "Paid" : "Free"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
