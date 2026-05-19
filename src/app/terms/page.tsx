import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: `Review the Terms of Service for ${siteConfig.name}. Understand the guidelines and agreements for using our educational platform and coaching management ecosystem.`,
});

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface-dark overflow-hidden relative">
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12">Last Updated: May 2026</p>
        
        <div className="prose prose-invert max-w-none text-gray-400">
          <p>
            Welcome to <strong className="text-white">{siteConfig.name}</strong>. These Terms of Service govern your use of our website, platform, and services. By accessing or using our platform, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By joining our early access waitlist or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
          <p>
            <strong className="text-white">{siteConfig.name}</strong> is a platform designed to help students discover coachings, compare reviews, and manage their educational lifecycle, while providing tools for institutes to manage batches. The platform is currently in early access and features may change without notice.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Use the platform for any illegal or unauthorized purpose.</li>
            <li>Submit false, misleading, or inappropriate reviews.</li>
            <li>Attempt to bypass or compromise any security measures on the platform.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Early Access Limitations</h2>
          <p>
            You acknowledge that the early access version of the platform may contain bugs, errors, or inaccuracies. We provide the service &quot;as is&quot; without any warranty. Rollout to specific cities, including <strong className="text-white">{siteConfig.launchCity}</strong>, is entirely at our discretion.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Information</h2>
          <p>
            For any questions regarding these Terms of Service, please contact us at:
            <br /><br />
            Email: <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 hover:text-primary-300 transition-colors">{siteConfig.support.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
}
