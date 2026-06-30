import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  avatarColor: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  quote,
  initials,
  avatarColor,
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
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col p-6 sm:p-8 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 bg-white/70 dark:bg-bg-dark/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/20 transition-all duration-300",
        className
      )}
    >
      {/* Decorative quote mark */}
      <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800/50" aria-hidden="true">
        <Quote className="h-8 w-8" />
      </div>

      {/* Quote */}
      <blockquote className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author profile */}
      <div className="flex items-center gap-4 border-t border-slate-200/40 dark:border-slate-800/40 pt-6 mt-auto">
        {/* Initials Avatar */}
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-sans text-sm font-bold shadow-inner ring-2 ring-transparent",
            avatarColor
          )}
          aria-hidden="true"
        >
          {initials}
        </div>
        
        {/* Name and title */}
        <div className="flex flex-col">
          <cite className="not-italic font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {name}
          </cite>
          <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            {role}, <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{company}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
