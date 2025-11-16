"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WaitListPage() {
  return <WaitListCard />;
}

const WaitListCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          {/* Branding */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-acc rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-2xl font-medium tracking-tight text-neutral-900">
                AutoOperate
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-3 tracking-tight">
              Get early access to AutoOperate
            </h1>

            <p className="text-gray-600 tracking-tight">
              Sign up to the waitlist and be the first to experience <br />
              AI-driven onboarding that manages clients, assigns tasks, and
              automates your entire workflow.
            </p>
          </div>

          {/* WAITLIST FORM */}
          <form className="space-y-5">
            <div className="flex justify-between items-center gap-2">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-acc focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-acc focus:border-transparent transition-all outline-none"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-2">
              {/* WhatsApp Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-acc focus:border-transparent transition-all outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-acc focus:border-transparent transition-all outline-none"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Primary Lead Source */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Lead Source
              </label>
              <select
                className="cursor-pointer w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-acc focus:border-transparent transition-all outline-none"
                required
              >
                <option value="">Select one</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="instagram">Instagram</option>
                <option value="email">Email</option>
                <option value="website">Website</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-acc text-white font-semibold rounded-xl hover:bg-acc/90 focus:outline-none focus:ring-2 focus:ring-acc focus:ring-offset-2 transition-all shadow-lg shadow-acc/30 cursor-pointer"
            >
              Join Waitlist
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-neutral-50 to-white text-gray-500">
                Or follow us on
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-3 gap-3">
            {/* LinkedIn */}
            <Link
              href="/waitlist"
              className="flex items-center justify-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-[#0A66C2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98H4.7V24H.24V8.98zM8.62 8.98h4.3v2.05h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.99 5.38 6.88V24h-4.46v-7.6c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.92 1.98-2.92 4V24H8.62V8.98z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="/waitlist"
              className="flex items-center justify-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-[#E4405F]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.8 6z" />
              </svg>
            </Link>

            {/* Twitter (X) */}
            <Link
              href="/waitlist"
              className="flex items-center justify-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.59l-5.165-6.736L5.512 21.75H2.203l7.73-8.835L1.78 2.25h6.73l4.665 6.145 5.07-6.145zm-1.157 17.52h1.833L7.08 4.126H5.13l11.957 15.644z" />
              </svg>
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already joined?{" "}
            <a
              href="/waitlist"
              className="font-semibold text-acc hover:text-acc/80"
            >
              Check status
            </a>
          </p>
        </div>
      </div>

      {/* Right Side Mockup */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-acc to-neutral-800 p-16 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[AutoOperate-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>

        <div className="relative z-10 max-w-2xl w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white/20">
            <Image
              src="/hero.webp"
              alt="Product Dashboard"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
