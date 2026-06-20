"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react"

const trustSignals = [
  {
    title: "2+ Years Experience",
    description: "Proven track record of delivering successful digital products.",
    icon: <CheckCircle2 className="text-primary" />,
  },
  {
    title: "High Quality Standards",
    description: "We follow industry best practices and maintain rigorous quality control.",
    icon: <ShieldCheck className="text-accent-blue" />,
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions built to grow with your business.",
    icon: <Zap className="text-light-blue" />,
  },
  {
    title: "Modern Tech Stack",
    description: "Using the latest technologies for optimal performance and security.",
    icon: <Layers className="text-soft-gray" />,
  },
]

export const TrustSignals = () => {
  return (
    <section className="py-24 px-6 bg-deep-slate text-white rounded-[4rem] mx-4 md:mx-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                {signal.icon}
              </div>
              <h3 className="text-xl font-bold">{signal.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
