import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';

export default function Footer({ profile }) {
  const [currentTime, setCurrentTime] = useState('');

  // Live clock formatted in Indian Standard Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-neutral-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Call to Action Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
              [INITIATE COLLABORATION]
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
              LET'S CREATE SOMETHING <br />
              <span className="text-neutral-500">EXTRAORDINARY.</span>
            </h3>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-2 font-mono text-xs">
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-sm font-medium transition-all shadow-xl tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>SEND AN INQUIRY</span>
            </a>
            <span className="text-neutral-400 text-[11px] pt-1">
              Usually responds within 24–48 hours
            </span>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-neutral-900/80 text-xs font-mono">
          {/* Col 1: Direct Contact */}
          <div className="space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">
              Direct Contact
            </span>
            <div className="space-y-1.5">
              <a 
                href={`mailto:${profile.email}`} 
                className="text-white hover:text-neutral-300 block transition-colors"
              >
                {profile.email}
              </a>
              <span className="text-neutral-400 block">
                Remote & On-site
              </span>
            </div>
          </div>

          {/* Col 2: Social & Profiles */}
          <div className="space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">
              Social & Network
            </span>
            <ul className="space-y-1.5">
              <li>
                <a 
                  href={profile.links.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a 
                  href={profile.links.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a 
                  href={profile.links.youtube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Education & Studio */}
          <div className="space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">
              Academic Affiliation
            </span>
            <div className="space-y-1 text-neutral-400">
              <p className="text-neutral-300">Chitkara Design School</p>
              <p className="text-[11px]">B.Des (2025–2029)</p>
              <p className="text-[11px] text-neutral-400 pt-1">Swami Vivekanand Public School (2024)</p>
            </div>
          </div>

          {/* Col 4: Timezone & Location */}
          <div className="space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">
              Studio Timezone
            </span>
            <div className="space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                <span className="text-white font-medium text-sm">
                  {currentTime || '00:00:00'} IST
                </span>
              </div>
              <span className="text-neutral-400 block text-[11px]">
                New Delhi / India (UTC +5:30)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© 2026 SIDDARTH MOHAN. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-neutral-400">
              CINEMATIC VIDEO ARCHIVE
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
