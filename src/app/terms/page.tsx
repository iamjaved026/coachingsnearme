import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | User & Coaching Institute Agreement",
  description: `Official Terms of Service for ${siteConfig.name}. Read the governing terms, student review policies, institute guidelines, intellectual property rights, and platform conduct regulations.`,
});

export default function TermsPage() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="min-h-screen pt-32 pb-24 bg-surface-dark overflow-hidden relative">
        <div className="absolute inset-0 mesh-gradient-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold uppercase tracking-wide mb-4">
            Official Platform Agreement
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-white/10">
            Effective Date: September 2026 • Last Revised: September 9, 2026
          </p>

          <div className="space-y-10 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
            {/* 1. Acceptance */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-3">
                1. Acceptance of Terms &amp; Scope
              </h2>
              <p className="mb-4">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;Student,&rdquo; &ldquo;Parent,&rdquo; &ldquo;Educator,&rdquo; or &ldquo;Coaching Institute&rdquo;) and <strong className="text-white">{siteConfig.name}</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), governing your access to and use of <a href={siteConfig.url} className="text-primary-400 underline">{siteConfig.url}</a>, our mobile applications, batch management workspaces, and discovery APIs.
              </p>
              <p>
                By accessing our website, creating an account, or registering for early access, you explicitly agree to be bound by these Terms and our Privacy Policy. If you do not agree to all terms, you must immediately discontinue use of the platform.
              </p>
            </section>

            {/* 2. Eligibility & Accounts */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Eligibility &amp; Account Security</h2>
              <p>
                You must be at least 13 years of age to create an account. If you are under 18 years of age, you represent that you have obtained consent from a parent or legal guardian to access the platform.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">OTP Authentication:</strong> User accounts are secured primarily via Phone Number One-Time Passwords (OTP). You are solely responsible for maintaining the confidentiality of your credentials and device.</li>
                <li><strong className="text-white">Accurate Information:</strong> You agree to provide accurate, current, and complete registration details and promptly update them if changes occur.</li>
                <li><strong className="text-white">Unauthorized Use:</strong> You must immediately notify us of any security breach or unauthorized access to your account.</li>
              </ul>
            </section>

            {/* 3. Review Authenticity Policy */}
            <section className="p-6 rounded-2xl bg-primary-500/10 border border-primary-500/20 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>⭐</span> 3. Review Authenticity &amp; Integrity Policy
              </h2>
              <p>
                CoachingsNearMe takes review integrity seriously. The platform exists to provide authentic, unfiltered clarity for students and parents:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><strong className="text-white">No Coercion or Retaliation:</strong> Coaching institutes are strictly forbidden from demanding that students reveal their anonymous reviews, offering financial kickbacks for positive reviews, or penalizing students who share honest critique.</li>
                <li><strong className="text-white">No Defamatory or Malicious Content:</strong> Reviews must reflect bona fide personal experiences. False accusations, competitor sabotage, profanity, hate speech, or extortion are strictly prohibited.</li>
                <li><strong className="text-white">Moderation Rights:</strong> We reserve the right to investigate, flag, or remove any review that violates our community standards using algorithmic threat detection and human verification.</li>
              </ul>
            </section>

            {/* 4. Coaching Institute Listings & Obligations */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">4. Coaching Institute Listings &amp; Conduct</h2>
              <p>
                Institutes claiming or creating a profile on CoachingsNearMe agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Provide truthful, un-exaggerated information regarding faculty credentials, batch timetables, and fee structures.</li>
                <li>Honor listed batch schedules and notify enrolled students promptly of emergency cancellations or changes.</li>
                <li>Respect student privacy and not export or misuse batch student directories for off-platform commercial solicitation.</li>
              </ul>
            </section>

            {/* 5. Prohibited Activities */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Prohibited Platform Activities</h2>
              <p>You agree not to engage in any of the following prohibited behaviors:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Attempting to probe, scan, or exploit security vulnerabilities (e.g., path traversal, accessing <code className="text-primary-300">/.env</code>, framework exploits). Malicious IPs are subject to automatic permanent quarantine and law enforcement reporting.</li>
                <li>Using unauthorized automated scrapers, data-mining crawlers, or harvesting tools to extract institute directory records or student information.</li>
                <li>Impersonating any student, educator, coaching director, or official representative of CoachingsNearMe.</li>
                <li>Distributing malware, viruses, or disruptive scripts through homework attachments or notes.</li>
              </ul>
            </section>

            {/* 6. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">6. Intellectual Property Rights</h2>
              <p>
                The CoachingsNearMe brand, platform design, UI components, proprietary algorithms, database schematics, logos, and software code are the exclusive intellectual property of {siteConfig.founder.name} and {siteConfig.name}, protected by Indian and international copyright and trademark laws.
              </p>
              <p>
                Teachers and institutes retain ownership of their proprietary educational notes, question papers, and study materials uploaded to batch workspaces, granting CoachingsNearMe a non-exclusive license solely to host and display them to enrolled students.
              </p>
            </section>

            {/* 7. Disclaimers */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">7. Disclaimers &amp; Educational Intermediary Status</h2>
              <p>
                <strong className="text-white">{siteConfig.name} acts solely as an educational discovery and administrative platform.</strong> We are not an educational board, coaching institute, or accreditation authority.
              </p>
              <p>
                While we employ verification measures, we do not warrant or guarantee the academic outcomes, exam rankings, or quality of instruction delivered by any listed institute. The platform is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall {siteConfig.name}, its founder, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the platform or any dispute between students and coaching institutes.
              </p>
            </section>

            {/* 9. Governing Law & Jurisdiction */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-white">
                9. Governing Law, Jurisdiction &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the substantive laws of the Republic of India, without regard to its conflict of law principles.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or the platform shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-white">Begusarai or Patna, State of Bihar, India</strong>.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section className="space-y-2 text-xs text-gray-400 border-t border-white/10 pt-6">
              <p>
                If you have questions regarding these Terms, please contact our legal and support desk at:
              </p>
              <p className="text-white font-medium">
                Email: <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a> • Phone: {siteConfig.support.phone}
              </p>
              <p>
                Office: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}, India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
