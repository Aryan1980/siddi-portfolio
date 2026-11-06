import React, { useState, useEffect } from 'react';
import { Play, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onPlayShowreel, isShowreelActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORKS', href: '#works' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'SOFTWARE', href: '#software' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070707]/90 backdrop-blur-md border-b border-neutral-800/80 py-4 shadow-xl' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="group flex items-baseline gap-2 text-white hover:text-neutral-300 transition-colors"
            >
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight uppercase">
                SIDDARTH MOHAN
              </span>
              <span className="font-mono text-xs text-neutral-500 tracking-wider hidden sm:inline">
                / FILM & MOTION
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Quick Showreel Button */}
            <button
              onClick={onPlayShowreel}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider transition-all cursor-pointer ${
                isShowreelActive
                  ? 'bg-white text-black border-white'
                  : 'bg-neutral-900/80 hover:bg-white hover:text-black text-neutral-200 border-neutral-700 hover:border-white'
              }`}
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>REEL 2025–26</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onPlayShowreel}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[11px] font-mono text-neutral-200"
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>REEL</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white py-1 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
