"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    // Activate glass at 40px
    setScrolled(latest > 40);
    // Hide on scroll down past 100px, show on scroll up
    if (latest > 100) {
      if (diff > 5) {
        setHidden(true);
      } else if (diff < -5) {
        setHidden(false);
      }
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 py-2.5"
            : "bg-transparent py-3 lg:py-5"
        }`}
      >
        <nav className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group min-w-0 pr-2">
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300 flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9" />
                <circle cx="12" cy="9" r="3" fill="white" />
              </svg>
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight truncate">
              Coachings<span className="text-primary-500">NearMe</span>
              <span className="text-text-tertiary text-[13px] sm:text-sm">.in</span>
            </span>
          </a>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {siteConfig.navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 rounded-full group-hover:w-5 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#early-access"
              className="group relative px-4.5 py-2.5 text-[13px] font-semibold text-white rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-sm hover:shadow-md hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-px"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {siteConfig.cta.primary}
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl"
            >
              <div className="p-5 pt-20 flex flex-col gap-1">
                {siteConfig.navigation.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-4 py-3 text-[15px] font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                  <a
                    href="#early-access"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-md"
                  >
                    {siteConfig.cta.primary}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

