import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NextFix Pro™ | Certified Tech, Phone, Mac & Console Repair Lab",
  description:
    "Cracked screen or dead battery? Fixed in under 45 minutes with certified OEM parts. Lifetime workmanship warranty, no fix no fee guarantee, and 100% data security.",
  keywords: [
    "iPhone Repair",
    "Screen Replacement",
    "MacBook Repair",
    "Samsung Galaxy Repair",
    "Console Repair",
    "Micro-soldering",
    "Phone Repair Shop",
  ],
  authors: [{ name: "NextFix Pro Labs" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
