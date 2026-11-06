import React, { useState, useEffect } from 'react';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import ProjectCard from './components/ProjectCard';
import { portfolioData } from './data/portfolioData';
import { Play, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const { profile, projects } = portfolioData;

  // Global ESC key listener to close active video
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideoId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePlayVideo = (id) => {
    setActiveVideoId(id);
  };

  const handleCloseVideo = () => {
    setActiveVideoId(null);
  };

  const handlePlayShowreel = () => {
    const showreel = projects.find(p => p.id === 'showreel-2025-26') || projects[0];
    if (showreel) {
      setActiveVideoId(showreel.id);
      const el = document.getElementById(showreel.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#070707] text-[#dedede] font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Subtle Analog Grain Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Mobile & Tablet Header (< 1024px) */}
      <header className="lg:hidden sticky top-0 z-40 w-full bg-[#070707]/90 backdrop-blur-md border-b border-neutral-900 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div>
          <a href="#" className="font-mono text-xs sm:text-sm font-bold tracking-tight text-white uppercase block">
            {profile.name}
          </a>
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
            {profile.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayShowreel}
            className="flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-full bg-neutral-900 hover:bg-white hover:text-black text-neutral-200 border border-neutral-800 text-[11px] font-mono tracking-wider uppercase transition-all cursor-pointer active:scale-95"
            aria-label="Play Showreel"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>REEL</span>
          </button>
          
          <a
            href={`mailto:${profile.email}`}
            className="px-3.5 py-1.5 min-h-[40px] flex items-center justify-center rounded-full bg-white text-black text-[11px] font-mono tracking-wider uppercase hover:bg-neutral-200 transition-colors font-medium"
          >
            CONTACT
          </a>
        </div>
      </header>

      {/* 3-Column Layout (Desktop) / Mobile-First Fluid Stack */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT COLUMN: About Me, Software, Contact */}
        {/* On desktop: sticky column on left. On mobile: placed below projects */}
        <div className="order-2 lg:order-1 w-full lg:w-[280px] xl:w-[320px] lg:flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-t lg:border-t-0 lg:border-r border-neutral-900">
          <SidebarLeft profile={profile} onPlayShowreel={handlePlayShowreel} />
        </div>

        {/* MIDDLE COLUMN: Video Projects Feed (Center of website) */}
        {/* On mobile: order-1 so visitor sees projects first */}
        <main className="order-1 lg:order-2 flex-1 min-w-0 w-full px-4 sm:px-6 md:px-8 xl:px-12 py-6 sm:py-10">
          
          {/* Header Bar for Works: WORKS ▶ REEL */}
          <div className="flex items-baseline justify-between pb-4 sm:pb-6 border-b border-neutral-900 mb-2 sm:mb-4">
            <div className="flex items-baseline gap-4 sm:gap-6 font-mono">
              <h1 className="text-base sm:text-lg text-white font-medium tracking-wider uppercase">
                WORKS
              </h1>
              <button
                onClick={handlePlayShowreel}
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white pb-0.5 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <Play className="w-2 h-2 fill-current" />
                <span>▶ REEL 2025–26</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
              [04 PROJECTS]
            </span>
          </div>

          {/* Video Projects List (16:9 Aspect Ratio) */}
          <div className="w-full space-y-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeVideoId === project.id}
                onPlay={handlePlayVideo}
                onClose={handleCloseVideo}
              />
            ))}
          </div>

          {/* Minimal Bottom Footer */}
          <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
            <div>
              <span>© 2026 SIDDARTH MOHAN</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </footer>

        </main>

        {/* RIGHT COLUMN: Qualifications, Education, Experience, Studio Clock */}
        {/* On desktop: sticky column on right. On mobile: placed after about me */}
        <div className="order-3 w-full lg:w-[280px] xl:w-[320px] lg:flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-t lg:border-t-0 lg:border-l border-neutral-900">
          <SidebarRight profile={profile} />
        </div>

      </div>
    </div>
  );
}
