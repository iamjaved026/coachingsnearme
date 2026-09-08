import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Closed Tester Terms & Conditions | Beta Program Agreement",
  description: `Official terms governing participation in the CoachingsNearMe Private Testing & Internal Closed Beta Program. Understand tester responsibilities, pre-release software disclaimers, and feedback licensing.`,
});

export default function TesterTermsPage() {
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wide mb-4">
            Closed Beta &amp; Internal Testing Agreement
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Tester Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-white/10">
            Governing Document for Internal Testers &amp; Private Beta Participants • Last Revised: September 2026
          </p>

          <div className="space-y-10 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
            {/* 1. Purpose */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-3">
                1. Purpose of the Closed Testing Program
              </h2>
              <p className="mb-4">
                Thank you for participating as an authorized tester in the <strong className="text-white">{siteConfig.name}</strong> Private Testing Program (&ldquo;Testing Program&rdquo;). The purpose of this program is to evaluate pre-release software builds, test feature functionality (including batch workspaces, coaching search, and student reviews), identify bugs, and refine user experience prior to general public availability.
              </p>
              <p>
                By downloading, installing, or logging into any pre-release build or beta APK of CoachingsNearMe, you agree to comply with these Tester Terms &amp; Conditions, our Tester Privacy Policy, and our Tester Non-Disclosure Agreement.
              </p>
            </section>

            {/* 2. Nature of Pre-Release Software */}
            <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>⚠️</span> 2. Nature of Pre-Release Beta Software
              </h2>
              <p className="text-gray-300">
                You understand and acknowledge that pre-release software is experimental and still in active development:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><strong className="text-white">Bugs &amp; Inaccuracies:</strong> The software may contain defects, errors, unexpected crashes, UI displacement, or incomplete features.</li>
                <li><strong className="text-white">Database Schema Resets:</strong> During the testing cycle, testing databases, sample batches, mock homework records, and test sessions may be wiped, migrated, or reset without prior notice.</li>
                <li><strong className="text-white">No Service Level Guarantee:</strong> Pre-release software is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of uptime, performance, or fitness for a particular purpose.</li>
              </ul>
            </section>

            {/* 3. Authorized Whitelist Access */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Authorized Whitelist Access &amp; Security</h2>
              <p>
                Access to the Closed Testing Program is strictly restricted to designated phone numbers and email addresses pre-registered on our internal testing whitelist:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Individual License:</strong> Your authorization is personal, non-transferable, and revocable at our sole discretion.</li>
                <li><strong className="text-white">No Sharing of Credentials or APKs:</strong> You may not share your login OTP, test credentials, or private APK installation binaries with any unauthorized third party.</li>
                <li><strong className="text-white">Security Gating:</strong> Our backend strictly verifies authorized testers. Attempts by non-whitelisted accounts to bypass gating will be rejected with HTTP 403.</li>
              </ul>
            </section>

            {/* 4. Tester Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">4. Tester Responsibilities &amp; Feedback</h2>
              <p>As an active tester, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Regularly update your app to the latest test build provided via our internal distribution channel.</li>
                <li>Report reproducible software bugs, graphical glitches, crashes, or usability hindrances promptly through our feedback channel.</li>
                <li>Provide honest, constructive, and objective evaluations of new features.</li>
              </ul>
            </section>

            {/* 5. Feedback Licensing */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Unrestricted Ownership of Feedback</h2>
              <p>
                We welcome your ideas, suggestions, and feedback. By submitting feedback, bug reports, feature suggestions, or survey responses, you grant <strong className="text-white">{siteConfig.name}</strong> a perpetual, worldwide, irrevocable, royalty-free, fully transferable and sublicensable license to use, incorporate, modify, commercialize, and publish such feedback without any compensation or attribution obligation to you.
              </p>
            </section>

            {/* 6. Confidentiality */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">6. Confidentiality Obligations</h2>
              <p>
                All unreleased UI designs, upcoming features, internal architectural mechanisms, APK download links, and backend endpoints made accessible to you are strictly confidential. Your confidentiality obligations are governed in detail by our{" "}
                <a href="/tester-nda" className="text-primary-400 underline">Tester Non-Disclosure Agreement (NDA)</a>.
              </p>
            </section>

            {/* 7. Revocation */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">7. Termination of Testing Privileges</h2>
              <p>
                We reserve the right to suspend or terminate your participation in the Closed Testing Program and revoke your account authorization at any time, with or without cause, and without prior notice. Upon termination, you agree to promptly uninstall the beta application.
              </p>
            </section>

            {/* 8. Contact */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 text-xs sm:text-sm text-gray-400">
              <h3 className="font-bold text-white text-base">Questions Regarding Tester Terms?</h3>
              <p>
                Reach our internal beta engineering team directly at: <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
