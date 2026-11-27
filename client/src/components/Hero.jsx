import React from 'react';
import { Snowflake, Wrench, ShieldCheck, MapPin, Phone, Star, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function Hero({ onBookClick, garageInfo }) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-pattern border-b border-slate-200">
      {/* Background ambient glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-200/35 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-200/25 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-100/90 border border-cyan-200 text-cyan-800 shadow-sm whitespace-nowrap">
                <Snowflake className="w-3.5 h-3.5 text-cyan-600 animate-spin" style={{ animationDuration: '6s' }} />
                #1 CAR AC SPECIALIST IN AHMEDABAD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100/90 border border-emerald-200 text-emerald-800 shadow-sm whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                OPEN 24 HOURS
              </span>
            </div>

            {/* Main Title with generous tracking and line height */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Ice Cold Cooling. <br />
              <span className="text-gradient">Flawless Accessories.</span> <br />
              Total Car Care.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
              Welcome to <span className="text-slate-900 font-bold">MK CAR AC & ACCESSORIES</span>, your all-in-one automobile workshop at Tragad & Zundal, Ahmedabad. Specializing in high-precision Car AC diagnostics, custom styling, Android touchscreens, and complete mechanical maintenance.
            </p>

            {/* USPs Quick Bullet Highlights with clean spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-700 text-left max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold whitespace-nowrap">100% Pure R134a Gas</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold whitespace-nowrap">Zero Wire-Cut Fitting</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold whitespace-nowrap">24x7 Roadside Help</span>
              </div>
            </div>

            {/* Call to Actions with clean gaps */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm sm:text-base shadow-md shadow-cyan-600/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:08866051412"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm transition flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-red-600 animate-bounce" />
                <span>Call 088660 51412</span>
              </a>

              <a
                href={garageInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm border border-slate-200 transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-cyan-600" />
                <span>Directions</span>
              </a>
            </div>

            {/* Social Proof Bar with clean margin-top and padding */}
            <div className="pt-6 mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-xs text-slate-500 border-t border-slate-200/90">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 text-sm">4.9 / 5</span>
                <span>(Google Reviews)</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
              <div className="whitespace-nowrap">
                <span className="font-bold text-slate-900">5,000+</span> Happy Car Owners
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
              <div className="whitespace-nowrap">
                <span className="font-bold text-slate-900">Zundal & Tragad</span> SP Ring Road
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Box with Photo Cover & Official Logo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
                
                {/* Photo Banner at top of card */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                  <img 
                    src="/images/hero-car.jpg" 
                    alt="Luxury Car Cockpit & AC"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="font-bold text-emerald-300">Open 24/7 Now</span>
                    </div>
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold text-[11px] border border-white/20">
                      Tragad, Zundal
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Header with Official Logo */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/mk-logo.png" 
                        alt="MK Official Logo" 
                        className="w-12 h-12 object-contain rounded-xl border border-slate-200 p-0.5 bg-white shadow-sm shrink-0"
                      />
                      <div>
                        <h3 className="text-slate-900 font-bold text-base leading-tight">Instant Service Hotline</h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Direct Workshop Line • Quick Bay Allotment
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0 whitespace-nowrap">
                      Ahmedabad
                    </span>
                  </div>

                  {/* Popular Urgent Services Grid */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                          <Snowflake className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition truncate">Car AC Gas Top-up & Leakage</div>
                          <div className="text-[11px] text-slate-500 truncate">Pure R134a • Pressure Testing</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-200 shrink-0 whitespace-nowrap">
                        Reach Out
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition truncate">Cooling Coil / Evaporator Fix</div>
                          <div className="text-[11px] text-slate-500 truncate">Dashboard removal without rattles</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-200 shrink-0 whitespace-nowrap">
                        Best Rates
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition truncate">Android Touchscreen & Audio</div>
                          <div className="text-[11px] text-slate-500 truncate">Apple CarPlay • 360 Camera</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200 shrink-0 whitespace-nowrap">
                        Genuine
                      </span>
                    </div>
                  </div>

                  {/* Direct Emergency Call Button */}
                  <div className="pt-2">
                    <a
                      href="tel:08866051412"
                      className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-red-600/20 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 animate-pulse" />
                      <span>Emergency Call: 088660 51412</span>
                    </a>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Near The CBD Mall, SP Ring Road, Tragad, Zundal
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
