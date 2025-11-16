"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Radial and how does it work?",
      answer:
        "Radial is an AI-powered lead management and automation platform that helps businesses manage WhatsApp, Instagram, Email, and website leads in one place. It automatically sorts leads, sends replies, reminds you to follow up, and handles daily operations for you.",
    },
    {
      question: "How does the AI automation feature work?",
      answer:
        "Our AI reads messages, identifies high-intent leads, sends smart auto-replies, schedules follow-ups, and keeps conversations organized. It learns from your business replies and improves over time for more accurate automation.",
    },
    {
      question: "Can I integrate Radial with WhatsApp and Instagram?",
      answer:
        "Yes! Radial connects directly with WhatsApp Business API, Instagram DMs, email inboxes, and your website forms. All conversations appear in a single unified inbox with smart tagging and AI insights.",
    },
    {
      question: "Is my data safe and secure?",
      answer:
        "Absolutely. Radial uses enterprise-grade encryption, secure cloud hosting, and role-based access control. Your conversations, customer data, and analytics are fully protected and never shared with third parties.",
    },
    {
      question: "Do I need technical skills to set it up?",
      answer:
        "No. Radial is designed for non-technical business owners. WhatsApp, Instagram, and email integrations can be set up in minutes with guided steps — no coding required.",
    },
    {
      question: "Can I try Radial before paying?",
      answer:
        "Yes. But you have to just contact us for a free demo, including WhatsApp, Instagram, and AI features. No credit card required. You can explore all features and upgrade anytime.",
    },
    {
      question: "How does pricing work for growing businesses?",
      answer:
        "Pricing is based on your usage and integrations. You can start on a low plan and upgrade as your leads and automation needs increase. For larger businesses, we also offer custom plans with priority support.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for?
            <br />
            Please chat with our friendly team.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:text-acc transition-colors duration-200 cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  className="w-5 h-5 text-neutral-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className=" rounded-xl p-8 border border-acc/20">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our support team is here to help you get the most out of Radial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/waitlist"
                className="px-6 py-3 bg-acc text-white rounded-lg font-medium hover:bg-acc/90 transition-colors duration-200 shadow-sm"
              >
                Contact Support
              </Link>
              <Link
                href="/waitlist"
                className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
