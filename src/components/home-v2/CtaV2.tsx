"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send } from "lucide-react"

export const CtaV2 = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-v2" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-2xl p-8 md:p-16 rounded-[4rem] border border-white shadow-2xl"
        >
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
              Your idea has been <br />
              <span className="text-primary">waiting long enough.</span>
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Stop sitting on a vision that deserves to exist. Tell us what you're building, or what you wish you were building and we'll take it from there.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Project Type</label>
              <select name="projectType" className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all appearance-none">
                <option value="Software & Web Development">Software & Web Development</option>
                <option value="Design & Branding">Design & Branding</option>
                <option value="Tech Consulting">Tech Consulting</option>
                <option value="Product Building (SaaS / Apps)">Product Building (SaaS / Apps)</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Tell us about your idea</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What are you building, or what do you wish you were building?"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-deep-slate text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 transition-all disabled:opacity-70"
                type="submit"
              >
                {isSubmitting ? 'Sending...' : 'Start the conversation'}
                {!isSubmitting && <ArrowRight size={20} />}
              </motion.button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center mt-4 font-medium">Message sent successfully! We&apos;ll be in touch soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-4 font-medium">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />
    </section>
  )
}
