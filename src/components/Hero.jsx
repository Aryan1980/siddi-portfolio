import React from 'react';
import { Play, ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero({ onPlayShowreel, projectsCount = 4 }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability / Tagline Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-900 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">AVAILABLE FOR PROJECTS & FREELANCE</span>
          </div>
          <div className="text-neutral-500 uppercase tracking-widest hidden sm:block">
            PORTFOLIO 2025–2026 / CHITKARA DESIGN SCHOOL
          </div>
        </div>

        {/* Main Title & Editorial Headline */}
        <div className="pt-10 md:pt-14 space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400">
              DIRECTOR · VIDEO EDITOR · MOTION DESIGNER
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white uppercase font-sans">
              SIDDARTH <br />
              <span className="text-neutral-500 font-light">MOHAN</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
            <div className="md:col-span-8">
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
                Crafting commercial spec films, comic-stylized motion, and high-impact visual rhythm. Bridging concept design with visceral editing and multi-track sound engineering.
              </p>
            </div>

            {/* Quick Reel & Work Actions */}
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 font-mono text-xs">
              <button
                onClick={onPlayShowreel}
                className="group flex items-center justify-between px-5 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-sm font-medium transition-all shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="tracking-wider uppercase">WATCH 2025–26 REEL</span>
                </div>
                <span className="text-neutral-600 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="#works"
                className="flex items-center justify-between px-5 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 rounded-sm transition-all"
              >
                <span className="tracking-wider uppercase">VIEW SELECTED WORKS [{String(projectsCount).padStart(2, '0')}]</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Ticker / Fast Spec Strip */}
        <div className="mt-14 pt-6 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase">Specialization</span>
            <span className="text-neutral-300">Spec Ads & Narrative Edits</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase">Education</span>
            <span className="text-neutral-300">Chitkara Design School</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase">Location</span>
            <span className="text-neutral-300">India / Worldwide Remote</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase">Direct Playback</span>
            <span className="text-neutral-300">Embedded Google Drive</span>
          </div>
        </div>

      </div>
    </section>
  );
}
