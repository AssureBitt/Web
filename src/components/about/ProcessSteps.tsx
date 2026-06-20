"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Step {
  title: string;
  description: string;
  number: string;
}

const defaultSteps: Step[] = [
  {
    title: "Understand First",
    description: "We begin by understanding your business goals, audience, and technical requirements.",
    number: "01",
  },
  {
    title: "Plan with Purpose",
    description: "We create a clear structure that ensures scalability and prevents future technical challenges.",
    number: "02",
  },
  {
    title: "Build with Precision",
    description: "Our development focuses on clean, maintainable, performance-optimized code.",
    number: "03",
  },
  {
    title: "Test Thoroughly",
    description: "We validate responsiveness, usability, and functionality before delivery.",
    number: "04",
  },
  {
    title: "Improve Continuously",
    description: "We support ongoing improvements as your business evolves.",
    number: "05",
  },
];

interface ProcessStepsProps {
  title?: string;
  description?: string;
  steps?: Step[];
}

export const ProcessSteps = ({
  title = "How We Work",
  description = "A structured approach to ensure quality, efficiency, and success.",
  steps = defaultSteps,
}: ProcessStepsProps) => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-muted-text max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
            >
              {/* Line connecting steps */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[3.5rem] top-16 bottom-[-3rem] w-px bg-soft-gray group-hover:bg-primary/50 transition-colors" />
              )}

              <div className="flex-shrink-0 w-24 h-24 rounded-[2rem] bg-soft-gray flex items-center justify-center text-2xl font-bold text-primary shadow-premium z-10">
                {step.number}
              </div>
              <div className="flex-1 bg-white p-8 rounded-[2rem] shadow-sm border border-soft-gray/50 hover:shadow-xl transition-shadow group-hover:border-primary/20">
                <h3 className="text-2xl font-bold text-deep-slate mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-text max-w-2xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
