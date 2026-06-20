"use client";

import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const WhyChooseUs = () => {
  const points = [
    { title: "Structured Development Process" },
    { title: "Performance-First Mindset" },
    { title: "Clear Communication" },
    { title: "Reliable Delivery" },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6">Why Assure Bit</h2>
          <p className="text-xl text-muted-text mb-12">
            We focus on long-term value instead of short-term fixes. Our work is structured, scalable, and aligned with real business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-soft-gray/50 p-6 rounded-2xl flex items-center justify-center border border-soft-gray hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-deep-slate">{pt.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link href="#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-deep-slate text-white font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl"
            >
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
