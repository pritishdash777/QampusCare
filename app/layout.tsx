import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "QampusCare Faculty Management System",
  description: "Faculty recruitment, onboarding, workload balancing and performance intelligence for modern universities.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
