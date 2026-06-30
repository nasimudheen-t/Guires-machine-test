"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../blog/ThemeToggle";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navbarHeight, setNavbarHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  // Track scroll position for header styling
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

  // Get navbar height for mobile menu positioning
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        setNavbarHeight(headerRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Scrollspy: Highlight active link based on viewport intersection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
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

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeightOffset = 80;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeightOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
      targetElement.focus({ preventScroll: true });
    }

    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 md:py-4"
          : "bg-transparent border-b border-transparent py-4 md:py-6",
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Global Navigation"
        >
          {/* Logo Section - Mobile Optimized */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
            aria-label="TechNova Solutions Home"
          >
            <div className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="h-4 w-4 md:h-5.5 md:w-5.5" />
              <div className="absolute inset-0 rounded-lg md:rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <span className="font-heading text-base md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
              TechNova{" "}
              <span className="text-indigo-600 font-semibold">Solutions</span>
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
                          ? "text-indigo-600"
                          : "text-slate-700 hover:text-indigo-600",
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full bg-indigo-600 animate-fade-in" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="border-l border-slate-200 pl-8 flex items-center gap-4">
              {/* <ThemeToggle /> */}
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

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Overlay Menu - Fixed with proper z-index and scrolling */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-white md:hidden transition-all duration-300 ease-in-out overflow-y-auto",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-full pointer-events-none",
        )}
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        <div className="flex flex-col h-full px-4 py-6">
          {/* Close button at top */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "";
              }}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links - Scrollable */}
          <div className="flex-1 overflow-y-auto pb-4">
            <ul className="flex flex-col gap-1">
              {navigationLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li
                    key={link.href}
                    className={cn(
                      "transition-all duration-300 transform",
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0",
                    )}
                    style={{ transitionDelay: `${idx * 40}ms` }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "flex items-center py-3.5 px-4 text-base font-semibold tracking-tight transition-colors duration-200 rounded-xl",
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Section with CTA - Fixed at bottom */}
          <div
            className={cn(
              "pt-4 border-t border-slate-200 transition-all duration-300 transform",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: `${navigationLinks.length * 40}ms` }}
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center rounded-xl"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "";
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
      </div>
    </header>
  );
};