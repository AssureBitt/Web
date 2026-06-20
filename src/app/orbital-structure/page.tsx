"use client";

import React from 'react';
import { 
  Shield, Lock, Server, Database, Cloud, Zap, Cpu, Search, Activity, 
  Share2, Terminal, Code, Layers, Globe, Radio, Compass, Anchor, Radar, Hash 
} from 'lucide-react';

export default function OrbitalStructurePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden flex items-center justify-center p-8 pt-24">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
        {/* Left Column: Text & Stats */}
        <div className="z-20 bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-premium border border-white border-opacity-50">
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 tracking-tight leading-tight">
            Centralized Command <br />
            <span className="inline-block mt-2 px-4 py-1 rounded-xl text-black bg-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              Visualization
            </span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-md leading-relaxed">
            Monitor, manage, and scale your infrastructure from a single pane of glass.
            Real-time orbital tracking of all active system nodes around your central hub.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
             <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-bold text-black border-l-4 border-[#ccff00] pl-4">99.9%</span>
              <span className="text-sm font-semibold text-[var(--primary)] mt-2 pl-4 uppercase tracking-widest">Uptime</span>
            </div>
            <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-bold text-black border-l-4 border-[#ccff00] pl-4">24/7</span>
              <span className="text-sm font-semibold text-[var(--primary)] mt-2 pl-4 uppercase tracking-widest">Tracking</span>
            </div>
            <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-bold text-black border-l-4 border-[#ccff00] pl-4">&lt;10ms</span>
              <span className="text-sm font-semibold text-[var(--primary)] mt-2 pl-4 uppercase tracking-widest">Latency</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visualization */}
        <div className="relative flex items-center justify-center h-[800px] w-full isolate scale-75 sm:scale-90 lg:scale-100 origin-center lg:origin-left xl:origin-center">
          
          {/* Outer Ring Path */}
          <div className="absolute w-[720px] h-[720px] rounded-full border border-[#ccff00]/20 z-0"></div>
          {/* Middle Ring Path */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#ccff00]/50 z-0"></div>
          {/* Inner Ring Path */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-[#ccff00]/80 z-0"></div>

          {/* Central Hub */}
          <div className="absolute z-30 w-[144px] h-[144px] rounded-full bg-[#ccff00] text-black font-bold flex flex-col items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.6)] transition-all duration-300 cursor-pointer">
            <Activity size={36} className="mb-2" />
            <span className="tracking-widest text-sm">CORE</span>
          </div>

          {/* INNER RING (r=140) -> 6 large icons */}
          <div className="absolute z-20 w-[280px] h-[280px] animate-orbit-spin">
            {[Server, Database, Cloud, Shield, Lock, Zap].map((Icon, index) => {
              const angle = (index * 360) / 6;
              const delay = (index * 0.5) % 3; // Pseudo-random float delay
              return (
                <div key={`inner-${index}`} className="absolute top-1/2 left-1/2">
                  <div 
                    className="absolute"
                    style={{ transform: `rotate(${angle}deg) translateY(-140px)` }}
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-spin-reverse">
                      <div 
                        className="w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-lg border border-[#ccff00]/30 text-[var(--foreground)]"
                        style={{ animation: `float 6s ease-in-out infinite ${delay}s` }}
                      >
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MIDDLE RING (r=250) -> 10 medium icons, Reverse Rotation */}
          <div className="absolute z-10 w-[500px] h-[500px] animate-orbit-spin-reverse">
            {[Cpu, Search, Share2, Terminal, Code, Layers, Globe, Radio, Compass, Anchor].map((Icon, index) => {
              const angle = (index * 360) / 10;
              const delay = (index * 0.7) % 4;
              return (
                <div key={`middle-${index}`} className="absolute top-1/2 left-1/2">
                  <div 
                    className="absolute"
                    style={{ transform: `rotate(${angle}deg) translateY(-250px)` }}
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-spin">
                      <div 
                        className="w-[44px] h-[44px] bg-gray-50 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[var(--primary)]"
                        style={{ animation: `float 6s ease-in-out infinite ${delay}s` }}
                      >
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* OUTER RING (r=360) -> 9 small icons + 1 pill */}
          <div className="absolute z-0 w-[720px] h-[720px] animate-orbit-spin">
            {[Radar, Hash, Shield, Database, Code, Globe, Server, Activity, Terminal].map((Icon, index) => {
              // Reserve the 0 angle (12 o'clock) for the pill. So start indexing icons from 1.
              const angle = ((index + 1) * 360) / 10; 
              const delay = (index * 0.3) % 5;
              return (
                <div key={`outer-${index}`} className="absolute top-1/2 left-1/2">
                  <div 
                    className="absolute"
                    style={{ transform: `rotate(${angle}deg) translateY(-360px)` }}
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-spin-reverse">
                      <div 
                        className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow border border-gray-100 text-[var(--muted)]"
                        style={{ animation: `float 6s ease-in-out infinite ${delay}s` }}
                      >
                        <Icon size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pulsing "+800" Pill on Outer Ring */}
            <div className="absolute top-1/2 left-1/2">
               <div 
                  className="absolute"
                  style={{ transform: `rotate(0deg) translateY(-360px)` }}
                >
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-spin-reverse">
                    <div 
                      className="bg-[#ccff00] text-black font-bold flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.5)] transition-all duration-300 rounded-full whitespace-nowrap px-[32px] py-[16px] animate-pulse cursor-pointer"
                    >
                      +800 Active Nodes
                    </div>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
