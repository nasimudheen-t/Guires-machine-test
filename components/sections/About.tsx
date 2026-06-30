"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { FeatureCard } from "../ui/FeatureCard";
import { aboutContent, aboutFeatures } from "@/data/about";

export const About = () => {
  // Framer Motion variants
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

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  const handleScrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      contactEl.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden bg-gray-200 border-y border-gray-200"
      aria-label="About Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Info & Statements */}
          <motion.div className="lg:col-span-5 flex flex-col items-start" variants={textVariants}>
            {/* Overline Badge */}
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
              {aboutContent.badge}
            </span>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              {aboutContent.title}
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              {aboutContent.description}
            </p>

            {/* Mission & Vision Statements */}
            <div className="flex flex-col gap-6 w-full mb-8">
              {/* Mission */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white/80 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {aboutContent.mission.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                    {aboutContent.mission.text}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white/80 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                  <Eye className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {aboutContent.vision.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                    {aboutContent.vision.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <Button
              size="md"
              onClick={handleScrollToContact}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="border-slate-300  hover:bg-white bg-black text-yellow-600"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Right Column: Grid of Feature Cards */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            variants={gridVariants}
          >
            {aboutFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
                className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-900 hover:bg-white shadow-sm"
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};