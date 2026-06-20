"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Logo } from "./Logo"

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "AI Services", href: "/ai" },
  { name: "Technologies", href: "/#technologies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "flex items-center justify-between w-full max-w-7xl px-5 2xl:px-8 transition-all duration-500 rounded-[3rem]",
          "border border-white/40 shadow-[0_8px_32px_rgba(56,73,89,0.12)]",

          isScrolled
            ? "py-2.5 2xl:py-3 bg-white/40 backdrop-blur-2xl mt-0 shadow-xl"
            : "py-3 2xl:py-5 bg-white/20 backdrop-blur-lg mt-3 2xl:mt-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 2xl:gap-4 group">
          <Logo className="w-10 h-10 2xl:w-14 2xl:h-14" />
          <div className="flex flex-col leading-none">

            <span className="font-bold text-[1.2rem] md:text-xl 2xl:text-2xl uppercase tracking-tighter text-deep-slate">Assure Bit</span>
            <span className="text-[9px] 2xl:text-[11px] uppercase tracking-[0.3em] font-bold text-primary/70 mt-1">Technologies</span>
          </div>
        </Link>




        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 lg:gap-8 2xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-[11px] 2xl:text-[13px] uppercase tracking-widest font-bold text-deep-slate transition-colors"
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive ? "text-primary" : "group-hover:text-primary"
                )}>
                  {link.name}
                </span>
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="relative px-6 py-2.5 2xl:px-8 2xl:py-3 rounded-full bg-deep-slate text-white text-[11px] 2xl:text-[13px] uppercase tracking-widest font-bold overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(106,137,167,0.4)]">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get a Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl lg:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive ? "text-primary" : "text-deep-slate"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <button className="w-full py-4 rounded-full bg-deep-slate text-white font-bold hover:bg-primary transition-colors">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
