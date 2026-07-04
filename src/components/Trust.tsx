"use client";

import AnimatedSection from "./AnimatedSection";

const trustPillars = [
  {
    title: "100% Transparent",
    description: "Every review and rating comes directly from verified students. No paid promotions or hidden agendas.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Student-First Design",
    description: "Built by a student, for students. The platform prioritizes your learning experience over instititute marketing.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Hyperlocal Discovery",
    description: "We focus on your immediate locality to bring you the best hidden gems and neighborhood coaching institutes.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Organized Workspace",
    description: "Say goodbye to scattered WhatsApp messages. All your notes, announcements, and batches in one secure place.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 relative overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Why Trust CoachingsNearMe?
            </h2>
            <p className="text-lg text-gray-400">
              We are building a platform that fundamentally respects the student's journey. No noise, no bias, just the tools you need to succeed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trustPillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.title} delay={idx * 0.1}>
              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{pillar.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
