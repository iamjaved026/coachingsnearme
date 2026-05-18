"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Role = "student" | "coaching" | "teacher";

export default function Waitlist() {
  const [role, setRole] = useState<Role>("student");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="relative py-20 lg:py-28 bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/4 rounded-full blur-[100px]" />

      <div className="relative section-container text-center">
        <AnimatedSection>
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/8 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-5 border border-white/8">
            Early Access
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4 leading-[1.15]">
            Escape the WhatsApp{" "}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Coaching Chaos
            </span>
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Join the waitlist for early access. Help shape the future of coaching discovery, starting in Teghra, Bihar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-2 mb-7">
            {([
              { key: "student" as Role, label: "👨‍🎓 Student" },
              { key: "coaching" as Role, label: "🏫 Coaching" },
              { key: "teacher" as Role, label: "👨‍🏫 Teacher" },
            ]).map((r) => (
              <button
                key={r.key}
                onClick={() => setRole(r.key)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                  role === r.key
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                    : "bg-white/5 text-gray-400 border border-white/8 hover:bg-white/10"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-[13px]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-md shadow-primary-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-[13px] whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-[11px] text-gray-600 mt-3">
                No spam, ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-sm mx-auto bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6"
            >
              <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-xl flex items-center justify-center mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1.5">You&apos;re on the list! 🎉</h3>
              <p className="text-[13px] text-gray-400">We&apos;ll notify you when we expand to your city.</p>
            </motion.div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
