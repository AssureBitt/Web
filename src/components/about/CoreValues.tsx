"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize, ShieldCheck, UserCheck, MessageSquare, RefreshCw } from "lucide-react";

const values = [
  {
    title: "Clarity Over Complexity",
    description: "Simple, well-structured solutions are easier to maintain, scale, and improve.",
    icon: <Maximize className="text-primary w-8 h-8" />,
  },
  {
    title: "Quality First",
    description: "Performance, clean code, and reliability are part of every project we deliver.",
    icon: <ShieldCheck className="text-accent-blue w-8 h-8" />,
  },
  {
    title: "Ownership",
    description: "We take responsibility for the quality of our work and the outcomes it creates.",
    icon: <UserCheck className="text-light-blue w-8 h-8" />,
  },
  {
    title: "Transparency",
    description: "Clear communication builds trust and keeps projects aligned.",
    icon: <MessageSquare className="text-primary w-8 h-8" />,
  },
  {
    title: "Continuous Improvement",
    description: "We refine our skills, processes, and tools to deliver better results.",
    icon: <RefreshCw className="text-accent-blue w-8 h-8" />,
  },
];

export const CoreValues = () => {
  return (
    <section className="py-24 px-6 bg-soft-gray/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-slate mb-6"
          >
            Core Values
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] shadow-premium hover:shadow-xl transition-shadow border border-white/50 relative group"
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-gray flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-slate mb-4">
                {value.title}
              </h3>
              <p className="text-muted-text leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
