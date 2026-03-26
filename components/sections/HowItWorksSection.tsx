"use client";

import { useEffect, useRef } from "react";
import {
  FileText,
  Search,
  MessageSquare,
  CheckCircle2,
  Upload,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const HowItWorksSection = () => {
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
        gsap.fromTo(".hiw-header",
          { opacity: 0, y: 50 },
          {
            scrollTrigger: { trigger: ".hiw-header", start: "top 85%", toggleActions: "play none none reverse" },
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          }
        );

        gsap.fromTo(".hiw-line",
          { scaleX: 0 },
          {
            scrollTrigger: { trigger: ".hiw-steps", start: "top 80%", toggleActions: "play none none reverse" },
            scaleX: 1, transformOrigin: "left center", duration: 1.2, ease: "power2.inOut",
          }
        );

        gsap.fromTo(".hiw-step",
          { opacity: 0, y: 40, scale: 0.9 },
          {
            scrollTrigger: { trigger: ".hiw-steps", start: "top 80%", toggleActions: "play none none reverse" },
            opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.7, ease: "power3.out",
          }
        );

        gsap.fromTo(".hiw-employer-steps",
          { opacity: 0, y: 40 },
          {
            scrollTrigger: { trigger: ".hiw-employer-steps", start: "top 85%", toggleActions: "play none none reverse" },
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          }
        );
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

  const workerSteps = [
    {
      icon: Upload,
      num: "01",
      title: "Register & Upload",
      description: "Create your free profile. Upload CV, certificates, and qualifications.",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: FileText,
      num: "02",
      title: "Build Your Profile",
      description: "A strength score guides you to build a complete, discoverable profile.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: MessageSquare,
      num: "03",
      title: "Match & Connect",
      description: "Swipe on jobs. Mutual match opens direct messaging — no middlemen.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const employerSteps = [
    { icon: Search, title: "Browse & Explore", desc: "Search worker profiles for free" },
    { icon: CreditCard, title: "Unlock Profiles", desc: "Pay to access full details and documents" },
    { icon: CheckCircle2, title: "Hire Directly", desc: "Message matched candidates inside the platform" },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 lg:py-40 bg-[#09090B] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header */}
        <div className="hiw-header text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Three steps to your
            <br />
            <span className="text-gradient-blue">first match</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Both sides swipe. Only mutual interest creates a match. No cold outreach.
          </p>
        </div>

        {/* Worker steps — big visual cards */}
        <div className="hiw-steps relative">
          {/* Connector line */}
          <div className="hiw-line hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-blue-500/40 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {workerSteps.map((step) => (
              <div
                key={step.num}
                className="hiw-step group relative rounded-2xl bg-zinc-900/80 border border-white/[0.06] p-6 hover:border-blue-500/20 transition-all duration-500"
              >
                {/* Number badge */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-xs font-bold text-blue-400 mb-2">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Employer steps — compact row */}
        <div className="hiw-employer-steps mt-20">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-zinc-500">For Employers</span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-lg">🇪🇺</span>
              <span className="text-sm text-zinc-400">Browse free, pay to unlock</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {employerSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] hover:border-blue-500/15 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < employerSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-zinc-700 absolute -right-5 top-1/2 -translate-y-1/2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
