import { featuredWorks } from "@/app/common/staticData/works";
import React from "react";
import Link from "next/link";
import FeaturedWorkCard from "./FeaturedWorkCard";

export default function WorkHistory() {
  return (
    <div className="pt-12 space-y-6">
      <Link
        href="/public/work-history"
        className="flex items-center justify-between"
      >
        <h2 className="text-base text-white font-semibold">_workHistory</h2>
        <h2 className="text-sm text-neutral-300 cursor-pointer hover:underline hover:text-white">
          _workHistory.length(4)
        </h2>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        {featuredWorks.map((work) => (
          <FeaturedWorkCard key={work.company} work={work} />
        ))}
      </div>
    </div>
  );
}
