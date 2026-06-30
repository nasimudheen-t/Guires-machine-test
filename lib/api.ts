// import { BlogPost, blogData } from "@/data/blogs";

// export interface ApiPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// // Utility to capitalize strings
// const capitalize = (text: string): string => {
//   if (!text) return "";
//   return text.charAt(0).toUpperCase() + text.slice(1);
// };

// // Programmatic helper to assign mock categories
// const getCategoryForIndex = (index: number): string => {
//   const categories = [
//     "Web Development",
//     "Cloud Solutions",
//     "AI & ML",
//     "UI/UX Design",
//     "Mobile Apps",
//     "Cybersecurity"
//   ];
//   return categories[index % categories.length];
// };

// // Programmatic helper to assign local blog cover images
// const getCoverImageForIndex = (index: number): string => {
//   const images = [
//     "/images/blog_software_engineering.png",
//     "/images/blog_cloud_infrastructure.png",
//     "/images/blog_artificial_intelligence.png"
//   ];
//   return images[index % images.length];
// };

// // Programmatic helper to assign simulated dates
// const getPublishDateForIndex = (index: number): string => {
//   const dates = [
//     "June 28, 2026",
//     "June 22, 2026",
//     "June 15, 2026",
//     "June 08, 2026",
//     "June 01, 2026",
//     "May 25, 2026"
//   ];
//   return dates[index % dates.length];
// };

// // Programmatic helper to estimate read time based on word count
// const getReadTimeForText = (text: string): string => {
//   const wordsPerMinute = 200;
//   const words = text.split(/\s+/).length;
//   const minutes = Math.ceil(words / wordsPerMinute);
//   return `${minutes + 2} min read`; // Adding buffer for rich content
// };

// /**
//  * Fetch the first 6 blog posts from the API.
//  * Falls back to local blog data on error.
//  */
// export async function fetchBlogPosts(): Promise<BlogPost[]> {
//   try {
//     // Configure fetch with a 5-second timeout and 1-hour cache
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000);

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       next: { revalidate: 3600 },
//       signal: controller.signal,
//     });
    
//     clearTimeout(timeoutId);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch posts from API. Status: ${res.status}`);
//     }

//     const apiPosts: ApiPost[] = await res.json();
//     const firstSix = apiPosts.slice(0, 6);

//     return firstSix.map((post, idx) => ({
//       id: post.id.toString(),
//       title: capitalize(post.title),
//       description: post.body,
//       category: getCategoryForIndex(idx),
//       coverImage: getCoverImageForIndex(idx),
//       publishDate: getPublishDateForIndex(idx),
//       readTime: getReadTimeForText(post.body),
//     }));
//   } catch (error) {
//     console.error("API Fetch Error - Falling back to local data:", error);
//     return blogData;
//   }
// }

// /**
//  * Fetch a single blog post by its slug (ID or local slug).
//  * Falls back to local search if not found or on API failure.
//  */
// export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
//   try {
//     const isNumeric = /^\d+$/.test(slug);

//     if (isNumeric) {
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 5000);

//       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
//         next: { revalidate: 3600 },
//         signal: controller.signal,
//       });

//       clearTimeout(timeoutId);

//       if (!res.ok) {
//         throw new Error(`Failed to fetch single post ${slug} from API.`);
//       }

//       const post: ApiPost = await res.json();
//       const idNum = parseInt(slug, 10);

//       return {
//         id: post.id.toString(),
//         title: capitalize(post.title),
//         description: post.body,
//         category: getCategoryForIndex(idNum - 1),
//         coverImage: getCoverImageForIndex(idNum - 1),
//         publishDate: getPublishDateForIndex(idNum - 1),
//         readTime: getReadTimeForText(post.body),
//       };
//     } else {
//       // Return local post directly
//       const localPost = blogData.find((p) => p.id === slug);
//       return localPost || null;
//     }
//   } catch (error) {
//     console.error(`API Single Fetch Error for slug: ${slug} - Checking local data:`, error);
//     // Find local fallback
//     const localPost = blogData.find((p) => p.id === slug);
//     return localPost || null;
//   }
// }
