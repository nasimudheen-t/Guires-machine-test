// Common types and interfaces for the TechNova Solutions landing page project.

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
