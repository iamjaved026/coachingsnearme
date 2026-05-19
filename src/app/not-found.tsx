"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

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
          {/* Logo element floating */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20 mb-8"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9" />
              <circle cx="12" cy="9" r="3" fill="white" />
            </svg>
          </motion.div>

          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6">
            404 Not Found
          </span>
          
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight mb-6">
            Looks like this page <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">drifted away.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            The future of coaching is still loading here. The page you&apos;re looking for might have been moved, deleted, or possibly never existed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
            >
              Return Home
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center"
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
