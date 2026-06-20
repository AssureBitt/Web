"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";
import { Compass, Code, Languages, Heart, Sparkles, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LogoPhilosophyVisual = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center bg-white/65 backdrop-blur-md rounded-3xl border border-soft-gray shadow-premium overflow-hidden group">
      {/* Animated Flowing SVG lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flow-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BDDDFC" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#88BDF2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6A89A7" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="flow-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BDDDFC" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#88BDF2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6A89A7" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Outer curved paths converging to the center (200, 160) */}
        {/* Path 1: Top Left to Center */}
        <motion.path
          d="M 40 40 Q 150 40, 200 160"
          fill="none"
          stroke="url(#flow-grad-1)"
          strokeWidth="3.5"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Path 2: Bottom Left to Center */}
        <motion.path
          d="M 50 280 Q 120 260, 200 160"
          fill="none"
          stroke="url(#flow-grad-1)"
          strokeWidth="3"
          strokeDasharray="6 3"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Path 3: Top Right to Center */}
        <motion.path
          d="M 360 40 Q 250 40, 200 160"
          fill="none"
          stroke="url(#flow-grad-2)"
          strokeWidth="3.5"
          strokeDasharray="10 5"
          animate={{ strokeDashoffset: [0, 40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Path 4: Bottom Right to Center */}
        <motion.path
          d="M 350 280 Q 280 260, 200 160"
          fill="none"
          stroke="url(#flow-grad-2)"
          strokeWidth="3"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [0, 30] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Organic straight connecting guides */}
        <motion.path
          d="M 20 160 L 380 160"
          fill="none"
          stroke="rgba(106, 137, 167, 0.15)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 200 20 L 200 300"
          fill="none"
          stroke="rgba(106, 137, 167, 0.15)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Center glowing structured node representing the emergent reliable product */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        style={{
          boxShadow: "0 20px 40px rgba(106, 137, 167, 0.15)"
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-3xl bg-white border border-primary/20 flex flex-col items-center justify-center p-2"
      >
        <span className="text-primary font-bold uppercase tracking-[0.1em] text-[10px] mb-1">PRODUCT</span>
        <div className="w-10 h-10 rounded-xl bg-deep-slate flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-primary transition-colors">
          A
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />

      {/* Hero Intro Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-soft-gray border border-white/50 text-xs font-bold tracking-[0.15em] text-primary uppercase animate-float">
            <Sparkles size={12} className="text-primary" />
            Our Philosophy
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            We got tired of watching <br />
            <span className="text-primary">great ideas get lost.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
            Not lost in execution. Lost earlier, in translation. In the gap between what a founder meant and what a team built. In the silence between a brilliant brief and a disappointing product. We've seen it too many times. So we decided to do something about it.
          </p>

          {/* Cursive Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-2xl mx-auto bg-white/60 border border-soft-gray p-8 rounded-[2rem] shadow-premium mt-12 flex flex-col items-center gap-4"
          >
            <Quote className="text-primary/20 absolute -top-4 -left-4" size={56} />
            <p className="text-3xl md:text-4xl font-reenie text-deep-slate text-center leading-normal px-4">
              "We don't just write your code. We hold your idea, carefully, until it becomes something real."
            </p>
          </motion.div>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-light-blue/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* The Origin Section */}
      <section className="py-24 px-6 relative bg-soft-gray/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Beautiful Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden group shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Team discussing building software"
              fill
              className="object-cover group-hover:scale-103 transition-transform duration-700"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              How it all began
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
              The origin
            </h2>
            <div className="space-y-4 text-lg text-muted-text leading-relaxed">
              <p>
                Assurebit didn't start with a business plan. It started with a recurring frustration, the kind that follows you home, sits with you over coffee, and refuses to leave until you do something about it.
              </p>
              <p>
                We kept encountering the same story: a founder with a vivid idea, a developer who got the brief, and somewhere between those two points, a product that felt like a distant cousin of the original vision. The bones were there. The soul had gone missing.
              </p>
              <p className="font-semibold text-deep-slate">
                We asked ourselves: what if a team existed whose first obsession wasn't shipping fast, but understanding deeply? What if the most important thing we built wasn't an app, but trust?
              </p>
              <p>
                That question became Assurebit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Builder & Logo Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Co-Builder definition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-white p-8 md:p-12 rounded-[2.5rem] border border-soft-gray shadow-premium"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Defining our relationship
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-slate">
              What &quot;co-builder&quot; actually means
            </h3>
            <div className="space-y-4 text-base text-muted-text leading-relaxed">
              <p>
                A lot of agencies call themselves partners. We call ourselves co-builders, because the word means something different to us.
              </p>
              <p>
                A partner shows up at the table. A co-builder shows up at the whiteboard, at 11pm on a Tuesday when the architecture decision is keeping you up. They ask the question you were afraid to ask. They slow you down when you're about to sprint in the wrong direction. They celebrate when you launch, and they stay when the next chapter begins.
              </p>
              <p className="font-semibold text-deep-slate">
                We are the kind of people who genuinely lose sleep over your product. Not because of pressure, because we care what it becomes.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Logo Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                Visual Identity
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-deep-slate">
                Why the logo looks the way it does
              </h3>
              <p className="text-base text-muted-text leading-relaxed">
                Those flowing lines aren't decorative. They're the many ideas, requirements, and half-formed possibilities a client brings to us. Our role is to connect those paths logically, and let a structured, reliable product emerge from the center. That's not a design choice. That's a philosophy.
              </p>
            </div>

            {/* Interactive SVG Animation Panel */}
            <LogoPhilosophyVisual />
          </motion.div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 px-6 relative bg-soft-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs block">
              Our Core Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate">
              What we actually believe <br />
              <span className="text-primary/70 text-4xl font-normal lowercase">the things we'll never stop believing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeliefCard
              index={1}
              heading="A confused brief produces a confused product."
              text="No exception. Ever. That's why we don't skip the hard conversations upfront."
            />
            <BeliefCard
              index={2}
              heading="Your idea deserves better than a template."
              text="Every product we build starts from scratch in our minds even if the stack looks familiar."
            />
            <BeliefCard
              index={3}
              heading="The best technical decision is the one you understand too."
              text="We don't hide behind jargon. We always translate."
            />
            <BeliefCard
              index={4}
              heading="Shipping isn't the finish line."
              text="What you do with the product after launch matters just as much. We stay to find out."
            />
          </div>
        </div>
      </section>

      {/* Who We Are in 4 Honest Lines */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs block">
              Behind The Scenes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate">
              Who we are in four honest lines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HonestLineCard
              icon={<Compass size={24} className="text-primary" />}
              title="Listeners before builders"
              desc="We've trained ourselves to resist the urge to jump to solutions. The right question first, always."
            />
            <HonestLineCard
              icon={<Code size={24} className="text-primary" />}
              title="Obsessive about craft"
              desc="The backend logic and the button radius get equal care. Nothing ships feeling 'good enough.'"
            />
            <HonestLineCard
              icon={<Languages size={24} className="text-primary" />}
              title="Fluent in both worlds"
              desc="We speak to the founder and developer, no translator needed between your vision and our execution."
            />
            <HonestLineCard
              icon={<Heart size={24} className="text-primary" />}
              title="In it past the launch"
              desc="We build things that grow with you. And we stay curious about where you're headed next."
            />
          </div>
        </div>
      </section>

      {/* Closing Call to Action Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/20 rounded-[3rem] border border-soft-gray/50 shadow-premium mb-12">
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-semibold text-deep-slate leading-normal">
            If you've ever felt like your idea was bigger on the inside than it looked on the outside, <span className="text-primary">we get it.</span>
          </p>
          <p className="text-lg text-muted-text">
            We've spent years learning how to close that gap. And we'd genuinely like to close it with you.
          </p>
          <div className="pt-4">
            <Link href="#contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-md cursor-pointer"
              >
                Let&apos;s Build Together
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reused Contact CTA Form */}
      <Contact />

      <Footer />
    </main>
  );
}

const BeliefCard = ({ index, heading, text }: { index: number; heading: string; text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white p-8 md:p-10 rounded-[2rem] border border-soft-gray hover:border-primary/30 shadow-sm hover:shadow-premium transition-all duration-300 group"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center font-bold text-primary text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        0{index}
      </div>
      <div className="space-y-3 flex-1 pt-1">
        <h4 className="text-xl font-bold text-deep-slate group-hover:text-primary transition-colors duration-300">
          {heading}
        </h4>
        <p className="text-muted-text leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  </motion.div>
);

const HonestLineCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="bg-white p-8 rounded-[2rem] border border-soft-gray hover:border-primary/20 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col gap-6"
  >
    <div className="w-12 h-12 rounded-2xl bg-soft-gray flex items-center justify-center">
      {icon}
    </div>
    <div className="space-y-2">
      <h4 className="font-bold text-deep-slate text-lg">{title}</h4>
      <p className="text-sm text-muted-text leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);
