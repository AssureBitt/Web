import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";

import { AIHero } from "@/components/ai/AIHero";
import { AIServicesGrid } from "@/components/ai/AIServicesGrid";
import { AIDetailSections } from "@/components/ai/AIDetailSections";
import { AIValueSection } from "@/components/ai/AIValueSection";
import { AIProcess } from "@/components/ai/AIProcess";
import { AIReadiness } from "@/components/ai/AIReadiness";

export const metadata: Metadata = {
  title: "AI Development Services | Assure Bit — AI Automation & Custom AI Solutions",
  description:
    "Assure Bit builds practical AI solutions including AI workflow automation, custom AI agents, chatbot development, and AI integration services designed to improve business efficiency and decision-making.",
  keywords: [
    "AI automation",
    "AI development services",
    "AI workflow automation",
    "custom AI solutions",
    "AI chatbot development",
    "AI integration services",
    "custom AI agents",
    "AI analytics dashboards",
  ],
  openGraph: {
    title: "AI Development Services | Assure Bit — AI Automation & Custom AI Solutions",
    description:
      "Practical AI solutions that automate workflows, improve efficiency, and help businesses make better decisions using scalable artificial intelligence systems.",
    url: "https://assurebit.com/ai",
    siteName: "Assure Bit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Assure Bit AI Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AIPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />

      <div className="pt-8">
        <AIHero />
      </div>

      <AIServicesGrid />
      <AIDetailSections />
      <AIValueSection />
      <AIProcess />
      <AIReadiness />

      {/* Global CTA — reused directly */}
      <Contact />

      <Footer />
    </main>
  );
}
