"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const scheduleData = [
  { time: "7:00 AM", subject: "Mathematics", teacher: "Mr. Sharma", color: "bg-blue-500", lightColor: "bg-blue-50 text-blue-700 border-blue-100" },
  { time: "9:00 AM", subject: "Physics", teacher: "Dr. Verma", color: "bg-purple-500", lightColor: "bg-purple-50 text-purple-700 border-purple-100" },
  { time: "11:30 AM", subject: "Chemistry", teacher: "Ms. Gupta", color: "bg-emerald-500", lightColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { time: "2:00 PM", subject: "English", teacher: "Mrs. Patel", color: "bg-amber-500", lightColor: "bg-amber-50 text-amber-700 border-amber-100" },
  { time: "4:30 PM", subject: "Biology", teacher: "Dr. Singh", color: "bg-pink-500", lightColor: "bg-pink-50 text-pink-700 border-pink-100" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Schedule() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-emerald-400/4 rounded-full blur-[100px]" />
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatedSection className="min-w-0 w-full">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-4">
              Smart Schedule
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-5 leading-[1.15]">
              Your Classes,{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Perfectly Organized
              </span>
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-7">
              Smart schedules that sync across all your coachings. Get reminders, avoid conflicts, and never miss a class.
            </p>
            <div className="space-y-3.5">
              {[
                { icon: "⏰", title: "Smart Reminders", desc: "Get notified before each class." },
                { icon: "🔄", title: "Auto-Sync", desc: "Updates when timings change." },
                { icon: "📊", title: "Attendance Tracking", desc: "Track across all batches." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-text-primary mb-0.5">{item.title}</h3>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="min-w-0 w-full">
            <div className="relative max-w-full sm:max-w-sm mx-auto">
              <motion.div whileHover={{ scale: 1.01 }} className="bg-white rounded-2xl sm:rounded-3xl shadow-premium border border-gray-100/80 overflow-hidden">
                <div className="p-4 sm:p-5 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-[15px] text-text-primary">This Week</h4>
                      <p className="text-[11px] text-text-tertiary">May 2026</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg hover:bg-gray-50 flex items-center justify-center text-text-tertiary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg></button>
                      <button className="w-7 h-7 rounded-lg hover:bg-gray-50 flex items-center justify-center text-text-tertiary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></button>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {days.map((day, i) => (
                      <button key={day} className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${i === 2 ? "bg-primary-500 text-white shadow-sm" : "text-text-tertiary hover:bg-gray-50"}`}>{day}</button>
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-2.5">
                  {scheduleData.map((item, i) => (
                    <motion.div key={item.subject} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }} className={`flex items-center gap-3 p-3 rounded-xl border ${item.lightColor} transition-all hover:shadow-sm`}>
                      <div className={`w-1 h-8 rounded-full ${item.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[13px]">{item.subject}</p>
                        <p className="text-[11px] opacity-70 mt-0.5">{item.teacher}</p>
                      </div>
                      <span className="text-[11px] font-medium opacity-80 flex-shrink-0">{item.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-2 left-0 sm:-bottom-3 sm:-left-3 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-sm">⏰</div>
                  <div>
                    <p className="text-[11px] font-semibold text-text-primary">Chemistry in 30 min</p>
                    <p className="text-[9px] text-text-tertiary">Apex Academy • Room 3</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
