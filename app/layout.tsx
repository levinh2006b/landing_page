import type { Metadata } from "next";
import { Calistoga, Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const displayFont = Calistoga({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronan SAT | Playful SAT Prep With Serious Results",
  description:
    "Ronan SAT blends realistic test simulations, smart review, dashboards, leaderboards, and vocabulary training into a polished study suite built to make SAT prep feel intuitive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
