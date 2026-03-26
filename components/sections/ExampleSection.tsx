"use client";

import { useEffect, useRef } from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Thermometer, Wrench, Building, CheckCircle } from "lucide-react";

const ExampleSection = () => {
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
        gsap.from(".example-header", {
          scrollTrigger: { trigger: ".example-header", start: "top 85%" },
          opacity: 0, y: 50, duration: 0.8, ease: "power3.out",
        });
        gsap.from(".example-card", {
          scrollTrigger: { trigger: ".example-card", start: "top 85%" },
          opacity: 0, scale: 0.95, y: 30, duration: 0.8, ease: "power3.out",
        });
      }, sectionRef);
    })();

    return () => { ctx?.revert(); };
  }, []);

  return (
    <section id="for-employers" ref={sectionRef} className="py-32 lg:py-40 bg-[#09090B] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="max-w-4xl mx-auto">
          <div className="example-header text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6">
              Real Example
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              See it in <span className="text-gradient-blue">action</span>
            </h2>
          </div>

          <div className="example-card">
            <SpotlightCard>
              <div className="px-8 py-6 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Building className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AgroWorld Transport</h3>
                    <p className="text-sm text-zinc-500">European Road Transport & Logistics</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Looking For:</h4>
                    <p className="text-zinc-400">
                      Technicians with experience in{" "}
                      <strong className="text-white">refrigerated trailer cooling units</strong>{" "}
                      — specifically <strong className="text-white">Thermo King</strong> and{" "}
                      <strong className="text-white">Carrier</strong> systems.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-400" />
                    How EuroWorkMatch Helps:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Workers with cooling unit expertise create verified profiles",
                      "View uploaded certifications and documents directly",
                      "Mutual matching ensures genuine interest from both sides",
                      "Communicate directly with matched candidates",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 bg-blue-500/5 border-t border-white/[0.06]">
                <p className="text-sm text-center text-zinc-400">
                  <strong className="text-white">Result:</strong> Qualified specialists found without traditional recruitment costs.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
