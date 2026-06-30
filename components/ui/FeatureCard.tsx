import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Innovation: Lightbulb,
  Security: ShieldCheck,
  Scalability: Cpu,
  CustomerSuccess: Sparkles,
};

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  className,
}) => {
  const Icon = iconMap[iconName];

  // Animation variant for staggered entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col p-6 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-5">
        <Icon className="h-5.5 w-5.5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-lg font-bold text-slate-900 mb-2.5">
        {title}
      </h3>
      <p className="font-sans text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};