"use client";

import { motion } from "framer-motion";
import {
  Languages,
  Brain,
  MessageSquareText,
  ShieldCheck,
  FileBarChart,
  Clock,
} from "lucide-react";

const AIFeaturesSection = () => {
  const features = [
    {
      icon: Languages,
      title: "Automatic Translation",
      description:
        "Reads and translates CVs and documents between languages instantly",
    },
    {
      icon: Brain,
      title: "Smart Matching",
      description:
        "Detects skills, job titles and calculates relevance for perfect matches",
    },
    {
      icon: MessageSquareText,
      title: "24/7 Chat Support",
      description:
        "Support available around the clock for workers and employers",
    },
    {
      icon: ShieldCheck,
      title: "Document Verification",
      description:
        "Automatically verifies documents and filters fake accounts",
    },
    {
      icon: FileBarChart,
      title: "Automated Reporting",
      description:
        "Generates invoices, reports and analytics automatically",
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description:
        "No waiting — matching, communication and billing happen in real-time",
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
            No Recruiters. No HR Staff.
            <br />
            <span className="text-gradient">Just Automation.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            All core processes — matching, translation, communication,
            verification and billing — are handled entirely automatically
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
                <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 shadow-lg group-hover:shadow-glow transition-shadow duration-300">
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

        {/* Automation Rate Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-hero-gradient">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                90%+
              </div>
              <div className="text-sm text-slate-300 mt-1">Automation Rate</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                24/7
              </div>
              <div className="text-sm text-slate-300 mt-1">Operation</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">0</div>
              <div className="text-sm text-slate-300 mt-1">HR Staff Needed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
