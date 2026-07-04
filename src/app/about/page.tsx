import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CoachingsNearMe",
  description: "Learn about the mission, vision, and the student-first philosophy behind CoachingsNearMe. Built by a student to solve real education discovery problems.",
  openGraph: {
    title: "About Us | CoachingsNearMe",
    description: "Learn about the mission, vision, and the student-first philosophy behind CoachingsNearMe. Built by a student to solve real education discovery problems.",
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="pt-24 lg:pt-32 pb-24 bg-surface-dark min-h-screen">
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>

          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Empowering Students. <br/> Transparent Education.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We are on a mission to organize local education discovery and management into a single, student-first platform.
            </p>
          </div>

          {/* The Story */}
          <div className="space-y-16 lg:space-y-24 text-gray-300 text-lg leading-relaxed">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">The Story</h2>
              <p className="mb-4">
                The journey of CoachingsNearMe started with a simple, personal frustration. When our founder, {siteConfig.founder.name}, was searching for the right coaching institute in {siteConfig.launchCity}, the process was overwhelmingly chaotic.
              </p>
              <p className="mb-4">
                There was no central place to discover local coachings. Students had to rely on scattered flyers, biased word-of-mouth, and endless WhatsApp groups that were impossible to keep track of. Important announcements got lost in the chat, schedules were miscommunicated, and there was zero transparency regarding the actual quality of teaching.
              </p>
              <p>
                It became clear that local education needed a serious infrastructure upgrade. CoachingsNearMe was built to solve this problem from the ground up, prioritizing the student's experience above everything else.
              </p>
            </section>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 text-base">
                  To democratize access to quality local education by providing a transparent, unbiased, and hyper-organized platform for every student in India.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-base">
                  A future where no student makes a blind educational decision. Where local teachers can thrive based on merit, and learning management is seamless.
                </p>
              </div>
            </div>

            {/* Founder Philosophy */}
            <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-900/40 to-surface-dark border border-primary-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg className="w-48 h-48 text-primary-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 relative z-10">Student-First Philosophy</h2>
              <p className="mb-6 relative z-10">
                "We don't build features for the sake of marketing. We build tools that directly impact a student's daily life. If a feature doesn't make finding a coaching center easier, or managing daily homework simpler, it doesn't belong on CoachingsNearMe."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">
                  {siteConfig.founder.displayName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold">{siteConfig.founder.displayName}</h3>
                  <p className="text-sm text-primary-400">Founder</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
