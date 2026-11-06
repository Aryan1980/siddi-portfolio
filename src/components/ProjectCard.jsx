import React, { useState, useEffect } from 'react';
import { Play, X, Film } from 'lucide-react';

export default function ProjectCard({ project, isActive, onPlay, onClose, index }) {
  const [isLoading, setIsLoading] = useState(false);

  // When this video becomes active, set loading state until iframe triggers
  useEffect(() => {
    if (isActive) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isActive]);

  return (
    <article 
      id={project.id}
      className="group relative flex flex-col pt-8 pb-16 md:pt-12 md:pb-20 border-t border-neutral-800/80 transition-colors"
    >
      {/* Top Project Label Line */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 tracking-wider uppercase">
        <div className="flex items-center gap-3">
          <span className="text-neutral-500">[{String(index + 1).padStart(2, '0')}]</span>
          <span className="text-neutral-200 font-semibold tracking-wide">{project.title}</span>
          <span className="text-neutral-500 hidden sm:inline">/</span>
          <span className="text-neutral-400 hidden sm:inline">{project.category}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-400">{project.duration}</span>
          <span className="text-neutral-400">{project.year}</span>
        </div>
      </div>

      {/* Video / Thumbnail Container - Fixed 16:9 Aspect Ratio */}
      <div 
        className={`relative w-full aspect-video bg-neutral-950 rounded-sm overflow-hidden border transition-all duration-500 ${
          isActive 
            ? 'border-neutral-700 shadow-2xl ring-1 ring-white/10' 
            : 'border-neutral-800/80 hover:border-neutral-600'
        }`}
      >
        {/* State 1: Active Google Drive Video Player */}
        {isActive ? (
          <div className="absolute inset-0 w-full h-full bg-black z-10">
            {/* Loading Indicator while iframe loads */}
            {isLoading && (
              <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black/90 text-neutral-400 font-mono text-xs gap-3">
                <div className="w-8 h-8 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
                <span className="tracking-widest uppercase text-[11px] text-neutral-300">
                  Loading Player...
                </span>
              </div>
            )}

            {/* Embedded Google Drive Video Preview iframe */}
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="absolute inset-0 w-full h-full border-0 z-10"
              allow="autoplay; fullscreen"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />

            {/* Floating Top Control Bar (Always visible over video) */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="group/btn flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-neutral-500 backdrop-blur-md transition-all shadow-lg text-xs font-mono tracking-wider cursor-pointer"
                title="Close video and return to thumbnail (Esc)"
                aria-label="Close video"
              >
                <X className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white transition-colors" />
                <span>CLOSE [ESC]</span>
              </button>
            </div>
          </div>
        ) : (
          /* State 2: Cinematic Thumbnail with Play Interaction */
          <div 
            onClick={() => onPlay(project.id)}
            className="group/thumb relative w-full h-full cursor-pointer overflow-hidden select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPlay(project.id);
              }
            }}
            aria-label={`Play ${project.title}`}
          >
            {/* Dark background placeholder */}
            <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center pointer-events-none">
              <Film className="w-10 h-10 text-neutral-900" />
            </div>

            {/* High Performance WebP/JPG Picture */}
            <picture className="w-full h-full block relative z-[1]">
              {project.thumbnailWebp && (
                <source srcSet={project.thumbnailWebp} type="image/webp" />
              )}
              <img
                src={project.thumbnailFallback || project.thumbnail}
                alt={project.title}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover/thumb:scale-[1.025] group-hover/thumb:brightness-105"
              />
            </picture>

            {/* Subtle Gradient Overlays for Cinematic Depth */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover/thumb:opacity-40 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 z-[2] bg-black/20 group-hover/thumb:bg-black/0 transition-colors duration-300 pointer-events-none" />

            {/* Play Button Indicator - Center Hover Experience */}
            <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all duration-300 transform scale-95 group-hover/thumb:scale-100 group-hover/thumb:border-white/50 group-hover/thumb:bg-black/90">
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-black" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 group-hover/thumb:text-white">
                  Watch Film
                </span>
              </div>
            </div>

            {/* Bottom-left Category Tag Overlay */}
            <div className="absolute bottom-4 left-4 z-[3] flex items-center gap-2 pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                {project.category}
              </span>
            </div>

            {/* Bottom-right Aspect Indicator */}
            <div className="absolute bottom-4 right-4 z-[3] flex items-center gap-2 pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm border border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-400">
                {project.duration}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Metadata & Editorial Details Underneath */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        {/* Left Column (Cols 1-5): Title, Year, Client, Action */}
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-baseline gap-3">
            <h3 
              onClick={() => (isActive ? onClose() : onPlay(project.id))}
              className="text-lg md:text-xl font-medium tracking-tight text-white hover:text-neutral-300 cursor-pointer transition-colors inline-flex items-center gap-2 group/title"
            >
              <span>{project.title}</span>
              <span className="text-neutral-600 font-mono text-sm group-hover/title:translate-x-0.5 transition-transform">
                ({project.year})
              </span>
            </h3>
          </div>

          <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            {project.client}
          </p>

          <div className="pt-2">
            <button
              onClick={() => (isActive ? onClose() : onPlay(project.id))}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-300 hover:text-white uppercase transition-colors group/link cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover/link:bg-white" />
              <span>{isActive ? 'Close Video Player' : 'Play Video Inline'}</span>
              <span className="text-neutral-500 group-hover/link:text-white transition-transform group-hover/link:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column (Cols 6-12): Description & Roles */}
        <div className="md:col-span-7 space-y-4">
          <p className="text-sm md:text-base leading-relaxed text-neutral-300/90 font-light">
            {project.description}
          </p>

          {/* Role & Tags */}
          <div className="pt-1 flex flex-col gap-2.5 text-xs font-mono text-neutral-400">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-neutral-500 uppercase tracking-wider">Role:</span>
              <span className="text-neutral-300">{project.role}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-[11px]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
