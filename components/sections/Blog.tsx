import React from "react";

import { BlogContent } from "../blog/BlogContent";
import { blogData } from "@/data/blogs";
export const Blog = async () => {
  // Fetch posts on the server side
 
  return <BlogContent posts={blogData} />;
};