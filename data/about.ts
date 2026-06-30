// About section content data structures

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Innovation" | "Security" | "Scalability" | "CustomerSuccess";
}

export const aboutContent = {
  badge: "Who We Are",
  title: "Pioneering the Next Era of Digital Infrastructure",
  description: "We build and architect future-proof software systems that maximize application speed, enforce bulletproof security, and scale dynamically with user demand.",
  
  mission: {
    title: "Our Mission",
    text: "To accelerate enterprise innovation globally by delivering robust, highly scalable, and developer-friendly technological systems.",
  },
  vision: {
    title: "Our Vision",
    text: "To establish the ultimate global standard for modern software engineering, cloud infrastructures, and developer tools.",
  },
};

export const aboutFeatures: FeatureItem[] = [
  {
    id: "innovation",
    title: "Continuous Innovation",
    description: "Easily integrate cutting-edge frameworks, serverless APIs, and modern tooling to keep your codebase ahead of the curve.",
    iconName: "Innovation",
  },
  {
    id: "security",
    title: "Zero-Trust Security",
    description: "Fortified security layers, strict identity authorization controls, and end-to-end encryption guard your data.",
    iconName: "Security",
  },
  {
    id: "scalability",
    title: "Elastic Scalability",
    description: "Seamlessly scale nodes and processes dynamically without throttling requests or causing system downtime.",
    iconName: "Scalability",
  },
  {
    id: "success",
    title: "Developer Success",
    description: "24/7 engineering consulting and production-ready guidance to keep your infrastructure running smoothly.",
    iconName: "CustomerSuccess",
  },
];
