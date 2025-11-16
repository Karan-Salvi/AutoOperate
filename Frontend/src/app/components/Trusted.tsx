"use client";

import React from "react";
import { motion } from "motion/react";

const Trusted = () => {
  const companies = [
    {
      name: "Instant",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="text-neutral-800 font-medium">Instant</span>
        </div>
      ),
    },
    {
      name: "Resend",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-neutral-800 font-medium">Resend</span>
        </div>
      ),
    },
    {
      name: "Circleback",
      logo: (
        <div className="flex items-center gap-2">
          <span className="text-neutral-800 font-medium">Circleback.</span>
        </div>
      ),
    },
    {
      name: "Outline",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <span className="text-neutral-800 font-medium">outline</span>
        </div>
      ),
    },
    {
      name: "Rye",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"></div>
          </div>
          <span className="text-neutral-800 font-medium">rye</span>
        </div>
      ),
    },
    {
      name: "Unthread",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border border-white rounded-full"></div>
          </div>
          <span className="text-neutral-800 font-medium">unthread</span>
        </div>
      ),
    },
    {
      name: "Rel",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">r</span>
          </div>
          <span className="text-neutral-800 font-medium">rel</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg text-neutral-600 font-medium">
            Trusted by service businesses across India
          </h2>
        </div>

        {/* Moving Logos */}
        <div className="relative overflow-hidden mask-r-from-40% mask-l-from-40%">
          {/* First row - moving right */}
          <motion.div
            className="flex items-center gap-12 mb-4"
            animate={{
              x: [0, -100 * companies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex-shrink-0">
                {company.logo}
              </div>
            ))}
          </motion.div>

          {/* Second row - moving left */}
          {/* <motion.div
            className="flex items-center gap-12"
            animate={{
              x: [-100 * companies.length, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company.name}-reverse-${index}`} className="flex-shrink-0">
                {company.logo}
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
