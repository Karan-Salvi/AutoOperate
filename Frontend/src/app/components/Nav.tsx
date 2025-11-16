"use client";

import React, { useState } from "react";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const Nav = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          maxWidth: isScrolled ? "1220px" : "1280px",
          borderRadius: isScrolled ? "20px" : "0px",
          boxShadow: isScrolled
            ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
            : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          marginTop: isScrolled ? "10px" : "4px",
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={` fixed inset-x-0 mx-0 md:mx-auto z-50 w-full md:max-w-7xl pt-6  ${
          isScrolled ? "bg-transparent backdrop-blur-sm " : "bg-transparent"
        }`}
      >
        <div className="flex  items-center justify-between px-8 bg-transparent z-50 -mt-6 py-3">
          <Link
            href="/waitlist"
            className="text-acc hover:text-acc/80 tracking-tight font-bold transition-colors duration-200"
          >
            <span className="flex items-center justify-center gap-2">
              {" "}
              <svg
                className="size-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              AutoOperate
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-900 hover:text-acc transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <div className="lg:flex hidden items-center justify-between ml-20">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-neutral-600 relative dark:text-neutral-400 transition-colors duration-200 cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === index && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0  px-2 py-1 rounded-lg"
                  ></motion.span>
                )}

                <span className="text-sm text-neutral-600 relative px-6 py-1 rounded-lg">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          <div className="lg:flex hidden items-center gap-2">
            <Link href="/waitlist">
              <button className="bg-acc/90 cursor-pointer font-medium text-shadow-md hover:bg-acc/70 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 border border-neutral-400 dark:border-neutral-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                Login
              </button>
            </Link>
            <Link href="/waitlist">
              <button className="bg-neutral-800 dark:bg-neutral-100 cursor-pointer font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-lg text-sm transition-colors duration-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                SignUp
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-neutral-200 overflow-hidden"
          >
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-neutral-900 hover:text-acc transition-colors duration-200 py-2 text-base font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-neutral-200">
                <Link
                  href="/waitlist"
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-acc/90 cursor-pointer font-medium hover:bg-acc/70 text-white px-4 py-3 rounded-lg text-sm transition-colors duration-200 shadow-md">
                    Login
                  </button>
                </Link>
                <Link
                  href="/waitlist"
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-neutral-800 cursor-pointer font-medium hover:bg-neutral-700 text-white px-4 py-3 rounded-lg text-sm transition-colors duration-200 shadow-md">
                    SignUp
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
