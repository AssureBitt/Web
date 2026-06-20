"use client";

import React from "react";
import { motion } from "framer-motion";

export const CenteredContent = () => {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-soft-gray border border-white/50 text-sm font-medium text-primary shadow-sm">
            Our Approach
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate leading-tight">
            Built for What Your Business Needs
          </h2>

          <div className="space-y-6 text-xl text-muted-text max-w-3xl mx-auto leading-relaxed">
            <p>
              Every business has unique goals and challenges. We focus on building solutions aligned with real business needs rather than following trends that do not create value.
            </p>
            <p>
              Our work is designed to support long-term growth, improve performance, and create a reliable digital foundation. Whether the requirement is flexibility, scalability, or maintainability, we build with practical outcomes in mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
