"use client";

import { motion } from "motion/react";

export const HowItWorksSection = () => {
  // const steps = [
  //   {
  //     id: 1,
  //     title: "Connect & Integrate",
  //     subtitle: "Connect your tools within minutes",
  //     description:
  //       "One-click integrations with GitHub, Slack, Jira, and 50+ tools. Smart API connections that automatically sync your data with no coding required.",
  //     icon: (
  //       <svg
  //         className="w-8 h-8 text-acc"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  //         />
  //       </svg>
  //     ),
  //     features: [
  //       "50+ integrations",
  //       "Real-time sync",
  //       "No coding required",
  //       "Auto-authentication",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "AI-Powered Automation",
  //     subtitle: "Let AI handle the heavy lifting",
  //     description:
  //       "Intelligent task assignment, automated bug triage, and smart sprint planning. Our AI learns from your team's patterns to optimize workflows.",
  //     icon: (
  //       <svg
  //         className="w-8 h-8 text-acc"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  //         />
  //       </svg>
  //     ),
  //     features: [
  //       "Smart task assignment",
  //       "Automated bug triage",
  //       "Predictive analytics",
  //       "Workflow optimization",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Collaborate & Scale",
  //     subtitle: "Work together seamlessly",
  //     description:
  //       "Real-time collaboration with live updates, unified dashboards, and automated workflows that scale with your team's growth.",
  //     icon: (
  //       <svg
  //         className="w-8 h-8 text-acc"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  //         />
  //       </svg>
  //     ),
  //     features: [
  //       "Real-time collaboration",
  //       "Unified dashboard",
  //       "Scalable workflows",
  //       "Performance insights",
  //     ],
  //   },
  // ];
  const steps = [
    {
      id: 1,
      title: "Connect & Integrate",
      subtitle: "Set up your business in minutes",
      description:
        "Connect WhatsApp, Gmail, Instagram, and your website forms instantly. Your AI assistant automatically syncs all leads and conversations with zero coding required.",
      icon: (
        <svg
          className="w-8 h-8 text-acc"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      features: [
        "WhatsApp Business API",
        "Gmail & Email Sync",
        "Website Form Integration",
        "Instagram DM (Coming Soon)",
      ],
    },
    {
      id: 2,
      title: "AI-Powered Automation",
      subtitle: "Let AI handle the heavy lifting",
      description:
        "AI replies instantly to leads, sends smart follow-ups, creates invoices, shares UPI links, and reminds customers automatically—so you never lose business again.",
      icon: (
        <svg
          className="w-8 h-8 text-acc"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      features: [
        "Instant AI Auto-Replies",
        "Smart Follow-Ups",
        "Automated Invoicing",
        "Payment Reminders",
      ],
    },
    {
      id: 3,
      title: "Collaborate & Scale",
      subtitle: "Grow your business effortlessly",
      description:
        "Manage leads, payments, conversations, and performance with your team in one unified dashboard. Scale your operations with automated workflows.",
      icon: (
        <svg
          className="w-8 h-8 text-acc"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      features: [
        "Shared Team Dashboard",
        "Assign & Track Leads",
        "Scalable Workflows",
        "AI Performance Insights",
      ],
    },
  ];

  return (
    <div className="w-full pt-16 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight bg-linear-to-r from-acc via-gray-700  to-acc text-transparent bg-clip-text animate-shimmer mb-4">
            How Our AI Assistant Helps You Grow
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Manage WhatsApp, Instagram, Email, and website leads in one place.
            AI instantly replies to customers, auto-sorts high-intent leads, and
            follows up so you never lose a client.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: index * 1 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-[0.5px] bg-neutral-200 text-white rounded-full flex items-center justify-center text-sm font-bold"
              ></motion.div>

              {/* Card */}
              <div className="bg-neutral-50 p-8 shadow-sm transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-acc/10 rounded-xl mb-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-acc font-medium text-sm mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-neutral-500"
                      >
                        <div className="w-1 h-1 bg-acc rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Arrow */}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </div>
  );
};
