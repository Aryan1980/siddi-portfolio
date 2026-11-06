import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

export default function ProjectCard({ project, isActive, onPlay, onClose, index }) {
  const [isLoading, setIsLoading] = useState(false);

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
      className="group relative flex flex-col pt-5 pb-10 sm:pt-7 sm:pb-14 border-t border-neutral-900 transition-colors"
    >
      {/* 16:9 Aspect Ratio Media Container */}
      <div 
        className={`relative w-full aspect-video bg-neutral-950 rounded-sm overflow-hidden border transition-all duration-300 ${
          isActive 
            ? 'border-neutral-700 shadow-2xl ring-1 ring-white/10' 
            : 'border-neutral-900 hover:border-neutral-700'
        }`}
      >
        {/* Active State: Embedded Google Drive Preview */}
        {isActive ? (
          <div className="absolute inset-0 w-full h-full bg-black z-10">
            {isLoading && (
              <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black/90 text-neutral-400 font-mono text-xs gap-3">
                <div className="w-7 h-7 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
                <span className="tracking-widest uppercase text-[10px] text-neutral-400">
                  Loading Player...
                </span>
              </div>
            )}

            <iframe
              src={project.embedUrl}
              title={project.title}
              className="absolute inset-0 w-full h-full border-0 z-10"
              allow="autoplay; fullscreen"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />

            {/* Close Button - 44px Touch Target for Mobile */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] min-w-[44px] justify-center rounded-full bg-black/85 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-700 backdrop-blur-md transition-all text-[11px] font-mono tracking-wider cursor-pointer active:scale-95 shadow-lg"
                title="Close video (Esc)"
                aria-label="Close video"
              >
                <X className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden xs:inline">CLOSE [ESC]</span>
              </button>
            </div>
          </div>
        ) : (
          /* Thumbnail with Play Trigger */
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
            <picture className="w-full h-full block">
              {project.thumbnailWebp && (
                <source srcSet={project.thumbnailWebp} type="image/webp" />
              )}
              <img
                src={project.thumbnailFallback || project.thumbnail}
                alt={project.title}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/thumb:scale-[1.02]"
              />
            </picture>

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-black/15 group-hover/thumb:bg-black/0 transition-colors duration-300 pointer-events-none" />

            {/* Minimal Play Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white shadow-xl transition-all duration-300 group-hover/thumb:scale-110 group-hover/thumb:bg-white group-hover/thumb:text-black">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Brian Yoo Style Metadata: Left Title/Year, Right Note */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline font-mono text-xs">
        <div className="sm:col-span-6 flex flex-wrap items-baseline gap-2">
          <button
            onClick={() => (isActive ? onClose() : onPlay(project.id))}
            className="text-white hover:text-neutral-300 font-medium tracking-tight text-sm sm:text-base text-left transition-colors cursor-pointer"
          >
            {project.title}
          </button>
          <span className="text-neutral-500 text-xs">({project.year})</span>
        </div>

        <div className="sm:col-span-6 sm:text-right">
          <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
            {project.note}
          </p>
        </div>
      </div>
    </article>
  );
}
