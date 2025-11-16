import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Join the Waitlist – AI Automation for WhatsApp, Instagram & Client Onboarding | AutoOperate",
  description:
    "Join the AutoOperate waitlist and get early access to the AI-powered platform that automates client onboarding, manages leads, assigns tasks, and streamlines your entire business workflow.",

  // Keywords for SEO
  keywords: [
    "AI client onboarding",
    "whatsapp automation",
    "instagram dm automation",
    "lead management tool",
    "ai workflow automation",
    "auto operate",
    "business automation platform",
    "ai crm",
    "client onboarding software",
    "ai productivity tool",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://yourdomain.com/waitlist",
  },

  // Open Graph (for link previews on social)
  openGraph: {
    title:
      "Join AutoOperate Waitlist – Automate Client Onboarding & Lead Management",
    description:
      "Get early access to AutoOperate—your AI employee that automates WhatsApp, Instagram, Email, onboarding, follow-ups, and workflows.",
    url: "https://yourdomain.com/waitlist",
    siteName: "AutoOperate",
    images: [
      {
        url: "/og-waitlist.png",
        width: 1200,
        height: 630,
        alt: "AutoOperate Waitlist – AI Automation Platform",
      },
    ],
    type: "website",
  },

  // Twitter SEO
  twitter: {
    card: "summary_large_image",
    title:
      "Join AutoOperate Waitlist – Automate Client Onboarding & Lead Management",
    description:
      "Get early access to AutoOperate—AI automation for WhatsApp, Instagram, Email, onboarding & workflows.",
    images: ["/og-waitlist.png"],
    creator: "@yourtwitter",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function WaitListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
