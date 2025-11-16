"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Grad from "./ui/gradient";
import Star from "./ui/star";

const Hero = () => {
  const { scrollY } = useScroll();
  const rotateX = useMotionValue(45);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest >= 0.2) {
      animate(rotateX, 0, { duration: 0.8 });
    }
    if (latest === 0) {
      animate(rotateX, 45, { type: "spring", stiffness: 120, damping: 20 });
    }
  });

  return (
    <div className="relative z-10 inset-0 md:pt-10 -pt-5">
      <div className="relative z-10 pt-32 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          //   whileHover={{ rotateX: 0, rotateY: 20,rotateZ: 1, perspective: 1000, }}
          transition={{ duration: 2 }}
          className="flex flex-col justify-start items-center"
        >
          <div className="flex text-center flex-col items-center justify-center max-w-2xl">
            <span className="relative z-20 bg-linear-to-r from-neutral-300 via-acc/50 to-acc bg-clip-text text-transparent animate-shimmer  text-sm mb-4 text-center rounded-lg px-4 py-1 border-1 border-acc/50">
              Join the Early Access Waitlist
            </span>

            <h1 className="lg:text-6xl text-4xl mx-10 md:mx-0 font-medium text-neutral-900 tracking-tighter leading-tight">
              Automate Your <span className="text-acc">Business</span>{" "}
              Accelerate Your Growth.
            </h1>
            <p className="text-neutral-600 lg:text-lg text-base mt-8 max-w-2xl mx-6 md:mx-0">
              Stop losing leads. Let AI reply to customers, send follow-ups,
              create invoices, remind payments, and manage your daily business
              all from one simple dashboard.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-12 justify-between mx-auto">
              <Link href="/waitlist">
                <button className="bg-neutral-800 cursor-pointer hover:bg-neutral-700 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Get Started
                </button>
              </Link>

              {/* <Link href="/waitlist">
                <button className="border text-black border-blue-200 cursor-pointer hover:bg-neutral-700 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Book Demo
                </button>
              </Link> */}

              <Link href="/waitlist">
                <button
                  className="
      border border-blue-500 text-black
      px-6 py-3 rounded-lg font-medium
      cursor-pointer
      shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),
              0px_1px_1px_-0.5px_rgba(0,0,0,0.06),
              0px_3px_3px_-1.5px_rgba(0,0,0,0.06),
              0px_6px_6px_-3px_rgba(0,0,0,0.06),
              0px_12px_12px_-6px_rgba(0,0,0,0.06),
              0px_24px_24px_-12px_rgba(0,0,0,0.06)]
      transition-all duration-200
      hover:bg-blue-600 hover:text-white
    "
                >
                  Book Demo
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center  gap-4 mt-4 divide-x divide-neutral-300 opacity-50">
            <div className="flex items-center justify-center py-3 pr-4">
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>

            <div className="text-neutral-800 font-medium text-sm tracking-tight">
              {" "}
              Backed by Google
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ rotateX }}
            transition={{ duration: 1 }}
            className=" rounded-lg mt-16 mb-16"
          >
            <div className="relative mask-b-from-50%">
              <Image
                src="/hero2.webp"
                alt="Hero"
                width={800}
                height={800}
                className="relative shadow-xl shadow-neutral-900/20 rounded-xl"
              />
              <Image
                src="/hero.webp"
                alt="Hero"
                width={800}
                height={800}
                className="absolute top-10 left-10 shadow-xl shadow-neutral-900/20 rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
