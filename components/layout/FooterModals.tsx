"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shield, Cookie, Mail, Globe, Zap, Crown, Building2, Check } from "lucide-react";

// Shared trigger style — zinc palette
const triggerClass =
  "text-sm text-zinc-500 hover:text-zinc-50 transition-colors text-left cursor-pointer";

// GDPR Modal
export function GdprModal() {
  return (
    <Dialog>
      <DialogTrigger className={triggerClass}>GDPR</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-zinc-200" />
            </div>
            <div>
              <DialogTitle>GDPR Compliance</DialogTitle>
              <DialogDescription>Your rights under EU data protection law</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="space-y-5 text-sm text-zinc-500 leading-relaxed">
          <p>
            EuroWorkMatch is fully compliant with the General Data Protection Regulation (GDPR).
            We process your personal data only to the extent necessary to provide our services,
            and always on a lawful legal basis.
          </p>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Your Rights Under GDPR</h3>
            <div className="space-y-3">
              {[
                { right: "Access", desc: "Request a copy of all personal data we hold about you." },
                { right: "Rectification", desc: "Ask us to correct inaccurate or incomplete data." },
                { right: "Erasure", desc: 'Request deletion of your data ("right to be forgotten"), subject to legal retention requirements.' },
                { right: "Restriction", desc: "Ask us to limit processing of your data in certain circumstances." },
                { right: "Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Objection", desc: "Object to processing based on legitimate interest or for direct marketing." },
                { right: "Withdraw Consent", desc: "Where processing is based on consent, you may withdraw it at any time." },
              ].map(({ right, desc }) => (
                <div key={right} className="flex gap-3">
                  <span className="font-medium text-foreground shrink-0 w-36">{right}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Legal Bases We Use</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Contract performance</strong> — providing the service you signed up for</li>
              <li><strong className="text-foreground">Legitimate interest</strong> — improving the platform and preventing fraud</li>
              <li><strong className="text-foreground">Consent</strong> — where specifically requested</li>
              <li><strong className="text-foreground">Legal obligation</strong> — tax and employment regulations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Data Storage</h3>
            <p>All personal data is stored on EU-based servers. We never transfer your data outside the EEA without adequate safeguards in place.</p>
          </div>

          <div className="bg-white/[0.03] rounded-xl p-4 border border-zinc-800">
            <p className="font-medium text-foreground mb-1">Exercise Your Rights</p>
            <p>
              To make a data request or lodge a complaint, contact us at{" "}
              <a href="mailto:support@euroworkmatch.com" className="text-blue-400 hover:underline">
                support@euroworkmatch.com
              </a>
              . We respond within 30 days. You also have the right to contact your national data protection authority.
            </p>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

// Cookie Policy Modal
export function CookiePolicyModal() {
  return (
    <Dialog>
      <DialogTrigger className={triggerClass}>Cookie Policy</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-zinc-200" />
            </div>
            <div>
              <DialogTitle>Cookie Policy</DialogTitle>
              <DialogDescription>How and why we use cookies on EuroWorkMatch</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="space-y-5 text-sm text-zinc-500 leading-relaxed">
          <p>
            EuroWorkMatch uses a minimal set of cookies to keep the platform running securely and to
            improve your experience. We do <strong className="text-foreground">not</strong> use
            advertising or cross-site tracking cookies.
          </p>

          <div className="space-y-4">
            {[
              {
                type: "Essential Cookies",
                required: true,
                color: "bg-zinc-800 text-zinc-300",
                items: [
                  "Authentication & session management — keeps you logged in securely",
                  "CSRF protection — prevents cross-site request forgery attacks",
                  "Load balancing — routes your requests efficiently",
                ],
                note: "These cookies are strictly necessary. The platform cannot function without them and they cannot be disabled.",
              },
              {
                type: "Preference Cookies",
                required: false,
                color: "bg-zinc-800 text-zinc-400",
                items: [
                  "Language settings — stores your selected language",
                  "Display preferences — remembers your layout choices",
                ],
                note: "Stored locally in your browser. Removing them resets your display preferences.",
              },
              {
                type: "Analytics Cookies",
                required: false,
                color: "bg-zinc-800 text-zinc-500",
                items: [
                  "Page visits and feature usage — helps us understand what's useful",
                  "Error tracking — lets us find and fix bugs faster",
                ],
                note: "All analytics data is anonymised. We do not track you across other websites.",
              },
            ].map(({ type, required, color, items, note }) => (
              <div key={type} className="rounded-xl border border-zinc-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-zinc-800">
                  <span className="font-semibold text-foreground">{type}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
                    {required ? "Required" : "Optional"}
                  </span>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  <ul className="list-disc list-inside space-y-1">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="text-xs text-zinc-600 mt-2 italic">{note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.03] rounded-xl p-4 border border-zinc-800">
            <p className="font-medium text-foreground mb-1">Managing Cookies</p>
            <p>
              You can manage or delete cookies through your browser settings at any time. Note that
              disabling essential cookies will prevent you from using the platform. For questions,
              contact{" "}
              <a href="mailto:support@euroworkmatch.com" className="text-blue-400 hover:underline">
                support@euroworkmatch.com
              </a>
              .
            </p>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

// Contact Modal
export function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger className={triggerClass}>Contact</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-zinc-200" />
            </div>
            <div>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>Get in touch with the EuroWorkMatch team</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="space-y-4 text-sm text-zinc-500">
          <p>
            We&apos;re a small team building EuroWorkMatch. Reach out and
            we&apos;ll get back to you promptly.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:support@euroworkmatch.com"
              className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 hover:bg-white/[0.02] transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
              </div>
              <div>
                <div className="font-medium text-foreground">Support</div>
                <div className="text-blue-400 text-xs mt-0.5">support@euroworkmatch.com</div>
                <div className="text-xs text-zinc-500 mt-1">For any questions, issues, or feedback</div>
              </div>
            </a>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

// Pricing Modal
export function PricingModal() {
  const workerPlan = {
    name: "Workers",
    price: "Free",
    sub: "Always, forever",
    Icon: Globe,
    features: [
      "Create & manage your profile",
      "Upload certifications & documents",
      "Swipe on job listings",
      "Mutual matching with employers",
      "In-app messaging after match",
      "Profile completeness score",
      "Job alerts for new listings",
    ],
  };

  const employerPlans = [
    {
      name: "Basic",
      price: "\u20AC49",
      sub: "per month",
      Icon: Zap,
      accent: "text-foreground border-zinc-800 bg-[#1C1C22]",
      badge: null,
      features: [
        "Up to 5 active job listings",
        "Browse worker profiles (limited)",
        "View full profiles + documents",
        "Message matched workers",
        "Standard analytics",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "\u20AC99",
      sub: "per month",
      Icon: Crown,
      accent: "text-zinc-200 border-zinc-600 bg-zinc-800/50",
      badge: "Most Popular",
      features: [
        "Up to 20 active job listings",
        "Browse worker profiles (unlimited)",
        "View full profiles + documents",
        "Message matched workers",
        "Detailed analytics & reports",
        "Saved candidate lists",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "\u20AC249",
      sub: "per month",
      Icon: Building2,
      accent: "text-foreground border-zinc-800 bg-[#1C1C22]",
      badge: null,
      features: [
        "Unlimited job listings",
        "Browse worker profiles (unlimited)",
        "View full profiles + documents",
        "Message matched workers",
        "Dedicated account manager",
        "Custom integrations & API access",
        "24/7 premium support",
      ],
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className={triggerClass}>Pricing</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Pricing</DialogTitle>
          <DialogDescription>
            Free for workers. Employers pay a monthly subscription to browse, unlock, and contact candidates.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          {/* Workers plan */}
          <div className="relative rounded-xl border p-5 flex flex-col text-green-400 border-green-500/20 bg-green-500/5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <workerPlan.Icon className="w-4 h-4" />
              <span className="font-semibold text-sm">{workerPlan.name}</span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">{workerPlan.price}</span>
              <span className="text-xs text-zinc-500 ml-1">{workerPlan.sub}</span>
            </div>
            <ul className="space-y-2 mb-5 flex-1">
              {workerPlan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
                  <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.euroworkmatch.com/auth?role=worker"
              className="block text-center text-xs font-semibold py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors cursor-pointer"
            >
              Join Free
            </a>
          </div>

          {/* Employer plans group */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">For Employers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {employerPlans.map(({ name, price, sub, Icon, accent, badge, features }) => (
                <div
                  key={name}
                  className={`relative rounded-xl border p-5 flex flex-col ${accent}`}
                >
                  {badge && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-0.5 rounded-full bg-zinc-200 text-zinc-900">
                      {badge}
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4" />
                    <span className="font-semibold text-sm">{name}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{price}</span>
                    <span className="text-xs text-zinc-500 ml-1">{sub}</span>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
                        <Check className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a
              href="https://app.euroworkmatch.com/auth?role=employer"
              className="block text-center text-sm font-semibold py-3 px-6 mt-5 rounded-lg bg-zinc-50 text-zinc-900 hover:bg-white transition-colors cursor-pointer"
            >
              Get Started as an Employer
            </a>
          </div>

          <p className="text-xs text-zinc-600 text-center mt-4">
            All employer plans billed monthly. Cancel anytime. Payments processed securely via Stripe.
          </p>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

// About Modal
export function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger className={triggerClass}>About Us</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-zinc-200" />
            </div>
            <div>
              <DialogTitle>About EuroWorkMatch</DialogTitle>
              <DialogDescription>Connecting skilled workers from India with European employers</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="space-y-5 text-sm text-zinc-500 leading-relaxed">
          <p>
            EuroWorkMatch is a digital matching platform built to address one of Europe&apos;s
            biggest challenges: a growing shortage of skilled workers across sectors like
            logistics, construction, agriculture, and engineering.
          </p>
          <p>
            We connect pre-screened professionals from India — where there is a deep pool of
            qualified, motivated talent — with European employers who need them. Both sides
            swipe, match, and connect directly. No agencies, no middlemen, no cold outreach.
          </p>

          <div>
            <h3 className="font-semibold text-foreground mb-3">How We&apos;re Different</h3>
            <div className="space-y-2">
              {[
                ["Mutual matching", "A connection only forms when both sides are interested — no spam, no wasted time."],
                ["No staffing agency", "We facilitate introductions. Employment decisions and contracts are between workers and employers directly."],
                ["Free for workers", "Workers always use the platform at no cost. Employers pay to unlock and contact candidates."],
                ["Document-verified profiles", "Workers upload certifications and qualifications. Employers see real proof, not just claims."],
                ["EU compliant", "GDPR-compliant, EU-based servers, and transparent terms with no hidden clauses."],
              ].map(([title, desc]) => (
                <div key={title as string} className="flex gap-3 p-3 rounded-lg bg-white/[0.03]">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{title}</span>
                    <span className="text-zinc-500"> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] rounded-xl p-4 border border-zinc-800">
            <p className="font-medium text-foreground mb-1">Get in Touch</p>
            <p>
              We&apos;re always open to feedback, partnerships, and collaboration. Reach us at{" "}
              <a href="mailto:support@euroworkmatch.com" className="text-blue-400 hover:underline">
                support@euroworkmatch.com
              </a>
            </p>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
