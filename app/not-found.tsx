"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SearchX } from "lucide-react";


export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ✅ Navbar */}
      {/* <Navbar /> */}

      {/* ✅ Center Content */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mb-8 flex justify-center"
          >
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 rounded-full shadow-lg">
              <SearchX size={70} className="text-white" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            The page you’re trying to access doesn’t exist or has been moved.  
            Don’t worry — you can head back and explore more amazing stories.
          </p>

          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
