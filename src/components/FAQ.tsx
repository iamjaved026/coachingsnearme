"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What exactly is CoachingsNearMe?",
    answer: "CoachingsNearMe is a unified platform designed to help students discover the best local coaching institutes, compare authentic student reviews, check batch timings, and manage their entire daily educational life (notes, homework, announcements) in one premium workspace."
  },
  {
    question: "Is CoachingsNearMe free for students?",
    answer: "Yes! The core discovery and batch management tools for students are completely free. Our mission is to democratize access to quality education information."
  },
  {
    question: "Can local coaching institutes register?",
    answer: "Absolutely. Coaching institutes can claim or create their profiles, manage their batches, upload study materials, and communicate directly with their students through our platform, completely avoiding the chaos of WhatsApp groups."
  },
  {
    question: "How do you ensure reviews are genuine?",
    answer: "We employ a strict verification process. Reviews are tied to registered student accounts, and we utilize algorithms alongside manual moderation to ensure that reviews are authentic, unbiased, and helpful to the community."
  },
  {
    question: "Why was this platform created?",
    answer: "It was built by a student who personally experienced the frustration of trying to find good local coaching. The scattered information, fake reviews, and chaotic WhatsApp groups made the process overwhelming. CoachingsNearMe was built to solve this exact problem."
  },
  {
    question: "Is it available in my city?",
    answer: "We are currently launching and optimizing our platform for Teghra, Bihar, with rapid plans to expand to other educational hubs across India. You can join our waitlist to be notified when we launch in your area!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-surface-dark">
      <div className="section-divider" />
      
      <div className="relative w-full max-w-[900px] mx-auto px-4 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about the product and how it works.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div 
                  className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/[0.04]' : 'bg-white/[0.02] hover:bg-white/[0.04]'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-medium text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-500/20 text-primary-400' : 'text-gray-400 bg-white/5'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
