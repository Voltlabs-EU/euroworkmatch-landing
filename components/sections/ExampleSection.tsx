"use client";

import { motion } from "framer-motion";
import { Thermometer, Wrench, Building, CheckCircle } from "lucide-react";

const ExampleSection = () => {
  return (
    <section id="for-employers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Real Example
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              See EuroWorkMatch in Action
            </h2>
          </div>

          {/* Example Card */}
          <div className="bg-card rounded-2xl border border-border shadow-elevated overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    AgroWorld Transport
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    European Road Transport & Logistics Company
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Looking For:
                  </h4>
                  <p className="text-muted-foreground dark:text-slate-400">
                    Technicians and engineers with experience in{" "}
                    <strong className="text-foreground">
                      refrigerated trailer cooling units
                    </strong>{" "}
                    — specifically{" "}
                    <strong className="text-foreground">Thermo King</strong> and{" "}
                    <strong className="text-foreground">Carrier</strong>{" "}
                    systems.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-accent" />
                  How EuroWorkMatch Helps:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Workers with cooling unit expertise create verified profiles",
                    "View uploaded certifications and qualification documents directly",
                    "Mutual matching ensures both sides are genuinely interested",
                    "Communicate directly with matched candidates in the platform",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground dark:text-slate-400">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-accent/5 border-t border-border">
              <p className="text-sm text-center text-muted-foreground dark:text-slate-400">
                <strong className="text-foreground">Result:</strong> AgroWorld Transport
                finds qualified specialists without traditional recruitment costs
                or delays.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleSection;
