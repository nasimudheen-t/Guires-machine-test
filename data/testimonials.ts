// Testimonials Section Data Config

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarColor: string; // Tailwind bg color class representation
  initials: string;
}

export const testimonialsContent = {
  badge: "Success Stories",
  title: "What Our Partners Say",
  description: "Read how modern engineering groups and enterprise startups scale their operations with TechNova architectures.",
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "NovaCorp Inc.",
    quote: "TechNova Solutions re-architected our legacy API systems in less than 4 weeks. Our server latency dropped from 250ms to 12ms under heavy load, saving us thousands in cloud overhead.",
    avatarColor: "bg-indigo-600",
    initials: "SJ",
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "Scaleflow Tech",
    quote: "The developer-first tooling and architectural advice we received was second to none. TechNova didn't just build our app; they taught our engineering team how to maintain and scale it.",
    avatarColor: "bg-cyan-600",
    initials: "MC",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Director of Product",
    company: "Finly App",
    quote: "Framer Motion animations, clean typography, and zero-trust security layers were integrated exactly as specified. The technical performance was flawless. Highly recommended.",
    avatarColor: "bg-violet-600",
    initials: "ER",
  },
];
