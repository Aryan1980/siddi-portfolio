import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';

export default function SidebarLeft({ profile, onPlayShowreel }) {
  return (
    <aside className="w-full lg:w-[280px] xl:w-[320px] lg:flex-shrink-0 flex flex-col justify-between py-6 lg:py-10 px-4 sm:px-6 lg:px-8 lg:border-r border-neutral-900 font-mono text-xs text-neutral-400 space-y-8">
      {/* Brand Header */}
      <div className="space-y-6">
        <div>
          <a href="#" className="text-white hover:text-neutral-300 transition-colors uppercase font-bold text-sm tracking-tight block">
            {profile.name}
          </a>
          <span className="text-neutral-500 text-[11px] uppercase tracking-wider block mt-0.5">
            / {profile.title}
          </span>
        </div>

        {/* Contact Links (Like brianyebtrsi.com) */}
        <div className="space-y-2 pt-2 border-t border-neutral-900">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            CONTACT
          </span>
          <div className="flex flex-col space-y-1.5 text-xs">
            <a 
              href={`mailto:${profile.email}`}
              className="text-neutral-300 hover:text-white transition-colors truncate"
            >
              {profile.email}
            </a>
            <a 
              href={profile.links.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>Instagram</span>
              <span className="text-neutral-600">↗</span>
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <span className="text-neutral-600">↗</span>
            </a>
            <a 
              href={profile.links.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>YouTube</span>
              <span className="text-neutral-600">↗</span>
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div className="space-y-2 pt-4 border-t border-neutral-900">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            ABOUT ME
          </span>
          <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
            {profile.about}
          </p>
        </div>

        {/* Software Stack */}
        <div className="space-y-2 pt-4 border-t border-neutral-900">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            SOFTWARE
          </span>
          <ul className="space-y-1 text-neutral-300 text-xs">
            {profile.software.map((sw, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span>{sw}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Reel CTA */}
      <div className="pt-6 border-t border-neutral-900 hidden lg:block">
        <button
          onClick={onPlayShowreel}
          className="w-full text-left py-2 px-3 rounded bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-between"
        >
          <span>▶ SHOWREEL 2026</span>
          <span className="text-neutral-500">→</span>
        </button>
      </div>
    </aside>
  );
}
