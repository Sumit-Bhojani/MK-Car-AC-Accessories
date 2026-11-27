import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Star } from 'lucide-react';

export default function Footer({ garageInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md shrink-0">
                <img 
                  src="/mk-logo.png" 
                  alt="MK CAR AC & ACCESSORIES Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block">MK CAR AC & ACCESSORIES</span>
                <span className="text-[10px] text-amber-400 font-bold tracking-wider uppercase">
                  Mogal Maa • Khodiyar Maa
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Ahmedabad's dedicated car air conditioning laboratory and bespoke accessories boutique. Open 24 hours for emergency roadside assist and full mechanical repairs.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5 Rating</span>
              <span className="text-slate-500">| Google Verified Garage</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition whitespace-nowrap">Services Directory</a></li>
              <li><a href="#ac-specialist" className="hover:text-cyan-400 transition whitespace-nowrap">Car AC Specialists</a></li>
              <li><a href="#accessories" className="hover:text-cyan-400 transition whitespace-nowrap">Accessories & Audio</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition whitespace-nowrap">Get a Quote</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition whitespace-nowrap">Why Choose MK Car</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition whitespace-nowrap">Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-cyan-400 transition whitespace-nowrap">Workshop Location</a></li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">AC & Auto Care</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#ac-specialist" className="hover:text-cyan-400 transition whitespace-nowrap">Pure R134a Gas Charge</a></li>
              <li><a href="#ac-specialist" className="hover:text-cyan-400 transition whitespace-nowrap">Cooling Coil Replacements</a></li>
              <li><a href="#ac-specialist" className="hover:text-cyan-400 transition whitespace-nowrap">AC Compressor Overhaul</a></li>
              <li><a href="#accessories" className="hover:text-cyan-400 transition whitespace-nowrap">Android Screens & CarPlay</a></li>
              <li><a href="#accessories" className="hover:text-cyan-400 transition whitespace-nowrap">Symphony Ambient Light</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition whitespace-nowrap">24/7 Roadside Assistance</a></li>
            </ul>
          </div>

          {/* Address & Direct Details */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Workshop Location</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  Shop no.2, Star Elegance, near THE CBD MALL, near SP Ring Road, Tragad, Zundal, Ahmedabad 382424
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">Open 24 Hours / 7 Days</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:08866051412" className="text-white hover:text-cyan-400 font-bold">
                  088660 51412
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} MK CAR AC & ACCESSORIES. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href={garageInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              Google Maps
            </a>
            <span>•</span>
            <span className="text-slate-400">Plus Code: 4HJC+FH Ahmedabad</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
