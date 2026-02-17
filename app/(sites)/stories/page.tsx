"use client";

import { useState, useEffect, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import StoryCard from '@/components/StoryCard'
import CategorySlider from '@/components/CategorySlider'
import stories from '@/lib/stories'
import type { Story } from '@/types/story'
import { useSearch } from '../context/SearchProvider'

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);
  const { query } = useSearch(); // ✅ use global search query

  // ✅ Filter by category + global search
  const filteredStories = useMemo<Story[]>(() => {
    return stories.filter((story) => {
      const matchesCategory = selectedCategory
        ? story.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true

      const q = query.trim().toLowerCase()
      const matchesSearch =
        q === '' ||
        story.title?.toLowerCase().includes(q) ||
        story.author?.toLowerCase().includes(q) ||
        story.description?.toLowerCase().includes(q)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, query])

  // ✅ Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;

      if (isNearBottom && visibleCount < filteredStories.length) {
        setVisibleCount((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredStories.length]);

  // ✅ Reset scroll when category or search query changes
  useEffect(() => {
    setVisibleCount(20);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, query]); // ✅ use `query` instead of local state

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-6 lg:px-10 mt-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore Stories</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover thousands of stories across different genres and worlds.
        </p>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 mt-6">
        <CategorySlider onSelectCategory={setSelectedCategory} />
      </div>

      {/* Story Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-10 flex-1">
        {filteredStories.length > 0 ? (
          <div
            className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              place-items-center
            "
          >
            {filteredStories.slice(0, visibleCount).map((s) => (
              <StoryCard key={s.id} {...s} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
            No stories match your search.
          </p>
        )}

        {/* Animated SB Loader */}
        {visibleCount < filteredStories.length && (
          <div className="flex justify-center items-center mt-12">
            <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-1">
                <span className="text-black dark:text-white text-2xl font-extrabold animate-pulse">
                  S
                </span>
                <span className="text-blue-500 text-2xl font-extrabold animate-bounce">
                  B
                </span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium ml-2">
                Loading more stories...
              </span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
