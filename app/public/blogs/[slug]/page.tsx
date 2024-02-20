import { blogs } from "@/app/common/staticData/blogs";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import { BlogCardProps } from "@/app/interfaces/pages/publicPage/blogCardProps";
import { BlogDetailProps } from "@/app/interfaces/pages/publicPage/blogDetailProps";
import Image from "next/image";
import React from "react";

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const data: BlogCardProps["blog"] | undefined = blogs.find(
    (blog) => blog.slug === params.slug
  );

  return (
    <>
      {data ? (
        <div className="space-y-8">
          <Breadcrumb
            base_page="_blogs"
            base_href="/public/blogs"
            current_page={data.title}
            current_href={`/public/blogs/${data.slug}`}
          />
          <div className="space-y-4">
            <h2 className="text-neutral-300 text-base font-semibold">
              {data.title}
            </h2>
            <Image
              src={data.image}
              alt="blog-cover"
              width={1000}
              height={1000}
              priority
              className="object-cover aspect-auto rounded-lg w-full"
            />
            <div>
              {data?.description?.map((item) => (
                <p className="text-neutral-400" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
