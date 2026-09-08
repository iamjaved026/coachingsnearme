import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Tester Non-Disclosure Agreement (NDA) | Private Beta Program",
  description: `Official Non-Disclosure Agreement for CoachingsNearMe Private Beta Testers. Understand the confidentiality of unreleased software, APK binaries, UI features, and internal APIs.`,
});

export default function TesterNdaPage() {
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wide mb-4">
            Confidentiality &amp; Non-Disclosure Agreement
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Tester Non-Disclosure Agreement
          </h1>
          <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-white/10">
            Binding Confidentiality Agreement for Private Beta &amp; Internal Testers • Last Revised: September 2026
          </p>

          <div className="space-y-10 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
            {/* 1. Recitals */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-3">
                1. Recitals &amp; Engagement
              </h2>
              <p className="mb-4">
                This Tester Non-Disclosure Agreement (&ldquo;NDA&rdquo; or &ldquo;Agreement&rdquo;) is entered into by and between <strong className="text-white">{siteConfig.name}</strong> (&ldquo;Disclosing Party&rdquo;) and you, the authorized closed-testing participant (&ldquo;Recipient&rdquo; or &ldquo;Tester&rdquo;).
              </p>
              <p>
                In connection with your participation in the CoachingsNearMe Private Testing Program, the Disclosing Party may provide you with access to confidential, proprietary, and unreleased software, designs, and business information. By accepting beta access or installing any pre-release APK build, you explicitly covenant and agree to the terms below.
              </p>
            </section>

            {/* 2. Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Definition of Confidential Information</h2>
              <p>
                &ldquo;Confidential Information&rdquo; refers to all non-public technical, product, and business information disclosed to or discovered by the Tester, whether orally, visually, in writing, or via electronic access, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Software &amp; Binaries:</strong> Pre-release Android APK files, build artifacts, debug symbols, source code snippets, and internal documentation.</li>
                <li><strong className="text-white">Visual &amp; UX Designs:</strong> Unreleased user interface screens, wireframes, interaction workflows, custom iconography, illustrations, and design tokens.</li>
                <li><strong className="text-white">Technical Architecture:</strong> Fastify/Supabase backend endpoints, authentication protocols, security mechanisms, database schemas, and API documentation.</li>
                <li><strong className="text-white">Roadmap &amp; Strategy:</strong> Upcoming feature releases, pilot launch timelines, unannounced pricing tiers, and commercial partnerships.</li>
              </ul>
            </section>

            {/* 3. Non-Disclosure Obligations */}
            <section className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🔒</span> 3. Strict Non-Disclosure &amp; Security Obligations
              </h2>
              <p className="text-sm text-gray-300">
                The Tester covenants to treat all Confidential Information with the highest standard of care and agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300">
                <li><strong className="text-white">Zero Public Dissemination:</strong> Strictly refrain from publishing, sharing, leaking, or broadcasting screenshots, screen recordings, APK packages, or feature descriptions on any public forum, social media network (such as X/Twitter, YouTube, Telegram, Instagram, Reddit), blog, or discussion board.</li>
                <li><strong className="text-white">No Sublicensing or Distribution:</strong> Never redistribute, loan, or share pre-release APKs with third parties, including classmates, friends, or competing educational platforms.</li>
                <li><strong className="text-white">No Reverse Engineering:</strong> Never decompile, disassemble, reverse engineer, or attempt to derive the underlying source code or security schemas of the application.</li>
                <li><strong className="text-white">Sole Authorized Use:</strong> Use the Confidential Information solely for the authorized purpose of evaluating the application and submitting feedback to CoachingsNearMe.</li>
              </ul>
            </section>

            {/* 4. Exclusions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">4. Exclusions from Confidentiality</h2>
              <p>Confidential Information does not encompass information that:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Is or becomes publicly known through no breach of this Agreement by the Tester.</li>
                <li>Was already in the lawful possession of the Tester prior to disclosure without confidentiality restrictions.</li>
                <li>Is officially published or publicly announced by CoachingsNearMe on our public website.</li>
              </ul>
            </section>

            {/* 5. Term & Survival */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Term &amp; Survival of Obligations</h2>
              <p>
                The obligations of confidentiality under this Agreement commence upon your initial access to any pre-release material or APK build and shall remain in full force and effect until such time as CoachingsNearMe publicly releases the specific feature or software build to the general market without restriction.
              </p>
            </section>

            {/* 6. Remedies */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">6. Remedies for Breach</h2>
              <p>
                The Tester acknowledges that any unauthorized disclosure or leak of Confidential Information would cause irreparable harm to CoachingsNearMe for which monetary compensation alone would be inadequate.
              </p>
              <p>
                In the event of a breach or threatened breach, CoachingsNearMe shall be entitled to seek immediate injunctive relief, specific performance, and damages to the fullest extent available under applicable Indian law, alongside immediate termination of testing privileges.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-white">
                7. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                This NDA shall be governed by and construed in accordance with the substantive laws of the Republic of India. The parties irrevocably consent to the exclusive jurisdiction of the competent courts in <strong className="text-white">Begusarai or Patna, Bihar, India</strong> for any dispute arising out of this Agreement.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-2 text-xs text-gray-400 border-t border-white/10 pt-6">
              <p>
                For official communications or inquiries regarding testing confidentiality, contact:{" "}
                <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 underline">{siteConfig.support.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
