import React from "react";
import { fetchBlogPosts } from "@/lib/api";
import { BlogContent } from "../blog/BlogContent";

export const Blog = async () => {
  // Fetch posts on the server side
  const posts = await fetchBlogPosts();
  
  return <BlogContent posts={posts} />;
};