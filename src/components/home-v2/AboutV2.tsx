"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const AboutV2 = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate leading-tight">
                We're not a vendor. <br />
                <span className="text-muted-text/70">We're your co-builder.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-muted-text leading-relaxed"
            >
              <p>
                We started Assure Bit because we were tired of seeing great ideas get lost in translation, handed off to teams who'd never really listened, built by people who'd never really cared.
              </p>
              <p>
                So we built something different. A firm that sits across the table from you (not behind a ticket system), takes the time to truly understand your vision, and then executes it with the kind of ownership that only comes when you genuinely care about the outcome.
              </p>
              <p>
                We work with everyone from solo creators to scaling enterprises, because a great idea doesn't come with a company size requirement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-primary pl-8 py-4"
            >
              <p className="text-2xl md:text-3xl font-bold text-deep-slate italic leading-snug">
                "You dream it. We lose sleep over it (so you don't have to)."
              </p>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaborating on ideas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Soft gradient overlay to blend with the page */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
