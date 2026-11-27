import React, { useState } from 'react';
import { 
  Snowflake, 
  Wrench, 
  Music, 
  Sparkles, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  PhoneCall, 
  Check, 
  ArrowRight,
  Filter
} from 'lucide-react';

const iconMap = {
  Snowflake,
  Wrench,
  Music,
  Sparkles,
  ShieldCheck,
  Settings,
  Cpu,
  PhoneCall
};

export default function ServicesSection({ services, onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AC Specialist', 'Accessories', 'Mechanical', 'Emergency'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-3 shadow-sm">
              <Wrench className="w-3.5 h-3.5 text-cyan-600" />
              FULL SUITE AUTO WORKSHOP
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Comprehensive Services
            </h2>
            <p className="text-slate-600 text-base max-w-xl mt-2">
              From precision climate control overhauls to luxury custom interiors and scheduled periodic maintenance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            const isAc = service.category === 'AC Specialist';
            const isEmergency = service.category === 'Emergency';

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-slate-50 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  service.popular
                    ? 'border-cyan-300 hover:border-cyan-500 shadow-md shadow-cyan-500/5 bg-white'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  {/* Top Image Preview with Zoom on Hover */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={service.image || "/images/ac-service.jpg"} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-cyan-600 text-white shadow-md">
                        Most Popular
                      </div>
                    )}

                    {/* Floating Category Tag */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md ${
                        isEmergency
                          ? 'bg-red-600/90 text-white'
                          : isAc
                          ? 'bg-cyan-600/90 text-white'
                          : 'bg-slate-900/80 text-white'
                      }`}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title & Description */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    
                    <span className="inline-block text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200 mb-3">
                      {service.priceStartingAt || "Reach Out for Rates"}
                    </span>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-2 pt-4 border-t border-slate-200/80">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-cyan-600 text-slate-800 hover:text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:shadow-md border border-slate-200 hover:border-transparent"
                  >
                    <span>Book Service / Inquire</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Request Banner with Visual Accents */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <img 
              src="/images/workshop-bay.jpg" 
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-white">Need a custom modification or specific spare part?</h4>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              We source OEM and aftermarket parts for Maruti, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, VW, Skoda & luxury vehicles.
            </p>
          </div>
          <div className="flex gap-3 relative z-10 shrink-0">
            <a
              href="https://wa.me/918866051412?text=Hello%20MK%20Car,%20I%20need%20a%20quote%20for%20my%20car"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-emerald-600/20 whitespace-nowrap"
            >
              WhatsApp Part Inquiry
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
