import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Cloud, Brain, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Megaphone,
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
  className,
}) => {
  const Icon = iconMap[iconName];

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
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col p-6 sm:p-8 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 bg-white/70 dark:bg-bg-dark/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/20 transition-all duration-300 group",
        className
      )}
    >
      {/* Icon frame with group hover glow */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>

      {/* Decorative arrow link */}
      <div className="mt-6 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
        Learn more <span className="ml-1" aria-hidden="true">→</span>
      </div>
    </motion.div>
  );
};
