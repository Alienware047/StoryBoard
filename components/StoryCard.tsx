"use client"

import Image from 'next/image'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'
import type { Story } from '@/types/story'

interface StoryCardProps {
  id: string
  title?: string
  author?: string
  description?: string
  coverUrl?: string
  category?: string
  isLoading?: boolean
}

export default function StoryCard({
  id,
  title,
  author,
  description,
  coverUrl,
  category,
  isLoading = false,
}: StoryCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      href={`/story/${id}`}
      className={clsx(
        "group relative block w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
        isLoading && "pointer-events-none"
      )}
    >
      {/* ✅ Image section with shimmer */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700" />
        )}
        {!isLoading && (
          <Image
            src={coverUrl ?? '/images/default-story.jpg'}
            alt={title ?? 'Story cover'}
            fill
            className={clsx(
              'object-cover transition-transform duration-300 group-hover:scale-105',
              !imageLoaded && 'opacity-0'
            )}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        )}

        {/* Category Badge */}
        {!isLoading && category && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {category}
          </div>
        )}
      </div>

      {/* ✅ Info Section or Skeleton */}
      <div className="p-4 space-y-2">
        {isLoading ? (
          <>
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
              {title ?? 'Untitled Story'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {author ?? 'Unknown'}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">{description ?? ''}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              <BookOpen className="w-4 h-4" />
              <span>Read Story</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
