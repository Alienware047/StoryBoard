"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  color: string;
}

const categories: Category[] = [
  { id: 1, name: "Romance", color: "bg-pink-500" },
  { id: 2, name: "Science Fiction", color: "bg-blue-500" },
  { id: 3, name: "Thriller", color: "bg-red-600" },
  { id: 4, name: "Mystery", color: "bg-indigo-500" },
  { id: 5, name: "Fantasy", color: "bg-purple-500" },
  { id: 6, name: "Adventure", color: "bg-green-500" },
  { id: 7, name: "Drama", color: "bg-yellow-500" },
  { id: 8, name: "Biography", color: "bg-orange-500" },
  { id: 9, name: "Poetry", color: "bg-rose-500" },
  { id: 10, name: "Historical", color: "bg-cyan-600" },
  { id: 11, name: "Horror", color: "bg-gray-700" },
  { id: 12, name: "Comedy", color: "bg-teal-500" },
];

export default function CategorySlider({
  onSelectCategory,
}: {
  onSelectCategory: (category: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverDirection, setHoverDirection] = useState<"left" | "right" | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Auto-scroll when hovering near edges
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (hoverDirection && containerRef.current) {
      interval = setInterval(() => {
        containerRef.current!.scrollBy({
          left: hoverDirection === "right" ? 10 : -10,
          behavior: "smooth",
        });
      }, 20);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hoverDirection]);

  const scrollLeft = () =>
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="relative w-full mt-10 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          Browse by Category
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* Scrollable Category List */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-3 bg-gray-50 dark:bg-gray-950 rounded-xl p-3 no-scrollbar"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const width = rect.width;
          if (x < 80) setHoverDirection("left");
          else if (x > width - 80) setHoverDirection("right");
          else setHoverDirection(null);
        }}
        onMouseLeave={() => setHoverDirection(null)}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => {
              const newCategory =
                activeCategory === cat.name ? null : cat.name;
              setActiveCategory(newCategory);
              onSelectCategory(newCategory);
            }}
            className={`flex-shrink-0 min-w-[120px] md:min-w-[150px] h-28 rounded-xl 
              flex flex-col items-center justify-center font-semibold 
              text-sm md:text-base cursor-pointer hover:scale-105 transition-transform
              ${
                activeCategory === cat.name
                  ? `${cat.color} text-white ring-4 ring-offset-2 ring-${cat.color.replace(
                      "bg-",
                      ""
                    )}-300`
                  : `${cat.color} text-white opacity-90 hover:opacity-100`
              }`}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}
