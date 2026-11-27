import React from 'react';
import { MapPin, Clock, Phone, Navigation, Compass, ExternalLink, ShieldCheck, Check } from 'lucide-react';

export default function LocationAndHours({ garageInfo }) {
  return (
    <section id="location" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-cyan-600" />
            FIND OUR WORKSHOP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Easy Access on SP Ring Road
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Strategically located near THE CBD MALL at Tragad / Zundal Circle. Spacious service drive-in for hatchbacks, sedans, and large SUVs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Workshop Address</h3>
                  <p className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">
                    Shop no.2, Star Elegance, near THE CBD MALL, near Sardar Patel Ring Road, Tragad, Zundal, Ahmedabad, Gujarat 382424
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Operating Hours</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-700 font-bold text-base">Open 24 Hours</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monday to Sunday • 24/7 Roadside & Workshop Service
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 text-red-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</h3>
                  <a href="tel:08866051412" className="text-slate-900 hover:text-cyan-600 font-black text-lg transition">
                    088660 51412
                  </a>
                  <p className="text-xs text-slate-500">Direct Service Advisor / Garage Manager</p>
                </div>
              </div>

              {/* Plus Code & Coordinates */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Google Plus Code</h3>
                  <p className="text-slate-800 font-mono text-sm font-semibold">
                    4HJC+FH Ahmedabad, Gujarat
                  </p>
                  <p className="text-xs text-slate-500">Lat: 23.1311656 | Lng: 72.5714197</p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 mb-1">Nearby Landmarks:</div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Right near THE CBD MALL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Next to Sardar Patel (SP) Ring Road</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Between Tragad and Zundal Circle (Chandkheda)</span>
                </div>
              </div>

            </div>

            {/* Navigation Button */}
            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={garageInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>Open in Google Maps & Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md relative min-h-[420px] flex flex-col">
            <iframe
              title="MK CAR AC & ACCESSORIES Location Map"
              src="https://maps.google.com/maps?q=23.1311656,72.5714197&hl=en&z=16&output=embed"
              className="w-full flex-grow min-h-[380px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Live Map Ribbon */}
            <div className="bg-white px-6 py-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
                <span>MK CAR AC & ACCESSORIES - Shop No. 2, Star Elegance</span>
              </div>
              <a
                href={garageInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:text-cyan-900 font-bold flex items-center gap-1"
              >
                Expand View & Reviews &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
