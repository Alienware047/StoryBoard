"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

interface Story {
  id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  coverUrl: string;
  category?: string;
}

export default function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching story data
    setTimeout(() => {
      setStory({
        id: id as string,
        title: "The Hidden Oasis",
        author: "Amina Clarke",
        description:
          "A journey into the desert leads to an unexpected discovery of a hidden paradise.",
        content: `
          Under the burning sun, Layla wandered through endless dunes.
          Her canteen was almost empty, and her hope fading — until she saw a glimmer on the horizon.
          What she found next would change her life forever.
          
          The oasis wasn’t just water and palms... it was alive, breathing with ancient magic.
          As she stepped closer, whispers of the past filled the air...
        `,
        coverUrl: "/images/story-cover-1.jpg",
        category: "Adventure",
      });
      setLoading(false);
    }, 800);
  }, [id]);

  const handleDownloadPDF = () => {
    if (!story) return;

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const margin = 40;
    let y = margin;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(story.title, margin, y);
    y += 25;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(12);
    doc.text(`By ${story.author}`, margin, y);
    y += 30;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(story.content.trim(), 520);
    doc.text(lines, margin, y);

    doc.save(`${story.title.replace(/\s+/g, "_")}.pdf`);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-pulse">
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6"></div>
        <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">Story not found.</p>
      </div>
    );
  }

  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
        {/* Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Stories
          </Link>

          {/* Download Button */}
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-full shadow transition-all"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-md mb-6">
          <Image
            src={story.coverUrl}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {story.category}
          </div>
        </div>

        {/* Story Info */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {story.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          by {story.author}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {story.description}
        </p>

        {/* Story Content */}
        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
          {story.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore More Stories</span>
          </Link>
        </div>
      </div>
    </main>
  
  );
}
