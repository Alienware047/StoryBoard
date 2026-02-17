import rawStories from '../public/lib/stories.json'
import type { Story } from '@/types/story'

export const stories: Story[] = rawStories as Story[]

export function getCategories(): string[] {
  const cats = stories.map((s) => s.category).filter(Boolean) as string[]
  return Array.from(new Set(cats))
}

export default stories
