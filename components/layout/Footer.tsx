"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import { GdprModal, CookiePolicyModal, ContactModal, AboutModal, PricingModal } from "./FooterModals";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Euro<span className="text-teal-light">WorkMatch</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-4">
              Smart Platform for Global Labour Matching. Connecting skilled
              workers from India with European companies.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
              <MapPin className="w-4 h-4" />
              <span>EU-Based Operations</span>
            </div>
            <div className="text-sm text-white/40 mt-1">
              🇩🇪 🇳🇱 🇫🇷 🇧🇪 🇦🇹 🇨🇿 🇵🇱 🇷🇴 🇸🇰 🇭🇺
            </div>
          </motion.div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "For Workers", href: "#for-workers" },
                { label: "For Employers", href: "#for-employers" },
                { label: "Features", href: "#ai-features" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><AboutModal /></li>
              <li>
                <a
                  href="mailto:support@euroworkmatch.com"
                  className="text-sm text-white/60 hover:text-teal-light transition-colors"
                >
                  Support
                </a>
              </li>
              <li><PricingModal /></li>
              <li><ContactModal /></li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-teal-light transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 hover:text-teal-light transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li><GdprModal /></li>
              <li><CookiePolicyModal /></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 text-center mb-4">
            EuroWorkMatch facilitates introductions between workers and employers. We are not a staffing agency and accept no employment responsibility.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} EuroWorkMatch. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@euroworkmatch.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-teal-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@euroworkmatch.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
