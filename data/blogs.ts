// Blog Section Data Config

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishDate: string;
  readTime: string;
}

export const blogContent = {
  badge: "Insights & Press",
  title: "Latest Technical Articles",
  description: "Stay up to date with the latest advancements in web architecture, AI engineering, cloud security, and design patterns.",
};

export const blogData: BlogPost[] = [
  {
    id: "nextjs-15-layouts",
    title: "Demystifying Next.js 15 App Router Layouts",
    description: "Explore the internal rendering pipelines, nested route segment caching, and state preservation mechanics of Next.js 15 layout systems.",
    category: "Web Development",
    coverImage: "/images/blog_software_engineering.png",
    publishDate: "June 28, 2026",
    readTime: "5 min read",
  },
  {
    id: "zero-trust-cloud",
    title: "Architecting Zero-Trust Multi-Region Databases",
    description: "A comprehensive deep dive into serverless network topology, multi-region cluster scaling, and database permission layers.",
    category: "Cloud Solutions",
    coverImage: "/images/blog_cloud_infrastructure.png",
    publishDate: "June 22, 2026",
    readTime: "8 min read",
  },
  {
    id: "autonomous-ai-agents",
    title: "The Rise of Autonomous AI Agents in Enterprise Systems",
    description: "How vector database embeddings, automated prompt chaining, and memory loops are transforming customer workflows and support queues.",
    category: "AI & ML",
    coverImage: "/images/blog_artificial_intelligence.png",
    publishDate: "June 15, 2026",
    readTime: "12 min read",
  },
  {
    id: "figma-to-tailwind",
    title: "Modern Web Design Systems: Figma to Tailwind v4",
    description: "Optimize CSS styling handoffs by aligning Figma tokens directly with Tailwind v4 CSS theme variables for seamless styling code conversion.",
    category: "UI/UX Design",
    coverImage: "/images/blog_software_engineering.png",
    publishDate: "June 08, 2026",
    readTime: "6 min read",
  },
  {
    id: "scale-react-native",
    title: "Scale Testing React Native for High Traffic Events",
    description: "Learn how we stress test bridges, memory leaks, and native modules to prepare enterprise applications for sudden user spikes.",
    category: "Mobile Apps",
    coverImage: "/images/blog_cloud_infrastructure.png",
    publishDate: "June 01, 2026",
    readTime: "9 min read",
  },
  {
    id: "core-web-vitals-cls",
    title: "Advanced Web Performance: Enhancing Layout Shifts",
    description: "A practical guide to identifying hidden Cumulative Layout Shifts (CLS), preloading font assets, and sizing images dynamically.",
    category: "Web Development",
    coverImage: "/images/blog_artificial_intelligence.png",
    publishDate: "May 25, 2026",
    readTime: "7 min read",
  },
];
