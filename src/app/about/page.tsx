import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";

export const metadata = constructMetadata({
  title: "About Us",
  description: `Discover how ${siteConfig.name} is revolutionizing the coaching ecosystem starting in ${siteConfig.launchCity}. Learn about our mission to bring transparency and organization to student life.`,
});

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface-dark overflow-hidden relative">
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6">
          Our Story
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-8">
          We are building the <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">infrastructure</span><br />
          for the next generation of students.
        </h1>
        
        <div className="prose prose-lg prose-invert max-w-none text-gray-400">
          <p className="leading-relaxed">
            At <strong className="text-white">{siteConfig.name}</strong>, we realized that while education has moved online, the local coaching ecosystem remains deeply fragmented. Students rely on chaotic WhatsApp groups, printed notes that get lost, and word-of-mouth to find the best teachers.
          </p>
          <p className="leading-relaxed">
            We are here to change that.
          </p>
          <p className="leading-relaxed">
            Starting in <strong className="text-white">{siteConfig.launchCity}</strong>, our mission is to bring transparency, organization, and a premium digital experience to every student attending local coachings. We provide a centralized workspace where homework, schedules, announcements, and notes live in harmony.
          </p>
          <p className="leading-relaxed">
            This isn&apos;t just another tuition app. It&apos;s a complete operating system for your coaching life.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">👨‍🎓 Student First</h3>
              <p className="text-[14px] text-gray-400">Everything we build optimizes for student focus, clarity, and success.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">✨ Premium Quality</h3>
              <p className="text-[14px] text-gray-400">Education tools shouldn&apos;t look like they were built in 1995. We believe in beautiful, fast software.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:col-span-2">
              <h3 className="text-white font-semibold mb-2">🔒 Privacy & Security</h3>
              <p className="text-[14px] text-gray-400">Your data is yours. We ensure a safe environment free from the chaos of public groups and spam.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
