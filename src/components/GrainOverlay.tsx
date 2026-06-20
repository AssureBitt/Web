"use client"

import React from "react"

export const GrainOverlay = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.35] mix-blend-overlay"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
