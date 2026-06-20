import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";

import { InnerPageHero } from "@/components/about/InnerPageHero";
import { ProcessSteps } from "@/components/about/ProcessSteps";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServiceDeepDives } from "@/components/services/ServiceDeepDives";
import { ValueImpact } from "@/components/services/ValueImpact";
import { Industries } from "@/components/services/Industries";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";

export const metadata: Metadata = {
  title: "Services | Assure Bit - Web Development & Optimization",
  description: "We design and develop high-performance digital solutions tailored to your business needs, focusing on scalability, maintainability, and long-term performance.",
  openGraph: {
    title: "Services | Assure Bit - Web Development & Optimization",
    description: "We design and develop high-performance digital solutions tailored to your business needs, focusing on scalability, maintainability, and long-term performance.",
    url: "https://assurebit.com/services",
    siteName: "Assure Bit",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const processSteps = [
    { title: "Understand", description: "Discover goals and analyze requirements.", number: "01" },
    { title: "Plan", description: "Design a robust and scalable architecture.", number: "02" },
    { title: "Build", description: "Develop with clean and optimized code.", number: "03" },
    { title: "Test", description: "Rigorous quality assurance and optimization.", number: "04" },
    { title: "Improve", description: "Iterate and maintain for long-term growth.", number: "05" },
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />
      
      <div className="pt-8">
        <InnerPageHero 
          badgeText="Our Services"
          titleBase={<>Services Built for Scalable Digital <span className="text-primary">Growth</span></>}
          description="We design and develop high-performance digital solutions tailored to your business needs. Our services focus on scalability, maintainability, and long-term performance — ensuring your digital presence evolves with your growth."
          buttonText="Start a Project"
          buttonLink="#contact"
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          imageAlt="Modern tech workspace with abstract digital flow"
        />
      </div>

      <ServicesOverview />
      <ServiceDeepDives />
      <ValueImpact />
      
      <ProcessSteps 
        title="Our Approach to Every Project"
        description="A streamlined process designed to deliver exceptional results."
        steps={processSteps}
      />

      <Industries />
      <WhyChooseUs />

      <Contact />
      <Footer />
    </main>
  );
}
