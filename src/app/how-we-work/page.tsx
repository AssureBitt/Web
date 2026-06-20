import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";
import { InnerPageHero } from "@/components/about/InnerPageHero";
import { HowWeWork } from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "How We Work | Assure Bit",
  description: "A structured, transparent, and collaborative process designed to deliver outstanding results.",
};

export default function HowWeWorkPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />

      <div className="pt-8">
        <InnerPageHero 
          badgeText="Our Process"
          titleBase={<>How We Work to Bring Your Ideas to <span className="text-primary">Life</span></>}
          description="We follow a systematic, user-focused roadmap to ensure every project is built to the highest quality, delivered on time, and completely aligned with your vision."
          buttonText="See Our Work"
          buttonLink="/case-studies"
          imageSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
          imageAlt="Collaborative design workshop session"
        />
      </div>

      <HowWeWork />

      <Contact />
      <Footer />
    </main>
  );
}
