"use client";

import { useState, useTransition } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

type UserRole = "student" | "coaching" | "teacher" | "parent";

interface FormState {
  name: string;
  email: string;
  phone: string;
  pincode: string;
  address: string;
  role: UserRole;
  targetExam: string;
  coachingName: string;
  subjectOrSpecialty: string;
  studentCount: string;
  preferredFeatures: string[];
  notes: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  pincode: "",
  address: "",
  role: "student",
  targetExam: "JEE / NEET",
  coachingName: "",
  subjectOrSpecialty: "",
  studentCount: "50-200",
  preferredFeatures: [],
  notes: "",
};

const studentFeatureOptions = [
  "Honest Student Reviews",
  "Batch Workspace & Attendance",
  "Homework & Study Notes",
  "Fee Transparency & Comparison",
  "Direct Teacher Chat",
  "Exam Test Series Alerts",
];

const coachingFeatureOptions = [
  "Listing in Local Coaching Directory",
  "Direct Student Inquiries & Leads",
  "Batch Workspace & Announcements",
  "Student Attendance & Homework Tracker",
  "Fee Collection & Installment Alerts",
  "Replacing WhatsApp Group Chaos",
];

const teacherFeatureOptions = [
  "Nearby Student Tutoring Requests",
  "Digital Notes & Homework Sharing",
  "Batch Timetable & Schedule Management",
  "Direct Student Communication",
];

const parentFeatureOptions = [
  "Verified Nearby Institutes & Safety",
  "Batch Timings & Daily Attendance",
  "Fee Breakdown & Transparent Details",
  "Genuine Reviews from Local Parents",
];

export default function EarlyAccessPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isImmediatePincode =
    form.pincode.startsWith("851") || form.pincode === "851133";

  const toggleFeature = (feat: string) => {
    setForm((prev) => ({
      ...prev,
      preferredFeatures: prev.preferredFeatures.includes(feat)
        ? prev.preferredFeatures.filter((f) => f !== feat)
        : [...prev.preferredFeatures, feat],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    const cleanPhone = form.phone.replace(/[\s\-\+]/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    const cleanPincode = form.pincode.trim();
    if (!/^\d{6}$/.test(cleanPincode)) {
      setErrorMsg("Please enter a valid 6-digit postal pincode.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("https://formspree.io/f/mjgzywdj", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            role: form.role,
            name: form.name.trim(),
            email: form.email.trim(),
            phone: cleanPhone,
            pincode: cleanPincode,
            address: form.address.trim() || "Not provided",
            targetExam: form.targetExam || "Not applicable",
            coachingName: form.coachingName.trim() || "Not provided",
            subjectOrSpecialty: form.subjectOrSpecialty.trim() || "Not provided",
            studentCount: form.studentCount || "Not applicable",
            preferredFeatures: form.preferredFeatures.length > 0 ? form.preferredFeatures.join(", ") : "None selected",
            notes: form.notes.trim() || "No additional notes",
            submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });

        if (res.ok) {
          setIsSubmitted(true);
        } else {
          const data = await res.json().catch(() => ({}));
          setErrorMsg(data.error || "Failed to submit form. Please check your details and try again.");
        }
      } catch (err) {
        console.error("Submission error:", err);
        setErrorMsg("Network error occurred. Please check your connection and retry.");
      }
    });
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `Hey! I just requested early access on CoachingsNearMe.in (${siteConfig.tagline}). Discover nearby coachings, batches, and verified reviews! Check it out: https://coachingsnearme.in/early-access`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  // Structured Data for AI & Search Crawlers
  const earlyAccessStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Apply for CoachingsNearMe Early Access",
        description:
          "Step-by-step registration for students, parents, coaching institutes, and teachers to gain early access to the CoachingsNearMe platform.",
        step: [
          {
            "@type": "HowToStep",
            name: "Select Your Role",
            text: "Choose whether you are a Student, Coaching Institute, Teacher, or Parent.",
          },
          {
            "@type": "HowToStep",
            name: "Enter Contact & Pincode",
            text: "Provide your name, email, 10-digit mobile number, and 6-digit regional pincode.",
          },
          {
            "@type": "HowToStep",
            name: "Specify Goals & Preferences",
            text: "Optionally tell us your target exam, current coaching, or features you are looking for.",
          },
          {
            "@type": "HowToStep",
            name: "Get Confirmation",
            text: "Your request is accepted and our team connects directly via WhatsApp or email.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is CoachingsNearMe Early Access free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, early access is 100% free for students, parents, and educators. Selected pilot coaching institutes also receive complimentary batch setup.",
            },
          },
          {
            "@type": "Question",
            name: "Which areas are rolling out first?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Wave 1 rollout is actively prioritizing Teghra and Begusarai district in Bihar, followed by expanding cities based on waitlist demand.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(earlyAccessStructuredData),
        }}
      />
      <Navbar theme="dark" />
      <main className="min-h-screen pt-28 pb-20 bg-surface-dark overflow-hidden relative">
        <div className="absolute inset-0 mesh-gradient-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Private Beta &amp; Early Rollout
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Request Your{" "}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Early Access Pass
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Be among the first to experience the future platform for discovering
              coachings, organizing batches, and reading verified student reviews.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-8" autoComplete="on">
                  {/* Role Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      Who are you? <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { role: "student" as UserRole, icon: "👨‍🎓", label: "Student" },
                        { role: "coaching" as UserRole, icon: "🏫", label: "Coaching Center" },
                        { role: "teacher" as UserRole, icon: "👨‍🏫", label: "Teacher / Tutor" },
                        { role: "parent" as UserRole, icon: "👨‍👩‍👦", label: "Parent" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.role}
                          onClick={() =>
                            setForm((p) => ({
                              ...p,
                              role: item.role,
                              preferredFeatures: [],
                            }))
                          }
                          className={`p-3.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center gap-1.5 ${
                            form.role === item.role
                              ? "bg-primary-500/20 border-primary-400 text-white shadow-lg shadow-primary-500/20 scale-[1.02]"
                              : "bg-white/5 border-white/8 text-gray-400 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-xs font-semibold">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Core Identity Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="full-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder={
                          form.role === "coaching"
                            ? "e.g. Rahul Verma (Director)"
                            : "e.g. Aryan Kumar"
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email-address" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone-number" className="block text-xs font-medium text-gray-300 mb-1.5">
                        WhatsApp / Mobile Number{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-sm text-gray-400 font-medium">
                          +91
                        </span>
                        <input
                          id="phone-number"
                          name="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          type="tel"
                          required
                          maxLength={10}
                          value={form.phone}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              phone: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          placeholder="98765 43210"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all tracking-wide"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="postal-code" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Postal Pincode <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        type="text"
                        required
                        maxLength={6}
                        value={form.pincode}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            pincode: e.target.value.replace(/\D/g, ""),
                          })
                        }
                        placeholder="e.g. 851133"
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Pincode Detection Banner */}
                  {form.pincode.length >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
                        isImmediatePincode
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                          : "bg-primary-500/10 border border-primary-500/20 text-primary-300"
                      }`}
                    >
                      <span className="text-base">
                        {isImmediatePincode ? "🎯" : "📍"}
                      </span>
                      <span>
                        {isImmediatePincode
                          ? "Priority Rollout Zone: Begusarai / Teghra Area (Wave 1 VIP Beta)"
                          : `Pincode registered! Will count towards expanding our launch into your district.`}
                      </span>
                    </motion.div>
                  )}

                  {/* Locality / Full Address (Optional) */}
                  <div>
                    <label htmlFor="street-address" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Locality / Street / Landmark{" "}
                      <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="street-address"
                      name="street-address"
                      autoComplete="street-address"
                      type="text"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="e.g. Station Road, Near Post Office, Teghra"
                      className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all"
                    />
                  </div>

                  {/* Dynamic Role-Specific Fields */}
                  <div className="pt-2 border-t border-white/8 space-y-5">
                    {/* Student specifics */}
                    {form.role === "student" && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="target-exam" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Target Exam / Academic Goal{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <select
                            id="target-exam"
                            name="target-exam"
                            value={form.targetExam}
                            onChange={(e) =>
                              setForm({ ...form, targetExam: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-primary-400 text-sm"
                          >
                            <option value="JEE Main / Advanced">Engineering (JEE Main / Adv)</option>
                            <option value="NEET UG">Medical (NEET UG)</option>
                            <option value="UPSC / State PSC (BPSC)">Civil Services / BPSC</option>
                            <option value="SSC / Banking / Railways">SSC / Banking / Govt Exams</option>
                            <option value="Class 9th - 12th Board">Class 9th - 12th (CBSE / BSEB)</option>
                            <option value="Class 6th - 8th Foundation">Class 6th - 8th (Foundation)</option>
                            <option value="Coding & Tech Skills">Coding &amp; Software Skills</option>
                            <option value="General Coaching">Other / General Tuition</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="current-coaching-institute" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Current Coaching Institute{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="current-coaching-institute"
                            name="current-coaching-institute"
                            autoComplete="off"
                            type="text"
                            value={form.coachingName}
                            onChange={(e) =>
                              setForm({ ...form, coachingName: e.target.value })
                            }
                            placeholder="e.g. Apex Academy or Self-Study"
                            className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {/* Coaching specifics */}
                    {form.role === "coaching" && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="coaching-institute-name" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Institute / Coaching Center Name{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="coaching-institute-name"
                            name="coaching-institute-name"
                            autoComplete="off"
                            type="text"
                            value={form.coachingName}
                            onChange={(e) =>
                              setForm({ ...form, coachingName: e.target.value })
                            }
                            placeholder="e.g. Newton Classes"
                            className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="student-count" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Active Students Enrolled{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <select
                            id="student-count"
                            name="student-count"
                            value={form.studentCount}
                            onChange={(e) =>
                              setForm({ ...form, studentCount: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-primary-400 text-sm"
                          >
                            <option value="Under 50">Under 50 Students</option>
                            <option value="50-200">50 - 200 Students</option>
                            <option value="200-500">200 - 500 Students</option>
                            <option value="500+">500+ Students</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Teacher specifics */}
                    {form.role === "teacher" && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="subjects-taught" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Subjects Taught{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="subjects-taught"
                            name="subjects-taught"
                            autoComplete="off"
                            type="text"
                            value={form.subjectOrSpecialty}
                            onChange={(e) =>
                              setForm({ ...form, subjectOrSpecialty: e.target.value })
                            }
                            placeholder="e.g. Physics, Chemistry, Maths"
                            className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="affiliated-coaching" className="block text-xs font-medium text-gray-300 mb-1.5">
                            Affiliated Coaching / Private{" "}
                            <span className="text-gray-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="affiliated-coaching"
                            name="affiliated-coaching"
                            autoComplete="off"
                            type="text"
                            value={form.coachingName}
                            onChange={(e) =>
                              setForm({ ...form, coachingName: e.target.value })
                            }
                            placeholder="e.g. Independent or XYZ Institute"
                            className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {/* Parent specifics */}
                    {form.role === "parent" && (
                      <div>
                        <label htmlFor="child-goal" className="block text-xs font-medium text-gray-300 mb-1.5">
                          Child&apos;s Current Class / Goal{" "}
                          <span className="text-gray-500 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="child-goal"
                          name="child-goal"
                          autoComplete="off"
                          type="text"
                          value={form.targetExam}
                          onChange={(e) =>
                            setForm({ ...form, targetExam: e.target.value })
                          }
                          placeholder="e.g. Class 10th CBSE or Preparing for JEE"
                          className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm"
                        />
                      </div>
                    )}

                    {/* What are you looking for in this platform? */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">
                        What are you looking for most in CoachingsNearMe?{" "}
                        <span className="text-gray-500 font-normal">(Select all that apply)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(form.role === "student"
                          ? studentFeatureOptions
                          : form.role === "coaching"
                          ? coachingFeatureOptions
                          : form.role === "teacher"
                          ? teacherFeatureOptions
                          : parentFeatureOptions
                        ).map((feat) => {
                          const isSelected = form.preferredFeatures.includes(feat);
                          return (
                            <button
                              type="button"
                              key={feat}
                              onClick={() => toggleFeature(feat)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-primary-500 text-white shadow-sm shadow-primary-500/30 border border-primary-400"
                                  : "bg-white/5 text-gray-400 border border-white/8 hover:bg-white/10 hover:text-gray-200"
                              }`}
                            >
                              {isSelected ? "✓ " : "+ "}
                              {feat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Open-ended feedback */}
                    <div>
                      <label htmlFor="user-notes" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Tell us more{" "}
                        <span className="text-gray-500 font-normal">
                          (Optional — suggestions, specific coachings you want onboarded, or queries)
                        </span>
                      </label>
                      <textarea
                        id="user-notes"
                        name="notes"
                        autoComplete="off"
                        rows={3}
                        value={form.notes}
                        onChange={(e) =>
                          setForm({ ...form, notes: e.target.value })
                        }
                        placeholder="Write anything you'd like our founding team to know..."
                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Error Alert */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-base shadow-lg shadow-primary-500/25 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Early Access Request
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-500 leading-normal">
                    By submitting, you agree to our{" "}
                    <a href="/terms" className="text-gray-400 underline hover:text-white">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-gray-400 underline hover:text-white">
                      Privacy Policy
                    </a>
                    . No spam, ever.
                  </p>
                </form>
              </motion.div>
            ) : (
              /* Success / Confirmation Card */
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl backdrop-blur-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-3xl">
                  🎉
                </div>

                <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Request Accepted
                </span>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  Your Early Access Request Has Been Accepted!
                </h2>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Thank you for joining us early! We are actively rolling out access in waves across Teghra and nearby areas to ensure the best experience. Our team will reach out to you directly via WhatsApp or Email soon.
                </p>

                {/* Friendly Info Card with Contact */}
                <div className="bg-black/30 border border-white/10 rounded-2xl p-5 mb-6 text-left space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🚀</span>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">Gradual Rollout in Progress</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        We are verifying institutes and onboarding batches step by step. You&apos;ll be notified the moment your area and target exam workspace are fully unlocked!
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/8">
                    <p className="text-xs text-gray-300 font-medium mb-2">Have any questions or need direct assistance?</p>
                    <div className="flex flex-col sm:flex-row gap-3 text-xs">
                      <a
                        href={`mailto:${siteConfig.support.email}`}
                        className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        {siteConfig.support.email}
                      </a>
                      <a
                        href={`tel:${siteConfig.support.phone}`}
                        className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        {siteConfig.support.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <button
                    onClick={shareOnWhatsApp}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    Share with Friends &amp; Classmates
                  </button>

                  <a
                    href="/"
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    Return to Homepage
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
