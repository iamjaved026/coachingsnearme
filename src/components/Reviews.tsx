"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const reviews = [
  { name: "Arjun M.", avatar: "A", avatarColor: "from-blue-500 to-blue-600", rating: 5, text: "Finally an app that actually helps me find good coachings near my area. The batch workspace is a game changer!", coaching: "Apex Academy", timeAgo: "2 weeks ago" },
  { name: "Priya S.", avatar: "P", avatarColor: "from-pink-500 to-rose-500", rating: 5, text: "I switched coachings after reading honest reviews here. Best decision ever. The schedule feature keeps me organized.", coaching: "Scholar's Point", timeAgo: "1 month ago" },
  { name: "Rahul K.", avatar: "R", avatarColor: "from-purple-500 to-violet-500", rating: 4, text: "Love how I can see all homework and notes in one place. The interface is beautiful — feels premium.", coaching: "Bright Future Classes", timeAgo: "3 weeks ago" },
  { name: "Sneha T.", avatar: "S", avatarColor: "from-emerald-500 to-green-500", rating: 5, text: "Found an amazing maths tutor 500m from my house that I never knew existed. Discovery is incredible!", coaching: "Newton Institute", timeAgo: "1 week ago" },
  { name: "Vikram D.", avatar: "V", avatarColor: "from-amber-500 to-orange-500", rating: 5, text: "As a parent, this app gives me peace of mind. I can see schedule, homework, and coaching quality.", coaching: "Excel Institute", timeAgo: "5 days ago" },
  { name: "Meera R.", avatar: "M", avatarColor: "from-cyan-500 to-blue-500", rating: 4, text: "Anonymous reviews feature is great. No fake testimonials — just honest student feedback.", coaching: "Apex Academy", timeAgo: "2 months ago" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-surface-elevated overflow-hidden">
      <div className="section-divider" />

      <div className="section-container">
        <AnimatedSection className="text-center mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Student Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-4 leading-[1.15]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          <p className="text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            Anonymous, verified reviews from students who actually attend these coachings. No fake testimonials.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" staggerDelay={0.08}>
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <div className="group bg-white rounded-2xl border border-gray-100/80 p-5 sm:p-6 hover:shadow-premium hover:border-gray-200 transition-all duration-500 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < review.rating ? "#FBBF24" : "#E5E7EB"}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-text-secondary leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-white text-[11px] font-bold`}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] text-text-primary">{review.name}</p>
                      <p className="text-[11px] text-text-tertiary">{review.coaching}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-text-tertiary">{review.timeAgo}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-14 flex flex-wrap justify-center gap-6 lg:gap-12">
          {[
            { value: "500+", label: "Active Students" },
            { value: "50+", label: "Coachings Listed" },
            { value: "4.8", label: "Average Rating" },
            { value: "2,000+", label: "Reviews Posted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <motion.p initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display font-bold text-2xl lg:text-3xl text-gradient mb-0.5">
                {stat.value}
              </motion.p>
              <p className="text-[13px] text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
