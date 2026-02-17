"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
    },
    {
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        {/* ===== Top Section ===== */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          {/* 🟦 Brand Section */}
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Story<span className="text-blue-500">Board</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              StoryBoard is your creative corner — a home where stories breathe,
              imagination thrives, and every reader finds a voice that
              resonates. Join a community of writers and dreamers shaping the
              world with words.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 mt-6 text-gray-600 dark:text-gray-400">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* 📨 Newsletter */}
          <div className="max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Stay updated with fresh stories, writing tips, and platform
              features — straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* ☎️ Contact Info */}
          <div className="text-gray-600 dark:text-gray-400 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contact Us
            </h3>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@storyboard.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Accra, Ghana
            </p>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-10"></div>

        {/* ===== Bottom Bar ===== */}
        <p className="text-center text-gray-500 dark:text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} StoryBoard — Crafted with ❤️ for
          storytellers.
        </p>
      </div>
    </footer>
  );
}
