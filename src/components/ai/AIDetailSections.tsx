"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface AIDetailSectionProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  badge?: string;
}

const AIDetailSection = ({
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  reversed = false,
  badge,
}: AIDetailSectionProps) => (
  <div className="py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`space-y-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        {badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            {badge}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate leading-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-text leading-relaxed">{description}</p>
        <ul className="space-y-3 pt-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-deep-slate font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className={`relative h-[380px] lg:h-[480px] w-full rounded-[2rem] overflow-hidden group ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/10 to-transparent" />
      </motion.div>
    </div>
  </div>
);

export const AIDetailSections = () => {
  const sections = [
    {
      badge: "AI Automation",
      title: "AI Workflow Automation",
      description:
        "We design and implement AI-driven automation systems that integrate directly with your business processes. From data collection to complex decision-making, our AI workflow automation services eliminate manual bottlenecks and increase operational efficiency.",
      points: [
        "End-to-end workflow mapping and automation design",
        "Integration with existing tools and platforms",
        "Intelligent exception handling and monitoring",
        "Scalable architecture for growing data volumes",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
      imageAlt: "AI workflow automation abstract data flow",
      reversed: false,
    },
    {
      badge: "Custom AI Agents",
      title: "Intelligent Agents That Work For You",
      description:
        "Our custom AI agents are purpose-built autonomous systems designed to perform complex, multi-step tasks on your behalf. Whether you need an agent to research, analyze, generate reports, or interact with customers, we build reliable AI agents that align with your goals.",
      points: [
        "Goal-oriented agent design with custom behavior logic",
        "Real-time decision making based on data inputs",
        "Multi-agent coordination for enterprise workflows",
        "Continuous learning and improvement capabilities",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
      imageAlt: "Futuristic AI concept abstract technology",
      reversed: true,
    },
    {
      badge: "Chatbot Development",
      title: "Custom Chatbot Integration",
      description:
        "We build conversational AI chatbots that go beyond simple FAQ responses. Our chatbots understand your business context, learn from interactions, and deliver accurate responses across every customer touchpoint — from websites to internal tools.",
      points: [
        "Natural language understanding (NLU) powered responses",
        "Integration with CRM and support platforms",
        "Multi-channel deployment (web, app, Slack, Teams)",
        "Continuous training on your unique business data",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      imageAlt: "AI chatbot interface digital conversation",
      reversed: false,
    },
    {
      badge: "Data & Analytics",
      title: "AI Analytics Dashboards",
      description:
        "Transform raw data into clear, actionable intelligence. We build AI-powered analytics dashboards that surface patterns, predict trends, and provide your team with decision-support tools that are intuitive and business-aligned.",
      points: [
        "Real-time data visualization and reporting",
        "Predictive analytics and trend forecasting",
        "Custom KPI tracking aligned to business objectives",
        "Automated anomaly detection and alerting",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      imageAlt: "Analytics data dashboard visualization",
      reversed: true,
    },
  ];

  return (
    <section className="w-full bg-white border-t border-soft-gray/60">
      {sections.map((section, index) => (
        <div
          key={index}
          className={index % 2 !== 0 ? "bg-soft-gray/20" : "bg-white"}
        >
          <AIDetailSection {...section} />
        </div>
      ))}
    </section>
  );
};
