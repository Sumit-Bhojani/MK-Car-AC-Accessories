import React from 'react';
import { Sparkles, Music, ShieldCheck, Cpu, Eye, Radio, Zap, CheckCircle2 } from 'lucide-react';

export default function AccessoriesShowcase({ onBookClick }) {
  const accessoriesCategories = [
    {
      title: "Android Touchscreens & Smart Infotainment",
      subtitle: "Wireless Apple CarPlay & Android Auto",
      specs: ["9-inch / 10.25-inch IPS Gorilla Glass Display", "Octa-Core Processor, 4GB/64GB & 8GB/128GB", "Coupler to Coupler Plug & Play (Zero Wire Cut)", "YouTube, Google Maps & Offline Navigation"],
      icon: Cpu,
      image: "/images/carplay-android-display.jpg",
      accent: "text-cyan-700",
      iconBg: "bg-cyan-100 text-cyan-700 border-cyan-200"
    },
    {
      title: "64-Color Symphony Ambient Lighting",
      subtitle: "Luxury Mercedes / Audi Style Glow",
      specs: ["App-controlled RGB gradient modes", "Music synchronization pulse mode", "Dashboard, 4 doors, footwell, and cup holders", "Hidden concealed fiber installation"],
      icon: Sparkles,
      image: "/images/symphony-ambient-interior.jpg",
      accent: "text-purple-700",
      iconBg: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      title: "Ultra-Bright LED & Bi-LED Projectors",
      subtitle: "Night-to-Day Road Visibility",
      specs: ["130W - 160W High Throw LED Bulbs", "Waterproof Laser Bi-LED Fog Projectors", "Sharp cut-off beam with zero glare to oncoming traffic", "1-Year Direct Replacement Warranty"],
      icon: Zap,
      image: "/images/biled-projector-headlamp.jpg",
      accent: "text-amber-800",
      iconBg: "bg-amber-100 text-amber-700 border-amber-200"
    },
    {
      title: "Custom 7D Mats & Luxury Seat Covers",
      subtitle: "Bespoke Comfort & Easy Cleaning",
      specs: ["Heavy-duty dual layer detachable coil mats", "High-density foam leatherette bucket seat fitment", "Custom color threads matching car interiors", "Waterproof, dustproof & odor-free"],
      icon: ShieldCheck,
      image: "/images/luxury-seatcovers-7dmats.jpg",
      accent: "text-rose-700",
      iconBg: "bg-rose-100 text-rose-700 border-rose-200"
    },
    {
      title: "Acoustic Audio, Subwoofers & Damping",
      subtitle: "Concert Hall Sound Quality",
      specs: ["Component Speakers with Neodymium Tweeters", "Underseat Active Subwoofers & Bass Tubes", "DSP 4-Channel Sound Amplifiers", "Multi-layer Butyl Door Sound Damping"],
      icon: Music,
      image: "/images/carplay-android-display.jpg",
      accent: "text-blue-700",
      iconBg: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "360° HD Cameras & Dual Dashcams",
      subtitle: "Full Parking & Driving Security",
      specs: ["Seamless 3D Bird-Eye View stitched display", "Sony STARVIS Sensor Night Vision cameras", "Continuous Loop Recording & G-Sensor lock", "Blind spot monitoring on indicator switch"],
      icon: Eye,
      image: "/images/obd2-scanner-diagnostics.jpg",
      accent: "text-emerald-700",
      iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <section id="accessories" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 border border-purple-200 text-purple-800 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            TRANSFORM YOUR RIDE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Next-Gen Car Accessories <br />
            <span className="text-gradient">& Custom Tech Upgrades</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Upgrade your base model to top model specs. We stock original branded accessories installed by skilled technicians with 100% warranty-safe coupler fittings.
          </p>
        </div>

        {/* 6 Accessories Highlights with Specific Product Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoriesCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow">
                        <Icon className={`w-4 h-4 ${item.accent}`} />
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition mb-4">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onBookClick}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    <span>Inquire / Book Installation</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* OEM Warranty Safe Guarantee Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">New Car Warranty Protection Guarantee</h4>
              <p className="text-xs text-slate-500">All wiring accessories are installed coupler-to-coupler without slicing any factory wires.</p>
            </div>
          </div>
          <a
            href="tel:08866051412"
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm transition shrink-0 shadow-sm"
          >
            Check Compatibility
          </a>
        </div>

      </div>
    </section>
  );
}
