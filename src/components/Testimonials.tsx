"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    text: "The Assurebit approach really worked for our app. The UI feels so fluid and the team was incredible to work with!",

    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    color: "bg-primary/20",
    rotate: -1,
  },
  {
    text: "Switched to Super IT for our digital transformation and the results have been phenomenal. Highly recommend!",
    author: "David Chen",
    role: "CTO, EduLeap",
    color: "bg-accent-blue/20",
    rotate: 1,
  },
  {
    text: "Their attention to detail and modern tech stack allowed us to scale our platform 10x in just six months.",
    author: "Emma Watson",
    role: "Founder, GreenSpace",
    color: "bg-light-blue/20",
    rotate: -0.5,
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-soft-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-slate mb-4"
          >
            What Our <span className="text-muted-text/70 text-5xl lowercase">Clients Say</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10, zIndex: 10 }}
              style={{ rotate: `${testimonial.rotate}deg` }}
              className={cn(
                "w-full md:w-[350px] p-8 rounded-3xl shadow-lg border border-white/50",
                testimonial.color,
                "relative flex flex-col justify-between min-h-[300px]"
              )}
            >
              <div className="space-y-4">
                <span className="text-4xl text-deep-slate/20 font-serif">&quot;</span>
                <p className="text-lg font-medium text-deep-slate leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <p className="font-bold text-deep-slate">{testimonial.author}</p>
                <p className="text-sm font-bold text-deep-slate/60 font-reenie text-xl italic">{testimonial.role}</p>
              </div>

              {/* Sticky note tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-sm rounded-sm rotate-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
