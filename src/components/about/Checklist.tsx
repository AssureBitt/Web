"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const lessons = [
  "Performance directly impacts user trust",
  "Clean structure prevents future development challenges",
  "Simple solutions are often more reliable",
  "Clear communication reduces project risks",
  "Scalable architecture supports long-term growth",
  "Consistency leads to dependable outcomes",
];

export const Checklist = () => {
  return (
    <section className="py-24 px-6 relative bg-soft-gray/50 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-slate mb-6"
          >
            Hard-Won Lessons
          </motion.h2>
          <p className="text-xl text-muted-text max-w-2xl mx-auto">
            Insights drawn from years of experience building resilient digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-soft-gray group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Sparkles className="text-primary w-6 h-6" />
              </div>
              <p className="text-lg font-medium text-deep-slate flex-1 pt-2.5">
                {lesson}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-text mb-6">
            Ready to apply these principles to your project?
          </p>
          <Link href="#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-deep-slate text-white font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl"
            >
              Let&apos;s Work Together
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] -z-10" />
    </section>
  );
};
