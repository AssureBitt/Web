"use client"

import React from "react"
import { motion } from "framer-motion"
import { GrainOverlay } from "@/components/GrainOverlay"
import { BackgroundBlobs } from "@/components/BackgroundBlobs"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { TechStack } from "@/components/TechStack"
import { IndustriesServed } from "@/components/IndustriesServed"
import { TrustSignals } from "@/components/TrustSignals"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { HowWeWork } from "@/components/HowWeWork"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import InteractiveScene from "@/components/InteractiveScene"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GrainOverlay />
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <About />

      <Services />
      <TechStack />
      <IndustriesServed />
      <TrustSignals />
      <Testimonials />
      <HowWeWork />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
