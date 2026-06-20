"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, RefreshCw, Layers, Brain, BarChart2, LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

const ValueCard = ({ title, description, Icon, index }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-center text-center space-y-4 group"
  >
    <div className="w-16 h-16 rounded-2xl bg-white border border-soft-gray shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-deep-slate">{title}</h3>
    <p className="text-muted-text text-sm leading-relaxed max-w-[220px]">{description}</p>
  </motion.div>
);

const values = [
  {
    title: "Efficiency",
    description: "Automate repetitive tasks and free your team to focus on higher-value work.",
    Icon: Zap,
  },
  {
    title: "Automation",
    description: "Build intelligent workflows that run continuously without manual intervention.",
    Icon: RefreshCw,
  },
  {
    title: "Scalability",
    description: "AI systems designed to handle growing data volumes and business complexity.",
    Icon: Layers,
  },
  {
    title: "Decision Support",
    description: "Surface insights that help leadership make faster and more informed decisions.",
    Icon: Brain,
  },
  {
    title: "Data Insights",
    description: "Convert unstructured data into structured intelligence your business can act on.",
    Icon: BarChart2,
  },
];

export const AIValueSection = () => {
  return (
    <section className="py-24 px-6 bg-soft-gray/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-slate">
            How AI Creates Value for Your Business
          </h2>
          <p className="text-lg text-muted-text max-w-xl mx-auto">
            The right AI strategy transforms your operations from reactive to proactive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {values.map((v, i) => (
            <ValueCard key={i} title={v.title} description={v.description} Icon={v.Icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
