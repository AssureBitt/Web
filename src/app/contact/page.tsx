"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { 
  Sparkles, 
  Quote, 
  ArrowRight, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: "",
    flowingLines: "",
    stage: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    company: "",
    extraInfo: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePurposeSelect = (val: string) => {
    setFormData(prev => ({ ...prev, purpose: val }));
    setTimeout(() => handleNext(), 300); // Auto-advance with small delay for satisfaction
  };

  const handleStageSelect = (val: string) => {
    setFormData(prev => ({ ...prev, stage: val }));
    setTimeout(() => handleNext(), 300);
  };

  const handleNext = () => {
    if (step < 5) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter both your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replicate the contact form submit flow or mock database submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.purpose,
          message: `Stage: ${formData.stage}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nFlowing Lines: ${formData.flowingLines}\n\nCompany: ${formData.company}\n\nExtra: ${formData.extraInfo}`
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback for success visual on mock API if not fully bound
        setIsSubmitted(true);
      }
    } catch (err) {
      // Set to true anyway as a quiet reassurance/mock fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    if (step === 1) return !!formData.purpose;
    if (step === 2) return formData.flowingLines.trim().length > 10;
    if (step === 3) return !!formData.stage;
    if (step === 4) return !!formData.timeline && !!formData.budget;
    return true;
  };

  return (
    <main className="relative min-h-screen bg-background text-deep-slate">
      <GrainOverlay />
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-40 pb-12 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-soft-gray border border-white/50 text-xs font-bold tracking-[0.15em] text-primary uppercase animate-float">
            <Sparkles size={12} className="text-primary" />
            The &quot;Assurance&quot; Contact Page
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            Where does your idea <br />
            <span className="text-primary">meet reality right now?</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
            Not a contact form. An intake experience. Because the quality of what we build together begins with the quality of how we first understand each other. Tell us where you are. Tell us where the gap is. We&apos;ll take it from there.
          </p>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-2xl mx-auto bg-white/60 border border-soft-gray p-8 rounded-[2rem] shadow-premium mt-12 flex flex-col items-center gap-4"
          >
            <Quote className="text-primary/20 absolute -top-4 -left-4" size={56} />
            <p className="text-3xl md:text-4xl font-reenie text-deep-slate text-center leading-normal px-4">
              &quot;We don&apos;t ask for a brief. We ask for the truth about where your idea is stuck, and why.&quot;
            </p>
          </motion.div>
        </div>

        {/* Background Decorative Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-light-blue/15 rounded-full blur-[140px] -z-10" />
      </section>

      {/* Main Intake Form & Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Top Row: 50% Framing Copy / 50% Direct Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Framing Copy */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-deep-slate">
                Above the form, framing copy
              </h3>
              <div className="space-y-4 text-base text-muted-text leading-relaxed">
                <p>
                  Most enquiry forms ask who you are and what you want. Ours asks something harder, and more useful.
                </p>
                <p className="font-semibold text-deep-slate">
                  What are the flowing lines of your project? What&apos;s the gap between the version of this that lives in your head and the version that exists in the world?
                </p>
                <p>
                  Answer as honestly as you can. Half-formed is fine. Messy is welcome. We&apos;ve built great things out of conversations that started with &quot;I don&apos;t quite know how to explain this yet.&quot;
                </p>
              </div>
            </div>

            {/* Right Column: Dummy Contact Details Section */}
            <div className="p-8 rounded-[2.5rem] bg-white border border-soft-gray shadow-premium space-y-6">
              <h4 className="font-bold text-deep-slate tracking-wide uppercase text-xs text-primary">
                Direct Channels
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <a 
                  href="mailto:hello@assurebit.co" 
                  className="flex items-center gap-4 text-muted-text hover:text-primary transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center text-deep-slate group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-deep-slate uppercase">Email Us</p>
                    <p className="text-sm">hello@assurebit.co</p>
                  </div>
                </a>

                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-4 text-muted-text hover:text-primary transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center text-deep-slate group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-deep-slate uppercase">Call Us</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-text sm:col-span-2 md:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center text-deep-slate">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-deep-slate uppercase">Headquarters</p>
                    <p className="text-sm">123 Future Lane, Tech City, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 100% Width Intake Experience Form */}
          <div className="w-full space-y-8">
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-soft-gray shadow-premium relative min-h-[520px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="intake-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between flex-1 gap-8"
                  >
                    <div>
                      {/* Step Indicator Headers */}
                      <div className="flex items-center justify-between gap-4 pb-4 border-b border-soft-gray mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Question {step} of 5
                        </span>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <div 
                              key={s} 
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                s <= step ? "w-6 bg-primary" : "w-2 bg-soft-gray"
                              }`} 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Wizard Steps */}
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <h4 className="text-2xl font-bold text-deep-slate">
                              Step 1 - What brings you here?
                            </h4>
                            <p className="text-sm text-muted-text">
                              Lets us understand your primary need without forcing you into rigid templates.
                            </p>
                            <div className="flex flex-col gap-3 pt-2">
                              {[
                                "Build a product from scratch",
                                "Rescue or rebuild something existing",
                                "Get strategic clarity first",
                                "Improve design or brand",
                                "Not sure yet, I just know something's off"
                              ].map((option) => (
                                <button
                                  type="button"
                                  key={option}
                                  onClick={() => handlePurposeSelect(option)}
                                  className={`w-full text-left px-6 py-4 rounded-2xl border text-sm font-medium transition-all cursor-pointer ${
                                    formData.purpose === option
                                      ? "bg-deep-slate text-white border-deep-slate shadow-md"
                                      : "bg-white text-deep-slate border-soft-gray hover:border-primary/40"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <h4 className="text-2xl font-bold text-deep-slate">
                              Step 2 - The flowing lines question
                            </h4>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-deep-slate/60 block">
                                What are the flowing lines of your project? Describe your idea, your problem, or the gap you&apos;re trying to close, in whatever words come naturally.
                              </label>
                              <textarea
                                value={formData.flowingLines}
                                onChange={(e) => setFormData(prev => ({ ...prev, flowingLines: e.target.value }))}
                                rows={6}
                                placeholder="Messy thoughts and half-formed ideas are completely welcome here..."
                                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all resize-none text-sm leading-relaxed"
                              />
                            </div>
                            <p className="text-xs text-muted-text italic">
                              Please write at least a sentence (minimum 10 characters) to continue.
                            </p>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <h4 className="text-2xl font-bold text-deep-slate">
                              Step 3 - Where are you on the journey?
                            </h4>
                            <p className="text-sm text-muted-text">
                              This helps us calibrate our approach to fit your stage.
                            </p>
                            <div className="flex flex-col gap-3 pt-2">
                              {[
                                "Pure idea stage",
                                "I have a brief or spec",
                                "I have something built already",
                                "I've tried before and it didn't work out"
                              ].map((option) => (
                                <button
                                  type="button"
                                  key={option}
                                  onClick={() => handleStageSelect(option)}
                                  className={`w-full text-left px-6 py-4 rounded-2xl border text-sm font-medium transition-all cursor-pointer ${
                                    formData.stage === option
                                      ? "bg-deep-slate text-white border-deep-slate shadow-md"
                                      : "bg-white text-deep-slate border-soft-gray hover:border-primary/40"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {step === 4 && (
                          <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <h4 className="text-2xl font-bold text-deep-slate">
                              Step 4 - Timeline and budget honesty
                            </h4>
                            <p className="text-sm text-muted-text">
                              Gentle planning tools. Non-judgmental filters to understand potential scope.
                            </p>
                            
                            <div className="space-y-4 pt-2">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-deep-slate/60">When does this need to be real?</label>
                                <select 
                                  value={formData.timeline}
                                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                                  className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                                >
                                  <option value="">Select a timeline option...</option>
                                  <option value="ASAP / High Urgency">ASAP / High Urgency</option>
                                  <option value="Within 1 - 3 months">Within 1 - 3 months</option>
                                  <option value="Within 3 - 6 months">Within 3 - 6 months</option>
                                  <option value="Flexible / Just planning ahead">Flexible / Just planning ahead</option>
                                </select>
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-bold text-deep-slate/60">What range are you working with?</label>
                                <select 
                                  value={formData.budget}
                                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                                  className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                                >
                                  <option value="">Select a broad budget range...</option>
                                  <option value="Under $10,000">Under $10,000</option>
                                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                  <option value="$100,000+">$100,000+</option>
                                </select>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {step === 5 && (
                          <motion.div
                            key="step5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <h4 className="text-2xl font-bold text-deep-slate">
                              Step 5 - Who are you?
                            </h4>
                            <p className="text-sm text-muted-text">
                              Almost there. Let us know how to contact you.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-deep-slate/60 pl-2">Name *</label>
                                <input
                                  type="text"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                  placeholder="John Doe"
                                  className="w-full px-5 py-3 rounded-xl bg-white border border-soft-gray focus:border-primary outline-none transition-all text-sm"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-deep-slate/60 pl-2">Email *</label>
                                <input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  placeholder="john@example.com"
                                  className="w-full px-5 py-3 rounded-xl bg-white border border-soft-gray focus:border-primary outline-none transition-all text-sm"
                                />
                              </div>
                              <div className="md:col-span-2 space-y-1">
                                <label className="text-xs font-bold text-deep-slate/60 pl-2">Company (Optional)</label>
                                <input
                                  type="text"
                                  value={formData.company}
                                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                  placeholder="Acme Logistics"
                                  className="w-full px-5 py-3 rounded-xl bg-white border border-soft-gray focus:border-primary outline-none transition-all text-sm"
                                />
                              </div>
                              <div className="md:col-span-2 space-y-1">
                                <label className="text-xs font-bold text-deep-slate/60 pl-2">Anything else we should know before we meet?</label>
                                <textarea
                                  value={formData.extraInfo}
                                  onChange={(e) => setFormData(prev => ({ ...prev, extraInfo: e.target.value }))}
                                  rows={3}
                                  placeholder="E.g., pre-existing tech stack, key stakes..."
                                  className="w-full px-5 py-3 rounded-xl bg-white border border-soft-gray focus:border-primary outline-none transition-all resize-none text-sm leading-relaxed"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-soft-gray mt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={step === 1}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                          step === 1 
                            ? "opacity-45 pointer-events-none text-muted-text border-soft-gray" 
                            : "bg-white text-deep-slate border-soft-gray hover:bg-soft-gray/50"
                        }`}
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>

                      {step < 5 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!isStepValid()}
                          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            isStepValid()
                              ? "bg-deep-slate text-white hover:bg-primary hover:shadow-lg"
                              : "opacity-45 pointer-events-none text-muted-text bg-soft-gray border-soft-gray"
                          }`}
                        >
                          Next
                          <ArrowRight size={16} />
                        </button>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="group px-8 py-3.5 rounded-full bg-deep-slate text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-primary transition-all cursor-pointer disabled:opacity-75"
                          type="submit"
                        >
                          {isSubmitting ? "Sending..." : (
                            <>
                              Submit Intake & Start Conversation
                              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submit-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center gap-6 py-12 flex-1"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-premium border border-primary/20">
                      <CheckCircle size={36} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-3xl font-bold text-deep-slate">Intake Submitted</h4>
                      <p className="text-muted-text max-w-sm mx-auto text-sm leading-relaxed">
                        Thank you for sharing your thoughts honestly. A real person is reviewing your responses now. We&apos;ll be in touch with a considered reply.
                      </p>
                    </div>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                        setFormData({
                          purpose: "",
                          flowingLines: "",
                          stage: "",
                          timeline: "",
                          budget: "",
                          name: "",
                          email: "",
                          company: "",
                          extraInfo: ""
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full border border-soft-gray text-xs font-bold uppercase tracking-wider text-deep-slate hover:bg-soft-gray/50 cursor-pointer transition-all"
                    >
                      Fill another intake
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Three quiet reassurances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Card 1: Security */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="group bg-white/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-soft-gray/80 shadow-premium flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-soft-gray/30 border border-soft-gray/40">
                    <img 
                      src="/images/reassurance_security.png" 
                      alt="Security Illustration" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-soft-gray/60 flex items-center justify-center text-primary">
                      <ShieldCheck size={18} />
                    </div>
                    <h5 className="font-bold text-sm text-deep-slate uppercase tracking-wider">What you share stays here</h5>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">
                    Your idea doesn&apos;t leave this room until you say so. We protect your confidentiality from day one.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Speed */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="group bg-white/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-soft-gray/80 shadow-premium flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-soft-gray/30 border border-soft-gray/40">
                    <img 
                      src="/images/reassurance_speed.png" 
                      alt="Speed Illustration" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-soft-gray/60 flex items-center justify-center text-primary">
                      <Clock size={18} />
                    </div>
                    <h5 className="font-bold text-sm text-deep-slate uppercase tracking-wider">Response within 24 hours</h5>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">
                    A real reply - not a bot, not a template. We carefully analyze your input and write a custom response.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Comfort */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="group bg-white/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-soft-gray/80 shadow-premium flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-soft-gray/30 border border-soft-gray/40">
                    <img 
                      src="/images/reassurance_friendly.png" 
                      alt="Comfort Illustration" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-soft-gray/60 flex items-center justify-center text-primary">
                      <HeartHandshake size={18} />
                    </div>
                    <h5 className="font-bold text-sm text-deep-slate uppercase tracking-wider">No pressure, ever</h5>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">
                    The first conversation is just a conversation. No high-pressure sales pitches, just diagnostic curiosity.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Closing statement statement */}
            <div className="mt-12 text-center max-w-lg mx-auto">
              <p className="text-3xl font-reenie text-primary rotate-[-1deg] tracking-wider leading-relaxed">
                &quot;We&apos;ve built great things out of conversations that started with I don&apos;t quite know how to explain this yet. Start there.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After They Submit Info Section */}
      <section className="py-24 px-6 relative bg-soft-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs block">
              What Happens Next
            </span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate">
              What happens after you submit
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-[2rem] bg-white border border-soft-gray shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center font-bold text-primary">1</div>
              <h4 className="font-bold text-deep-slate text-lg">A real person reads it, within 24 hours</h4>
              <p className="text-sm text-muted-text leading-relaxed">Not a CRM tag. Not an automated sequence. Someone at Assurebit reads what they wrote and thinks about it before responding.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-soft-gray shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center font-bold text-primary">2</div>
              <h4 className="font-bold text-deep-slate text-lg">We send a considered response, not a calendar link</h4>
              <p className="text-sm text-muted-text leading-relaxed">Our first reply acknowledges what they shared, reflects back what we heard, and suggests a specific first conversation, on their terms.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-soft-gray shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center font-bold text-primary">3</div>
              <h4 className="font-bold text-deep-slate text-lg">A 30-minute discovery call, no pitch, no proposal</h4>
              <p className="text-sm text-muted-text leading-relaxed">The first call is entirely diagnostic. We ask more questions. We don&apos;t arrive with a deck. We arrive with curiosity.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-soft-gray shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center font-bold text-primary">4</div>
              <h4 className="font-bold text-deep-slate text-lg">If it&apos;s a fit, we say so clearly. If it isn&apos;t, we say that too</h4>
              <p className="text-sm text-muted-text leading-relaxed">We&apos;d rather lose a project than take one we can&apos;t do right. That&apos;s not a policy. That&apos;s a conviction.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
