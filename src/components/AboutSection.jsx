import React, { useState } from 'react';
import { Plus, Minus, GraduationCap, Wrench, Sparkles, FolderGit2 } from 'lucide-react';

export default function AboutSection({ profile }) {
  // Collapsible section states like Brian Yoo's cv-vol details
  const [openSections, setOpenSections] = useState({
    education: true,
    software: true,
    experience: true,
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-900 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
              [ABOUT & PROFILE]
            </h2>
            <span className="text-neutral-500">/</span>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              SIDDARTH MOHAN
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
            DISCIPLINE & BACKGROUND
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Cols 1-5): Bio & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug">
              Bridging high-concept storytelling with visceral audio-visual rhythm.
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              {profile.bio}
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Every cut is driven by cadence. Whether crafting rapid-fire product spec ads or evocative monochrome noir vignettes, the focus remains on pacing, tactile sound design, and memorable visual texture.
            </p>

            <div className="pt-4 border-t border-neutral-900/80">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-neutral-400 uppercase">Contact:</span>
                <a 
                  href={`mailto:${profile.email}`} 
                  className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-neutral-700 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Education, Software, Experience (Accordion/Editorial List) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. EDUCATION (Requested by User) */}
            <div id="education" className="border border-neutral-800/80 rounded-sm bg-neutral-950/40 p-6 transition-colors">
              <button
                onClick={() => toggleSection('education')}
                className="w-full flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                    Education
                  </span>
                </div>
                <div className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {openSections.education ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {openSections.education && (
                <div className="mt-6 pt-6 border-t border-neutral-900 space-y-4">
                  {/* Chitkara Design School */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                    <div>
                      <h4 className="text-white font-medium">Chitkara Design School</h4>
                      <p className="text-xs font-mono text-neutral-400">Design Degree</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      (2025–2029)
                    </span>
                  </div>

                  <div className="border-t border-neutral-900/60" />

                  {/* Swami Vivekanand Public School */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                    <div>
                      <h4 className="text-neutral-200 font-medium">Swami Vivekanand Public School</h4>
                      <p className="text-xs font-mono text-neutral-400">High School</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      (Graduated 2024)
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. SOFTWARE & TOOLKIT */}
            <div id="software" className="border border-neutral-800/80 rounded-sm bg-neutral-950/40 p-6 transition-colors">
              <button
                onClick={() => toggleSection('software')}
                className="w-full flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                    Software & Toolkit
                  </span>
                </div>
                <div className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {openSections.software ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {openSections.software && (
                <div className="mt-6 pt-6 border-t border-neutral-900">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {profile.software.map((tool, idx) => (
                      <div 
                        key={idx}
                        className="px-3 py-2 rounded bg-neutral-900/60 border border-neutral-800/80 text-xs font-mono text-neutral-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-neutral-500" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. EXPERIENCE & SPECIALIZATIONS */}
            <div className="border border-neutral-800/80 rounded-sm bg-neutral-950/40 p-6 transition-colors">
              <button
                onClick={() => toggleSection('experience')}
                className="w-full flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                    Capabilities & Highlights
                  </span>
                </div>
                <div className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {openSections.experience ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {openSections.experience && (
                <div className="mt-6 pt-6 border-t border-neutral-900 space-y-4">
                  {profile.experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-neutral-200 font-medium">{exp.role}</span>
                        <span className="text-xs font-mono text-neutral-400">({exp.period})</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
