import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Wrench, ChevronRight } from 'lucide-react';

export default function Navbar({ onBookClick, garageInfo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Car AC', href: '#ac-specialist' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Get Quote', href: '#calculator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Notification / Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-xs sm:text-sm py-1.5 px-4 font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-bold tracking-wide">OPEN 24 HOURS</span>
            <span className="hidden md:inline text-red-100">| 24x7 Emergency Breakdown & Rapid AC Assistance across Ahmedabad</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm ml-auto">
            <a 
              href="tel:08866051412" 
              className="flex items-center gap-1.5 hover:text-amber-200 transition font-bold bg-black/20 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>088660 51412</span>
            </a>
            <a 
              href={garageInfo.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 hover:text-red-100 transition"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Tragad, Zundal, Ahmedabad</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5' 
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Official Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="h-11 sm:h-12 w-auto bg-white p-1 rounded-xl border border-slate-200/90 shadow-sm flex items-center justify-center group-hover:scale-105 transition transform">
              <img 
                src="/mk-logo.png" 
                alt="MK CAR AC & ACCESSORIES Logo" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">MK CAR</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 bg-cyan-100 text-cyan-800 border border-cyan-200 rounded tracking-wider">AC & MORE</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase mt-0.5">
                AC Specialist & Accessories
              </p>
              <p className="text-[9px] text-amber-700 font-bold tracking-wider uppercase hidden sm:block">
                Mogal Maa • Khodiyar Maa
              </p>
            </div>
          </a>

          {/* Desktop Nav Links with strict whitespace-nowrap and clean spacing */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-cyan-600 transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:08866051412"
              className="whitespace-nowrap px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>Call 24/7</span>
            </a>
            <button
              onClick={onBookClick}
              className="whitespace-nowrap px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-cyan-600/20 transition transform hover:-translate-y-0.5"
            >
              Book Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-md bg-cyan-600 text-white text-xs font-bold shrink-0"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href="tel:08866051412"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-600 text-white text-xs font-bold shadow-sm"
              >
                <Phone className="w-4 h-4" /> Call 24 Hours
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-600 text-white text-xs font-bold shadow-sm"
              >
                <Wrench className="w-4 h-4" /> Book Service
              </button>
            </div>
            <div className="space-y-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-slate-700 hover:text-cyan-600 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
              <p className="flex items-center gap-1.5 mb-1 font-semibold text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                Shop no.2, Star Elegance, near CBD Mall, Tragad, Ahmedabad
              </p>
              <p className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Open 24 hours every day
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
