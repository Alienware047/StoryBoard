"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Heart, Sparkles, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import aboutData from '@/lib/about'
import type { AboutData } from '@/types/aboutdata'

export default function AboutPage() {
  const data: AboutData = aboutData

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 text-center mt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-2"
        >
          <Sparkles className="w-8 h-8 text-blue-500 animate-spin-slow" />
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          {data.description}
        </motion.p>
      </section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full max-w-5xl mx-auto my-12 rounded-3xl overflow-hidden shadow-lg"
      >
        <Image
          src={data.heroImage}
          alt={data.title}
          width={1200}
          height={600}
          className="object-cover w-full h-80 md:h-[28rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      </motion.div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
            <Heart className="text-pink-500 w-7 h-7" /> {data.mission.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{data.mission.body}</p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src={data.mission.image}
            alt={data.mission.heading}
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-white/70 dark:bg-gray-900/40 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-8 flex justify-center items-center gap-2">
            <BookOpen className="text-blue-500 w-7 h-7" /> Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.values.map((val, i) => {
              const Icon = val.id === 'community' ? Users : val.id === 'creativity' ? Heart : Sparkles
              return (
                <motion.div
                  key={val.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm hover:scale-105 transition-all duration-500"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{val.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          {data.cta.heading}
        </motion.h2>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href={data.cta.actionHref}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            {data.cta.actionLabel}
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
