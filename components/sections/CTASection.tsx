"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2 } from "lucide-react";

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const bulletItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const CTASection = () => {
  return (
    <section id="for-workers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-slate-400 max-w-xl mx-auto">
            EuroWorkMatch is launching now. Be among the first workers and employers on the platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Workers CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-accent-gradient overflow-hidden group"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                For Workers
              </h3>
              <p className="text-white/80 mb-6">
                Create your free profile and get discovered by European
                employers looking for your skills.
              </p>
              <motion.ul
                className="space-y-2 mb-8"
                variants={bulletContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Free to join",
                  "Build your own profile with guidance",
                  "Message matched employers directly",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={bulletItemVariants}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <Button
                size="lg"
                className="w-full bg-white text-accent hover:bg-white/90"
                asChild
              >
                <Link
                  href="https://app.euroworkmatch.com/auth?role=worker"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "worker");
                  }}
                >
                  Join Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Employers CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-hero-gradient overflow-hidden group"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/10 rounded-full blur-xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                For Employers
              </h3>
              <p className="text-white/80 mb-6">
                Browse profiles of skilled workers from India and swipe on candidates that fit your open roles.
              </p>
              <motion.ul
                className="space-y-2 mb-8"
                variants={bulletContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Browse profiles free",
                  "Pay only for access",
                  "Verified certifications on every profile",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={bulletItemVariants}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <Button
                size="lg"
                className="w-full bg-accent text-white hover:bg-accent/90"
                asChild
              >
                <Link
                  href="https://app.euroworkmatch.com/auth?role=employer"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      localStorage.setItem("ewm_selected_role", "employer");
                  }}
                >
                  Start Hiring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
