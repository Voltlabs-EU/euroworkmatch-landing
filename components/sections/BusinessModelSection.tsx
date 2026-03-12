"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const BusinessModelSection = () => {
  const pricingItems = [
    {
      item: "Worker Registration",
      free: true,
      description: "Create profile, upload CV",
    },
    {
      item: "Profile Translation",
      free: true,
      description: "Automatic document processing",
    },
    {
      item: "Employer Browse Limited",
      free: true,
      description: "View anonymized profiles",
    },
    {
      item: "Full Profile Access",
      free: false,
      description: "See complete worker details",
    },
    {
      item: "Direct Contact",
      free: false,
      description: "Message workers directly",
    },
    {
      item: "Partner Agency Services",
      free: false,
      description: "Visa, housing, contracts",
    },
    {
      item: "Training Institute Listings",
      free: false,
      description: "Advertise programs",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Business Model
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Free for Workers.
              <br />
              <span className="text-gradient">Paid for Access.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground dark:text-slate-400">
              EuroWorkMatch only facilitates digital introductions — we are not a
              staffing agency. The platform connects employers and candidates
              directly, with no employment responsibility.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Who Pays What?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground dark:text-slate-400">
                    <strong className="text-foreground">Workers:</strong> Always
                    free
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground dark:text-slate-400">
                    <strong className="text-foreground">Employers:</strong> Pay
                    for contact/unlock
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground dark:text-slate-400">
                    <strong className="text-foreground">Partner Agencies:</strong>{" "}
                    Pay for platform usage
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground dark:text-slate-400">
                    <strong className="text-foreground">Training Institutes:</strong>{" "}
                    Pay to advertise
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Pricing Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border shadow-elevated overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-muted/50 px-6 py-4 border-b border-border">
              <div className="text-sm font-semibold text-foreground">
                Feature
              </div>
              <div className="text-sm font-semibold text-accent text-center">
                Workers
              </div>
              <div className="text-sm font-semibold text-primary dark:text-teal-light text-center">
                Employers
              </div>
            </div>
            <div className="divide-y divide-border">
              {pricingItems.map((item, i) => (
                <motion.div
                  key={item.item}
                  className="grid grid-cols-3 px-6 py-4 items-center hover:bg-muted/30 transition-colors"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                >
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {item.item}
                    </div>
                    <div className="text-xs text-muted-foreground dark:text-slate-500">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {item.free ? (
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
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

export default BusinessModelSection;
