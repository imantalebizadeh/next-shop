import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-vazirmatn",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(vazirmatn.variable, inter.variable)}>{children}</body>
    </html>
  );
}
