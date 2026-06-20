"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const WhyAssureBit = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden group order-2 lg:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
            alt="Abstract flow lines technology"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
            Why Assure Bit
          </h2>
          <div className="space-y-4 text-lg text-muted-text leading-relaxed">
            <p>
              Technology and businesses are constantly evolving. We chose the name Assure Bit because it symbolizes adaptability, flow, and forward movement.
            </p>
            <p>
              We build digital solutions that grow with your business. Instead of creating rigid systems, we focus on flexible structures that allow your website or application to scale, adapt, and perform effectively as your needs evolve.
            </p>
            <p>
              Our goal is to create work that moves naturally with your business — reliable, structured, and built for long-term success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
