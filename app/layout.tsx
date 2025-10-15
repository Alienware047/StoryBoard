"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchProvider";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(activeTheme);
    document.documentElement.classList.toggle("dark", activeTheme === "dark");
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch: render a blank shell until theme loads
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-black`} />
      </html>
    );
  }

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300`}
      >
        <SearchProvider>
          <Navbar/>
          {children}
          <Footer/>
        </SearchProvider>
      </body>
    </html>
  );
}
