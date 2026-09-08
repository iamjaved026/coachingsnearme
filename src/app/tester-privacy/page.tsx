import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Tester Privacy Policy | Diagnostic Telemetry & Beta Testing",
  description: `Dedicated Privacy Policy for CoachingsNearMe Private Beta Testers. Learn how diagnostic telemetry, crash reports, device logs, and testing feedback are securely handled.`,
});

export default function TesterPrivacyPage() {
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wide mb-4">
            Beta Diagnostic &amp; Telemetry Notice
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
            Tester Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-white/10">
            Specific Diagnostic Data Governance for Authorized Beta Testers • Last Revised: September 2026
          </p>

          <div className="space-y-10 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
            {/* 1. Scope */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-3">
                1. Scope of This Tester Privacy Notice
              </h2>
              <p className="mb-4">
                This Tester Privacy Policy specifically supplements the general{" "}
                <a href="/privacy" className="text-primary-400 underline">CoachingsNearMe Privacy Policy</a>. It applies to individuals authorized to participate in our closed testing, staging builds, and pre-release Android APK evaluations.
              </p>
              <p>
                Due to the experimental nature of beta software, our builds contain diagnostic instrumentation designed to pinpoint software anomalies, measure UI render latency, and track backend throughput.
              </p>
            </section>

            {/* 2. Diagnostic Telemetry Collected */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Diagnostic Telemetry Collected During Testing</h2>
              <p>When running pre-release testing builds, the application may transmit the following diagnostic information:</p>

              <div className="grid gap-4 sm:grid-cols-2 mt-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>💥</span> Crash Reports &amp; Stack Traces
                  </h3>
                  <p className="text-xs text-gray-400">
                    Detailed Dart/Flutter stack traces, unhandled exceptions, thread states, and memory allocation snapshots at the time of an unexpected crash.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>📱</span> Device Hardware Specifications
                  </h3>
                  <p className="text-xs text-gray-400">
                    Device model (e.g., Pixel, Samsung Galaxy), Android OS version, SDK level, screen DPI, viewport height/width, and available system RAM.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>⏱️</span> API Performance &amp; Network Logs
                  </h3>
                  <p className="text-xs text-gray-400">
                    Fastify backend endpoint response times, HTTP status codes, network timeout occurrences, and payload parsing latency.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8">
                  <h3 className="font-semibold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span>🧭</span> UX Session Breadcrumbs
                  </h3>
                  <p className="text-xs text-gray-400">
                    Sequence of route navigations (e.g. from `/tester-welcome` to `/tester-info` to `/login`) to assist engineers in reproducing UI anomalies.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Whitelist Data */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Tester Whitelist Authorization Data</h2>
              <p>
                To safeguard our pre-release environment from unauthorized public access, we maintain a secure whitelist containing:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Authorized Indian mobile numbers permitted to request OTP codes during closed testing.</li>
                <li>Authorized Google OAuth emails permitted to authenticate.</li>
                <li>Designated tester roles (Internal Developer, QA Specialist, Pilot Student, Pilot Institute Owner).</li>
              </ul>
              <p className="text-xs text-gray-400">
                This whitelist is stored securely in our in-memory access control layer and encrypted database, accessible only to our core engineering team.
              </p>
            </section>

            {/* 4. Threat Monitoring & Security Alerts */}
            <section className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🛡️</span> 4. Security Threat Monitoring &amp; Telegram Alerts
              </h2>
              <p className="text-sm text-gray-300">
                Our backend runs an active threat-detector monitoring all incoming network calls. If a client attempts to execute vulnerability scans, sensitive path probes (e.g., <code className="text-primary-300">/.env</code>), or high-frequency 404 flooding:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
                <li>The calling IP is automatically placed in quarantine and throttled with HTTP 429.</li>
                <li>A real-time security alert card is dispatched to our engineering Telegram security channel detailing the threat category and payload.</li>
              </ul>
            </section>

            {/* 5. Telemetry Retention */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">5. Retention &amp; Data Purging</h2>
              <p>
                Diagnostic logs and crash telemetry collected during test cycles are retained only for as long as necessary to debug and stabilize software builds (typically 30 to 90 days). Once an issue is remediated and verified in production, associated diagnostic logs are systematically purged.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 text-xs sm:text-sm text-gray-400">
              <h3 className="font-bold text-white text-base">Questions on Tester Telemetry?</h3>
              <p>
                If you have questions regarding diagnostic data collection or wish to remove your account from the testing whitelist, email us at:{" "}
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
