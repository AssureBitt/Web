"use client";

import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Industries = () => {
  const industries = ["Startups", "Growing Businesses", "Agencies", "Enterprise Teams"];

  return (
    <SectionWrapper className="bg-soft-gray/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-deep-slate mb-6">Who We Work With</h2>
          <p className="text-lg text-muted-text mb-8">
            We partner with ambitious teams to deliver high-quality digital products. Whether you are launching a new startup, scaling an existing product, or acting as an agency partner, our robust architecture ensures you meet your goals efficiently.
          </p>
          <Link href="#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-deep-slate text-white font-semibold text-sm hover:bg-primary transition-all shadow-md"
            >
              Work With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="grid grid-cols-2 gap-4"
        >
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl text-center border border-soft-gray/50 hover:border-primary/30 hover:shadow-lg transition-all">
              <span className="font-bold text-deep-slate text-lg">{ind}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
