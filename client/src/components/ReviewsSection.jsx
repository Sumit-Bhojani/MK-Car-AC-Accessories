import React from 'react';
import { Star, MessageSquare, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';

export default function ReviewsSection({ reviews, garageInfo }) {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 border border-amber-200 text-amber-800 mb-3 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              CUSTOMER EXPERIENCES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Rated 4.9 Stars on Google
            </h2>
            <p className="text-slate-600 text-base max-w-xl mt-2">
              Read real feedback from car owners in Tragad, Zundal, Chandkheda, Motera, and SP Ring Road.
            </p>
          </div>

          <a
            href={garageInfo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 transition flex items-center gap-2 shadow-sm"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>View All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-white transition duration-300 shadow-sm"
            >
              <div>
                {/* Top rating & date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {rev.name}
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">{rev.location}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-cyan-800 border border-slate-200">
                    {rev.car}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
