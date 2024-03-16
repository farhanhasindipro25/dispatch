import Button from "@/app/components/ui/Button";
import { BlogCardProps } from "@/app/interfaces/pages/publicPage/blogCardProps";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function BlogsCard({ blog }: BlogCardProps) {
  return (
    <div className="p-4 w-full rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-2 md:space-y-0">
      <h2 className="text-neutral-300 font-medium text-sm md:text-base">
        {blog.title}
      </h2>
      <h2 className="text-neutral-400 font-normal text-sm">{blog.date}</h2>
      <div className="flex justify-end">
        <Link href={`/portfolio/blogs/${blog.slug}`}>
          <Button variant="TERTIARY">
            Read Blog
            <ChevronRightIcon className="w-4 h-4 text-neutral-300 hover:translate-x-1 hover:text-white duration-300 ease-in-out" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
