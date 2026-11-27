import React, { useState } from 'react';
import { Calculator, Car, Check, ArrowRight, Clock, ShieldCheck, Sparkles, MessageSquare, Phone } from 'lucide-react';

const vehicleTypes = [
  { id: 'hatchback', name: 'Hatchback', example: 'Swift, i10, Baleno, WagonR, Tiago' },
  { id: 'sedan', name: 'Sedan', example: 'City, Verna, Dzire, Ciaz, Aura' },
  { id: 'suv', name: 'Compact SUV', example: 'Creta, Brezza, Nexon, Seltos, Venue' },
  { id: 'luxury', name: 'Large SUV / Luxury', example: 'XUV700, Scorpio-N, Fortuner, German Cars' },
];

const availableServices = [
  { id: 'ac-gas', name: 'Complete AC Gas Refill & Vacuum (R134a)', time: '45 mins', category: 'AC' },
  { id: 'ac-foam', name: 'AC Evaporator Coil Anti-Bacterial Wash', time: '30 mins', category: 'AC' },
  { id: 'cabin-filter', name: 'Cabin Activated Carbon AC Filter', time: '15 mins', category: 'AC' },
  { id: 'pms-service', name: 'Complete Periodic Oil Service (Synthetic)', time: '90 mins', category: 'Mechanical' },
  { id: 'brakes', name: '4-Wheel Brake Servicing & Caliper Grease', time: '45 mins', category: 'Mechanical' },
  { id: 'android-screen', name: '9-inch HD Android Screen + AHD Camera', time: '120 mins', category: 'Accessories' },
  { id: 'ambient-lights', name: '64-Color Symphony Ambient Lighting Kit', time: '90 mins', category: 'Accessories' },
];

export default function CostCalculator({ onBookWithEstimate }) {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleTypes[0]);
  const [selectedServiceIds, setSelectedServiceIds] = useState(['ac-gas', 'ac-foam']);

  const toggleService = (id) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter(sId => sId !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const handleBookEstimate = () => {
    const chosenServicesNames = availableServices
      .filter(s => selectedServiceIds.includes(s.id))
      .map(s => s.name)
      .join(', ');

    onBookWithEstimate({
      carType: selectedVehicle.name,
      services: chosenServicesNames,
      estimatePrice: 'Quote on Request'
    });
  };

  const chosenServicesQuery = availableServices
    .filter(s => selectedServiceIds.includes(s.id))
    .map(s => s.name)
    .join(', ');

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-cyan-600" />
            CUSTOM QUOTE ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Select Your Car & Request a Quote
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Every vehicle model has distinct requirements. Pick your car category and services below to get an instant tailored quote from our technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Car Category */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-lg font-bold text-slate-900">Select Vehicle Category</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicleTypes.map((v) => {
                  const isSelected = selectedVehicle.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicle(v)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-600 text-slate-900 shadow-sm ring-1 ring-cyan-600'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm sm:text-base text-slate-900">{v.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-600" />}
                      </div>
                      <p className="text-xs text-slate-500">{v.example}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="text-lg font-bold text-slate-900">Choose Services Required</h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">{selectedServiceIds.length} selected</span>
              </div>

              <div className="space-y-2.5">
                {availableServices.map((srv) => {
                  const isChecked = selectedServiceIds.includes(srv.id);

                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-white border-cyan-500 text-slate-900 shadow-sm'
                          : 'bg-white/60 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                          isChecked ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">{srv.name}</p>
                          <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" /> Est. {srv.time}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-cyan-800 border border-slate-200">
                          Reach Out for Rates
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sticky Estimation Summary Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-gradient-to-b from-cyan-50 to-white border border-cyan-200 rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-cyan-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Request Summary</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold border border-cyan-200">
                  {selectedVehicle.name}
                </span>
              </div>

              {/* Status Display */}
              <div className="my-6">
                <div className="text-xs text-slate-500 mb-1 font-medium">Pricing Information</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  Best Rates on Request
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Reach out to us directly to get the most accurate, competitive rate tailored for your specific vehicle make & condition.
                </p>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 py-4 border-y border-cyan-100 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>Selected Services</span>
                  <span className="font-bold text-slate-900">{selectedServiceIds.length} Selected</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Duration</span>
                  <span className="font-bold text-slate-900">~2 to 3 Hours</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Workshop Availability</span>
                  <span className="font-bold">Open 24 Hours</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleBookEstimate}
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Request Rate Quote & Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/918866051412?text=Hello%20MK%20Car,%20I%20would%20like%20to%20get%20the%20rates%20for%20my%20${selectedVehicle.name}.%20Services:%20${encodeURIComponent(chosenServicesQuery)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs text-center block transition border border-emerald-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Ask Rates on WhatsApp</span>
                </a>

                <a
                  href="tel:08866051412"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center block transition border border-slate-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Call 088660 51412 for Instant Quote</span>
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>100% Genuine Spares & OEM Quality</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
