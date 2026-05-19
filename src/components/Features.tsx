"use client";

import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Smart Discovery",
    description:
      "Find coachings near you with intelligent search, subject filters, and real-time availability.",
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-400/10",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Honest Reviews",
    description:
      "Anonymous, verified reviews from real students. Transparent ratings you can actually trust.",
    gradient: "from-amber-500 to-orange-400",
    bgGlow: "bg-amber-400/10",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Batch Workspace",
    description:
      "Homework, notes, recordings, and announcements — organized like Discord meets Notion.",
    gradient: "from-purple-500 to-violet-400",
    bgGlow: "bg-purple-400/10",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Smart Schedules",
    description:
      "Never miss a class. Intelligent timetables with reminders and conflict-free planning.",
    gradient: "from-emerald-500 to-green-400",
    bgGlow: "bg-emerald-400/10",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Direct Messaging",
    description:
      "Communicate directly with teachers. No more WhatsApp group chaos.",
    gradient: "from-pink-500 to-rose-400",
    bgGlow: "bg-pink-400/10",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safe & Private",
    description:
      "Your data stays yours. Built with privacy-first architecture and secure communications.",
    gradient: "from-indigo-500 to-blue-400",
    bgGlow: "bg-indigo-400/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle background depth */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-400/3 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-violet-400/3 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14 lg:mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Platform Features
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4 leading-[1.15]">
            Everything Students{" "}
            <span className="text-gradient">Actually Need</span>
          </h2>
          <p className="text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            Not just another coaching directory. A complete ecosystem designed
            for how students actually discover, learn, and organize.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-100/80 hover:border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-premium transition-all duration-500 h-full">
                {/* Background glow on hover */}
                <div className={`absolute -top-8 -right-8 w-28 h-28 ${f.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300`}>
                  {f.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg mb-2 text-text-primary">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
