"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { BlogCard } from "../ui/BlogCard";
import { blogContent, blogData } from "@/data/blogs";

export const Blog = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  return (
    <section
      id="blog"
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/30 dark:bg-zinc-950/20 border-t border-slate-200/40 dark:border-slate-800/40"
      aria-label="Blog Section"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Soft glowing blob top right */}
        <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/3 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <SectionHeading
            badge={blogContent.badge}
            title={blogContent.title}
            subtitle={blogContent.description}
            align="center"
          />

          {/* Cards Grid */}
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {blogData.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category}
                coverImage={post.coverImage}
                publishDate={post.publishDate}
                readTime={post.readTime}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
