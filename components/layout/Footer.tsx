"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { navigationLinks } from "@/data/navigation";

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

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", href);
      
      // Accessibility focus management
      targetElement.focus({ preventScroll: true });
    }
  };

  return (
    <footer className="bg-white dark:bg-bg-dark border-t border-slate-200/40 dark:border-slate-800/40 py-12 sm:py-16 font-sans">
      <Container>
        <div className="flex flex-col gap-10 md:gap-12">
          
          {/* Top Row: Logo, Navigation, Social Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-slate-200/40 dark:border-slate-800/40">
            
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
              aria-label="TechNova Solutions Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-200">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                TechNova <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Solutions</span>
              </span>
            </Link>

            {/* Navigation link list */}
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              {[
                { icon: <TwitterIcon className="h-4 w-4" />, href: "#", label: "Twitter" },
                { icon: <LinkedinIcon className="h-4 w-4" />, href: "#", label: "LinkedIn" },
                { icon: <GithubIcon className="h-4 w-4" />, href: "#", label: "GitHub" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Copyright, Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved. Built for technical demonstration.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={handleBackToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 bg-white dark:bg-bg-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Back to top of page"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
