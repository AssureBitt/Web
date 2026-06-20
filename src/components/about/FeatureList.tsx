"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Custom Business Websites",
  "WordPress Development",
  "Frontend Development using modern technologies",
  "Performance-optimized web applications",
  "CMS-based websites",
  "Conversion-focused landing pages",
  "Scalable website architecture",
  "Figma to responsive website implementation",
];

export const FeatureList = () => {
  return (
    <section className="py-24 px-6 bg-deep-slate text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What We Build</h2>
            <p className="text-xl text-soft-gray/80 max-w-xl">
              We specialize in creating high-quality digital products tailored to your specific requirements.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 text-lg text-soft-gray/90"
              >
                <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
            alt="Responsive devices mockup ui design workspace"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/80 via-transparent to-transparent mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  );
};
