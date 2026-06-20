"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Globe, Code } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const HeroV2 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center overflow-hidden">
      {/* Floating UI Elements */}
      <FloatingCard
        className="absolute top-[20%] left-[10%] hidden lg:block"
        icon={<Code className="text-primary" size={28} />}
        delay={0}
      />
      <FloatingCard
        className="absolute top-[15%] right-[15%] hidden lg:block"
        icon={<Globe className="text-light-blue" size={28} />}
        delay={0.5}
      />
      <FloatingCard
        className="absolute bottom-[25%] left-[15%] hidden lg:block"
        icon={<Sparkles className="text-accent-blue" size={28} />}
        delay={1}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-soft-gray border border-white/50 text-sm font-medium animate-float">
          <Sparkles size={16} className="text-primary" />
          <span>Product Development & Strategy</span>
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
          Your idea deserves more <br className="hidden md:block" />
          <span className="text-muted-text/80">than a developer.</span> <br />
          <span className="relative inline-block">
            It deserves a partner.
            <motion.svg
              className="absolute -bottom-4 left-0 w-full"
              viewBox="0 0 400 20"
              fill="none"
            >
              <motion.path
                d="M0 10 Q100 0 200 10 T400 10"
                stroke="#6A89A7"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.svg>
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
          Bring us your scattered thoughts, half-baked concepts, or bold visions, we'll make sense of it all, then build it to perfection. No guesswork. No shortcuts. Just exactly what you imagined.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-lg hover:shadow-xl"
            >
              Let's talk about your idea
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="#how-we-work-v2" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white border border-soft-gray font-bold text-deep-slate hover:bg-soft-gray/50 transition-colors"
            >
              See how we work
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

const FloatingCard = ({ className, icon, delay }: { className: string, icon: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }}
    className={cn(
      "p-4 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-lg flex items-center justify-center",
      className
    )}
  >
    {icon}
  </motion.div>
)
