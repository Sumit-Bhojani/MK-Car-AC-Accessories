import React from 'react';
import { Clock, ShieldCheck, Award, Zap, ThumbsUp, Wrench, MapPin, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Clock,
      title: "Open 24 Hours / 365 Days",
      desc: "Emergency breakdown, midnight AC failures on SP Ring Road, or early morning airport trips — our certified mechanics are on standby 24/7.",
      color: "text-red-600",
      bg: "bg-red-50 border-red-200"
    },
    {
      icon: Award,
      title: "Master AC Specialists",
      desc: "Equipped with state-of-the-art automatic refrigerant recovery and recycling stations, electronic sniffers, and micron vacuum gauges.",
      color: "text-cyan-600",
      bg: "bg-cyan-50 border-cyan-200"
    },
    {
      icon: ShieldCheck,
      title: "Coupler-to-Coupler Fitting",
      desc: "For accessories and lighting, we strictly follow zero wire-cutting installation, protecting your car's original warranty and fire safety.",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: ThumbsUp,
      title: "Transparent, Upfront Estimates",
      desc: "No unnecessary parts replacement or surprise bills. Every diagnostic finding is shared with you via video or in-person before work begins.",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200"
    },
    {
      icon: Wrench,
      title: "All Makes & Models Serviced",
      desc: "Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, Skoda, Volkswagen, MG, Renault, and luxury German sedans & SUVs.",
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200"
    },
    {
      icon: MapPin,
      title: "Prime Location on SP Ring Road",
      desc: "Conveniently situated at Star Elegance near THE CBD MALL, Tragad, right next to Zundal Circle with spacious parking & service bays.",
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-4 shadow-sm">
            <Award className="w-4 h-4 text-cyan-600" />
            THE MK CAR ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why Ahmedabad Motorists <br />
            <span className="text-gradient">Trust MK CAR AC & ACCESSORIES</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We combine high-tech diagnostic equipment, dealership-grade workmanship, and warm neighborhood hospitality with honest communication.
          </p>
        </div>

        {/* Panoramic Workshop Photo Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 border border-slate-200 group h-80 sm:h-96">
          <img 
            src="/images/workshop-bay.jpg" 
            alt="MK Car Workshop Bays" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-600 text-white uppercase tracking-wider mb-2.5 inline-block">
                Modern Multibrand Service Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Specialized Bays & Certified Technicians
              </h3>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                Shop No. 2, Star Elegance, right near THE CBD MALL, Tragad, Zundal, Ahmedabad. Equipped with computerized hydraulic lifts, electronic AC sniffers & pure gas recovery units.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                ✓ 24/7 Service Available
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                ✓ OEM Spares Only
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                ✓ Zero Wire Cut Fitting
              </span>
            </div>
          </div>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition duration-300 shadow-sm hover:shadow-md group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition ${p.bg} ${p.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Numbers & Stats Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyan-600 mb-1">10,000+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">Cars Serviced</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">24 / 7</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">Round the Clock Service</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">4.9 ★</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">Google Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">Warranty-Safe Fitting</div>
          </div>
        </div>

      </div>
    </section>
  );
}
