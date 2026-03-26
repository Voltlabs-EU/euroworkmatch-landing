"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Building2,
  Heart,
  MessageSquare,
  Star,
  Shield,
  MapPin,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

/* ─── Fake app UI inside the phone ──────────────────────────── */
function PhoneAppUI() {
  return (
    <div className="h-full flex flex-col bg-[#09090B] text-white">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-10 pb-2 text-[10px] text-zinc-500">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3.5 h-2 rounded-sm border border-zinc-600" />
        </div>
      </div>

      {/* App header */}
      <div className="px-4 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">EuroWorkMatch</span>
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-[8px] font-bold">3</span>
          </div>
        </div>
      </div>

      {/* Worker card being swiped */}
      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        {/* Profile card */}
        <div className="bg-zinc-900 rounded-2xl border border-white/[0.08] p-3.5 relative">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-bold">
              RK
            </div>
            <div>
              <div className="text-xs font-semibold">Rajesh Kumar</div>
              <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" /> Mumbai, India
              </div>
            </div>
            <div className="ml-auto flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
              <span className="text-[9px] text-green-400 font-medium">Verified</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mb-2">
            <Briefcase className="w-3 h-3 text-blue-400" />
            <span className="text-[10px] text-zinc-300">Refrigeration Technician</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {["Thermo King", "Carrier", "HVAC", "10yr exp"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[9px] text-blue-300 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Match score */}
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-3 py-2">
            <div className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-[10px] text-zinc-400">Match Score</span>
            </div>
            <span className="text-sm font-bold text-blue-400">94%</span>
          </div>
        </div>

        {/* Swipe buttons */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center">
            <span className="text-lg">✕</span>
          </div>
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 relative pulse-ring">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-zinc-400" />
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around pt-2 mt-auto border-t border-white/[0.06]">
          {[
            { icon: Heart, label: "Match", active: true },
            { icon: MessageSquare, label: "Chat", active: false },
            { icon: Briefcase, label: "Jobs", active: false },
            { icon: Users, label: "Profile", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <item.icon
                className={`w-4 h-4 ${item.active ? "text-blue-400" : "text-zinc-600"}`}
              />
              <span
                className={`text-[8px] ${item.active ? "text-blue-400" : "text-zinc-600"}`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Floating badge component ──────────────────────────────── */
function FloatingBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 px-3 py-2 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/[0.08] shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      const els = sectionRef.current?.querySelectorAll("[data-animate]");
      els?.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
        (el as HTMLElement).style.filter = "none";
      });
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["default"]["context"]> | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            // Only attach scroll animations AFTER entrance finishes
            gsap.to(".hero-phone", {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
              y: -120,
              scale: 0.85,
              opacity: 0.3,
            });

            gsap.to(".hero-headline", {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "15% top",
                end: "60% top",
                scrub: 1,
              },
              scale: 1.05,
              filter: "blur(8px)",
              opacity: 0,
              y: -40,
            });

            gsap.to([".hero-sub", ".hero-cta", ".hero-badge"], {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "20% top",
                end: "55% top",
                scrub: 1,
              },
              opacity: 0,
              y: -30,
            });
          },
        });

        // Staggered entrance
        tl.fromTo(
          ".hero-badge",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }
        )
          .fromTo(
            ".hero-headline",
            { opacity: 0, y: 50, filter: "blur(16px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
            "-=0.4"
          )
          .fromTo(
            ".hero-sub",
            { opacity: 0, y: 30, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
            "-=0.4"
          )
          .fromTo(
            ".hero-cta",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
          )
          .fromTo(
            ".hero-phone",
            { opacity: 0, y: 80, scale: 0.9, rotateY: -15 },
            { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 1.2, ease: "power2.out" },
            "-=0.7"
          )
          .fromTo(
            ".hero-float-badge",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 },
            "-=0.6"
          )
          .fromTo(
            ".hero-trust",
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            "-=0.3"
          );
      }, sectionRef);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] flex items-center overflow-hidden film-grain"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-theme" />

      {/* Blue radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left — Text */}
          <div className="text-center lg:text-left pt-24 lg:pt-0">
            {/* Badge */}
            <div
              className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
              style={{ opacity: 0 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-400 tracking-wide">
                Now Live — Start Matching Today
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ opacity: 0 }}
            >
              <span className="text-white">Connecting</span>
              <br />
              <span className="text-gradient-blue">Skilled Workers</span>
              <br />
              <span className="text-white">to Europe</span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-sub text-base md:text-lg text-zinc-400 font-light max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ opacity: 0 }}
            >
              The platform that matches skilled professionals from India with
              European companies. Swipe, match, and connect directly — no
              agencies, no middlemen.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-cta flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              style={{ opacity: 0 }}
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link
                  href="https://app.euroworkmatch.com/auth?role=worker"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "worker");
                  }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Free as Worker
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
                <Link
                  href="https://app.euroworkmatch.com/auth?role=employer"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "employer");
                  }}
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Hire Talent
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div
              className="hero-trust mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-zinc-500"
              style={{ opacity: 0 }}
            >
              {[
                { icon: Shield, text: "GDPR Compliant" },
                { icon: MapPin, text: "EU Servers" },
                { icon: Users, text: "Free for Workers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-blue-500/60" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone mockup with floating elements */}
          <div className="hero-phone relative flex items-center justify-center lg:justify-end" style={{ opacity: 0, perspective: "1200px" }}>
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[500px] bg-blue-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Floating badges */}
            <FloatingBadge className="hero-float-badge -left-4 lg:-left-12 top-24 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400">New Match!</div>
                  <div className="text-xs font-semibold text-white">AgroWorld Transport</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="hero-float-badge -right-2 lg:-right-8 top-40 animate-float-delay">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400">Profile Score</div>
                  <div className="text-xs font-bold text-blue-400">94% Complete</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="hero-float-badge -left-2 lg:-left-6 bottom-28 animate-float-delay">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400">Message from</div>
                  <div className="text-xs font-semibold text-white">TechLog GmbH</div>
                </div>
              </div>
            </FloatingBadge>

            {/* Phone */}
            <div className="phone-mockup relative z-10">
              <div className="phone-notch" />
              <PhoneAppUI />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#09090B] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
