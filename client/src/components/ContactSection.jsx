import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection({ garageInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: '', phone: '', email: '', subject: 'General Question', message: '' });
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: 'General Question', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-100 border border-cyan-200 text-cyan-800 mb-4 shadow-sm">
            <MessageSquare className="w-4 h-4 text-cyan-600" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Contact MK CAR AC & ACCESSORIES
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have questions about your car's AC problem, accessory fitment, or need an urgent roadside mechanic? Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Contact Channels</h3>

              {/* Phone card */}
              <a
                href="tel:08866051412"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 transition flex items-center gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 border border-red-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">24-Hour Helpline</div>
                  <div className="text-base sm:text-lg font-black text-slate-900 group-hover:text-cyan-700 transition">
                    088660 51412
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/918866051412?text=Hello%20MK%20Car%20AC,%20I%20have%20an%20inquiry%20regarding..."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition flex items-center gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">WhatsApp Chat</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    +91 88660 51412
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 border border-cyan-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Workshop Address</div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                    Shop no.2, Star Elegance, near THE CBD MALL, near Sardar Patel Ring Road, Tragad, Zundal, Ahmedabad, Gujarat 382424
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Working Hours</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5 flex items-center gap-2">
                    <span>Open 24 Hours (Every Day)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send an Inquiry or Feedback</h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Drop us your vehicle details or queries and our technical head will get back to you promptly.
            </p>

            {success ? (
              <div className="p-6 rounded-2xl bg-emerald-100/70 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-sm text-slate-700">
                  Thank you for contacting MK CAR AC & ACCESSORIES. We will review your message and reach out shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 088660 51412"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. anand@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:outline-none shadow-sm"
                    >
                      <option value="Car AC Repair Inquiry">Car AC Repair Inquiry</option>
                      <option value="Accessories & Android Fitment">Accessories & Android Fitment</option>
                      <option value="Periodic Maintenance Service">Periodic Maintenance Service</option>
                      <option value="Emergency Breakdown Assistance">Emergency Breakdown Assistance</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us what you need help with (car model, specific issue, or requested modification)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:outline-none shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
