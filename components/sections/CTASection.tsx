"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Sparkles } from "lucide-react";

const CTASection = () => {
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
        gsap.from(".cta-header", {
          scrollTrigger: { trigger: ".cta-header", start: "top 85%" },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".cta-card-left", {
          scrollTrigger: { trigger: ".cta-card-left", start: "top 85%" },
          opacity: 0,
          x: -40,
          rotateY: 5,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".cta-card-right", {
          scrollTrigger: { trigger: ".cta-card-right", start: "top 85%" },
          opacity: 0,
          x: 40,
          rotateY: -5,
          duration: 0.8,
          ease: "power3.out",
        });
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

  return (
    <section id="for-workers" ref={sectionRef} className="py-32 lg:py-40 bg-[#09090B] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="cta-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Your next opportunity
            <br />
            <span className="text-gradient-blue">starts here</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
            Be among the first on the platform. Whether you&apos;re hiring or looking for work in Europe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          {/* Workers CTA — Blue gradient */}
          <div className="cta-card-left relative p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 group">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Workers</h3>
              <p className="text-blue-100/80 mb-6">
                Create your free profile and get discovered by European employers
                looking for your skills.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Always 100% free",
                  "Build your profile with step-by-step guidance",
                  "Message matched employers directly",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-lg"
                asChild
              >
                <Link
                  href="https://app.euroworkmatch.com/auth?role=worker"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "worker");
                  }}
                >
                  Join Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Employers CTA — Dark with blue accent */}
          <div className="cta-card-right relative p-8 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700/50 group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-600 flex items-center justify-center mb-6 group-hover:border-blue-500/30 group-hover:scale-110 transition-all">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Employers</h3>
              <p className="text-zinc-400 mb-6">
                Browse profiles of skilled workers from India and swipe on
                candidates that fit your open roles.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Browse profiles for free",
                  "Pay only to unlock full access",
                  "Verified certifications on every profile",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                asChild
              >
                <Link
                  href="https://app.euroworkmatch.com/auth?role=employer"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "employer");
                  }}
                >
                  Start Hiring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
