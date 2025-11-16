import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - AutoOperate",
  description: "Login to your AutoOperate account to get started.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
