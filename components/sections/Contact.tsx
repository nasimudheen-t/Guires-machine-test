"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

// Custom SVG Brand Icons since newer lucide-react versions have deprecated them
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// Zod Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Mock Contact Form Submission: ", data);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/30 dark:bg-zinc-950/20 border-t border-slate-200/40 dark:border-slate-800/40"
      aria-label="Contact Section"
    >
      {/* Background glow visual */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/3 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <SectionHeading
            badge="Get in Touch"
            title="Let's Build Something Great"
            subtitle="Have a question or want to discuss a new software architecture? Drop us a message."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
            {/* Left Column: Company Information */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 bg-white/70 dark:bg-bg-dark/40 backdrop-blur-md shadow-sm"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    Contact Information
                  </h3>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Connect directly with our engineering team or schedule a system architecture consultation.
                  </p>
                </div>

                <div className="space-y-5 font-sans">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Our Office</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        100 Innovation Way, Suite 400, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Email Us</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5 hover:text-indigo-600 transition-colors">
                        info@technovasolutions.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Call Us</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        +1 (555) 019-2834
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Working Hours</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        Mon - Fri, 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-slate-200/40 dark:border-slate-800/40 mt-8 lg:mt-0">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 font-sans">
                  Follow Our Updates
                </h4>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <TwitterIcon className="h-4.5 w-4.5" />, href: "#", label: "Twitter" },
                    { icon: <LinkedinIcon className="h-4.5 w-4.5" />, href: "#", label: "LinkedIn" },
                    { icon: <GithubIcon className="h-4.5 w-4.5" />, href: "#", label: "GitHub" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form Block */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 p-8 sm:p-10 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 bg-white/70 dark:bg-bg-dark/40 backdrop-blur-md shadow-sm flex flex-col justify-between"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col justify-between" noValidate>
                <div className="space-y-5 font-sans">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. John Doe"
                      {...register("name")}
                      className={`w-full h-11 px-4 text-sm rounded-lg border bg-white dark:bg-bg-dark/20 text-slate-900 dark:text-white transition-all duration-200 focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400"
                      }`}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-rose-500 dark:text-rose-400 text-xs font-medium mt-1.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        {...register("email")}
                        className={`w-full h-11 px-4 text-sm rounded-lg border bg-white dark:bg-bg-dark/20 text-slate-900 dark:text-white transition-all duration-200 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                            : "border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400"
                        }`}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-rose-500 dark:text-rose-400 text-xs font-medium mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        {...register("phone")}
                        className="w-full h-11 px-4 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-bg-dark/20 text-slate-900 dark:text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      {...register("message")}
                      className={`w-full p-4 text-sm rounded-lg border bg-white dark:bg-bg-dark/20 text-slate-900 dark:text-white transition-all duration-200 focus:outline-none focus:ring-1 resize-none ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400"
                      }`}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-rose-500 dark:text-rose-400 text-xs font-medium mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit button row */}
                <div className="pt-6 mt-6 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="w-full sm:w-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      Send Message
                    </Button>
                  </div>
                  
                  {/* Submission success feedback */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
