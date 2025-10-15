"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="text-center px-6 max-w-2xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Dive into <span className="text-blue-600 dark:text-blue-400">Stories</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Explore thousands of inspiring tales, creative fiction, and heartfelt memoirs — all in one place.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Link
            href="/stories"
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-md transition-transform hover:scale-105"
          >
            Start Reading
          </Link>
        </div>
      </div>

      {/* Optional subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none"></div>
    </section>
  );
}
