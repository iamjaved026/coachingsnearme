"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function SearchExperience() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/4 rounded-full blur-[100px]" />
      <div className="absolute top-20 right-0 w-60 h-60 bg-primary-400/3 rounded-full blur-[100px]" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Visual */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1 min-w-0 w-full">
            <div className="relative max-w-full sm:max-w-sm mx-auto">
              {/* Search UI Mockup */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-2xl sm:rounded-3xl shadow-premium border border-gray-100/80 overflow-hidden"
              >
                {/* Search Bar */}
                <div className="p-4 sm:p-5 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 px-3.5 py-3 bg-gray-50 rounded-xl">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span className="text-text-tertiary text-[13px]">Search coachings, subjects...</span>
                  </div>
                </div>

                {/* Filter chips */}
                <div className="px-4 sm:px-5 py-2.5 flex gap-1.5 overflow-hidden">
                  {[
                    { label: "📍 Within 2 km", active: true },
                    { label: "⭐ 4.5+", active: false },
                    { label: "💰 Budget", active: false },
                    { label: "🎯 JEE", active: true },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                        chip.active
                          ? "bg-primary-500 text-white shadow-sm"
                          : "bg-gray-50 text-text-secondary border border-gray-100"
                      }`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="p-4 sm:p-5 space-y-2">
                  {[
                    { name: "Apex Academy", match: "98% match", subject: "Mathematics • Physics", rating: "4.8" },
                    { name: "Scholar's Point", match: "95% match", subject: "JEE Advanced", rating: "4.9" },
                    { name: "Excel Institute", match: "91% match", subject: "Mathematics", rating: "4.7" },
                  ].map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0 ${
                        i === 0 ? "bg-gradient-to-br from-blue-500 to-blue-600" :
                        i === 1 ? "bg-gradient-to-br from-purple-500 to-purple-600" :
                        "bg-gradient-to-br from-amber-500 to-orange-500"
                      }`}>
                        {r.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-[13px] text-text-primary group-hover:text-primary-600 transition-colors truncate">
                            {r.name}
                          </span>
                          <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex-shrink-0">
                            {r.match}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[11px] text-text-tertiary">{r.subject}</span>
                          <span className="text-[11px] text-amber-500">⭐ {r.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 right-0 sm:-top-4 sm:-right-3 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2.5 z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-text-primary">Smart Match</p>
                    <p className="text-[9px] text-text-tertiary">AI-powered results</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="right" className="order-1 lg:order-2 min-w-0 w-full">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold tracking-wide uppercase mb-4">
              Smart Search
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-5 leading-[1.15]">
              Finding Coachings is{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                Effortless
              </span>
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-7">
              Type a subject, pick your filters, and get instant results ranked
              by relevance, distance, and ratings. Our smart search understands
              what you need before you finish typing.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Contextual Filtering",
                  desc: "Filter by subject, distance, budget, ratings, and batch timings — all at once.",
                },
                {
                  icon: "⚡",
                  title: "Instant Results",
                  desc: "See results as you type with smooth, real-time search transitions.",
                },
                {
                  icon: "🗺️",
                  title: "Map Integration",
                  desc: "Visualize coachings on a map with distance overlays and route previews.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-text-primary mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
