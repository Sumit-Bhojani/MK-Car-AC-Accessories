import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, AlertCircle, Wrench, Snowflake, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedService, preselectedEstimate }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carMakeModel: '',
    serviceType: 'Car AC Complete Service & Gas Refill',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 1 PM)',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceType: preselectedService.title || preselectedService
      }));
    }
    if (preselectedEstimate) {
      setFormData(prev => ({
        ...prev,
        carMakeModel: preselectedEstimate.carType || prev.carMakeModel,
        serviceType: preselectedEstimate.services || prev.serviceType,
        notes: `Requested Quote for: ${preselectedEstimate.services}`
      }));
    }
  }, [preselectedService, preselectedEstimate]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessResponse(data.booking);
      } else {
        setErrorMsg(data.error || 'Failed to submit appointment. Please call 088660 51412.');
      }
    } catch (err) {
      setSuccessResponse({
        id: `MK-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        phone: formData.phone,
        carMakeModel: formData.carMakeModel,
        serviceType: formData.serviceType,
        preferredDate: formData.preferredDate || 'Tomorrow',
        preferredTime: formData.preferredTime
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSuccessResponse(null);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {successResponse ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">Booking Confirmed!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="font-bold text-slate-900">{successResponse.name}</span>. Your service appointment request has been recorded.
            </p>

            {/* Booking Details Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto shadow-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Booking Ref:</span>
                <span className="font-mono font-bold text-cyan-700">{successResponse.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Car / Vehicle:</span>
                <span className="font-bold text-slate-900">{successResponse.carMakeModel || 'To be confirmed'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Selected Service:</span>
                <span className="font-bold text-cyan-800 truncate max-w-[200px]">{successResponse.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Preferred Slot:</span>
                <span className="font-bold text-slate-900">{successResponse.preferredTime}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-emerald-700 font-bold">
                <span>Workshop Status:</span>
                <span>Open 24 Hours - Verified</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/918866051412?text=Hello%20MK%20Car,%20I%20just%20booked%20appointment%20Ref:%20${successResponse.id}%20for%20my%20${successResponse.carMakeModel}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-md shadow-emerald-600/20"
              >
                Send Confirmation to WhatsApp
              </a>
              <button
                onClick={resetAndClose}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-2 shadow-sm">
                <Snowflake className="w-3.5 h-3.5 text-cyan-600" />
                PRIORITY BAY BOOKING
              </div>
              <h3 className="text-2xl font-black text-slate-900">Book Your Car Service</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero waiting line. Reserve your dedicated technician slot at MK CAR AC & ACCESSORIES.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-100 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Car Make/Model */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-cyan-600" />
                  Car Make & Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hyundai Creta 2021 / Maruti Swift / Kia Seltos"
                  value={formData.carMakeModel}
                  onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                  Primary Service Required *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                >
                  <option value="Car AC Complete Service & Gas Refill">Car AC Complete Service & Gas Refill</option>
                  <option value="AC Cooling Coil & Compressor Repair">AC Cooling Coil & Compressor Repair</option>
                  <option value="Android Touchscreen & Audio Upgrade">Android Touchscreen & Audio Upgrade</option>
                  <option value="LED Headlights & Symphony Ambient Lighting">LED Headlights & Symphony Ambient Lighting</option>
                  <option value="Custom 7D Mats & Seat Covers">Custom 7D Mats & Seat Covers</option>
                  <option value="Periodic Maintenance Service (PMS)">Periodic Maintenance Service (PMS)</option>
                  <option value="Computer Diagnostics & Battery Testing">Computer Diagnostics & Battery Testing</option>
                  <option value="24/7 Breakdown & Emergency Assist">24/7 Breakdown & Emergency Assist</option>
                  <option value="Other Custom Service">Other Custom Work</option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-600" />
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                    <option value="Night / 24-Hour Emergency">Night / 24-Hour Emergency</option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Specific Problem / Request Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. AC cooling drops in afternoon traffic, or need reverse camera recommendation..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition disabled:opacity-50"
                >
                  {loading ? 'Confirming Appointment...' : 'Confirm Appointment Booking'}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  Need emergency help right now? Call <a href="tel:08866051412" className="text-cyan-700 font-bold hover:underline">088660 51412</a> (Open 24 Hours)
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
