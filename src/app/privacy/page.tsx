import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Student & Institute Data Protection",
  description: `Comprehensive Privacy Policy of ${siteConfig.name}. Fully compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and Information Technology Act, 2000. Learn how we safeguard student, parent, and coaching institute data.`,
});

export default function PrivacyPage() {
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
            DPDP Act, 2023 &amp; IT Act, 2000 Compliant
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-white/10">
            Effective Date: September 2026 • Last Revised: September 9, 2026
          </p>

          <div className="space-y-10 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
            {/* Intro */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-3">
                1. Introduction &amp; Commitment to Your Privacy
              </h2>
              <p className="mb-4">
                Welcome to <strong className="text-white">{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), accessible via{" "}
                <a href={siteConfig.url} className="text-primary-400 underline">{siteConfig.url}</a> and our associated mobile applications. We operate a student-first educational infrastructure platform connecting students, parents, tutors, and coaching institutes.
              </p>
              <p>
                We are committed to processing your personal data strictly in compliance with applicable Indian data protection laws, including the{" "}
                <strong className="text-white">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the{" "}
                <strong className="text-white">Information Technology Act, 2000</strong>, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. This Privacy Policy details how we collect, handle, protect, and process your personal data.
              </p>
            </section>

            {/* Definitions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Key Definitions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Data Principal:</strong> The individual to whom the personal data relates (e.g., student, parent, teacher, coaching administrator).</li>
                <li><strong className="text-white">Data Fiduciary:</strong> {siteConfig.name}, which determines the purpose and means of processing personal data.</li>
                <li><strong className="text-white">Personal Data:</strong> Any data about an individual who is identifiable by or in relation to such data.</li>
                <li><strong className="text-white">Processing:</strong> An automated or manual operation performed on personal data, including collection, recording, organization, storage, retrieval, and erasure.</li>
              </ul>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Information We Collect</h2>
              <p>We collect only the minimum personal data required to provide a reliable, student-centric experience:</p>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>📱</span> Identity &amp; Contact Data
                  </h3>
                  <p className="text-xs text-gray-400">
                    Full name, verified mobile phone number (authenticated via SMS OTP), email address, and optional avatar. We do not store plain-text passwords.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>📍</span> Geolocation &amp; Pincode Data
                  </h3>
                  <p className="text-xs text-gray-400">
                    Postal pincode and device GPS coordinates accessed strictly during app use to calculate distance to nearby coaching institutes. We never track your location in the background.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>📚</span> Academic &amp; Batch Data
                  </h3>
                  <p className="text-xs text-gray-400">
                    Target exams (e.g., JEE, NEET, UPSC, Boards), current class/grade, enrolled batches, homework submissions, study notes, and attendance records.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>🏫</span> Coaching &amp; Faculty Data
                  </h3>
                  <p className="text-xs text-gray-400">
                    Institute name, owner credentials, physical address, course curriculum, timetable schedules, fee structures, and verified teacher details.
                  </p>
                </div>
              </div>
            </section>

            {/* Student Reviews & Anonymity */}
            <section className="p-6 rounded-2xl bg-primary-500/10 border border-primary-500/20 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🛡️</span> 4. Student Reviews &amp; Anonymity Protection
              </h2>
              <p>
                A core pillar of CoachingsNearMe is empowering students with honest, unfiltered feedback about educational institutes without fear of intimidation or punitive action:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><strong className="text-white">Public Anonymity:</strong> When you post a review, your real name, phone number, and student profile are completely decoupled from public view. Coaching institutes cannot see who wrote which review.</li>
                <li><strong className="text-white">Abuse Prevention:</strong> Internally, our threat-detection and authentication systems ensure that each review originates from a real, verified student account to prevent competitors or bots from astroturfing.</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. How We Use Your Information</h2>
              <p>We process your data strictly on lawful grounds under the DPDP Act for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>To enable hyperlocal discovery of coaching institutes matching your target exam and distance.</li>
                <li>To facilitate batch enrollment, homework distribution, announcements, and attendance notifications.</li>
                <li>To dispatch transactional SMS/Email notifications (OTP codes, emergency timetable shifts, batch alerts).</li>
                <li>To maintain platform security, prevent DDoS attacks, detect crawler bot abuse, and enforce abuse prevention.</li>
                <li>To prioritize city-by-city rollouts based on demand from early access waitlist registrations.</li>
              </ul>
            </section>

            {/* Absolute No-Sale Policy */}
            <section className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
              <h2 className="text-xl font-bold text-white">6. Our Absolute Zero-Sale Data Commitment</h2>
              <p>
                <strong className="text-white">We DO NOT sell, rent, license, or monetize student or parent phone numbers, emails, or personal data to third-party telemarketers, commercial lead brokers, loan providers, or advertising networks.</strong> Your contact details exist solely for educational interactions on CoachingsNearMe.
              </p>
            </section>

            {/* Sub-Processors */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">7. Authorized Third-Party Sub-Processors</h2>
              <p>To deliver our cloud infrastructure securely, we partner with industry-leading infrastructure providers under strict confidentiality agreements:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Supabase / PostgreSQL:</strong> Cloud database and secure identity storage with end-to-end encryption at rest (AES-256).</li>
                <li><strong className="text-white">Cloudflare:</strong> Global Edge CDN and high-performance DDoS mitigation.</li>
                <li><strong className="text-white">Transactional Communications:</strong> Reputed SMS gateway providers (Fast2SMS/Twilio) and transactional email infrastructure (Resend) for OTP and critical alerts.</li>
                <li><strong className="text-white">Formspree:</strong> Encrypted early access waitlist and application dispatch handling.</li>
              </ul>
            </section>

            {/* Minors & Children */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">8. Protection of Minors &amp; Children</h2>
              <p>
                Many students using CoachingsNearMe are under 18 years of age. In compliance with Section 9 of the DPDP Act, 2023:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>We do not engage in targeted behavioral advertising aimed at children.</li>
                <li>We do not track or profile minors for commercial monetization.</li>
                <li>Parents and legal guardians may at any time inspect, correct, or request the deletion of their child&apos;s account and educational records.</li>
              </ul>
            </section>

            {/* Data Rights */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">9. Your Rights as a Data Principal</h2>
              <p>Under the DPDP Act, 2023, you have enforceable legal rights regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Right to Access:</strong> Request a summary of personal data held about you and the processing activities undertaken.</li>
                <li><strong className="text-white">Right to Correction:</strong> Request immediate correction of inaccurate, incomplete, or outdated personal data.</li>
                <li><strong className="text-white">Right to Erasure / Deletion:</strong> Request complete deletion of your account, profile, and associated history.</li>
                <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent previously given for data processing at any time.</li>
                <li><strong className="text-white">Right to Nominate:</strong> Nominate an individual to exercise your rights in the event of incapacity.</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">10. Data Security &amp; Encryption Measures</h2>
              <p>
                We employ defense-in-depth security mechanisms designed to protect your data against unauthorized access, alteration, or disclosure:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">In-Transit Encryption:</strong> All communications between client devices and our backend are encrypted via modern TLS 1.3 protocol.</li>
                <li><strong className="text-white">At-Rest Encryption:</strong> Database stores, attachments, and backups are encrypted using industry-standard AES-256 cipher.</li>
                <li><strong className="text-white">Automated Threat Mitigation:</strong> Instant IP throttling, quarantine triggers, and Telegram security monitoring for scanner or exploit attempts.</li>
              </ul>
            </section>

            {/* Grievance Officer */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-white">
                11. Grievance Redressal &amp; Data Protection Officer
              </h2>
              <p>
                In compliance with the Information Technology Act, 2000 and the DPDP Act, 2023, the details of our designated Grievance Officer are set forth below:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-black/40 border border-white/8 space-y-1.5 text-xs sm:text-sm">
                <p><strong className="text-white">Name:</strong> Javed Hussain</p>
                <p><strong className="text-white">Designation:</strong> Grievance Officer &amp; Founder, {siteConfig.name}</p>
                <p><strong className="text-white">Physical Office:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}, India</p>
                <p><strong className="text-white">Grievance Email:</strong> <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a></p>
                <p><strong className="text-white">Resolution Timeline:</strong> Every grievance is acknowledged within 24 hours and addressed within 15 statutory business days.</p>
              </div>
            </section>

            {/* Updates */}
            <section className="space-y-2 text-xs text-gray-400 border-t border-white/10 pt-6">
              <p>
                We may periodically update this Privacy Policy to reflect regulatory amendments or new platform capabilities. Significant modifications will be notified via prominent in-app notices or direct communication.
              </p>
              <p>
                For further inquiries, contact us anytime at <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
