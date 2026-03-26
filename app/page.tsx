import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
import ExampleSection from "@/components/sections/ExampleSection";
import BusinessModelSection from "@/components/sections/BusinessModelSection";
import CTASection from "@/components/sections/CTASection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EuroWorkMatch",
  url: "https://euroworkmatch.com",
  logo: "https://euroworkmatch.com/workmatch-logo.svg",
  description:
    "EuroWorkMatch connects skilled workers from India with European companies through intelligent AI-powered matching.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@euroworkmatch.com",
    contactType: "customer support",
    areaServed: ["EU", "IN"],
    availableLanguage: ["English"],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EuroWorkMatch",
  url: "https://euroworkmatch.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://app.euroworkmatch.com/auth?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does EuroWorkMatch connect workers with European employers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EuroWorkMatch uses AI-powered matching to connect skilled professionals from India with European companies. Workers create a free profile, upload their CV and certificates, and the platform automatically translates documents and builds a professional profile. Employers browse profiles and pay to unlock full details or contact candidates directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is EuroWorkMatch free for workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EuroWorkMatch is completely free for workers. You can create a profile, upload documents, and receive employer introductions at no cost. Employers pay for access to full profiles and direct contact features.",
      },
    },
    {
      "@type": "Question",
      name: "Is EuroWorkMatch GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EuroWorkMatch is fully GDPR compliant. All data is stored on EU-based servers, we never sell personal data to third parties, and users have full rights to access, correct, or delete their data at any time.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does EuroWorkMatch cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EuroWorkMatch covers a wide range of industries facing labour shortages in Europe, including engineering, manufacturing, logistics, agriculture, healthcare, IT, and skilled trades. The AI matching system identifies workers based on specific skills, certifications, and experience.",
      },
    },
    {
      "@type": "Question",
      name: "Does EuroWorkMatch handle visa and relocation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EuroWorkMatch itself facilitates digital introductions between workers and employers. Partner agencies on the platform handle visa applications, housing, and relocation services. EuroWorkMatch acts solely as an intermediary platform — not a staffing agency.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AIFeaturesSection />
        <ExampleSection />
        <BusinessModelSection />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
