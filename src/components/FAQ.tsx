"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What exactly is Assurebit UI?",
    answer: "Assurebit UI is our signature design philosophy. It focuses on depth, layering, and fluid motion to create interfaces that feel light, suspended, and futuristic. It's about breaking the flat web mold with subtle elevation and slow, high-quality animations.",
  },

  {
    question: "How long does a typical digital transformation take?",
    answer: "Project timelines vary based on complexity. A typical landing page or MVP takes 4-6 weeks, while comprehensive enterprise digital transformations can take 3-6 months. We prioritize both speed and scalable architecture.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer various maintenance and growth packages to ensure your digital products continue to perform at their best, stay secure, and evolve with your business needs.",
  },
  {
    question: "Which industries do you specialize in?",
    answer: "While we have deep expertise in Healthcare, E-commerce, and SaaS, our full-stack capabilities allow us to build high-quality solutions for virtually any industry looking for a modern tech edge.",
  },
]

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-text">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/faq" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent-blue transition-colors group">
            Looking for more? Read our &quot;Honesty, Always&quot; FAQ page
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl border border-soft-gray overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
      >
        <span className="text-lg font-bold text-deep-slate pr-8">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            isOpen ? "bg-primary text-white" : "bg-soft-gray text-deep-slate"
          )}
        >
          <Plus size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-6 md:p-8 pt-0 text-muted-text border-t border-soft-gray/50 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
