"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { HeartPulse, ShoppingCart, Landmark, GraduationCap, Cloud, Rocket, Building2 } from "lucide-react"

const industries = [
  { name: "Healthcare", icon: <HeartPulse />, color: "bg-primary/20" },
  { name: "E-commerce", icon: <ShoppingCart />, color: "bg-accent-blue/20" },
  { name: "Finance", icon: <Landmark />, color: "bg-light-blue/20" },
  { name: "Education", icon: <GraduationCap />, color: "bg-soft-gray/30" },
  { name: "SaaS", icon: <Cloud />, color: "bg-primary/20" },
  { name: "Startups", icon: <Rocket />, color: "bg-accent-blue/20" },
  { name: "Enterprise", icon: <Building2 />, color: "bg-light-blue/20" },
]

export const IndustriesServed = () => {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 gap-8 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-deep-slate mb-6"
            >
              Tailored Solutions for <br />
              <span className="text-muted-text/70 text-5xl lowercase">Various Industries</span>
            </motion.h2>
            <p className="text-muted-text">
              We understand the unique challenges of different sectors and provide customized digital solutions that meet specific industry requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-default"
            >
              <div className="flex flex-col items-center gap-4">
                <div className={cn(
                  "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300",
                  "bg-white border border-soft-gray group-hover:border-primary group-hover:shadow-xl",
                  "relative overflow-hidden"
                )}>
                  <div className={cn("absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity", industry.color)} />
                  <div className="relative text-deep-slate group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(industry.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                  </div>
                </div>
                <span className="text-sm font-bold text-muted-text group-hover:text-deep-slate transition-colors">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
