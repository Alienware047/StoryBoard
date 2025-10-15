/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 important: use class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        text: {
          light: "#171717",
          dark: "#ededed",
        },
      },
    },
  },
  plugins: [],
};
