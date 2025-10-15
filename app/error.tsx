"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-6"
        >
          <AlertTriangle size={80} className="text-blue-400" />
        </motion.div>

        <h1 className="text-5xl font-bold mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-300 max-w-lg mb-8">
          We encountered an unexpected error while loading this page. You can try refreshing, or return home.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-lg transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold shadow-lg transition"
          >
            Go Home
          </Link>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="mt-10 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} SB Stories. All rights reserved.
      </motion.p>
    </div>
  );
}
