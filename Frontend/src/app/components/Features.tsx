/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg pt-16 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="lg:text-4xl text-3xl tracking-tighter font-medium text-center mb-6 text-neutral-900">
          Everything you need to run{" "}
          <span className="bg-gradient-to-r from-acc via-gray-700 to-acc text-transparent bg-clip-text animate-shimmer">
            business
          </span>{" "}
          effortlessly
        </h2>
        <p className="lg:text-lg text-base text-neutral-600 max-w-2xl mx-auto">
          AutoOperate gives you all the tools you need to manage leads, reply
          instantly, automate follow-ups, and handle payments all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  divide-neutral-200 ">
        <Cardleft />

        <TaskAutomationCard />
      </div>
      <CardBottom />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0  divide-neutral-200">
        <Cardright />

        <AIAssistantCard />
      </div>
    </div>
  );
};

export default Features;

const liveIssues = [
  {
    id: 1,
    title: "New WhatsApp Lead: Riya Sharma",
    status: "New Lead",
    user: "WhatsApp",
    time: "Just now",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Customer requested price list",
    status: "Awaiting Reply",
    user: "WhatsApp",
    time: "1m ago",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Follow-up needed: Event inquiry",
    status: "Follow-Up",
    user: "WhatsApp",
    time: "3m ago",
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "Payment confirmation pending",
    status: "Pending",
    user: "WhatsApp",
    time: "5m ago",
    color: "bg-red-500",
  },
];

const Cardleft = () => {
  const [visibleIssues, setVisibleIssues] = useState(liveIssues);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIssues((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden border-t border-r border-neutral-200 transition-all duration-300">
      <h1 className="text-2xl font-medium text-neutral-900 tracking-tight mb-3">
        Smart Lead Inbox
      </h1>

      <p className="text-neutral-600 text-sm mb-6 -mt-1">
        Stay updated with real-time WhatsApp & email leads...
      </p>

      <div className="mt-10 rounded-lg bg-white/80 shadow-inner border border-neutral-200 overflow-hidden">
        <div className="flex items-center px-4 py-2 border-b border-neutral-100">
          <span className="font-medium text-neutral-700 text-base">
            Live Leads
          </span>
          <span className="ml-auto text-xs text-neutral-400">
            {visibleIssues.length} active
          </span>
        </div>

        <ul className="divide-y divide-neutral-100">
          {visibleIssues.slice(0, 3).map((issue, idx) => (
            <motion.li
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center px-4 py-3"
            >
              <span className={`w-3 h-3 rounded-full mr-3 ${issue.color}`} />

              <div className="flex-1">
                <div className="font-medium text-neutral-800 text-sm">
                  {issue.title}
                </div>

                <div className="text-xs text-neutral-500">
                  {issue.status} &middot; {issue.user} &middot; {issue.time}
                </div>
              </div>

              <span className="ml-2 px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 text-neutral-600">
                {issue.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const analyticsEvents = [
  {
    id: 1,
    title: "Payment Received",
    user: "Riya Sharma",
    time: "2m ago",
    iconColor: "bg-green-500",
    description: "₹2,500 UPI payment completed",
  },
  {
    id: 2,
    title: "New WhatsApp Lead",
    user: "Rahul Verma",
    time: "10m ago",
    iconColor: "bg-blue-500",
    description: "Asked for service pricing details",
  },
  {
    id: 3,
    title: "AI Auto-Reply Sent",
    user: "System",
    time: "30m ago",
    iconColor: "bg-purple-500",
    description: "Shared pricing & brochure instantly",
  },
  {
    id: 4,
    title: "Follow-up Reminder",
    user: "AI Assistant",
    time: "1h ago",
    iconColor: "bg-yellow-500",
    description: "Customer hasn’t replied in 24 hours",
  },
  {
    id: 5,
    title: "Invoice Shared",
    user: "System",
    time: "2h ago",
    iconColor: "bg-red-500",
    description: "GST invoice sent via WhatsApp",
  },
];

const Cardright = () => {
  const loopedEvents = [...analyticsEvents, ...analyticsEvents];
  const cardHeight = 80;
  const cardSpacing = 16;
  const totalCards = loopedEvents.length;
  const totalHeight = totalCards * cardHeight + (totalCards - 1) * cardSpacing;

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden transition-all duration-300 border-r border-neutral-200">
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-3">
        Real-time Business Activity
      </h1>

      <p className="text-neutral-600 text-sm mb-6 -mt-1">
        Stay updated with payments, leads, and customer actions...
      </p>

      <div className="relative h-56 mt-16 overflow-hidden mask-b-from-90% mask-t-from-90%">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-0, -totalHeight / 2] }}
          transition={{
            duration: analyticsEvents.length * 2,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col space-y-4 absolute top-0 left-0 w-full"
          style={{ willChange: "transform" }}
        >
          {loopedEvents.map((event, idx) => (
            <div
              key={event.id + "-" + idx}
              className="w-[90%] h-20 bg-white rounded-lg flex items-center justify-between mx-auto gap-4 p-4 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full w-3 h-3 ${event.iconColor}`}
                ></div>
                <div>
                  <span className="font-medium text-neutral-900">
                    {event.title}
                  </span>
                  <div className="text-xs text-neutral-500">
                    {event.description}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-start items-start md:items-end">
                <span className="text-[8px] md:text-sm text-neutral-700">
                  {event.user}
                </span>
                <span className="text-[6px] md:text-xs text-neutral-400">
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CardBottom = () => {
  return (
    <div className="flex items-center justify-center h-100 mx-auto border border-neutral-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="text-center w-full p-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="block text-lg md:text-xl font-medium tracking-tight text-neutral-900"
        >
          "AutoOperate helped me reply to customers instantly and never miss a
          lead. The AI follow-ups and payment reminders are true game changers
          for my business."
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-neutral-600 text-sm mt-2"
        >
          – Arjun Patel, Store Owner
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center mt-3"
        >
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Customer"
            height={80}
            width={80}
            className="w-20 h-20 rounded-full border-2 border-neutral-200 object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const chatMessages = [
  {
    id: 1,
    type: "user",
    message: "Hey, can you follow up with my new WhatsApp lead?",
    time: "2:34 PM",
    avatar: null,
  },
  {
    id: 2,
    type: "assistant",
    message:
      "Sure! I’ll send a polite follow-up message now and notify you once they reply.",
    time: "2:34 PM",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 3,
    type: "user",
    message: "Great! Also create an invoice for ₹2,500 and share it with them.",
    time: "2:35 PM",
    avatar: null,
  },
  {
    id: 4,
    type: "assistant",
    message:
      "Invoice generated! Sending it along with a UPI payment link. I’ll update you once payment is done.",
    time: "2:35 PM",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];

const AIAssistantCard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatMessages.length - 1) {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1);
          setIsTyping(false);
        }, 1500);
      } else {
        setTimeout(() => {
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden ">
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">
        WhatsApp AI Assistant
      </h1>
      <p className="text-neutral-600 text-sm mb-6">
        Automate replies, invoices, reminders & more...
      </p>

      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 h-80 flex flex-col mask-b-from-90% ">
        <div className="flex items-center px-4 py-3 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-acc rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-neutral-900 text-sm">
                AutoOperate AI
              </div>
              <div className="text-xs text-green-500 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollable mask-b-from-70% mask-t-from-70%">
          <AnimatePresence>
            {chatMessages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                } gap-2`}
              >
                {msg.type === "assistant" && (
                  <Image
                    src={msg.avatar || ""}
                    alt="AI Assistant"
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    width={80}
                    height={80}
                  />
                )}
                <div
                  className={`max-w-[80%] ${
                    msg.type === "user" ? "order-first" : ""
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-acc text-white"
                        : "bg-neutral-100 text-neutral-900"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 px-1">
                    {msg.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start gap-2"
            >
              <Image
                src="https://i.pravatar.cc/40?img=12"
                alt="AI Assistant"
                className="w-6 h-6 rounded-full"
                width={80}
                height={80}
              />
              <div className="bg-neutral-100 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me to automate any task..."
              className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-acc/20"
            />
            <button className="p-2 bg-acc text-white rounded-lg hover:bg-acc/90 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const automationTasks = [
  {
    id: 1,
    title: "Auto-reply to WhatsApp leads",
    status: "Active",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-bug w-6 h-6 text-red-400"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
        <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
        <path d="M3 13l4 0" />
        <path d="M17 13l4 0" />
        <path d="M12 20l0 -6" />
        <path d="M4 19l3.35 -2" />
        <path d="M20 19l-3.35 -2" />
        <path d="M4 7l3.75 2.4" />
        <path d="M20 7l-3.75 2.4" />
      </svg>
    ),
    description: "Instant AI replies with pricing, service details & FAQs.",
    progress: 100,
  },
  {
    id: 2,
    title: "Payment reminder automation",
    status: "Active",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github text-acc"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
    description:
      "AI sends polite reminders until the customer completes payment.",
    progress: 85,
  },
  {
    id: 3,
    title: "Invoice generation",
    status: "Setting up",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-bolt text-green-400"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M4 11h16" />
        <path d="M19 16l-2 3h4l-2 3" />
      </svg>
    ),
    description: "Auto-creates GST invoices & sends them via WhatsApp.",
    progress: 65,
  },
  {
    id: 4,
    title: "Lead follow-up sequence",
    status: "Pending",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-bolt text-green-400"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M4 11h16" />
        <path d="M19 16l-2 3h4l-2 3" />
      </svg>
    ),
    description: "AI sends follow-ups automatically for low-engagement leads.",
    progress: 0,
  },
];

const TaskAutomationCard = () => {
  return (
    <>
      <div className="bg-neutral-50 p-8 border-t h-104 border-neutral-200 relative ">
        <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">
          Business Automations
        </h1>

        <p className="text-neutral-600 text-sm mb-6">
          Let AI handle the repetitive tasks...
        </p>

        <div className="space-y-3 mt-8 overflow-y-scroll scrollable h-60">
          {automationTasks.map((task) => (
            <motion.div
              key={task.id}
              className="bg-white p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors duration-200 shadow-[inset_3px_3px_4px_rgba(0,50,0,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: task.id * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="text-neutral-600">{task.icon}</div>
                  <h3 className="font-medium text-neutral-900 text-sm">
                    {task.title}
                  </h3>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-xs ${
                    task.status === "Active"
                      ? "bg-green-50 text-green-700"
                      : task.status === "Setting up"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <p className="text-xs text-neutral-500 ml-9 mb-3">
                {task.description}
              </p>

              <div className="ml-9">
                <div className="w-90 bg-neutral-100 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full bg-acc rounded-full transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <span className="text-xs text-neutral-400 mt-1 inline-block">
                  {task.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
