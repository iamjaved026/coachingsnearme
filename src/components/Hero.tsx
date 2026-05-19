"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-primary-400/12 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-10 -right-40 w-[420px] h-[420px] bg-violet-400/8 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-300/6 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'256\' height=\'256\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6 lg:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-sm font-medium text-primary-700">
                Early Access — Teghra, Bihar
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-extrabold text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-[-0.025em] mb-5 lg:mb-6"
            >
              Your Coaching Life,{" "}
              <span className="text-gradient">Reimagined.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Discover nearby coachings, compare ratings, access homework &amp;
              notes, manage schedules — escape the WhatsApp chaos and organize
              everything in one beautiful app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#early-access"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {siteConfig.cta.primary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-text-primary bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {siteConfig.cta.secondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex items-center gap-5 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {[
                  "bg-gradient-to-br from-blue-400 to-blue-600",
                  "bg-gradient-to-br from-purple-400 to-purple-600",
                  "bg-gradient-to-br from-pink-400 to-pink-600",
                  "bg-gradient-to-br from-emerald-400 to-emerald-600",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[11px] font-bold shadow-sm`}
                  >
                    {["A", "R", "P", "S"][i]}
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-200 pl-5">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-text-secondary">
                  Trusted by early adopters in Teghra
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-primary-400/12 rounded-full blur-[80px] animate-pulse-glow" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <div className="phone-frame w-[200px] sm:w-[240px] lg:w-[260px] aspect-[9/19.5] bg-white relative">
                <Image src="/app-home.png" alt="CoachingsNearMe Home Screen" fill sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px" className="object-cover" priority />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-10 left-0 sm:left-2 lg:left-0 top-10 sm:top-12"
            >
              <div className="phone-frame w-[150px] sm:w-[180px] lg:w-[200px] aspect-[9/19.5] bg-white opacity-75 -rotate-6 relative">
                <Image src="/app-search.png" alt="CoachingsNearMe Search" fill sizes="200px" className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-10 right-0 sm:right-2 lg:right-0 top-8 sm:top-10"
            >
              <div className="phone-frame w-[150px] sm:w-[180px] lg:w-[200px] aspect-[9/19.5] bg-white opacity-75 rotate-6 relative">
                <Image src="/app-batch.png" alt="CoachingsNearMe Batch Workspace" fill sizes="200px" className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
