"use client";
import type { Metadata } from "next";
import "./globals.css";

import ErrorReporter from "@/src/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cattle Farmers Association",
  description: "Membership, herds, and auctions platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      
        {children}
      </body>
    </html>
  );
}