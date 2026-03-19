"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Bell,
  UserCheck,
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
  const features = [
    {
      icon: Heart,
      title: "Swipe on What Interests You",
      description:
        "Browse jobs or candidates and swipe right on what fits. A match only forms when both sides want it — no spam, no cold outreach.",
    },
    {
      icon: MessageSquare,
      title: "Chat Directly After a Match",
      description:
        "A private chat opens the moment you match. Ask questions, share details, move fast — no agency or recruiter involved.",
    },
    {
      icon: ShieldCheck,
      title: "Show Real Proof, Not Just Claims",
      description:
        "Workers upload certificates and qualification documents. Employers see verified evidence before swiping — not just a job title.",
    },
    {
      icon: BarChart2,
      title: "See How Your Profile Performs",
      description:
        "Track how many employers viewed or swiped on your profile. Know what's working and what to improve to get more matches.",
    },
    {
      icon: Bell,
      title: "Get Notified When It Matters",
      description:
        "New job posted that fits your skills? You'll get an alert instantly. No need to check every day — we do that for you.",
    },
    {
      icon: UserCheck,
      title: "Build a Profile That Gets Seen",
      description:
        "A step-by-step completeness score guides you. The more you fill in, the higher you rank — and the more employers swipe right.",
    },
  ];

  return (
    <section id="ai-features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Platform Features
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need.
            <br />
            <span className="text-gradient">Built Into the Platform.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            Matching, messaging, document verification, profile analytics, and more — all in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-elevated"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 shadow-lg group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-hero-gradient">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                Free
              </div>
              <div className="text-sm text-white/70 mt-1">For Workers</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                <CountUp target={12} suffix="+" />
              </div>
              <div className="text-sm text-white/70 mt-1">EU Languages</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">EU</div>
              <div className="text-sm text-white/70 mt-1">Compliant</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
