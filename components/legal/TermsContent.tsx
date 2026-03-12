"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "accounts", title: "3. Account Responsibilities" },
  { id: "platform", title: "4. How the Platform Works" },
  { id: "payments", title: "5. Payments & Subscriptions" },
  { id: "conduct", title: "6. Prohibited Conduct" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "termination", title: "8. Termination" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "governing", title: "10. Governing Law" },
  { id: "changes", title: "11. Changes to Terms" },
  { id: "contact", title: "12. Contact" },
];

const TermsContent = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Euro<span className="text-accent">WorkMatch</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
        {/* Sticky TOC — desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <nav className="sticky top-24 space-y-1">
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-3 tracking-wider">
              Contents
            </p>
            {sections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                  active === id
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="flex-1 max-w-3xl prose prose-sm dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 9, 2026
          </p>

          <section id="acceptance">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the EuroWorkMatch platform
              (&ldquo;Platform&rdquo;), including our website, mobile
              applications, and related services, you agree to be bound by these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to
              these Terms, you must not use the Platform.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              EuroWorkMatch. Your continued use of the Platform after any
              modifications to these Terms constitutes acceptance of those
              changes.
            </p>
          </section>

          <section id="eligibility">
            <h2>2. Eligibility</h2>
            <p>To use the Platform, you must:</p>
            <ul>
              <li>Be at least 18 years of age;</li>
              <li>
                If registering as a <strong>worker</strong>, be a legitimate job
                seeker with the legal right to seek employment in the
                jurisdictions where you apply;
              </li>
              <li>
                If registering as an <strong>employer</strong>, be a duly
                registered business or authorised representative of one,
                operating in compliance with applicable employment and labour
                laws;
              </li>
              <li>
                Provide accurate, current, and complete registration information
                and keep it updated at all times.
              </li>
            </ul>
            <p>
              EuroWorkMatch reserves the right to refuse registration or suspend
              accounts that do not meet these criteria.
            </p>
          </section>

          <section id="accounts">
            <h2>3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              login credentials and for all activity that occurs under your
              account. You agree to immediately notify EuroWorkMatch of any
              unauthorised use of your account.
            </p>
            <p>
              Each individual or business may maintain only one active account.
              Creating multiple accounts to circumvent restrictions, bans, or
              subscription limits is prohibited.
            </p>
          </section>

          <section id="platform">
            <h2>4. How the Platform Works</h2>
            <p>
              EuroWorkMatch connects workers seeking cross-border employment
              opportunities within Europe with employers who have open positions.
              The Platform provides:
            </p>
            <ul>
              <li>
                <strong>Job Matching:</strong> Workers and employers can express
                interest in each other. When both parties indicate mutual
                interest, a match is created, enabling direct communication.
              </li>
              <li>
                <strong>Profile & Verification:</strong> Users can create
                detailed profiles. EuroWorkMatch may offer optional identity and
                document verification to enhance trust between parties.
              </li>
              <li>
                <strong>Messaging:</strong> Matched parties can communicate
                through the Platform&apos;s built-in messaging system.
              </li>
            </ul>
            <p>
              EuroWorkMatch acts solely as an intermediary. We do not employ
              workers, guarantee job placements, or endorse any employer. All
              employment decisions, contracts, and negotiations are between
              workers and employers directly.
            </p>
          </section>

          <section id="payments">
            <h2>5. Payments & Subscriptions</h2>
            <p>
              Certain features of the Platform are available through paid
              subscription plans. By subscribing, you agree to the pricing and
              payment terms presented at the time of purchase.
            </p>
            <ul>
              <li>
                Payments are processed securely through Stripe. EuroWorkMatch
                does not store your full payment card details.
              </li>
              <li>
                Subscriptions renew automatically at the end of each billing
                cycle unless cancelled before the renewal date.
              </li>
              <li>
                <strong>No refunds</strong> are provided once a billing cycle
                has started. You may cancel at any time, and your access will
                continue until the end of the current billing period.
              </li>
              <li>
                EuroWorkMatch reserves the right to change subscription pricing
                with 30 days&apos; prior notice to existing subscribers.
              </li>
            </ul>
          </section>

          <section id="conduct">
            <h2>6. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Create fake, misleading, or fraudulent profiles or job listings;
              </li>
              <li>
                Scrape, crawl, or use automated tools to extract data from the
                Platform without prior written consent;
              </li>
              <li>
                Post job listings that are illegal, discriminatory, or violate
                applicable employment laws in any jurisdiction;
              </li>
              <li>
                Harass, threaten, or abuse other users through messages or any
                other communication channel;
              </li>
              <li>
                Attempt to circumvent security measures, access restricted
                systems, or interfere with the Platform&apos;s operation;
              </li>
              <li>
                Use the Platform for any purpose unrelated to legitimate
                employment or recruitment;
              </li>
              <li>
                Misrepresent your identity, qualifications, or legal right to
                work or hire in a given jurisdiction.
              </li>
            </ul>
            <p>
              Violations may result in immediate suspension or permanent
              termination of your account, at EuroWorkMatch&apos;s sole
              discretion.
            </p>
          </section>

          <section id="ip">
            <h2>7. Intellectual Property</h2>
            <p>
              All content, design, software, trademarks, and other intellectual
              property on the Platform are owned by or licensed to EuroWorkMatch.
              You may not reproduce, distribute, modify, or create derivative
              works from any part of the Platform without our express written
              permission.
            </p>
            <p>
              Content you upload (such as profile information, resumes, and job
              descriptions) remains yours, but you grant EuroWorkMatch a
              non-exclusive, worldwide licence to use, display, and distribute
              it solely for the purpose of operating the Platform and providing
              our services.
            </p>
          </section>

          <section id="termination">
            <h2>8. Termination</h2>
            <p>
              You may close your account at any time through your account
              settings. EuroWorkMatch may suspend or terminate your account if
              you violate these Terms or engage in conduct that we reasonably
              believe is harmful to the Platform, other users, or third parties.
            </p>
            <p>
              Upon termination, your right to access the Platform ceases
              immediately. We may retain certain data as required by law or for
              legitimate business purposes, as described in our Privacy Policy.
            </p>
          </section>

          <section id="liability">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, EuroWorkMatch
              and its officers, directors, employees, and agents shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Platform.
            </p>
            <p>
              EuroWorkMatch does not guarantee the accuracy of information
              provided by users, the outcome of any employment relationship, or
              uninterrupted access to the Platform. The Platform is provided
              &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
            </p>
          </section>

          <section id="governing">
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the European Union and, where applicable, the national
              laws of the member state in which EuroWorkMatch is established.
              Any disputes arising from these Terms shall be subject to the
              exclusive jurisdiction of the competent courts in that
              jurisdiction.
            </p>
            <p>
              For users located outside the EU, local consumer protection laws
              may apply to the extent they cannot be waived by contract.
            </p>
          </section>

          <section id="changes">
            <h2>11. Changes to Terms</h2>
            <p>
              EuroWorkMatch may update these Terms from time to time. We will
              notify you of material changes through the Platform or via email.
              Your continued use of the Platform after changes take effect
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section id="contact">
            <h2>12. Contact</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              <strong>Email:</strong> legal@euroworkmatch.com
              <br />
              <strong>Address:</strong> EuroWorkMatch, Legal Department, EU
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsContent;
