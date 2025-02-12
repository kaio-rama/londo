"use client";

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { StickyNavbar } from "./components/NavBar";
import { Footer } from "./components/Footers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider>
        <StickyNavbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
