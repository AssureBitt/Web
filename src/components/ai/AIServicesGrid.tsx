"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  Workflow,
  MessageSquareCode,
  Plug2,
  BarChart3,
  BookOpenCheck,
  Camera,
  Clapperboard,
  ClipboardCheck,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface AIServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

const AIServiceCard = ({ title, description, Icon, index }: AIServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group bg-white p-8 rounded-3xl border border-soft-gray hover:border-primary/30 hover:shadow-xl transition-all flex flex-col h-full"
  >
    <div className="w-14 h-14 rounded-2xl bg-soft-gray flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon size={26} />
    </div>
    <h3 className="text-lg font-bold text-deep-slate mb-3 flex-grow">{title}</h3>
    <p className="text-muted-text text-sm leading-relaxed mb-6">{description}</p>
    <Link
      href="/#contact"
      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
    >
      Start a conversation <ArrowUpRight size={15} />
    </Link>
  </motion.div>
);

const aiServices = [
  {
    title: "Custom AI Agents",
    description: "Autonomous AI agents that perform complex tasks, gather data, and make decisions aligned with your business logic.",
    Icon: Bot,
  },
  {
    title: "AI Workflow Automation",
    description: "Streamline repetitive operations by integrating AI into your existing workflows, saving time and reducing human error.",
    Icon: Workflow,
  },
  {
    title: "Custom Chatbot Integration",
    description: "Build intelligent, context-aware chatbots for customer support, internal tools, and lead generation.",
    Icon: MessageSquareCode,
  },
  {
    title: "AI Legacy Integration",
    description: "Connect cutting-edge AI capabilities with your existing legacy systems without disrupting operations.",
    Icon: Plug2,
  },
  {
    title: "AI Analytics Dashboards",
    description: "Convert raw data into intelligent visual insights with AI-powered dashboards tailored to your KPIs.",
    Icon: BarChart3,
  },
  {
    title: "AI Knowledge Base",
    description: "Build smart knowledge systems that allow teams and customers to find accurate answers instantly.",
    Icon: BookOpenCheck,
  },
  {
    title: "AI Product Photography",
    description: "Generate stunning, consistent product visuals at scale using AI-driven image generation pipelines.",
    Icon: Camera,
  },
  {
    title: "AI Video Generation",
    description: "Create professional marketing and explainer videos automatically using AI content generation tools.",
    Icon: Clapperboard,
  },
  {
    title: "AI Readiness Assessment",
    description: "Evaluate your current technology stack and processes to identify where AI can deliver the highest business value.",
    Icon: ClipboardCheck,
  },
];

export const AIServicesGrid = () => {
  return (
    <section id="ai-services" className="py-24 px-6 bg-soft-gray/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">Our AI Services</h2>
          <p className="text-xl text-muted-text max-w-2xl mx-auto">
            Practical AI development services built for measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <AIServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
