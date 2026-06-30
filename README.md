# TechNova Solutions Landing Page

A premium, production-ready, and highly performant landing page for **TechNova Solutions**, a fictional technology company specializing in future-ready enterprise software, digital transformation, and IT consulting. 

This project was built as a frontend engineering technical assessment, following Clean Architecture guidelines and modern design aesthetics reminiscent of premium SaaS interfaces like Stripe, Vercel, Linear, and Framer.

---

## 🚀 Tech Stack

- **Core Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) (Modern CSS-based `@theme` token configuration)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Lightweight, scroll-triggered, and staggered micro-animations)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) (Performant, validation-state tracking)
- **Schema Validation**: [Zod](https://zod.dev/) (Type-safe input verification schemas)
- **Icon Library**: [Lucide React](https://lucide.dev/) (Consistent tech icon design family)

---

## 📁 Folder Structure

The project implements a scalable and modular clean architecture structure:

```text
├── app/                  # Next.js App Router root layout and pages
│   ├── favicon.ico       # Legacy fallback favicon
│   ├── globals.css       # Global CSS with Tailwind v4 design tokens
│   ├── icon.svg          # Modern high-res SVG brand favicon
│   ├── layout.tsx        # Base HTML layout, custom next/fonts & SEO metadata
│   └── page.tsx          # Homepage view rendering all modular sections
├── components/           # Reusable React components
│   ├── layout/           # Structural layouts (Navbar, Footer, Container)
│   │   ├── Container.tsx # Padding & width alignment helper
│   │   ├── Footer.tsx    # Scroll-to-top CTA & link grid
│   │   └── Navbar.tsx    # Scroll-aware sticky glassmorphism nav
│   ├── sections/         # Core landing page view sections
│   │   ├── About.tsx     # Section: Vision cards & core pillars grid
│   │   ├── Blog.tsx      # Section: Technical articles grid view
│   │   ├── Contact.tsx   # Section: Form validation & company info
│   │   ├── Hero.tsx      # Section: Staggered titles & floating UI mockups
│   │   └── Services.tsx  # Section: Integrated capabilities grid
│   └── ui/               # Lower-level design tokens / UI components
│       ├── Button.tsx    # Accessible, multi-variant premium button
│       ├── BlogCard.tsx  # Layout for article previews with cover zoom
│       ├── FeatureCard.tsx# Glassmorphic card for vision pillars
│       ├── SectionHeading.tsx# Reusable section badges & typography titles
│       ├── ServiceCard.tsx# Service capability items with hover highlights
│       └── TestimonialCard.tsx# Client quote card with initials avatars
├── data/                 # Decentralized static content configuration files
│   ├── about.ts          # Core statement strings & value items
│   ├── blogs.ts          # Metadata, category, and paths for 6 tech articles
│   ├── navigation.ts     # Global navigation anchor links configuration
│   ├── services.ts       # Services cards titles & icon mappings
│   └── testimonials.ts   # Success stories quote data & author metadata
├── lib/                  # Shared helper scripts & utilities
│   └── utils.ts          # Tailwind CSS merge utility ('cn')
├── public/               # Static assets folder
│   ├── images/           # Generated vector-style illustrations
│   └── (next/vercel svg) # Default template SVGs
├── types/                # Project-wide TypeScript interfaces
│   └── index.ts          # Global generic typings
├── eslint.config.mjs     # ESLint 9 Flat Config (with Next 15 compatibility)
├── tsconfig.json         # Strict TypeScript compiler options
└── package.json          # Node dependencies & script commands
```

---

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have Node.js (version 18.17.0 or higher) and npm installed.

### 1. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd Guires
```

### 2. Install all dependencies:
```bash
npm install
```

---

## 💻 Development Workflow

To boot up the local hot-reloading development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Builds & Compilation

Before deploying, verify type checks, ESLint rules, and build optimization:

### 1. Run ESLint:
```bash
npm run lint
```

### 2. Compile production-optimized static bundle:
```bash
npm run build
```

This commands compiles TypeScript modules, parses CSS themes, generates page static route maps, and performs image optimization paths.

### 3. Serve the production build locally:
```bash
npm run start
```

---

## 🌐 SEO & Accessibility Best Practices

- **Semantic HTML**: Built using `<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<cite>`, and `<footer>` tags to ensure clear document structure for screen readers and search spiders.
- **WAI-ARIA Accessibility**: Focus states, custom aria-labels, control associations, and scroll-locks on mobile overlays are implemented to guarantee keyboard navigability.
- **Search Engine Optimization**: Integrates Next.js Metadata API mapping OpenGraph protocols, Twitter cards, Canonical tags, search indexing flags (`robots`), and meta keywords tags dynamically.
- **Performance**: Heavy image dependencies are served statically using Next's optimized `<Image>` component which supports lazy loading and WebP formats by default.
