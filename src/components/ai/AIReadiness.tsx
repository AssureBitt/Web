"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const AIReadiness = () => {
  const checkItems = [
    "Identify which processes are ready for AI",
    "Evaluate your data quality and infrastructure",
    "Get a prioritized AI opportunity roadmap",
    "Understand ROI potential before committing",
  ];

  return (
    <section className="py-24 px-6 bg-soft-gray/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            Free Evaluation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate leading-tight">
            AI Readiness <span className="text-primary">Assessment</span>
          </h2>
          <p className="text-lg text-muted-text leading-relaxed">
            Not sure where to start with AI? Our AI Readiness Assessment gives you a clear picture of where your business stands and exactly which AI solutions will have the greatest impact on your operations.
          </p>

          <p className="text-muted-text leading-relaxed">
            We evaluate your current technology stack, data maturity, workflows, and team capabilities to produce a structured roadmap for AI adoption tailored specifically to your business.
          </p>

          <ul className="space-y-3">
            {checkItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-deep-slate font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Link href="#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate text-white font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl mt-2"
            >
              Request an Assessment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-[400px] lg:h-[520px] w-full rounded-[2rem] overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="AI data visualization analytics dashboard abstract"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
