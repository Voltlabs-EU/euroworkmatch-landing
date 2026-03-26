"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import {
  Heart,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Bell,
  UserCheck,
  Zap,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const AIFeaturesSection = () => {
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
        gsap.fromTo(".aif-header",
          { opacity: 0, y: 50 },
          {
            scrollTrigger: { trigger: ".aif-header", start: "top 85%", toggleActions: "play none none reverse" },
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          }
        );

        ScrollTrigger.batch(".bento-item", {
          onEnter: (batch) =>
            gsap.fromTo(batch,
              { opacity: 0, y: 30, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }
            ),
          start: "top 88%",
        });

        gsap.fromTo(".aif-marquee",
          { opacity: 0 },
          {
            scrollTrigger: { trigger: ".aif-marquee", start: "top 92%", toggleActions: "play none none reverse" },
            opacity: 1, duration: 0.8, ease: "power3.out",
          }
        );
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Swipe Matching",
      description: "Browse and swipe right on what fits. Match forms only when both sides want it.",
      size: "bento-wide",
      visual: (
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            {["RK", "AP", "SM"].map((init) => (
              <div key={init} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#18181B]">
                {init}
              </div>
            ))}
          </div>
          <span className="text-xs text-zinc-500">+847 active profiles</span>
        </div>
      ),
    },
    {
      icon: MessageSquare,
      title: "Direct Chat",
      description: "Private messaging opens on match. No agency involved.",
      size: "",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="bg-blue-600/20 rounded-lg rounded-bl-sm px-3 py-1.5 text-[11px] text-blue-300 max-w-[80%]">
            Hi! I saw your profile — interested in the role?
          </div>
          <div className="bg-zinc-800 rounded-lg rounded-br-sm px-3 py-1.5 text-[11px] text-zinc-300 max-w-[80%] ml-auto">
            Yes! When can we discuss?
          </div>
        </div>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Verified Profiles",
      description: "Workers upload certificates. Employers see real proof, not claims.",
      size: "",
      visual: (
        <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <ShieldCheck className="w-4 h-4 text-green-400" />
          <span className="text-[11px] text-green-400 font-medium">3 documents verified</span>
        </div>
      ),
    },
    {
      icon: BarChart2,
      title: "Profile Analytics",
      description: "Track views, swipes, and match rate. Know what works.",
      size: "",
      visual: (
        <div className="mt-4 flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-400 transition-all"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: "Personalised Job Feed",
      description: "AI learns your preferences. The more you swipe, the smarter your feed gets.",
      size: "",
      visual: (
        <div className="mt-4 space-y-1.5">
          {[
            { role: "HVAC Technician", loc: "Berlin", pct: 96 },
            { role: "Refrigeration Engineer", loc: "Munich", pct: 91 },
            { role: "Maintenance Lead", loc: "Vienna", pct: 87 },
          ].map((job) => (
            <div key={job.role} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-zinc-800/60 border border-white/[0.04]">
              <div>
                <div className="text-[10px] font-medium text-white">{job.role}</div>
                <div className="text-[9px] text-zinc-500">{job.loc}</div>
              </div>
              <span className="text-[10px] font-bold text-blue-400">{job.pct}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified when a job matches your skills.",
      size: "bento-wide",
      visual: (
        <div className="mt-4 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-zinc-800/50 border border-white/[0.06]">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white">New job match: HVAC Technician</div>
            <div className="text-[10px] text-zinc-500">TechLog GmbH · Berlin, Germany · 94% match</div>
          </div>
          <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
        </div>
      ),
    },
    {
      icon: UserCheck,
      title: "Completeness Score",
      description: "Step-by-step guidance. More complete = more visible.",
      size: "",
      visual: (
        <div className="mt-4">
          <div className="flex justify-between text-[10px] text-zinc-500 mb-1.5">
            <span>Profile Strength</span>
            <span className="text-blue-400 font-bold">94%</span>
          </div>
          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
            <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
          </div>
        </div>
      ),
    },
  ];

  const marqueeItems = [
    { icon: Globe, text: "12+ EU Languages" },
    { icon: Users, text: "Free for Workers" },
    { icon: ShieldCheck, text: "GDPR Compliant" },
    { icon: TrendingUp, text: "AI-Powered Matching" },
    { icon: Zap, text: "Instant Notifications" },
    { icon: MessageSquare, text: "Direct Messaging" },
  ];

  return (
    <section id="ai-features" ref={sectionRef} className="py-32 lg:py-40 bg-[#0A0A0E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header */}
        <div className="aif-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Everything you need.
            <br />
            <span className="text-gradient-blue">One platform.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Matching, messaging, document verification, profile analytics — all built in.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`bento-item group rounded-2xl bg-zinc-900/70 border border-white/[0.06] p-5 hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden ${
                feature.size === "bento-wide" ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
              {feature.visual}

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Marquee ticker */}
        <div className="aif-marquee mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0E] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0E] to-transparent z-10" />
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={`${item.text}-${i}`}
                className="flex items-center gap-2 px-6 py-3 mx-2 rounded-full bg-zinc-900/60 border border-white/[0.06] whitespace-nowrap"
              >
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-zinc-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
