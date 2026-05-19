"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Download() {
  return (
    <section id="download" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-400/5 rounded-full blur-[120px]" />

      <div className="relative section-container">
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/20 rounded-full" />
          <div className="absolute top-16 right-16 w-2 h-2 bg-white/10 rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-primary-100">Limited Early Access</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-5 leading-[1.15]">
                Start Discovering Coachings<br className="hidden sm:block" />
                <span className="text-primary-200">in Teghra, Bihar.</span>
              </h2>
              <p className="text-base text-primary-100/70 leading-relaxed mb-8 max-w-md">
                Be among the first students to experience a smarter way to find,
                compare, and manage coaching centers. Expanding to more cities soon.
              </p>

              {/* Early access CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="#early-access" className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white rounded-2xl text-primary-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-[15px]">
                  Request Early Access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <a href="/contact" className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white font-semibold hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm text-[15px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-primary-200/50">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Private & secure
                </span>
                <span>•</span>
                <span>Free for students</span>
                <span>•</span>
                <span>No ads ever</span>
              </div>
            </AnimatedSection>

            {/* Right - Expansion Roadmap */}
            <AnimatedSection direction="right" delay={0.2} className="flex justify-center">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white/8 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm w-full max-w-sm">
                <h4 className="font-display font-bold text-lg text-white mb-1">Expansion Roadmap</h4>
                <p className="text-xs text-primary-200/80 mb-6">Where we're heading next</p>

                <div className="space-y-4">
                  {[
                    { city: "Teghra, Bihar", status: "Live Now", active: true, icon: "🟢" },
                    { city: "Begusarai", status: "Coming Q3 2026", active: false, icon: "🔵" },
                    { city: "Patna", status: "Coming Q4 2026", active: false, icon: "🔵" },
                    { city: "Pan-India", status: "2027", active: false, icon: "🌍" },
                  ].map((item) => (
                    <div key={item.city} className={`flex items-center gap-4 p-3.5 rounded-xl transition-all ${item.active ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-white/5 border border-white/5"}`}>
                      <span className="text-base">{item.icon}</span>
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${item.active ? "text-white" : "text-white/80"}`}>{item.city}</p>
                        <p className={`text-xs ${item.active ? "text-emerald-400" : "text-white/50"}`}>{item.status}</p>
                      </div>
                      {item.active && (
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-white/50 mt-5 text-center">
                  Starting local. Scaling nationwide. 🇮🇳
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
