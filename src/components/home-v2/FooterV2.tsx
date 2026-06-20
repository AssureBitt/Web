"use client"

import React from "react"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Instagram } from "lucide-react"
import { Logo } from "../Logo"
import Link from "next/link"

export const FooterV2 = () => {
  return (
    <footer className="py-12 px-6 border-t border-soft-gray">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-4 w-fit">
              <Logo className="w-14 h-14" />
              <div className="flex flex-col leading-none">
                <span className="font-bold uppercase text-2xl tracking-tighter text-deep-slate">Assure Bit</span>
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary/70 mt-1">Technologies</span>
              </div>
            </Link>

            <div className="space-y-2">
              <h4 className="font-bold text-deep-slate text-sm">The Assure Bit Promise</h4>
              <p className="text-muted-text max-w-sm text-sm">
                When you bring an idea to Assure Bit, you're not handing it to a stranger. You're trusting us with something you care about and we take that seriously. We work with complete transparency, treat your vision with the same urgency we'd give our own, and never settle for "good enough" when "exactly right" is within reach.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialIcon href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialIcon href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-deep-slate mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-muted-text">
              <li><Link href="/about" className="hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent-blue transition-colors">Services</Link></li>
              <li><Link href="/ai" className="hover:text-accent-blue transition-colors">AI Services</Link></li>
              <li><Link href="/#technologies" className="hover:text-accent-blue transition-colors">Technologies</Link></li>
              <li><Link href="/#contact" className="hover:text-accent-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-deep-slate mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-text">
              <li>
                <a href="mailto:hello@assurebit.co" className="hover:text-accent-blue transition-colors">
                  hello@assurebit.co
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-accent-blue transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>123 Future Lane, Tech City, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-soft-gray flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-muted-text uppercase tracking-widest">
          <p>© 2026 Assure Bit. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.1 }}
    className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-deep-slate hover:bg-primary hover:text-white transition-all"
  >
    {icon}
  </motion.a>
)
