import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-transparent text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-16 border-t border-neutral-200">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 px-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-acc rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold">AutoOperate</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              The modern AI lead management platform for businesses that rely on
              WhatsApp, Instagram and Email to grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="/waitlist"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="/waitlist"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  AI Inbox
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Automations
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  System Status
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Get the latest updates on AI automation, lead growth strategies,
              and product releases.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-acc focus:border-transparent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-acc text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-acc/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-2">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <span>© 2025 AutoOperate. All rights reserved.</span>
              <Link
                href="/waitlist"
                className="hover:text-neutral-900 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/waitlist"
                className="hover:text-neutral-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <span>Made by AutoOperate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
