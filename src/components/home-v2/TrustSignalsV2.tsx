"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react"

const trustSignals = [
  {
    title: "Your idea. Our obsession.",
    description: "We treat every project like it's our own — because when you win, we win.",
    icon: <CheckCircle2 className="text-primary" />,
  },
  {
    title: "We connect the dots. You take the credit.",
    description: "From scattered ideas to polished products, we handle the complexity so you don't have to.",
    icon: <ShieldCheck className="text-accent-blue" />,
  },
  {
    title: "Clarity first. Then magic.",
    description: "We never start building until the vision is crystal clear — for both of us.",
    icon: <Zap className="text-light-blue" />,
  },
  {
    title: "Idea ⇒ Reality. No detours.",
    description: "Straight-line execution from concept to launch. No scope creep, no surprises.",
    icon: <Layers className="text-soft-gray" />,
  },
]

export const TrustSignalsV2 = () => {
  return (
    <section className="py-24 px-6 bg-deep-slate text-white rounded-[4rem] mx-4 md:mx-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            We build it like our name is on it, <br />
            <span className="text-light-blue/80">because our reputation is.</span>
          </h2>
        </motion.div>

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
