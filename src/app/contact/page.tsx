import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Contact Support",
  description: `Need help? Contact the ${siteConfig.name} team. We are currently rolling out early access in ${siteConfig.launchCity} and are here to support your educational journey.`,
});

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface-dark overflow-hidden relative">
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6">
          Contact Support
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-8">
          We&apos;re here to <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">help.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have a question about early access? Experiencing an issue? Reach out to our dedicated support team and we&apos;ll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <a href={`mailto:${siteConfig.support.email}`} className="text-primary-400 hover:text-primary-300 transition-colors">
                  {siteConfig.support.email}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <a href={`tel:${siteConfig.support.phone}`} className="text-primary-400 hover:text-primary-300 transition-colors">
                  {siteConfig.support.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">{siteConfig.support.hours}</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Office</h3>
                <p className="text-gray-400">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}<br />
                  {siteConfig.address.country}
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">When will you launch in my city?</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">We are currently prioritizing our launch based on waitlist demand. Fill out the Early Access form with your pincode to boost priority for your area.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Is it free for students?</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">Yes, the core discovery and batch management tools will always be free for students to use.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">How do I add my coaching?</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">Select &quot;Coaching&quot; on the Early Access form. Our team will contact you directly to set up your profile and onboard your batches.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
