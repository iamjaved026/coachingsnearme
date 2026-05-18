"use client";

import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const coachings = [
  {
    name: "Apex Academy",
    subjects: ["Mathematics", "Physics"],
    rating: 4.8,
    reviews: 128,
    distance: "0.8 km",
    crowd: "Moderate",
    timing: "7:00 AM – 9:00 PM",
    color: "from-blue-500 to-blue-600",
    initial: "A",
  },
  {
    name: "Bright Future Classes",
    subjects: ["Chemistry", "Biology"],
    rating: 4.6,
    reviews: 94,
    distance: "1.2 km",
    crowd: "Low",
    timing: "8:00 AM – 8:00 PM",
    color: "from-emerald-500 to-emerald-600",
    initial: "B",
  },
  {
    name: "Scholar's Point",
    subjects: ["English", "Commerce"],
    rating: 4.9,
    reviews: 215,
    distance: "2.1 km",
    crowd: "High",
    timing: "6:00 AM – 10:00 PM",
    color: "from-purple-500 to-purple-600",
    initial: "S",
  },
  {
    name: "Newton Institute",
    subjects: ["Mathematics", "Science"],
    rating: 4.7,
    reviews: 167,
    distance: "1.5 km",
    crowd: "Moderate",
    timing: "7:30 AM – 9:30 PM",
    color: "from-amber-500 to-orange-500",
    initial: "N",
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < Math.floor(rating) ? "#FBBF24" : "#E5E7EB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-[13px] font-semibold text-text-primary ml-0.5">{rating}</span>
      <span className="text-[11px] text-text-tertiary">({reviews})</span>
    </div>
  );
}

export default function Discovery() {
  return (
    <section id="discover" className="relative py-20 lg:py-28 bg-surface-elevated">
      {/* Background */}
      <div className="section-divider" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary-400/4 rounded-full blur-[100px]" />

      <div className="section-container">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Discovery
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4 leading-[1.15]">
            Discover Coachings{" "}
            <span className="text-gradient">Smarter</span>
          </h2>
          <p className="text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            Browse nearby coaching centers with detailed ratings, reviews,
            subject offerings, and real-time crowd indicators.
          </p>
        </AnimatedSection>

        {/* Filter chips */}
        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 sm:gap-2.5 justify-center mb-10">
          {["All Subjects", "Mathematics", "Science", "Commerce", "English", "Computer Science"].map(
            (chip, i) => (
              <button
                key={chip}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  i === 0
                    ? "bg-primary-500 text-white shadow-sm shadow-primary-500/20"
                    : "bg-white text-text-secondary border border-gray-200 hover:border-primary-300 hover:text-primary-600 hover:shadow-sm"
                }`}
              >
                {chip}
              </button>
            )
          )}
        </AnimatedSection>

        {/* Coaching Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5" staggerDelay={0.08}>
          {coachings.map((c) => (
            <StaggerItem key={c.name}>
              <div className="group bg-white rounded-2xl border border-gray-100/80 overflow-hidden hover:shadow-premium hover:border-gray-200 transition-all duration-500 cursor-pointer">
                {/* Thumbnail */}
                <div className={`relative h-28 sm:h-32 lg:h-36 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <span className="text-3xl sm:text-4xl font-bold text-white/25">{c.initial}</span>
                  {/* Distance badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-text-primary shadow-sm">
                    📍 {c.distance}
                  </div>
                  {/* Crowd */}
                  <div className={`absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-[11px] font-medium shadow-sm ${
                    c.crowd === "Low"
                      ? "bg-emerald-100 text-emerald-700"
                      : c.crowd === "Moderate"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {c.crowd === "Low" ? "🟢" : c.crowd === "Moderate" ? "🟡" : "🔴"} {c.crowd}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-semibold text-[14px] sm:text-[15px] text-text-primary mb-1.5 group-hover:text-primary-600 transition-colors truncate">
                    {c.name}
                  </h3>
                  <StarRating rating={c.rating} reviews={c.reviews} />
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {c.subjects.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[11px] font-medium bg-gray-50 text-text-secondary rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-text-tertiary mt-2.5 flex items-center gap-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {c.timing}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
