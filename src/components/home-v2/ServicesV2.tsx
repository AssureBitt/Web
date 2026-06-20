"use client"

import React from "react"
import { motion } from "framer-motion"
import { MagicBento } from "../MagicBento"

const servicesData = [
  {
    title: "Software & Web Development",
    description: "From robust backends to buttery-smooth frontends, we engineer digital products that work flawlessly and scale gracefully.",
    label: "Engineering"
  },
  {
    title: "Design & Branding",
    description: "Your brand is your first impression and your lasting one. We craft identities that are distinct, deliberate, and built to be remembered.",
    label: "Creative"
  },
  {
    title: "Tech Consulting",
    description: "Got a technical problem you can't quite define? Good. That's our favourite kind. We'll help you untangle the complexity and chart the smartest path forward.",
    label: "Strategy"
  },
  {
    title: "Product Building (SaaS / Apps)",
    description: "From zero to launch and beyond, we take your product idea through every stage: strategy, design, development, and growth.",
    label: "Product"
  },
  {
    title: "eCommerce Development",
    description: "Shopify, WooCommerce, BigCommerce. Product catalogs, payment integrations, inventory systems, and checkout optimization. Built to sell, not just to look good.",
    label: "Commerce"
  },
  {
    title: "Mobile App Development",
    description: "Developing high-performance native and cross-platform mobile apps for iOS and Android.",
    label: "Mobile"
  },
  {
    title: "Cloud Architecture",
    description: "Deploying and scaling applications on AWS and Vercel.",
    label: "Infrastructure"
  },
]

export const ServicesV2 = () => {
  return (
    <section id="services-v2" className="py-24 px-6 relative bg-soft-gray/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate"
          >
            What we build <br />
            <span className="text-muted-text/70 text-5xl lowercase">(and how we build it right)</span>
          </motion.h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            Everything you need. Built the way you need it.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1, duration: 0.7 }}
        >
          <MagicBento 
            data={servicesData}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="59, 130, 246"
          />
        </motion.div>
      </div>
    </section>
  )
}
