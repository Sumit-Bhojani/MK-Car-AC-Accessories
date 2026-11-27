import React from 'react';
import { Phone, MessageSquare, Wrench } from 'lucide-react';

export default function FloatingActions({ onBookClick }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Quick Booking Button */}
      <button
        onClick={onBookClick}
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-2xl shadow-cyan-500/40 transition transform hover:scale-105"
      >
        <Wrench className="w-4 h-4" />
        <span>Book Slot</span>
      </button>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/918866051412?text=Hello%20MK%20Car%20AC%20%26%20Accessories,%20I%20would%20like%20to%20inquire%20about%20my%20car%20service."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-500/30 transition transform hover:scale-110 flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="sr-only">WhatsApp</span>
      </a>

      {/* 24/7 Call Floating Button */}
      <a
        href="tel:08866051412"
        aria-label="Call 24 Hours Hotline"
        className="w-13 h-13 p-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/40 transition transform hover:scale-110 flex items-center justify-center relative group"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="sr-only">Call 24 Hours</span>
      </a>
    </div>
  );
}
