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
  description:
    "Stay updated with industry trends, emerging technologies, development best practices, cloud innovations, and digital transformation insights from our experts.",
};

export const blogData: BlogPost[] = [
  {
    id: "nextjs-15-layouts",
    title: "Mastering Next.js 15 App Router for Scalable Applications",
    description:
      "Discover how the App Router simplifies layouts, improves routing, and enhances performance for modern web applications.",
    category: "Web Development",
    coverImage:
      "/images/web-development.png",
    publishDate: "June 28, 2026",
    readTime: "5 min read",
  },
  {
    id: "zero-trust-cloud",
    title: "Building Secure Cloud Infrastructure with Zero Trust",
    description:
      "Learn modern cloud security strategies, multi-cloud architecture, and best practices for protecting enterprise applications.",
    category: "Cloud Solutions",
    coverImage:
      "/images/cloud-solutions.png",
    publishDate: "June 22, 2026",
    readTime: "8 min read",
  },
  {
    id: "autonomous-ai-agents",
    title: "How AI is Transforming Modern Businesses",
    description:
      "Explore how artificial intelligence, automation, and machine learning are helping companies improve efficiency and customer experience.",
    category: "Artificial Intelligence",
    coverImage:
      "/images/artificial-intelligence.png",
    publishDate: "June 15, 2026",
    readTime: "7 min read",
  },
  {
    id: "figma-to-tailwind",
    title: "Creating Stunning UI Designs with Figma and Tailwind CSS",
    description:
      "Learn how designers and developers collaborate efficiently to build responsive, accessible, and visually appealing interfaces.",
    category: "UI/UX Design",
    coverImage: "/images/ui-ux-design.png",
    publishDate: "June 08, 2026",
    readTime: "6 min read",
  },
  {
    id: "scale-react-native",
    title: "Developing High-Performance Mobile Applications",
    description:
      "Discover techniques for building scalable mobile apps with React Native, optimized performance, and exceptional user experience.",
    category: "Mobile Development",
    coverImage:
      "/images/mobile-development.png",
    publishDate: "June 01, 2026",
    readTime: "9 min read",
  },
  {
    id: "core-web-vitals-cls",
    title: "Improving Core Web Vitals for Better User Experience",
    description:
      "Optimize website speed, reduce layout shifts, and improve performance metrics to deliver faster and smoother web experiences.",
    category: "Performance",
    coverImage:
      "/images/web-performance.png",
    publishDate: "May 25, 2026",
    readTime: "6 min read",
  },
];