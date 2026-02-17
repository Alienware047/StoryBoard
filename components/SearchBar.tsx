// components/SearchBar.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8 relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search stories..."
        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <Search className="absolute right-4 top-3.5 text-gray-500 dark:text-gray-400" size={20} />
    </div>
  );
}
