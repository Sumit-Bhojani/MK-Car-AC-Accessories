import React from 'react';
import { Snowflake, AlertTriangle, CheckCircle, Wrench, ThermometerSnowflake, ShieldCheck, Zap, Gauge } from 'lucide-react';

export default function AcSpecialistShowcase({ onBookClick }) {
  const commonSymptoms = [
    {
      title: "AC Blowing Warm Air",
      cause: "Low refrigerant gas or leakage in condenser/coil",
      solution: "Nitrogen pressure test, leak seal, and 100% pure R134a gas recharge.",
      severity: "High"
    },
    {
      title: "Foul / Musty Odor",
      cause: "Bacterial & fungus buildup in cooling coil and cabin filter",
      solution: "High-pressure anti-bacterial foam cleaning & new cabin filter.",
      severity: "Medium"
    },
    {
      title: "Strange Grinding or Hissing Noise",
      cause: "Worn AC compressor bearing or faulty expansion valve",
      solution: "Precision compressor overhaul, bearing replacement & valve calibration.",
      severity: "High"
    },
    {
      title: "Water Leaking Inside Cabin / Footwell",
      cause: "Clogged evaporator condensation drain pipe",
      solution: "Unclog drain lines, flush evaporator casing, complete drying.",
      severity: "Medium"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "40-Point Electronic Diagnostic",
      desc: "Computerized vent temperature scan, manifold pressure gauge analysis, and high/low circuit evaluation.",
      icon: Gauge
    },
    {
      step: "02",
      title: "Nitrogen Leak Pressure Testing",
      desc: "Zero-guesswork leak tracing in hoses, condenser, O-rings, and cooling coil with high-pressure nitrogen.",
      icon: AlertTriangle
    },
    {
      step: "03",
      title: "100% Moisture Evacuation",
      desc: "High-vacuum vacuuming to pull out all air and humidity to protect the compressor from internal acid formation.",
      icon: Zap
    },
    {
      step: "04",
      title: "Virgin R134a Gas & PAG Oil Charge",
      desc: "Accurate gram-level factory specification refrigerant recharging with synthetic PAG compressor lubricant.",
      icon: ThermometerSnowflake
    }
  ];

  return (
    <section id="ac-specialist" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-4 shadow-sm">
            <Snowflake className="w-4 h-4 text-cyan-600" />
            AHMEDABAD'S CAR AIR CONDITIONING MASTERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Don't Suffer in 45°C Heat. <br />
            <span className="text-gradient">Experience Sub-Zero Cabin Cooling.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            At MK CAR AC & ACCESSORIES, we diagnose and solve complex AC problems that other garages fail to fix. From gas leakage to noisy compressors and cooling coil swaps.
          </p>
        </div>

        {/* Visual Showcase Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-64 sm:h-72 border border-slate-200">
            <img 
              src="/images/ac-gas-manifold-recharge.jpg" 
              alt="Car AC Servicing Station" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-cyan-600 text-white uppercase tracking-wider mb-2 inline-block">
                Digital Manifold Station
              </span>
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                Automatic R134a Recovery, Vacuum & Recharge
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero gas wastage and accurate gram-level refrigerant charging for ice-cold airflow.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-64 sm:h-72 border border-slate-200">
            <img 
              src="/images/ac-compressor-evaporator.jpg" 
              alt="Compressor & Evaporator Cooling Coil" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider mb-2 inline-block">
                Compressor & Cooling Coil
              </span>
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                Cooling Coil Overhaul & Compressor Reconditioning
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Guaranteed rattle-free dashboard disassembly and factory-grade evaporator fitment.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Precision Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200/80 rounded-2xl p-6 relative hover:border-cyan-400 transition duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="text-3xl font-black text-slate-200 group-hover:text-cyan-600/40 transition mb-3">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-200 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Common AC Problems & Fixes Grid */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Car AC Warning Signs We Fix Daily</h3>
              <p className="text-slate-500 text-sm">Recognize any of these symptoms in your car? Bring it in today.</p>
            </div>
            <button
              onClick={onBookClick}
              className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm transition shadow-md shadow-cyan-600/20"
            >
              Get Instant AC Diagnosis
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonSymptoms.map((symptom, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {symptom.title}
                  </h4>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    symptom.severity === 'High' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-amber-100 text-amber-700 border border-amber-200'
                  }`}>
                    {symptom.severity} Urgency
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-slate-600">
                    <span className="text-slate-800 font-semibold">Root Cause:</span> {symptom.cause}
                  </p>
                  <p className="text-cyan-900 bg-cyan-50 p-2.5 rounded-lg border border-cyan-200">
                    <span className="font-semibold text-cyan-800">MK Car Solution:</span> {symptom.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Zero Dashboard Rattling Guarantee during cooling coil replacements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-600" />
              <span>Genuine Sanden, Subros, Behr, Denso, & Valeo OEM replacements</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
