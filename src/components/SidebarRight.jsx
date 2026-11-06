import React, { useState, useEffect } from 'react';

export default function SidebarRight({ profile }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full lg:w-[280px] xl:w-[320px] lg:flex-shrink-0 flex flex-col justify-between py-6 lg:py-10 px-4 sm:px-6 lg:px-8 lg:border-l border-neutral-900 font-mono text-xs text-neutral-400 space-y-8">
      <div className="space-y-6">
        
        {/* Section Title */}
        <div>
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            MORE OF ME
          </span>
          <h2 className="text-white font-medium text-xs uppercase tracking-wider mt-0.5">
            QUALIFICATIONS & BACKGROUND
          </h2>
        </div>

        {/* Education (Explicit user requirement) */}
        <div className="space-y-3 pt-2 border-t border-neutral-900">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            EDUCATION
          </span>
          
          <div className="space-y-3 text-xs">
            {profile.education.map((edu, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-neutral-200 block font-medium">
                  {edu.institution}
                </span>
                <span className="text-neutral-500 text-[11px] block">
                  ({edu.period})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-3 pt-4 border-t border-neutral-900">
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
            EXPERIENCE
          </span>
          
          <div className="space-y-3 text-xs">
            {profile.experience.map((exp, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-neutral-200 block font-medium">
                  {exp.role}
                </span>
                <span className="text-neutral-500 text-[11px] block">
                  ({exp.period})
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Studio Location & Local Clock */}
      <div className="pt-6 border-t border-neutral-900 text-xs space-y-1">
        <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
          STUDIO TIME
        </span>
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{time || '00:00:00'} IST</span>
        </div>
        <span className="text-neutral-500 text-[11px] block">
          India · UTC +5:30
        </span>
      </div>
    </aside>
  );
}
