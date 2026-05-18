"use client";

import AnimatedSection from "./AnimatedSection";

const footerLinks = {
  Product: ["Features", "Discovery", "Batch Workspace", "Schedule", "Reviews"],
  Company: ["About Us", "Blog", "Careers", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service"],
  Support: ["Help Center", "Contact", "FAQ"],
};

export default function Footer() {
  return (
    <footer className="relative bg-surface-dark text-gray-400 overflow-hidden">
      <div className="section-divider" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 pb-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9" />
                    <circle cx="12" cy="9" r="3" fill="white" />
                  </svg>
                </div>
                <span className="font-display font-bold text-base text-white">
                  Coachings<span className="text-primary-400">NearMe</span>
                  <span className="text-gray-600 text-sm">.in</span>
                </span>
              </a>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5 max-w-[200px]">
                The modern way to discover, compare, and manage coachings near you.
              </p>
              {/* Social */}
              <div className="flex gap-2">
                {["T", "I", "L", "Y"].map((letter) => (
                  <a key={letter} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/6 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200" aria-label={letter}>
                    <span className="text-[11px] font-bold">{letter}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-3.5">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-gray-500 hover:text-primary-400 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">
            © {new Date().getFullYear()} CoachingsNearMe.in. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600">
            Made with ❤️ for students in Teghra, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
