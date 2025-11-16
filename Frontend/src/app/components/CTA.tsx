"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-12 lg:p-16"
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[AutoOperate-gradient(circle_at_1px_1px,rgb(255_255_255)_1px,transparent_0)] bg-[length:24px_24px]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-acc/60 via-transparent to-transparent" />

          {/* Animated Circles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-10 w-64 h-64 bg-acc/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-acc bg-acc/10 border border-acc/20 rounded-full">
                  Start Your Journey Today
                </span>
              </motion.div>

              <motion.h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                Manage all your leads in one place WhatsApp, Instagram, Email
                and more <span className="text-acc">Effortlessly.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-300 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Join thousands of businesses using AutoOperate to automate customer
                replies, close more leads, and stay organised.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/waitlist" className="cursor-pointer">
                  <button className="cursor-pointer group relative px-8 py-4 bg-acc text-white rounded-lg font-medium transition-all duration-200 hover:bg-acc/90 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(0,110,255,0.4)] overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link href="/waitlist">
                  <button className="cursor-pointer px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium transition-all duration-200 hover:bg-white/20 border border-white/20 hover:border-white/30 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    Schedule a Demo
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure and private
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cancel anytime
                </div>
              </motion.div>
            </div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative w-64 h-64">
                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-acc rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
                </motion.div>

                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-32 h-32 bg-gradient-to-br from-acc to-blue-500 rounded-full blur-xl"
                  />
                </div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 mb-6">
            Trusted by growing businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="text-2xl font-semibold text-neutral-400">
              Google
            </div>
            <div className="text-2xl font-semibold text-neutral-400">
              Microsoft
            </div>
            <div className="text-2xl font-semibold text-neutral-400">
              Amazon
            </div>
            <div className="text-2xl font-semibold text-neutral-400">
              Spotify
            </div>
            <div className="text-2xl font-semibold text-neutral-400">
              Netflix
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
