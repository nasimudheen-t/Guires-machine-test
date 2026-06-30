import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TechNova Solutions | Future-Ready Enterprise Software & IT Consulting",
    template: "%s | TechNova Solutions",
  },
  description:
    "TechNova Solutions delivers state-of-the-art software architectures, cloud transformations, and AI-powered enterprise applications to accelerate business growth.",
  keywords: [
    "Enterprise Software",
    "IT Consulting",
    "Cloud Computing",
    "AI Solutions",
    "Digital Transformation",
    "TechNova Solutions",
  ],
  authors: [{ name: "TechNova Solutions Team" }],
  creator: "TechNova Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technovasolutions.com",
    title: "TechNova Solutions | Future-Ready Enterprise Software & IT Consulting",
    description:
      "Accelerating business transformation through cutting-edge technology services, custom software, and consulting.",
    siteName: "TechNova Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova Solutions | Future-Ready Enterprise Software & IT Consulting",
    description:
      "Accelerating business transformation through cutting-edge technology services, custom software, and consulting.",
  },
  alternates: {
    canonical: "https://technovasolutions.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
