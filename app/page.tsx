"use client";

import HeroSection from './components/HeroSection';
import StoryCard from './components/StoryCard';
import stories from "../public/lib/stories.json";
import CategorySlider from './components/CategorySlider';
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStories = selectedCategory
    ? stories.filter(
        (story) =>
          story.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : stories;

  return (
    <main className="min-h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-300">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <CategorySlider onSelectCategory={setSelectedCategory} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="
            pt-4
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            place-items-center
          "
        >
          {filteredStories.slice(0, 20).map((s) => (
            <StoryCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </main>
  );
}
