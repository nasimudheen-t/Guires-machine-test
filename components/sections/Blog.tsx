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
      className="relative py-24 sm:py-32 overflow-hidden bg-gray-200 border-t border-gray-300"
      aria-label="Blog Section"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Soft glowing blob top right */}
        <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
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