"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { BlogCard } from "../ui/BlogCard";
import { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  currentPostId: string;
  posts: BlogPost[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, posts }) => {
  // Filter out the currently viewed post and take the first 3
  const related = posts.filter((p) => p.id !== currentPostId).slice(0, 3);

  if (related.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  } as const;

  return (
    <div className="border-t border-slate-200 dark:border-slate-800/80 pt-16 mt-16 bg-white dark:bg-bg-dark font-sans">
      <Container>
        <div className="mb-10">
          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
            Related Articles
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Read more insights on enterprise engineering, scalability, and design systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {related.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl h-full w-full"
            >
              <BlogCard
                title={post.title}
                description={post.description}
                category={post.category}
                coverImage={post.coverImage}
                publishDate={post.publishDate}
                readTime={post.readTime}
                className="h-full w-full"
              />
            </Link>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};
