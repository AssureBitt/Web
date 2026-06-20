"use client";

import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { ServiceCard } from "./ServiceCard";
import { 
  MonitorSmartphone, 
  Code2, 
  LayoutTemplate, 
  AppWindow, 
  Database, 
  MousePointerClick, 
  Gauge, 
  Figma 
} from "lucide-react";

const services = [
  {
    title: "Custom Business Websites",
    description: "We build tailored websites designed around your business goals, ensuring flexibility, performance, and scalability.",
    Icon: MonitorSmartphone,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress solutions with clean architecture, ACF integration, and optimized performance.",
    Icon: Code2,
  },
  {
    title: "Frontend Development",
    description: "Modern frontend development using React, Next.js, and scalable component-based architecture.",
    Icon: LayoutTemplate,
  },
  {
    title: "Web Applications",
    description: "Performance-driven web apps built for reliability, speed, and user experience.",
    Icon: AppWindow,
  },
  {
    title: "CMS-Based Solutions",
    description: "Flexible content management systems that allow easy updates and scalability.",
    Icon: Database,
  },
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages optimized for performance and user engagement.",
    Icon: MousePointerClick,
  },
  {
    title: "Website Optimization",
    description: "Improve speed, SEO, and overall performance of existing websites.",
    Icon: Gauge,
  },
  {
    title: "Figma to Development",
    description: "Pixel-perfect implementation of Figma designs into responsive, production-ready websites.",
    Icon: Figma,
  },
];

export const ServicesOverview = () => {
  return (
    <SectionWrapper className="bg-soft-gray/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6">
          Our Services
        </h2>
        <p className="text-xl text-muted-text max-w-2xl mx-auto">
          Comprehensive digital solutions to elevate your online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
