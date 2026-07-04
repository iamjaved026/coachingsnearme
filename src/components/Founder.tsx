"use client";

import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/config/site";

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 lg:py-32 overflow-hidden bg-surface-dark">
      {/* Background gradients similar to startup feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen" />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Built by a Student.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              CoachingsNearMe wasn't built in a boardroom. It was born out of frustration, endless WhatsApp group chaos, and the genuine struggle to find the right coaching institute.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection delay={0.1}>
            <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
              
              <div className="relative space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  When I was searching for the right coaching in {siteConfig.launchCity}, the process was completely broken. There was no single place to compare institutes, understand teaching quality, or check real student reviews.
                </p>
                <p>
                  Information was scattered across flyers, word of mouth, and chaotic WhatsApp groups. Students had no transparency, and excellent local teachers lacked a dedicated platform to showcase their true value.
                </p>
                <p>
                  I realized that education infrastructure needed a complete reboot. I built CoachingsNearMe to solve my own problem—and the problem of every student trying to make the right educational choices without the noise.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {siteConfig.founder.displayName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold">{siteConfig.founder.displayName}</h3>
                    <p className="text-sm text-primary-400">Founder & Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Optional graphic or quote block representing the mission */}
              <div className="p-8 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-b from-primary-500/20 to-transparent border border-primary-500/20">
                <svg className="w-12 h-12 text-primary-400 mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-2xl md:text-3xl text-white font-display font-medium leading-tight mb-8">
                  "Education discovery shouldn't rely on luck. It should be transparent, accessible, and deeply student-focused."
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Hyperlocal focus</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">100% Student-first</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Unbiased Reviews</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
