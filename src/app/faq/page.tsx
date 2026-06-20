"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";
import { Sparkles, Quote, HelpCircle, ArrowRight, Plus, HelpCircle as CoffeeIcon, Info } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  category: "process" | "cost" | "timelines" | "working" | "hard";
  question: string;
  answer: string[];
  honestyNote?: string;
}

const faqData: FAQItem[] = [
  // Process
  {
    id: "process-1",
    category: "process",
    question: "Why do you refuse to start building until the vision is crystal clear?",
    answer: [
      "Because the most expensive mistake in software isn't a bug, it's building the wrong thing with complete confidence. We've seen what happens when teams skip the clarity phase: months of work that needs to be undone, features nobody asked for, and a client who feels like they weren't truly heard.",
      "Slowing down at the start isn't caution, it's arithmetic. One week of deep listening can save six weeks of rework. We protect your budget by protecting your clarity first."
    ],
    honestyNote: "This does mean our process feels slower at the start. We believe that's a feature, not a flaw."
  },
  {
    id: "process-2",
    category: "process",
    question: "What does your discovery process actually look like?",
    answer: [
      "It starts with a 30-minute call where we ask more than we talk. Then, depending on the project, a structured vision session, typically 2 to 4 hours, where we map your idea, challenge your assumptions, and surface the requirements you didn't know you had.",
      "We come out of that session with a shared document, your product's first source of truth. Nothing gets built before that document exists and you've signed off on it."
    ]
  },
  {
    id: "process-3",
    category: "process",
    question: "What if my idea changes significantly mid-build?",
    answer: [
      "Ideas evolve, that's healthy. What matters is the size and timing of the change. Small refinements are absorbed into the sprint. Fundamental pivots are a different conversation, and we'll have it openly the moment we sense one coming.",
      "We don't quietly build what was originally scoped and invoice for the extra later. If something changes scope, we surface it, estimate it, and get your go-ahead first. No surprise bills."
    ],
    honestyNote: "The more thorough the discovery phase, the fewer mid-build pivots. They're not unavoidable, they're often preventable."
  },
  {
    id: "process-4",
    category: "process",
    question: "Will I actually understand what's being built while it's happening?",
    answer: [
      "Always. We translate every technical decision into plain language not to simplify things, but because we believe you deserve to understand every choice made on your behalf.",
      "You'll get regular updates, working demos at each milestone, and a standing invitation to ask 'why' about anything. If we can't explain a decision clearly, that's our problem to fix, not yours to accept."
    ]
  },
  // Cost
  {
    id: "cost-1",
    category: "cost",
    question: "How much does it actually cost to build something with you?",
    answer: [
      "The short answer is: it depends, but we won't hide behind that. Most MVPs or custom web applications we build range from $15,000 to $45,000. More complex enterprise platforms with advanced AI integrations or intricate scaling requirements can go higher.",
      "We will give you a clear, fixed estimate after our discovery session so you can plan with certainty."
    ]
  },
  {
    id: "cost-2",
    category: "cost",
    question: "Do you work on fixed price or hourly rates?",
    answer: [
      "We prefer fixed-price scopes. Why? Because hourly rates incentivize agencies to work slowly.",
      "With a fixed price, we both share the goal of building the best product efficiently. If we misestimate the effort on a defined scope, that's on us, not you."
    ]
  },
  {
    id: "cost-3",
    category: "cost",
    question: "Are there hidden costs? Will I get surprise invoices?",
    answer: [
      "Never. Every invoice you receive from us will correspond to a milestone you've already approved.",
      "If a mid-project change request arises that alters the cost, we will present a clear change order for your approval before writing a single line of code. No surprise bills."
    ]
  },
  {
    id: "cost-4",
    category: "cost",
    question: "What if I have a tight or small budget, can you still help?",
    answer: [
      "We believe in being realistic. If your budget doesn't fit a full custom build, we won't try to sell you one.",
      "Instead, we'll tell you honestly and help you figure out how to scale down your scope, use low-code solutions, or find a better-suited path."
    ]
  },
  // Timelines
  {
    id: "time-1",
    category: "timelines",
    question: "How long does it take to build a product?",
    answer: [
      "A typical MVP or initial version of a web application takes 6 to 10 weeks from discovery to launch. Highly complex products can take 3 to 6 months.",
      "We design our sprints so you have a working, testable build every 2 weeks."
    ]
  },
  {
    id: "time-2",
    category: "timelines",
    question: "What happens if a deadline is missed?",
    answer: [
      "If we miss a deadline due to our own delay, we'll cover the cost of the extra development time out of our own pocket.",
      "However, if a delay is caused by changing requirements or delayed sign-offs, we'll adjust the timeline together immediately."
    ]
  },
  {
    id: "time-3",
    category: "timelines",
    question: "Can you start immediately, or is there a waitlist?",
    answer: [
      "To maintain our high standard of quality, we only take on 2 to 3 major projects at a time.",
      "This means we sometimes have a 2-4 week waitlist. If we can't start immediately, we'll let you know on our first call."
    ]
  },
  // Working Together
  {
    id: "working-1",
    category: "working",
    question: "Will you disappear after the project launches?",
    answer: [
      "No. Shipping is just the start of a product's lifecycle.",
      "We offer flexible post-launch retainer options for maintenance, bug fixes, updates, and feature scaling. We're in it for the long term."
    ]
  },
  {
    id: "working-2",
    category: "working",
    question: "Who will I actually be working with day-to-day?",
    answer: [
      "You'll work directly with a lead builder and a dedicated project contact from our core team.",
      "We don't hand your project off to junior interns or outsourced agencies after you sign. The founders stay closely involved."
    ]
  },
  {
    id: "working-3",
    category: "working",
    question: "Do I own the code and intellectual property after the project?",
    answer: [
      "Absolutely. 100%. Once final payment is made, all custom source code, designs, and intellectual property belong entirely to you.",
      "We'll hand over the repository and help transition hosting to your accounts."
    ]
  },
  {
    id: "working-4",
    category: "working",
    question: "What if we're not a good fit for each other?",
    answer: [
      "It happens, and it's better to recognize it early.",
      "If either of us feels we aren't a good fit during the discovery phase, we can part ways with no hard feelings. If a conflict arises mid-build, we have clear exit clauses in our agreement to ensure you keep everything built up to that point."
    ]
  },
  // The Hard Ones
  {
    id: "hard-1",
    category: "hard",
    question: "What if the product you build fails in the market?",
    answer: [
      "A great product is only half the battle; distribution, marketing, and market-fit determine success.",
      "If a product fails, we won't pretend it's not painful. We will stand by you to analyze user feedback, pivot quickly, and iterate. We build for resilience."
    ]
  },
  {
    id: "hard-2",
    category: "hard",
    question: "Have you ever made serious mistakes on a project?",
    answer: [
      "Yes, we've made mistakes. We've underestimated timelines on complex third-party integrations, and we've misjudged user flow complexity.",
      "But when we make a mistake, we own it immediately, communicate it transparently, and fix it on our own dime."
    ]
  },
  {
    id: "hard-3",
    category: "hard",
    question: "Why should I trust a software agency I just found online?",
    answer: [
      "Trust shouldn't be given freely. Don't trust our words—trust our actions.",
      "Look at our case studies, speak with our past clients (we're happy to connect you), and evaluate us during the initial discovery phase before making any long-term commitment."
    ]
  },
  {
    id: "hard-4",
    category: "hard",
    question: "What if I disagree with a technical decision you've made?",
    answer: [
      "We welcome healthy disagreement. We'll explain our technical rationale in plain language.",
      "If you still want to take a different path, it's your product and we will execute your preference, making sure you understand any trade-offs involved."
    ]
  }
];

const categories = [
  { id: "all", name: "All questions" },
  { id: "process", name: "Process" },
  { id: "cost", name: "Cost" },
  { id: "timelines", name: "Timelines" },
  { id: "working", name: "Working together" },
  { id: "hard", name: "The hard ones" }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFaqs = activeTab === "all"
    ? faqData
    : faqData.filter(faq => faq.category === activeTab);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-gray border border-white/50 text-xs font-bold tracking-[0.15em] text-primary uppercase animate-float">
            <Sparkles size={12} className="text-primary animate-pulse" />
            FAQ: The &quot;Honesty, Always&quot; Page
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            The questions people <br />
            <span className="text-primary">are afraid to ask.</span> <br />
            <span className="text-deep-slate/90">Answered plainly.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
            We&apos;ve noticed that the most important questions never make it into the first call.
            They sit quietly, about timelines, about cost, about what happens when things go sideways.
            We&apos;d rather you ask them here, where we&apos;ve had time to answer them well.
          </p>

          {/* Cursive Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative max-w-2xl mx-auto bg-white/60 backdrop-blur-sm border border-soft-gray p-8 rounded-[2rem] shadow-premium mt-12 flex flex-col items-center gap-4 group hover:border-primary/20 transition-colors"
          >
            <Quote className="text-primary/20 absolute -top-4 -left-4" size={56} />
            <p className="text-3xl md:text-4xl font-reenie text-deep-slate text-center leading-normal px-4">
              &quot;We refuse to start building until the vision is crystal clear. Here&apos;s everything else we refuse to pretend about.&quot;
            </p>
          </motion.div>

          <p className="max-w-2xl mx-auto text-sm text-muted-text italic leading-relaxed pt-4">
            Every answer here is the kind you&apos;d get if you asked a founder of Assurebit over coffee.
            No legal hedging, no carefully-worded deflections. If something is genuinely uncertain,
            we&apos;ll say that too, because the most dishonest thing an agency can do is pretend it has answers it doesn&apos;t.
          </p>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-light-blue/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Tabs Filter & Accordion section */}
      <section className="py-12 px-6 relative max-w-4xl mx-auto">
        {/* Dynamic sliding tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-soft-gray pb-6">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors cursor-pointer outline-none"
                style={{
                  color: isActive ? "#FFFFFF" : "#384959"
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-primary rounded-full z-0 shadow-md"
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic FAQ Accordions */}
        <div className="space-y-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <FAQAccordionItem faq={faq} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Direct Question / CTA Section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto relative overflow-hidden bg-white/30 backdrop-blur-sm rounded-[3rem] border border-soft-gray/50 shadow-premium mt-12 mb-16">
        <div className="space-y-6 max-w-2xl mx-auto">
          <HelpCircle size={40} className="text-primary/70 mx-auto animate-bounce" />

          <h2 className="text-3xl font-bold text-deep-slate">
            Your question isn&apos;t here?
          </h2>

          <p className="text-base md:text-lg text-muted-text leading-relaxed">
            Good. It means you&apos;re thinking about something specific to your situation,
            which is exactly the kind of question we like. Ask us directly and you&apos;ll get a direct answer.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-md group">
              Ask us directly
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent-blue transition-colors group">
              Next: Web Dev
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reused Contact Form */}
      <Contact />

      <Footer />
    </main>
  );
}

const FAQAccordionItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-soft-gray overflow-hidden shadow-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none cursor-pointer group"
      >
        <span className="text-lg font-bold text-deep-slate group-hover:text-primary transition-colors pr-8">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${isOpen ? "bg-primary text-white" : "bg-soft-gray text-deep-slate"
            }`}
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-6 md:p-8 pt-0 border-t border-soft-gray/50 space-y-4">
              {faq.answer.map((paragraph, idx) => (
                <p key={idx} className="text-muted-text text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {faq.honestyNote && (
                <div className="mt-4 p-5 rounded-2xl bg-soft-gray/50 border-l-4 border-primary/50 flex items-start gap-3">
                  <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-deep-slate italic leading-relaxed">
                    <span className="font-semibold not-italic">Honesty note:</span> {faq.honestyNote}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
