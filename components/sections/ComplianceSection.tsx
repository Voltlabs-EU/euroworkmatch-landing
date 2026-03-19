"use client";

import { motion } from "framer-motion";
import { Shield, Server, FileCheck, Scale } from "lucide-react";

const ComplianceSection = () => {
  const complianceItems = [
    {
      icon: Scale,
      title: "Platform Responsibility Only",
      description:
        "EuroWorkMatch connects employers and candidates only — no employment responsibility. We facilitate introductions, not staffing.",
    },
    {
      icon: Server,
      title: "EU-Based Servers",
      description:
        "All data is stored securely on European Union based servers, ensuring compliance with regional data protection requirements.",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description:
        "Full compliance with the General Data Protection Regulation. Your data is handled with the highest security standards.",
    },
    {
      icon: FileCheck,
      title: "Clear Terms of Use",
      description:
        "Transparent terms with clear disclaimers on platform responsibility. No hidden clauses or complicated legal jargon.",
    },
  ];

  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-teal-light uppercase tracking-wider">
            Legal & Compliance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Built for Trust.
            <br />
            Designed for Compliance.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We take data protection and legal compliance seriously. EuroWorkMatch
            operates with full transparency and EU regulatory compliance.
          </p>
        </motion.div>

        {/* Compliance Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {complianceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 shadow-glow">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
