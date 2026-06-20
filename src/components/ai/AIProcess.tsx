"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand Business Needs",
    description: "We begin with a deep-dive into your business, operations, and pain points to identify the most impactful AI opportunities.",
  },
  {
    number: "02",
    title: "Identify AI Opportunities",
    description: "We map your current workflows and data assets to pinpoint where AI automation and intelligence will deliver the most value.",
  },
  {
    number: "03",
    title: "Design Solution Architecture",
    description: "Our team designs a scalable, modular AI architecture tailored to your specific requirements and existing tech stack.",
  },
  {
    number: "04",
    title: "Develop AI Systems",
    description: "We build the AI solution with clean, maintainable code using modern frameworks, ensuring reliability and performance.",
  },
  {
    number: "05",
    title: "Test and Optimize",
    description: "Rigorous testing across real-world scenarios with continuous refinement to ensure accuracy, stability, and performance.",
  },
  {
    number: "06",
    title: "Deploy and Improve",
    description: "We deploy to production with monitoring in place, then continue iterating and improving based on real data and feedback.",
  },
];

export const AIProcess = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-soft-gray/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
            Our AI Implementation Process
          </h2>
          <p className="text-xl text-muted-text max-w-2xl mx-auto">
            A structured, transparent process that takes you from idea to a deployed AI solution.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[8%] right-[8%] h-px bg-soft-gray z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-soft-gray group-hover:border-primary flex items-center justify-center text-lg font-bold text-primary shadow-premium transition-colors mb-6">
                {step.number}
              </div>
              <h3 className="text-sm font-bold text-deep-slate mb-2 leading-tight">{step.title}</h3>
              <p className="text-xs text-muted-text leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-soft-gray" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start pl-4 pb-10 group relative"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white border-2 border-soft-gray group-hover:border-primary flex items-center justify-center text-xs font-bold text-primary z-10 relative transition-colors">
                {step.number}
              </div>
              <div className="pt-1 pb-2">
                <h3 className="text-base font-bold text-deep-slate mb-2">{step.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
