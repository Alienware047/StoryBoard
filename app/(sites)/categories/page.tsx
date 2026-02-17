import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import stories, { getCategories } from '@/lib/stories'
import type { Story } from '@/types/story'

// 🖼️ Optional: define background images for each category
const categoryImages: Record<string, string> = {
  Fantasy: '/images/fantasy.jpg',
  Romance: '/images/romance.jpg',
  Adventure: '/images/adventure.jpg',
  Mystery: '/images/mystery.jpg',
  Horror: '/images/horror.jpg',
  'Sci-Fi': '/images/scifi.jpg',
  'African Tales': '/images/african.jpg',
  History: '/images/history.jpg',
}

export default function CategoriesPage() {
  // server-side: compute categories from typed stories
  const categories = getCategories()

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-6 lg:px-10 mt-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
          <Sparkles className="w-6 h-6 text-blue-500 animate-spin-slow" />
          Explore Categories
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Browse through all story genres and find your next read.</p>
      </header>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 flex-1">
        <div
          className={`
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            place-items-center
          `}
        >
          {categories.map((category, i) => {
            const bgImage = categoryImages[category] || '/images/default.jpg'

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-44 rounded-2xl overflow-hidden shadow-lg group relative"
              >
                <Link href={`/categories/${encodeURIComponent(category)}`} className="block w-full h-full relative">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${bgImage})`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/30 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                    <BookOpen className="w-8 h-8 mb-2 opacity-90 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-lg drop-shadow-md">{category}</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
