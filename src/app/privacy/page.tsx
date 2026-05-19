import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: `Read the privacy policy of ${siteConfig.name}. We take your data security seriously and prioritize your privacy while you use our coaching discovery platform.`,
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface-dark overflow-hidden relative">
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-12">Last Updated: May 2026</p>
        
        <div className="prose prose-invert max-w-none text-gray-400">
          <p>
            At <strong className="text-white">{siteConfig.name}</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when registering for early access, expressing an interest in obtaining information about us or our products and services, when participating in activities on the application, or otherwise contacting us.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and location (pincode).</li>
            <li><strong className="text-white">Usage Data:</strong> Information about how you use our platform, including features accessed and time spent.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect or receive:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage early access requests.</li>
            <li>To improve our platform and prioritize regional rollouts based on demand.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br /><br />
            <strong className="text-white">{siteConfig.name}</strong><br />
            {siteConfig.address.street}<br />
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}<br />
            Email: <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 hover:text-primary-300 transition-colors">{siteConfig.support.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
}
