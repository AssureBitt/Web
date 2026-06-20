"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const TwoColumnSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
            The Name
          </h2>
          <div className="space-y-4 text-lg text-muted-text leading-relaxed">
            <p>
              Assure Bit represents steady progress and meaningful impact. We move forward with consistency, shaping our path over time. We believe great digital products are built in the same way — through thoughtful decisions, clear direction, and continuous improvement.
            </p>
            <p>
              Our name reflects our approach: calm, focused, and committed to delivering lasting value rather than short-term solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80"
            alt="Small river stream nature minimal"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};
