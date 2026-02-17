import type { AboutData } from '../types/aboutdata'

export const aboutData: AboutData = {
  title: 'About StoryBoard',
  description:
    'StoryBoard is a creative platform built to inspire readers and writers across the globe — a place where imagination takes center stage.',
  heroImage: '/images/about-hero.jpg',
  mission: {
    heading: 'Our Mission',
    body:
      'We believe that stories have the power to connect, heal, and inspire. StoryBoard is designed to empower storytellers — providing tools and an audience for everyone with a story to tell, no matter who they are or where they come from.',
    image: '/images/mission.jpg',
  },
  values: [
    {
      id: 'community',
      title: 'Community',
      desc: 'We foster a space where readers and writers can connect, share, and grow together.',
      icon: 'Users',
    },
    {
      id: 'creativity',
      title: 'Creativity',
      desc: 'Imagination drives us. We celebrate creative freedom and the art of storytelling.',
      icon: 'Heart',
    },
    {
      id: 'inspiration',
      title: 'Inspiration',
      desc: 'We aim to spark new ideas and ignite passion through stories from every corner of the world.',
      icon: 'Sparkles',
    },
  ],
  cta: {
    heading: 'Ready to Discover or Share Stories?',
    actionHref: '/categories',
    actionLabel: 'Explore Categories',
  },
}

export default aboutData
