"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              We're not a vendor.
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deep-slate leading-none">
              We're your <span className="text-primary">co-builder</span>.
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-text leading-relaxed">
            <p className="font-semibold text-deep-slate">
              We started Assurebit because we were tired of seeing great ideas get lost in translation, handed off to teams who'd never really listened, built by people who'd never really cared.
            </p>
            <p>
              So we built something different. A firm that sits across the table from you (not behind a ticket system), takes the time to truly understand your vision, and then executes it with the kind of ownership that only comes when you genuinely care about the outcome.
            </p>
            <p>
              We work with everyone from solo creators to scaling enterprises, because a great idea doesn't come with a company size requirement.
            </p>
          </div>
        </motion.div>

        {/* Right: Beautiful Image Panel */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[450px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden group shadow-premium"
        >
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 rounded-[2.5rem] transition-opacity duration-500 group-hover:opacity-0" />
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Collaborative workspace sitting across the table"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>

      {/* Subtle Background Blobs for Visual Interest */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-light-blue/20 rounded-full blur-[120px] -z-10" />
    </section>
  );
};
