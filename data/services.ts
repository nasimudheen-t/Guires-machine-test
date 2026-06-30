// Services Section Data Config

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "Code2"
    | "Smartphone"
    | "Palette"
    | "Cloud"
    | "Brain"
    | "Megaphone";
}

export const servicesContent = {
  badge: "Services & Capabilities",
  title: "Integrated Engineering Solutions",
  description:
    "We deliver full-cycle software engineering, premium design, and scalable cloud solutions built to accelerate business operations.",
};

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Build robust, SEO-friendly web applications using Next.js 15, React 19, Tailwind CSS v4, and modern clean architecture.",
    iconName: "Code2",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "Create cross-platform iOS and Android applications utilizing React Native for fluid animations and native speed.",
    iconName: "Smartphone",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description:
      "Design high-fidelity user experiences, detailed wireframes, and reusable style systems tailored to modern web aesthetics.",
    iconName: "Palette",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Infrastructure",
    description:
      "Architect AWS/Vercel serverless configurations, deploy CDN edges, and manage secure relational databases.",
    iconName: "Cloud",
  },
  {
    id: "ai-consulting",
    title: "AI & ML Consulting",
    description:
      "Integrate Large Language Models, configure vector databases, and build custom automated agents for business flows.",
    iconName: "Brain",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven marketing strategies, SEO, social media campaigns, paid advertising, and content marketing to attract, engage, and convert your target audience.",
    iconName: "Megaphone",
  },
];
