"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "./Logo"

interface SubItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const navLinks: NavLink[] = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Product Building", href: "/services/product-building" },
      { name: "Software & Web Development", href: "/services/software-web-development" },
      { name: "Tech Consulting & Strategy", href: "/services/tech-consulting-strategy" },
      { name: "Design & Branding", href: "/services/design-branding" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesHovered, setServicesHovered] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
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
            const isServices = link.name === "Services"
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            
            if (isServices) {
              return (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => setServicesHovered(true)}
                  onMouseLeave={() => setServicesHovered(false)}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-1 text-[11px] 2xl:text-[13px] uppercase tracking-widest font-bold text-deep-slate transition-colors"
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive || servicesHovered ? "text-primary" : "group-hover:text-primary"
                    )}>
                      {link.name}
                    </span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", servicesHovered ? "rotate-180 text-primary" : "text-deep-slate group-hover:text-primary")} />
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {servicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl border border-soft-gray shadow-premium overflow-hidden z-50 p-2"
                      >
                        {link.subItems?.map((sub) => {
                          const isSubActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={cn(
                                "block px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200",
                                isSubActive 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-deep-slate hover:bg-soft-gray/50 hover:text-primary"
                              )}
                            >
                              {sub.name}
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

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
          <Link href="/contact" passHref>
            <button className="relative px-6 py-2.5 2xl:px-8 2xl:py-3 rounded-full bg-deep-slate text-white text-[11px] 2xl:text-[13px] uppercase tracking-widest font-bold overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(106,137,167,0.4)] cursor-pointer">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get a Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
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
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl lg:hidden flex flex-col gap-5 items-center max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => {
              const isServices = link.name === "Services"
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              
              if (isServices) {
                return (
                  <div key={link.name} className="w-full flex flex-col items-center">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "flex items-center gap-2 text-lg font-medium transition-colors cursor-pointer",
                        isActive ? "text-primary" : "text-deep-slate"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={18} className={cn("transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="w-full overflow-hidden flex flex-col items-center gap-3 mt-2 bg-soft-gray/30 py-3 rounded-2xl"
                        >
                          {link.subItems?.map((sub) => {
                            const isSubActive = pathname === sub.href
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={cn(
                                  "text-sm font-semibold uppercase tracking-wider transition-colors",
                                  isSubActive ? "text-primary" : "text-muted-text hover:text-primary"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

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
            <Link href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-4 rounded-full bg-deep-slate text-white font-bold hover:bg-primary transition-colors cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

