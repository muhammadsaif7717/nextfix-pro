import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NextFix Pro – Smart Device & Gadget Repair",
  description:
    "NextFix Pro provides excellence in gadget and smart device repair services, delivering reliable results through expert care, precise workmanship, and customer focus.",
  keywords: [
    "Phone Repair",
    "Screen Replacement",
    "Laptop Repair",
    "Tablet Repair",
    "Gadget Repair",
    "WeFix Theme",
    "NextFix Pro",
  ],
  authors: [{ name: "NextFix Pro" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${jetbrainsMono.className} min-h-screen bg-white text-[#636363] antialiased selection:bg-[#EF644C] selection:text-white min-w-[360px] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}