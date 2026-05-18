"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const tabs = ["Overview", "Homework", "Notes", "Recordings", "Announcements"];

const homeworkItems = [
  { title: "Quadratic Equations – Practice Set 5", due: "Tomorrow", status: "pending", subject: "Mathematics" },
  { title: "Organic Chemistry – Chapter 12 MCQs", due: "In 3 days", status: "pending", subject: "Chemistry" },
  { title: "Newton's Laws – Numericals", due: "Completed", status: "done", subject: "Physics" },
];

const announcements = [
  { title: "Doubt session rescheduled to Saturday 4 PM", time: "2 hours ago", type: "schedule" },
  { title: "New study material uploaded for Unit 8", time: "Yesterday", type: "material" },
];

export default function BatchWorkspace() {
  return (
    <section id="batches" className="relative py-20 lg:py-28 bg-surface-dark text-text-inverse overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-16 left-16 w-56 h-56 bg-primary-500/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-16 right-16 w-72 h-72 bg-purple-500/6 rounded-full blur-[100px]" />

      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Content */}
          <AnimatedSection className="min-w-0 w-full">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/8 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-white/8">
              Batch Workspace
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-5 leading-[1.15]">
              More Than Just a{" "}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Coaching Finder
              </span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-7">
              Once you join a coaching, your entire academic life gets organized.
              Homework, notes, class recordings, announcements — everything in
              one workspace. Think Discord meets Notion, built for students.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                { icon: "📝", label: "Homework", count: "Track assignments" },
                { icon: "📢", label: "Announcements", count: "Real-time updates" },
                { icon: "🎥", label: "Recordings", count: "Class playback" },
                { icon: "📒", label: "Notes", count: "Shared resources" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white/5 border border-white/6 hover:bg-white/8 transition-all duration-300 min-w-0 w-full">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm text-white truncate">{item.label}</p>
                    <p className="text-[11px] text-gray-500 truncate">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Workspace Preview */}
          <AnimatedSection direction="right" delay={0.2} className="min-w-0 w-full">
            <div className="relative mx-auto w-full max-w-full sm:max-w-md lg:max-w-lg min-w-0">
              <motion.div whileHover={{ scale: 1.01 }} className="glass-dark rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-w-0 w-full">
                {/* Header */}
                <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-white/6">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">A</div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-[13px] text-white truncate">Apex Academy</h4>
                        <p className="text-[11px] text-gray-500 truncate">JEE Advanced Batch • 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-[11px] text-emerald-400 font-medium whitespace-nowrap">Live</span>
                    </div>
                  </div>
                  <div className="flex gap-1 overflow-x-auto scrollbar-none -mx-1 px-1 w-full max-w-full">
                    {tabs.map((tab, i) => (
                      <button key={tab} className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${i === 1 ? "bg-primary-500/20 text-primary-400" : "text-gray-500 hover:text-gray-300"}`}>
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 space-y-2.5">
                  {homeworkItems.map((hw, i) => (
                    <motion.div key={hw.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/4 hover:bg-white/6 transition-colors group">
                      <div className={`flex-shrink-0 w-4.5 h-4.5 mt-0.5 rounded-md border-2 flex items-center justify-center ${hw.status === "done" ? "bg-emerald-500 border-emerald-500" : "border-gray-600"}`}>
                        {hw.status === "done" && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[13px] font-medium leading-tight line-clamp-2 ${hw.status === "done" ? "text-gray-500 line-through" : "text-white"}`}>{hw.title}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[11px] text-gray-500">{hw.subject}</span>
                          <span className="text-[9px] text-gray-600">•</span>
                          <span className={`text-[11px] ${hw.status === "done" ? "text-emerald-500" : hw.due === "Tomorrow" ? "text-amber-400" : "text-gray-500"}`}>{hw.due}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="flex items-center gap-2.5 py-1.5">
                    <div className="flex-1 h-px bg-white/6" />
                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">Announcements</span>
                    <div className="flex-1 h-px bg-white/6" />
                  </div>

                  {announcements.map((a, i) => (
                    <motion.div key={a.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.1 }} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/4">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm ${a.type === "schedule" ? "bg-amber-500/15" : "bg-primary-500/15"}`}>
                        {a.type === "schedule" ? "📅" : "📎"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] text-gray-300 leading-tight line-clamp-2 break-words">{a.title}</p>
                        <p className="text-[11px] text-gray-600 mt-0.5">{a.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-3 right-0 sm:-top-4 sm:-right-3 bg-white rounded-xl shadow-lg px-3 py-2.5 z-10">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-text-primary">3 new assignments</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
