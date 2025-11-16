/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const useCases = [
  {
    id: 1,
    title: "Small Business Owners",
    description:
      "Manage WhatsApp leads, reply instantly, and automate follow-ups for higher conversions.",
    features: [
      "WhatsApp lead management",
      "Instant AI auto-replies",
      "Smart follow-up automation",
      "UPI payment reminders",
    ],
    icon: (
      <svg className="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Freelancers & Creators",
    description:
      "Handle client inquiries, send invoices, and automate reminders directly through WhatsApp.",
    features: [
      "Automated invoice creation",
      "Instant service info replies",
      "Payment follow-up automation",
      "Client workflow organization",
    ],
    icon: (
      <svg
        className="w-8 h-8 text-acc"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11.933 5h-6.933v16h13v-8" />
        <path d="M14 17h-5" />
        <path d="M9 13h5v-4h-5z" />
        <path d="M15 5v-2" />
        <path d="M18 6l2 -2" />
        <path d="M19 9h2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customer Support Teams",
    description:
      "Respond to customer questions instantly with AI and keep every conversation organized.",
    features: [
      "AI-powered customer responses",
      "Priority-based support routing",
      "Resolution tracking",
      "Customer satisfaction monitoring",
    ],
    icon: (
      <svg className="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Service Businesses",
    description:
      "Handle inquiries, bookings, pricing requests, and customer reminders effortlessly.",
    features: [
      "Automated booking confirmations",
      "Price list sharing",
      "Service follow-up sequences",
      "Review request automation",
    ],
    icon: (
      <svg className="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Event Planners",
    description:
      "Manage client inquiries, send packages, and automate reminders for smooth coordination.",
    features: [
      "Event package sharing",
      "Vendor coordination updates",
      "Client confirmation automation",
      "Budget reminder notifications",
    ],
    icon: (
      <svg className="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Online Sellers",
    description:
      "Automate product inquiries, send catalogs, and convert leads directly through WhatsApp.",
    features: [
      "Product catalog automation",
      "Order confirmation messages",
      "Auto-generated invoices",
      "Delivery & payment reminders",
    ],
    icon: (
      <svg className="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    ),
  },
];

const CardSkeleton = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-0  border-t border-neutral-100">
        {useCases.map((useCase) => (
          <div
            className="hover:bg-acc/5 transition-all duration-500 border-r  border-b border-neutral-100"
            key={useCase.id}
          >
            <div className="hover:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,1)_0,rgba(255,255,255,1)_10px,transparent_50px,transparent_2px)] transition-all duration-300 px-6 py-4">
              <div className="flex flex-col items-start justify-start gap-6 py-4">
                <div className="flex items-center justify-center w-10 h-10 bg-acc/10 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                  {useCase.icon}
                </div>
                <h1 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">
                  {useCase.title}
                </h1>
                <p className="text-neutral-600 mb-3">{useCase.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mx-auto">
        <motion.div className="text-center pt-16 bg-white">
          <h2 className="text-2xl font-light tracking-tight text-neutral-900 mb-2">
            "AutoOperate has made managing customer messages effortless."
          </h2>
          <p className="text-neutral-600 mb-6">
            - Kavita Sharma, Founder of CraftHub Store
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-800 hover:bg-neutral-700 mt-6 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl mb-16 cursor-pointer"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const UseCase = () => {
  return (
    <div>
      <div className="text-center py-16 border-t border-neutral-200">
        <h2 className="lg:text-4xl text-3xl tracking-tighter font-medium text-center mb-6 text-neutral-900">
          AutoOperate empowers businesses of all sizes
          <br />
          to{" "}
          <span className="bg-linear-to-r from-acc via-gray-700 to-acc text-transparent bg-clip-text animate-shimmer">
            respond faster and convert more
          </span>
        </h2>
        <p className="lg:text-lg text-base text-neutral-600 max-w-2xl mx-auto">
          AutoOperate gives you all the tools you need to manage leads, reply
          instantly, <br /> follow-up, and automate your customer workflows.
        </p>
      </div>
      <CardSkeleton />
    </div>
  );
};

export default UseCase;
