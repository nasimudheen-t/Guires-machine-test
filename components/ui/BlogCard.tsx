import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishDate: string;
  readTime: string;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  category,
  coverImage,
  publishDate,
  readTime,
  className,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-slate-200/40 dark:border-slate-800/40 bg-white/70 dark:bg-bg-dark/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 group",
        className
      )}
    >
      {/* Cover Image Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-lg bg-slate-900/80 dark:bg-bg-dark/80 backdrop-blur-md px-3 py-1 text-2xs font-semibold uppercase tracking-wider text-indigo-400 border border-slate-700/30">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta info (Date and Read Time) */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500 mb-3 font-medium">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>

        {/* Action Link Footer */}
        <div className="mt-auto pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between">
          <Button variant="link" className="flex items-center gap-1 text-xs">
            Read article
          </Button>
          <div className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/20 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};
