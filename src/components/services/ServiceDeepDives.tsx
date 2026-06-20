"use client";

import React from "react";
import { ServiceDetailSection } from "./ServiceDetailSection";

export const ServiceDeepDives = () => {
  const details = [
    {
      title: "Custom Website Development",
      description: "We create websites tailored specifically to your business requirements. Our approach ensures clean structure, scalability, and long-term maintainability.",
      points: [
        "Fully custom design & development",
        "Scalable architecture",
        "SEO-friendly structure",
        "Performance optimized"
      ],
      imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
      imageAlt: "Responsive layout screens",
      reversed: false,
    },
    {
      title: "WordPress Development",
      description: "We build scalable WordPress solutions using modern development practices, ensuring flexibility and ease of content management.",
      points: [
        "ACF-based flexible content",
        "Custom themes",
        "Performance optimization",
        "Clean backend structure"
      ],
      imageSrc: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80",
      imageAlt: "WordPress development workspace",
      reversed: true,
    },
    {
      title: "Frontend Development",
      description: "We develop modern interfaces using React and Next.js, focusing on performance, accessibility, and maintainability.",
      points: [
        "Component-based architecture",
        "Clean and reusable code",
        "Animation integration (GSAP / Framer)",
        "Mobile-first responsive design"
      ],
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
      imageAlt: "Frontend code React Nextjs",
      reversed: false,
    },
    {
      title: "Performance Optimization",
      description: "We improve existing websites by optimizing speed, structure, and overall performance.",
      points: [
        "Core Web Vitals improvement",
        "Lazy loading & code splitting",
        "Asset optimization",
        "Performance audits"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      imageAlt: "Performance graph data analytics",
      reversed: true,
    }
  ];

  return (
    <section className="w-full bg-white py-12 border-t border-soft-gray/50">
      <div className="flex flex-col gap-8">
        {details.map((detail, index) => (
          <ServiceDetailSection key={index} {...detail} />
        ))}
      </div>
    </section>
  );
};
