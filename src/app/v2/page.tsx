"use client"

import React from "react"
import { GrainOverlay } from "@/components/GrainOverlay"
import { BackgroundBlobs } from "@/components/BackgroundBlobs"
import { Navbar } from "@/components/Navbar"
import { HeroV2 } from "@/components/home-v2/HeroV2"
import { AboutV2 } from "@/components/home-v2/AboutV2"
import { ServicesV2 } from "@/components/home-v2/ServicesV2"
import { TrustSignalsV2 } from "@/components/home-v2/TrustSignalsV2"
import { HowWeWorkV2 } from "@/components/home-v2/HowWeWorkV2"
import { CtaV2 } from "@/components/home-v2/CtaV2"
import { FooterV2 } from "@/components/home-v2/FooterV2"

export default function HomeV2() {
  return (
    <main className="relative min-h-screen">
      <GrainOverlay />
      <BackgroundBlobs />
      <Navbar />
      <HeroV2 />
      <AboutV2 />
      <ServicesV2 />
      <TrustSignalsV2 />
      <HowWeWorkV2 />
      <CtaV2 />
      <FooterV2 />
    </main>
  )
}
