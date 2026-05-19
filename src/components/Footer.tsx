"use client";

import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-surface-dark text-gray-400 overflow-hidden">
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
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4 max-w-[250px]">
                {siteConfig.description}
              </p>
              
              <div className="flex flex-col gap-1 mb-5">
                <a href={`mailto:${siteConfig.support.email}`} className="text-[13px] text-gray-400 hover:text-primary-400 transition-colors">
                  {siteConfig.support.email}
                </a>
                <a href={`tel:${siteConfig.support.phone}`} className="text-[13px] text-gray-400 hover:text-primary-400 transition-colors">
                  {siteConfig.support.phone}
                </a>
              </div>

              {/* Social */}
              <div className="flex gap-2">
                {Object.entries(siteConfig.socials).map(([platform, url]) => {
                  const getIcon = (name: string) => {
                    switch (name) {
                      case "twitter":
                        return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
                      case "instagram":
                        return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
                      case "linkedin":
                        return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
                      case "youtube":
                        return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
                      default:
                        return <span className="text-[11px] font-bold capitalize">{name[0]}</span>;
                    }
                  };

                  return (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/6 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200" aria-label={platform}>
                      {getIcon(platform)}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            {Object.entries(siteConfig.footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-3.5">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[13px] text-gray-500 hover:text-primary-400 transition-colors duration-200">
                        {link.name}
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
            © {new Date().getFullYear()} {siteConfig.name}.in. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600">
            Currently serving students in {siteConfig.launchCity}
          </p>
        </div>
      </div>
    </footer>
  );
}
