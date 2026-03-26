"use client";

import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";
import { GdprModal, CookiePolicyModal, ContactModal, AboutModal, PricingModal } from "./FooterModals";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090B] border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <Globe className="w-5 h-5 text-zinc-200" />
              </div>
              <span className="text-xl font-bold text-foreground">
                EuroWorkMatch
              </span>
            </Link>
            <p className="text-sm text-zinc-500 mb-4">
              Smart Platform for Global Labour Matching. Connecting skilled
              workers from India with European companies.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
              <MapPin className="w-4 h-4" />
              <span>EU-Based Operations</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
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
                    className="text-sm text-zinc-500 hover:text-zinc-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><AboutModal /></li>
              <li>
                <a
                  href="mailto:support@euroworkmatch.com"
                  className="text-sm text-zinc-500 hover:text-zinc-50 transition-colors"
                >
                  Support
                </a>
              </li>
              <li><PricingModal /></li>
              <li><ContactModal /></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-500 hover:text-zinc-50 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-500 hover:text-zinc-50 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li><GdprModal /></li>
              <li><CookiePolicyModal /></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-xs text-zinc-600 text-center mb-4">
            EuroWorkMatch facilitates introductions between workers and employers. We are not a staffing agency and accept no employment responsibility.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {currentYear} EuroWorkMatch. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@euroworkmatch.com"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-50 transition-colors"
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
