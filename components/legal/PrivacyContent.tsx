"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";

const sections = [
  { id: "data-collect", title: "1. Data We Collect" },
  { id: "how-use", title: "2. How We Use It" },
  { id: "who-share", title: "3. Who We Share It With" },
  { id: "retention", title: "4. Data Retention" },
  { id: "rights", title: "5. Your Rights" },
  { id: "cookies", title: "6. Cookies" },
  { id: "security", title: "7. Security" },
  { id: "contact", title: "8. Contact / Data Controller" },
];

const PrivacyContent = () => {
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

        <article className="flex-1 max-w-3xl prose prose-sm dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 9, 2026
          </p>

          <p>
            EuroWorkMatch (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) is committed to protecting your personal data.
            This Privacy Policy explains what information we collect, how we use
            it, and your rights under applicable data protection regulations,
            including the General Data Protection Regulation (GDPR).
          </p>

          <section id="data-collect">
            <h2>1. Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address, phone
                number, password (hashed), and profile photo when you register.
              </li>
              <li>
                <strong>Profile Data:</strong> For workers — skills, experience,
                availability, hourly rate preferences, resume/CV, preferred work
                countries, and location. For employers — company name, industry,
                size, headquarters location, website, benefits offered, and
                company description.
              </li>
              <li>
                <strong>Verification Documents:</strong> Identity documents
                (passport, ID card), work permits, certifications, and diplomas
                submitted for profile verification.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, match
                and swipe interactions, messages sent, and session timestamps.
              </li>
              <li>
                <strong>Payment Data:</strong> When you subscribe to a paid
                plan, Stripe processes your payment details directly. We receive
                and store only your Stripe customer ID, subscription status, and
                billing period — never your full card number.
              </li>
              <li>
                <strong>Device & Technical Data:</strong> Browser type,
                operating system, IP address, and device identifiers for
                security and analytics purposes.
              </li>
            </ul>
          </section>

          <section id="how-use">
            <h2>2. How We Use It</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Create and manage your account on the Platform;</li>
              <li>
                Match workers with relevant job listings and employers with
                suitable candidates;
              </li>
              <li>Enable communication between matched parties;</li>
              <li>Process subscription payments and manage billing;</li>
              <li>
                Verify identities and documents to build trust between users;
              </li>
              <li>
                Send notifications about matches, messages, application updates,
                and job alerts;
              </li>
              <li>
                Improve the Platform through analytics and usage patterns;
              </li>
              <li>
                Comply with legal obligations and enforce our Terms of Service.
              </li>
            </ul>
            <p>
              We process your data on the legal bases of contract performance
              (providing the service you signed up for), legitimate interest
              (improving the Platform and preventing fraud), consent (where
              specifically requested), and legal obligation (tax and employment
              regulations).
            </p>
          </section>

          <section id="who-share">
            <h2>3. Who We Share It With</h2>
            <p>We share your data only in the following circumstances:</p>
            <ul>
              <li>
                <strong>With matched users:</strong> When a mutual match occurs,
                workers and employers can see each other&apos;s profile
                information and communicate. Workers see employer company
                details; employers see worker profiles, skills, and experience.
              </li>
              <li>
                <strong>With Stripe:</strong> For processing subscription
                payments. Stripe operates as an independent data controller for
                payment data. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>With service providers:</strong> We use cloud hosting
                and infrastructure providers located within the EU to store and
                process data.
              </li>
              <li>
                <strong>When required by law:</strong> We may disclose data to
                comply with legal obligations, court orders, or law enforcement
                requests.
              </li>
            </ul>
            <p className="font-semibold text-foreground">
              We never sell your personal data to third parties. We do not share
              your data with advertisers.
            </p>
          </section>

          <section id="retention">
            <h2>4. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active
              or as needed to provide our services. After you delete your
              account:
            </p>
            <ul>
              <li>Profile data is deleted within 30 days;</li>
              <li>Messages are anonymised within 30 days;</li>
              <li>
                Verification documents are permanently deleted within 30 days;
              </li>
              <li>
                Payment records are retained for up to 7 years as required by
                tax and financial regulations;
              </li>
              <li>
                Anonymised, aggregated analytics data may be retained
                indefinitely.
              </li>
            </ul>
          </section>

          <section id="rights">
            <h2>5. Your Rights</h2>
            <p>
              Under the GDPR and applicable data protection laws, you have the
              following rights:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of all personal data we
                hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> Ask us to correct inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data
                (&ldquo;right to be forgotten&rdquo;), subject to legal
                retention requirements.
              </li>
              <li>
                <strong>Restriction:</strong> Ask us to limit processing of your
                data in certain circumstances.
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on
                legitimate interest or for direct marketing purposes.
              </li>
              <li>
                <strong>Withdraw consent:</strong> Where processing is based on
                consent, you may withdraw it at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <strong>privacy@euroworkmatch.com</strong>. We will respond within
              30 days. You also have the right to lodge a complaint with your
              local data protection authority.
            </p>
          </section>

          <section id="cookies">
            <h2>6. Cookies</h2>
            <p>EuroWorkMatch uses the following types of cookies:</p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for authentication,
                session management, and security. These cannot be disabled.
              </li>
              <li>
                <strong>Preference cookies:</strong> Store your language and
                theme preferences for a consistent experience.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how users
                interact with the Platform so we can improve it. These are
                anonymised and do not track you across other websites.
              </li>
            </ul>
            <p>
              We do not use advertising or tracking cookies. You can manage
              cookie preferences through your browser settings.
            </p>
          </section>

          <section id="security">
            <h2>7. Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including:
            </p>
            <ul>
              <li>Encryption in transit (TLS/HTTPS) and at rest;</li>
              <li>
                Row-Level Security on our database to ensure users can only
                access their own data;
              </li>
              <li>Regular security audits and vulnerability scanning;</li>
              <li>
                Secure authentication with password hashing and optional social
                login;
              </li>
              <li>EU-based data storage and processing infrastructure.</li>
            </ul>
            <p>
              While we take every reasonable precaution, no system is completely
              secure. If you suspect a security breach, please contact us
              immediately at <strong>security@euroworkmatch.com</strong>.
            </p>
          </section>

          <section id="contact">
            <h2>8. Contact / Data Controller</h2>
            <p>
              EuroWorkMatch acts as the data controller for the personal data
              processed through the Platform.
            </p>
            <p>
              <strong>Data Protection Officer:</strong>{" "}
              privacy@euroworkmatch.com
              <br />
              <strong>General enquiries:</strong> support@euroworkmatch.com
              <br />
              <strong>Address:</strong> EuroWorkMatch, Data Protection Office,
              EU
            </p>
            <p>
              If you are unsatisfied with our response to a privacy concern, you
              have the right to file a complaint with your national data
              protection supervisory authority.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyContent;
