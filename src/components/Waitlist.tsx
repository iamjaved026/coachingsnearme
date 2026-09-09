"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/config/site";

type Role = "student" | "coaching" | "teacher" | "parent";

export default function Waitlist() {
  const [role, setRole] = useState<Role>("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !phone.trim() || !pincode.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    const cleanPincode = pincode.trim();
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const isImmediateZone = cleanPincode.startsWith("851") || cleanPincode === "851133";
    const priorityGroup = isImmediateZone
      ? "Wave 1 - Immediate Launch Area (Teghra / Begusarai)"
      : "Wave 2 - Priority State Rollout";

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mjgzywdj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          priorityGroup,
          role,
          name: name.trim(),
          email: email.trim(),
          phone: cleanPhone,
          pincode: cleanPincode,
          source: "Homepage Quick Intake",
          submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error", err);
      setError("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="relative py-20 lg:py-28 bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative section-container text-center max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/8 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-5 border border-white/8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
            Limited Early Access Program
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4 leading-[1.15]">
            Secure Your Spot on the{" "}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Rolling out city by city starting with {siteConfig.launchCity}. Request your early access and help us prioritize your locality.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Quick Role Switcher */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {([
              { key: "student" as Role, label: "👨‍🎓 Student" },
              { key: "coaching" as Role, label: "🏫 Coaching Institute" },
              { key: "teacher" as Role, label: "👨‍🏫 Teacher" },
              { key: "parent" as Role, label: "👨‍👩‍👦 Parent" },
            ]).map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                  role === r.key
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/20 scale-[1.02]"
                    : "bg-white/5 text-gray-400 border border-white/8 hover:bg-white/10"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {!submitted ? (
            <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-left" autoComplete="on">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="wl-name" className="block text-xs font-medium text-gray-300 mb-1">Your Name</label>
                    <input
                      id="wl-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aryan Kumar"
                      required
                      className="w-full px-3.5 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-[13px] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wl-phone" className="block text-xs font-medium text-gray-300 mb-1">Mobile / WhatsApp</label>
                    <input
                      id="wl-phone"
                      name="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="10-digit number"
                      maxLength={10}
                      required
                      className="w-full px-3.5 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-[13px] transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="wl-email" className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      id="wl-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-3.5 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-[13px] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wl-pincode" className="block text-xs font-medium text-gray-300 mb-1">Pincode</label>
                    <input
                      id="wl-pincode"
                      name="postal-code"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 851133"
                      required
                      maxLength={6}
                      className="w-full px-3.5 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-[13px] transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-rose-400 mt-1">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-md shadow-primary-500/20 transition-all duration-300 text-[14px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting Request..." : "Request Early Access"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                <div className="flex items-center justify-between pt-3 border-t border-white/8 text-[12px] text-gray-400">
                  <span>Want to submit target exams, subjects &amp; address?</span>
                  <a
                    href="/early-access"
                    className="text-primary-300 hover:text-white font-semibold underline flex items-center gap-1 transition-colors"
                  >
                    Open Full Form &rarr;
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-xl flex items-center justify-center mb-3 text-2xl">
                🎉
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Your request has been accepted!</h3>
              <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
                We are actively rolling out access in waves across Teghra and nearby areas. Our team will reach out to you directly via WhatsApp or Email soon!
              </p>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/8 text-xs text-gray-400 mb-4 space-y-1 text-left">
                <p className="text-gray-300 font-medium">Need immediate assistance or have questions?</p>
                <p>Email: <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a></p>
                <p>Phone: <a href={`tel:${siteConfig.support.phone}`} className="text-primary-400 underline">{siteConfig.support.phone}</a></p>
              </div>
              <a
                href="/early-access"
                className="inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                View Full Early Access Program
              </a>
            </motion.div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
