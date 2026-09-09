"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface-dark overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Real Brand Logo Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl shadow-primary-500/20 mb-8 border border-white/20 overflow-hidden"
          >
            <img
              src="/icon-192x192.png"
              alt="CoachingsNearMe Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6">
            404 Page Not Found
          </span>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-5">
            Looks like this page <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">drifted away.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-9 leading-relaxed">
            The future of coaching discovery is still loading here. The page you&apos;re looking for might have been moved, renamed, or is currently in development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 flex items-center justify-center gap-2 text-sm"
            >
              Return Home
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
            <Link 
              href="/early-access"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15 transition-all border border-white/15 flex items-center justify-center text-sm"
            >
              Join Early Access
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-gray-400 font-medium hover:text-white transition-colors flex items-center justify-center text-sm"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none mix-blend-overlay opacity-30" />
    </main>
  );
}
