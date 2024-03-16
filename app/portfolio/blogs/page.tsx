import { blogs } from "@/app/common/staticData/blogs";
import BlogsCard from "@/app/public/blogs/components/BlogsCard";
import React from "react";

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base text-neutral-300 font-semibold">_blogs</h2>
        <h2 className="text-sm md:text-base text-neutral-400 font-medium">
          _blogs.length = 3
        </h2>
      </div>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <BlogsCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
