"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";
import { testimonialsContent, testimonialsData } from "@/data/testimonials";

export const Testimonials = () => {
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
        staggerChildren: 0.1,
      },
    },
  } as const;

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-bg-dark border-t border-slate-200/40 dark:border-slate-800/40"
      aria-label="Testimonials Section"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Soft glowing blob bottom right */}
        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-3xl" />
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
            badge={testimonialsContent.badge}
            title={testimonialsContent.title}
            subtitle={testimonialsContent.description}
            align="center"
          />

          {/* Cards Grid */}
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                initials={testimonial.initials}
                avatarColor={testimonial.avatarColor}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
