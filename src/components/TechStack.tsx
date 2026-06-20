"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TechIcons } from "./TechIcons"

const techCategories = [
  {
    name: "CMS / Platforms",
    items: ["WordPress", "Craft CMS", "Drupal", "Joomla"],
    color: "bg-primary/10",
  },
  {
    name: "Backend",
    items: ["Laravel", "Node.js", "Ruby", "Python"],
    color: "bg-accent-blue/10",
  },
  {
    name: "Frontend",
    items: ["Vue.js", "React.js", "Next.js", "TypeScript"],
    color: "bg-light-blue/10",
  },
  {
    name: "Ecommerce",
    items: ["Magento", "Shopify", "WooCommerce", "BigCommerce"],
    color: "bg-deep-slate/10",
  },
]

export const TechStack = () => {
  return (
    <section id="technologies" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-slate mb-6"
          >
            Our Modern <span className="text-primary">Technology Stack</span>
          </motion.h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            We use the best-in-class technologies to build reliable, high-performance digital products that scale with your business.
          </p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <div key={category.name} className="space-y-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <span className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em]",
                  "bg-white border shadow-sm",
                  "text-deep-slate/60 border-soft-gray"
                )}>
                  {category.name}
                </span>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full opacity-50" />
              </motion.div>

              <div className="flex flex-wrap gap-6 justify-center">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (catIndex * 0.1) + (index * 0.05),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={cn(
                      "flex flex-col items-center justify-center p-6 rounded-3xl min-w-[140px] aspect-square",
                      "bg-white border border-soft-gray shadow-sm transition-all duration-300",
                      "group hover:shadow-xl hover:border-primary/30"
                    )}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <div className="w-12 h-12 flex items-center justify-center">
                        {TechIcons[item] || <span className="text-2xl font-black text-deep-slate/20">{item[0]}</span>}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-deep-slate text-center group-hover:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Floating Tech Bubbles */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
    </section>
  )
}
