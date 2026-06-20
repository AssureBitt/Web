import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";
import { InnerPageHero } from "@/components/about/InnerPageHero";
import { Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ServiceData {
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

const servicesMap: Record<string, ServiceData> = {
  "product-building": {
    title: "Product Building",
    badge: "SaaS & Apps",
    description: "From zero to launch and beyond. We take your product idea through every stage: strategy, design, development, and growth.",
    longDescription: "We help startup founders and established businesses turn ambitious ideas into reliable, user-friendly digital products. By focusing on scalable architectures, modern user interfaces, and agile workflows, we deliver MVPs that hit the market fast and scale seamlessly as user demand grows.",
    bullets: [
      "End-to-end SaaS product engineering",
      "MVP scoping, planning & strategy",
      "User research, wireframing & UI/UX prototyping",
      "Scalable infrastructure & database design",
      "Continuous deployment pipelines & analytics integration"
    ],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    imageAlt: "Digital dashboard showing SaaS metrics"
  },
  "software-web-development": {
    title: "Software & Web Development",
    badge: "Custom Engineering",
    description: "From robust backends to buttery-smooth frontends, we engineer digital products that work flawlessly and scale gracefully.",
    longDescription: "Our development team designs and builds high-performance, responsive websites and web applications tailored specifically to your needs. We utilize clean, modular, and well-tested code using state-of-the-art frameworks to deliver experiences that are both fast and maintainable.",
    bullets: [
      "Next.js & React custom web applications",
      "WordPress development with ACF & headless CMS setups",
      "Robust API development and third-party integrations",
      "Mobile-first responsive layouts and clean CSS designs",
      "Core Web Vitals and site speed optimization"
    ],
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    imageAlt: "Developer coding on a screen with multiple IDE windows"
  },
  "tech-consulting-strategy": {
    title: "Tech Consulting & Strategy",
    badge: "Technical Advisory",
    description: "Got a technical problem you can't quite define? Good. That's our favourite kind. We'll help you untangle the complexity.",
    longDescription: "We provide high-impact strategy and consulting services to align your business goals with the right technology decisions. Whether you are choosing a framework, auditing a legacy system, or trying to scale a database, we translate complex technical realities into clear business decisions.",
    bullets: [
      "Full-stack architecture and code quality audits",
      "Tech stack advisory & performance diagnostics",
      "Database scalability and cloud migration strategies",
      "Development process review and optimization",
      "Legacy system modernization roadmapping"
    ],
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    imageAlt: "Team working together collaborating in front of a laptop"
  },
  "design-branding": {
    title: "Design & Branding",
    badge: "Visual Identity",
    description: "Your brand is your first impression and your lasting one. We craft identities that are distinct, deliberate, and built to be remembered.",
    longDescription: "We design brands and user experiences that communicate trust, innovation, and value. Through visual storytelling, careful typography, and detailed design systems, we build memorable identities that stand out in crowded markets.",
    bullets: [
      "Custom brand identity design & logos",
      "High-fidelity UI/UX prototype designs (Figma)",
      "Design systems & digital brand guidelines",
      "Conversion-focused landing page layouts",
      "Interactive micro-animations & transitions"
    ],
    imageSrc: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80",
    imageAlt: "Creative branding sketches and design samples on a desk"
  }
};

export function generateStaticParams() {
  return [
    { slug: "product-building" },
    { slug: "software-web-development" },
    { slug: "tech-consulting-strategy" },
    { slug: "design-branding" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />

      <div className="pt-8">
        <InnerPageHero 
          badgeText={service.badge}
          titleBase={<>{service.title}</>}
          description={service.description}
          buttonText="Get in Touch"
          buttonLink="/contact"
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
        />
      </div>

      {/* Main Details Section */}
      <section className="py-24 px-6 relative bg-soft-gray/20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-slate">
              How We Deliver Value in {service.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-text leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          <div className="space-y-6 bg-white p-8 md:p-12 rounded-[2.5rem] border border-soft-gray shadow-premium">
            <h3 className="text-2xl font-bold text-deep-slate flex items-center gap-2">
              <Sparkles className="text-primary animate-pulse" size={20} />
              What We Do
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-base text-muted-text leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-deep-slate hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              Back to all services
            </Link>
          </div>

        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
