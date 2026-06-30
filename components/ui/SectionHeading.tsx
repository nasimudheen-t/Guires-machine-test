import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  badgeClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  badgeClassName,
  titleClassName,
  subtitleClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right ml-auto",
        className
      )}
      {...props}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-3 sm:mb-4",
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight sm:leading-none",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-sans",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};