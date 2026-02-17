"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../../../../components/Navbar";
import StoryCard from "../../../../components/StoryCard";
import stories from "../../../../public/lib/stories.json";

export default function CategoryStoriesPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category as string);
  const [filteredStories, setFilteredStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Filter stories by category (simulate async loading)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = stories.filter(
        (story) =>
          story.category?.toLowerCase() === decodedCategory.toLowerCase()
      );
      setFilteredStories(filtered);
      setIsLoading(false);
    }, 800); // simulate slight delay for shimmer

    return () => clearTimeout(timer);
  }, [decodedCategory]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-6 lg:px-10 mt-24 mb-8 text-center">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Categories
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 capitalize">
          {decodedCategory}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover stories in the {decodedCategory} category
        </p>
      </header>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-6 flex-1">
        {isLoading ? (
          // ✅ Shimmer placeholders while loading
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <StoryCard
                key={`loading-${i}`}
                id=""
                title=""
                author=""
                description=""
                coverUrl=""
                isLoading={true}
              />
            ))}
          </div>
        ) : filteredStories.length === 0 ? (
          // ✅ Empty state
          <p className="text-center text-gray-500 dark:text-gray-400">
            No stories found in this category.
          </p>
        ) : (
          // ✅ Actual stories
          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <StoryCard {...story} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
