"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  MessageSquare,
  CheckCircle2,
  Upload,
  CreditCard,
} from "lucide-react";

const HowItWorksSection = () => {
  const workerSteps = [
    {
      icon: Upload,
      title: "Register & Upload",
      description: "Create your free profile, upload your CV and certificates",
    },
    {
      icon: FileText,
      title: "Build Your Profile",
      description:
        "Complete your profile with skills, experience, certifications and documents. A profile strength score guides you.",
    },
    {
      icon: MessageSquare,
      title: "Get Matched",
      description:
        "Swipe on jobs you like. When an employer also likes your profile, it's a mutual match — and you can start messaging directly.",
    },
  ];

  const employerSteps = [
    {
      icon: Search,
      title: "Search & Explore",
      description: "Browse limited profiles of skilled workers for free",
    },
    {
      icon: CreditCard,
      title: "Unlock & Contact",
      description: "Pay to access full profiles or directly contact candidates",
    },
    {
      icon: CheckCircle2,
      title: "Hire with Confidence",
      description:
        "Verified worker profiles give you the evidence you need. Once matched, communicate and coordinate directly inside the platform.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Simple. Mutual. Direct.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            Both sides swipe. Only mutual interest creates a match. No cold outreach, no wasted time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* For Workers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-lg">🇮🇳</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  For Workers
                </h3>
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  Free to join
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {workerSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-accent">
                        Step {index + 1}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Employers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🇪🇺</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  For Employers
                </h3>
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  Pay for access
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {employerSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-primary dark:text-teal-light">
                        Step {index + 1}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
