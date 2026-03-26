"use client";

import { useEffect, useRef } from "react";
import { Shield, Server, FileCheck, Scale } from "lucide-react";

const ComplianceSection = () => {
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
        gsap.from(".comp-header", {
          scrollTrigger: { trigger: ".comp-header", start: "top 85%" },
          opacity: 0, y: 50, duration: 0.8, ease: "power3.out",
        });
        ScrollTrigger.batch(".comp-card", {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, scale: 0.95, y: 20, stagger: 0.1, duration: 0.6, ease: "power3.out" }),
          start: "top 88%",
        });
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

  const items = [
    { icon: Scale, title: "Platform Only", description: "We connect — no employment responsibility. Introductions, not staffing." },
    { icon: Server, title: "EU Servers", description: "All data stored on EU-based servers for regional compliance." },
    { icon: Shield, title: "GDPR Compliant", description: "Full GDPR compliance. Your data handled with highest standards." },
    { icon: FileCheck, title: "Clear Terms", description: "Transparent terms, no hidden clauses, no legal jargon." },
  ];

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 relative overflow-hidden film-grain">
      <div className="absolute inset-0 bg-[#0A0A0E]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative max-w-6xl">
        <div className="comp-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6">
            Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for <span className="text-gradient-blue">trust</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Full transparency and EU regulatory compliance, always.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="comp-card group p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.06] hover:border-blue-500/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
