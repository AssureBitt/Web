"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";
import { AlertCircle, Eye, Hammer, Quote, Sparkles, ArrowRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  id: number;
  category: string;
  filterType: "saas" | "web" | "consulting" | "design";
  engagement: string;
  client: string;
  title: string;
  description: string;
  challenge: string;
  clarity: string;
  craft: string;
  metricValue: string;
  metricLabel: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    category: "SaaS & Apps",
    filterType: "saas",
    engagement: "6 month engagement",
    client: "Client X",
    title: "From spreadsheet chaos to a platform their team loves",
    description: "A logistics startup drowning in manual workflows needed a SaaS product that could grow with their ambitions, not slow them down.",
    challenge: "Operations split across 5 disconnected tools, no single source of truth, constant human error, team frustration.",
    clarity: "Discovered the real bottleneck wasn't the tools, it was missing status logic nobody had named yet.",
    craft: "Built a unified ops platform with real-time tracking, role-based views, and one-click reporting.",
    metricValue: "68% reduction",
    metricLabel: "in manual coordination time within 90 days of launch"
  },
  {
    id: 2,
    category: "Web Dev",
    filterType: "web",
    engagement: "3-month engagement",
    client: "Client X",
    title: "A platform that scaled to 10× traffic without flinching",
    description: "An e-commerce brand with a product people loved but a backend that buckled under pressure every time they ran a campaign.",
    challenge: "Peak traffic caused site crashes and abandoned carts, costing revenue every single campaign cycle.",
    clarity: "Root cause was a monolithic architecture never designed for spiky loads, not just poor hosting choices.",
    craft: "Rebuilt the backend with microservices and edge caching, the frontend stayed buttery-smooth under any load.",
    metricValue: "0 crashes",
    metricLabel: "across three consecutive high-traffic campaigns post-launch"
  },
  {
    id: 3,
    category: "Consulting",
    filterType: "consulting",
    engagement: "Strategy engagement",
    client: "Client X",
    title: "Untangling a product decision that had stalled for six months",
    description: "A funded startup couldn't agree internally on whether to rebuild or extend their legacy product. The indecision was costing them more than either option would have.",
    challenge: "Leadership split between 'rebuild everything' and 'just add features' both sides partly right, both partly wrong.",
    clarity: "A structured architecture audit and facilitated sessions surfaced the third path nobody had seen yet.",
    craft: "Delivered a phased migration roadmap, preserving what worked, replacing what didn't, in the right order.",
    metricValue: "6 weeks",
    metricLabel: "to a unanimous decision and a clear path forward, after six months of circular debate"
  },
  {
    id: 4,
    category: "Design & Branding",
    filterType: "design",
    engagement: "Brand identity project",
    client: "Client D",
    title: "A brand identity as distinct as the product behind it",
    description: "A fintech product with genuine innovation had been hiding behind a forgettable visual identity that made it look like every other player in the space.",
    challenge: "Strong product, weak market presence, the brand was invisible in a category where trust is everything.",
    clarity: "Brand workshops surfaced a core positioning tension, they were trying to look safe and bold at the same time.",
    craft: "Created a full identity system, distinct, deliberate, and built to be remembered, anchored in the product's actual differentiator.",
    metricValue: "+3× increase",
    metricLabel: "in inbound demo requests in the quarter following rebrand launch"
  }
];

const categories = [
  { label: "All work", value: "all" },
  { label: "SaaS & Apps", value: "saas" },
  { label: "Web Dev", value: "web" },
  { label: "Consulting", value: "consulting" },
  { label: "Design", value: "design" }
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.filterType === activeFilter);

  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-soft-gray border border-white/50 text-xs font-bold tracking-[0.15em] text-primary uppercase animate-float">
            <Sparkles size={12} className="text-primary" />
            The Proof Gallery
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            Case Studies
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-primary max-w-xl mx-auto">
            We could tell you we&apos;re good. <br />
            <span className="text-deep-slate font-normal italic">Instead, let the work talk.</span>
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
            Every project here began with a gap between what a client imagined and what existed. What you&apos;ll see isn&apos;t a portfolio of deliverables. It&apos;s a record of problems understood, translated, and solved. The challenge. The clarity. The craft.
          </p>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-2xl mx-auto bg-white/60 border border-soft-gray p-8 rounded-[2rem] shadow-premium mt-12 flex flex-col items-center gap-4"
          >
            <Quote className="text-primary/20 absolute -top-4 -left-4" size={56} />
            <p className="text-3xl md:text-4xl font-reenie text-deep-slate text-center leading-normal px-4">
              &quot;Proof isn&apos;t a screenshot. It&apos;s the story of how we got there, and what happened after.&quot;
            </p>
          </motion.div>
        </div>

        {/* Background Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-light-blue/15 rounded-full blur-[140px] -z-10" />
      </section>

      {/* Filter Tabs Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeFilter === cat.value
                  ? "bg-deep-slate text-white border-deep-slate shadow-md"
                  : "bg-white text-muted-text border-soft-gray hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-16"
            >
              {filteredCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-white p-8 md:p-12 rounded-[3rem] border border-soft-gray hover:border-primary/20 shadow-premium hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between gap-10"
                >
                  {/* Top card header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-soft-gray/60">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider">
                        {cs.category}
                      </span>
                      <span className="text-xs text-muted-text font-bold uppercase tracking-widest">
                        {cs.engagement}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-deep-slate uppercase tracking-[0.2em]">
                      {cs.client}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-slate group-hover:text-primary transition-colors duration-300">
                      {cs.title}
                    </h3>
                    <p className="text-lg text-muted-text leading-relaxed max-w-4xl">
                      {cs.description}
                    </p>
                  </div>

                  {/* Challenge, Clarity, Craft breakdown grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                    <div className="space-y-3 p-6 rounded-2xl bg-soft-gray/30 border border-soft-gray/50 hover:bg-white hover:border-primary/20 hover:shadow-premium transition-all duration-300">
                      <div className="flex items-center gap-2 text-deep-slate font-bold text-sm">
                        <AlertCircle size={18} className="text-primary" />
                        <span>Challenge</span>
                      </div>
                      <p className="text-sm text-muted-text leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="space-y-3 p-6 rounded-2xl bg-soft-gray/30 border border-soft-gray/50 hover:bg-white hover:border-primary/20 hover:shadow-premium transition-all duration-300">
                      <div className="flex items-center gap-2 text-deep-slate font-bold text-sm">
                        <Eye size={18} className="text-primary" />
                        <span>Clarity</span>
                      </div>
                      <p className="text-sm text-muted-text leading-relaxed">
                        {cs.clarity}
                      </p>
                    </div>

                    <div className="space-y-3 p-6 rounded-2xl bg-soft-gray/30 border border-soft-gray/50 hover:bg-white hover:border-primary/20 hover:shadow-premium transition-all duration-300">
                      <div className="flex items-center gap-2 text-deep-slate font-bold text-sm">
                        <Hammer size={18} className="text-primary" />
                        <span>Craft</span>
                      </div>
                      <p className="text-sm text-muted-text leading-relaxed">
                        {cs.craft}
                      </p>
                    </div>
                  </div>

                  {/* Metric Box Callout & Story Link */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-soft-gray/60 mt-4">
                    <div className="flex items-start gap-4 max-w-xl">
                      <div className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap bg-primary/5 px-4 py-2 rounded-2xl border border-primary/10">
                        {cs.metricValue}
                      </div>
                      <div className="text-sm text-muted-text leading-snug pt-2">
                        {cs.metricLabel}
                      </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 text-xs font-bold text-deep-slate uppercase tracking-wider hover:text-primary transition-colors group/btn cursor-pointer whitespace-nowrap self-end sm:self-center">
                      <span>Write full story</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Slogan Banner Block */}
      <section className="py-24 px-6 text-center bg-soft-gray/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <Quote size={40} className="text-primary/20 mx-auto" />
            <p className="text-2xl md:text-3xl font-bold text-deep-slate leading-relaxed">
              Every project above started with a conversation.
            </p>
            <p className="text-lg text-muted-text">
              Most of them started with a problem the client couldn&apos;t quite name yet. That&apos;s fine, that&apos;s actually where we do our best work.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-6 pt-8 border-t border-soft-gray/60">
            <h3 className="text-3xl md:text-4xl font-bold text-deep-slate">
              Want to be the next story here?
            </h3>
            <p className="text-base text-muted-text leading-relaxed">
              Bring us the gap between where you are and where you want to be. We&apos;ll help you figure out what it takes to close it, and then we&apos;ll close it together.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="#contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Start the conversation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="#contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-soft-gray font-bold text-deep-slate hover:bg-soft-gray/50 transition-colors cursor-pointer"
                >
                  Next: Contact Page
                  <ArrowDownRight size={18} className="text-muted-text" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Block */}
      <Contact />

      <Footer />
    </main>
  );
}
