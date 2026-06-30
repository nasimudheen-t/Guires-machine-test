"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Zap, Shield } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export const Hero = () => {
  // Stagger animation container variants for left side text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth deceleration
      },
    },
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      contactEl.focus({ preventScroll: true });
    }
  };

  const handleScrollToAbout = () => {
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
      aboutEl.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white dark:bg-bg-dark"
      aria-label="Hero Section"
    >
      {/* Background Decorative Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Soft Indigo Glow Top Right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl" />
        {/* Soft Cyan Glow Left Center */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl" />
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, CTAs, and Trust Indicators */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Promo Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 mb-6"
            >
              <Shield className="h-3.5 w-3.5 text-indigo-500" />
              <span>Trusted by Modern Businesses</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              The Operating System for <span className="text-gradient">Modern Tech</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-sans"
            >
              TechNova Solutions empowers enterprises to scale seamlessly with modern cloud platforms, AI-driven automation, and production-ready architectures.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToContact}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToAbout}
                rightIcon={<Play className="h-4.5 w-4.5 text-slate-400" />}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-lg"
            >
              {[
                { value: "99.99%", label: "Uptime SLA", icon: <Zap className="h-4 w-4 text-amber-500" /> },
                { value: "50M+", label: "Daily Requests", icon: <Users className="h-4 w-4 text-indigo-500" /> },
                { value: "<15ms", label: "Avg Latency", icon: <TrendingUp className="h-4 w-4 text-cyan-500" /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col group">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Interactive UI Illustration */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Glowing Background Blob Behind Mockups */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 opacity-20 dark:opacity-10 blur-3xl animate-pulse-slow" />

            {/* Card 1: Floating Analytics Dashboard Card (Top Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -10, 0] // Soft floating loop
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              className="absolute left-0 top-12 sm:top-16 z-20 w-[210px] sm:w-[240px] glassmorphism dark:glassmorphism p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-950/5 border border-slate-200/10 dark:border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Active Users</span>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 text-2xs sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  +14.2%
                </span>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">12,840</div>
              <div className="mt-4 flex gap-1 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: "65%" }} />
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "20%" }} />
              </div>
            </motion.div>

            {/* Card 2: Performance Graph Card (Center/Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -14, 0] // Slightly different float offset
              }}
              transition={{
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
                default: { duration: 0.8, ease: "easeOut", delay: 0.15 }
              }}
              className="absolute right-0 bottom-16 sm:bottom-20 z-10 w-[260px] sm:w-[320px] glassmorphism p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-950/10 border border-slate-200/10 dark:border-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-2xs sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">System API Growth</span>
                  <div className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white">4.8M / sec</div>
                </div>
                <div className="text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/20 p-2 rounded-lg">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>

              {/* Glowing SVG Curve Graph */}
              <div className="w-full h-24 overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                  {/* Filled Area */}
                  <motion.path
                    initial={{ d: "M 0 40 L 0 35 Q 25 32, 50 20 T 100 5 L 100 40 Z" }}
                    animate={{ d: "M 0 40 L 0 32 Q 25 24, 50 18 T 100 3 L 100 40 Z" }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    fill="url(#chart-grad)"
                  />
                  {/* Line */}
                  <motion.path
                    initial={{ d: "M 0 35 Q 25 32, 50 20 T 100 5" }}
                    animate={{ d: "M 0 32 Q 25 24, 50 18 T 100 3" }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    fill="none"
                    stroke="url(#brand-grad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Card 3: Live Feed Notifications Card (Top Right / Center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -8, 0]
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.25,
                },
                default: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }}
              className="absolute right-4 top-10 sm:top-14 z-30 w-[190px] sm:w-[220px] glassmorphism p-3 sm:p-4 rounded-xl shadow-lg border border-slate-200/10 dark:border-white/5"
            >
              <span className="text-2xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider block mb-2.5">Live Events</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-2xs sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Deploy Successful</span>
                </div>
                <div className="flex items-center gap-2 text-2xs sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span className="text-slate-600 dark:text-slate-400">Peak Request Hit</span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Team Avatars Card (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -6, 0]
              }}
              transition={{
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75,
                },
                default: { duration: 0.8, ease: "easeOut", delay: 0.45 }
              }}
              className="absolute left-4 bottom-12 sm:bottom-16 z-30 w-[180px] sm:w-[200px] glassmorphism p-3.5 rounded-xl shadow-lg border border-slate-200/10 dark:border-white/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 border border-slate-900 text-white font-sans text-2xs font-bold ring-2 ring-transparent dark:ring-transparent">JD</div>
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-600 border border-slate-900 text-white font-sans text-2xs font-bold ring-2 ring-transparent dark:ring-transparent">MK</div>
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 border border-slate-900 text-white font-sans text-2xs font-bold ring-2 ring-transparent dark:ring-transparent">AL</div>
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 border border-slate-900 text-slate-400 font-sans text-3xs font-semibold ring-2 ring-transparent dark:ring-transparent">+4</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xs font-bold text-slate-800 dark:text-slate-200 leading-none">Global Team</span>
                  <span className="text-3xs text-emerald-500 font-semibold mt-0.5 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> Online
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};
