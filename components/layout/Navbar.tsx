"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for header styling (transparent -> glassmorphism transition)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: Highlight active link based on viewport intersection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // triggers when section occupies the active view area
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navigationLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      navigationLinks.forEach((link) => {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Keyboard accessibility and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent body scroll when menu open
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-4"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Global Navigation">
          {/* Logo Section */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
            aria-label="TechNova Solutions Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="h-5.5 w-5.5" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              TechNova <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "relative py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-1",
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                      )}
                    >
                      {link.label}
                      {/* Premium indicator line */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-fade-in" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="border-l border-slate-200 dark:border-slate-800 pl-8">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const contactEl = document.getElementById("contact");
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: "smooth" });
                    contactEl.focus({ preventScroll: true });
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Overlay Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-45 bg-white/95 dark:bg-bg-dark/95 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-800/50 md:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <Container className="py-8 h-full flex flex-col justify-between overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li
                  key={link.href}
                  className={cn(
                    "transition-all duration-300 transform",
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "block py-3 text-lg font-semibold tracking-tight transition-colors duration-200 rounded-lg px-3 -mx-3",
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-500/5"
                        : "text-slate-800 hover:text-slate-950 hover:bg-slate-50 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-900/50"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              "mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 transition-all duration-300 transform",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: `${navigationLinks.length * 40}ms` }}
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsOpen(false);
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: "smooth" });
                  contactEl.focus({ preventScroll: true });
                }
              }}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
