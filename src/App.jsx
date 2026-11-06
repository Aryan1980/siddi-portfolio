import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { Play } from 'lucide-react';

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const { profile, projects } = portfolioData;

  // Global keyboard listener: ESC closes active video
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideoId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Play a specific video (closes any other playing video)
  const handlePlayVideo = (id) => {
    setActiveVideoId(id);
  };

  // Close active video
  const handleCloseVideo = () => {
    setActiveVideoId(null);
  };

  // Play showreel directly from header or hero
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

  // Filter projects if needed
  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => 
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) || 
        p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-[#070707] text-[#e0e0e0] font-sans selection:bg-white selection:text-black relative">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Navigation Header */}
      <Header 
        onPlayShowreel={handlePlayShowreel}
        isShowreelActive={activeVideoId === 'showreel-2025-26'}
      />

      <main>
        {/* Cinematic Hero */}
        <Hero 
          onPlayShowreel={handlePlayShowreel}
          projectsCount={projects.length}
        />

        {/* Works Showcase Section */}
        <section id="works" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Works Section Header Bar (Brian Yoo inspiration: WORKS ▶ REEL) */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-neutral-900 mb-8">
            <div className="flex items-baseline gap-6">
              <h2 className="text-xl sm:text-2xl font-mono uppercase tracking-wider text-white">
                WORKS
              </h2>
              <button
                onClick={handlePlayShowreel}
                className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white pb-0.5 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>PLAY SHOWREEL 2025–26</span>
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-neutral-500 uppercase mr-1">Filter:</span>
              {['ALL', 'COMMERCIAL', 'SHORT'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeFilter === f 
                      ? 'bg-white text-black font-semibold' 
                      : 'text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Notice: Inline Google Drive playback explanation */}
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pb-8">
            <span>● SELECT ANY THUMBNAIL TO STREAM EMBEDDED PREVIEW IN-PAGE</span>
            <span className="hidden sm:inline">NO EXTERNAL REDIRECTS · FULLSCREEN ENABLED</span>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            {filteredProjects.map((project, index) => (
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
        </section>

        {/* About & Education & Software Section */}
        <AboutSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}
