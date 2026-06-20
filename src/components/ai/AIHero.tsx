"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AIHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary"
          >
            <Sparkles size={14} />
            AI-Powered Solutions
          </motion.span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            AI Solutions Designed for{" "}
            <span className="text-primary">Real Business</span> Impact
          </h1>

          <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-xl">
            We build practical AI solutions that automate workflows, improve efficiency, and help businesses make better decisions using structured and scalable artificial intelligence systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-lg hover:shadow-xl"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#ai-services" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-soft-gray font-semibold text-deep-slate hover:border-primary/40 transition-all shadow-sm"
              >
                View Services
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[420px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80"
              alt="AI analytics dashboard modern technology workspace"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
            />
          </motion.div>
          {/* subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
