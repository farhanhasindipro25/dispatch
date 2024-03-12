"use client";
import Button from "@/app/components/ui/Button";
import { api } from "../../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import React from "react";

export default function MonthlyTimeline() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.logs.getLogs,
    {},
    { initialNumItems: 5 }
  );
  return (
    <>
      <h2 className="text-neutral-400 underline font-semibold text-sm">
        SO FAR THIS YEAR
      </h2>
      <div className="divide-y divide-neutral-700 space-y-6">
        {results?.map((log) => (
          <div className="pt-6 space-y-4">
            <h2 className="text-white font-semibold text-base">
              {new Date(log._creationTime).toLocaleDateString()}
            </h2>
            <div className="space-y-4 divide-y divide-neutral-800">
              <div className="flex flex-wrap items-start gap-2 pt-4">
                <div className="basis-full">
                  {log.tags.map((tag) => (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      {tag?.name}
                    </span>
                  ))}
                </div>
                <div>🚀 </div>
                <div>
                  <p className="text-neutral-300 text-sm font-semibold">
                    {log.title}
                  </p>
                  <p className="text-neutral-400 text-sm font-medium">
                    {log.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {status === "CanLoadMore" && (
          <Button variant="ACCENT" onClick={() => loadMore(5)}>
            Load More
          </Button>
        )}
        {(status === "LoadingMore" || status === "LoadingFirstPage") &&
          Array.from({ length: 20 }).map((_, index) => (
            <div className="animate-pulse space-y-6 pt-4" key={index + 1}>
              <div className="w-1/12 h-5 bg-neutral-700 rounded-full"></div>
              <div className="space-y-2">
                <div className="w-1/4 h-5 bg-neutral-700 rounded-full"></div>
                <div className="w-full h-3 bg-neutral-700 rounded-full"></div>
                <div className="w-full h-3 bg-neutral-700 rounded-full"></div>
                <div className="w-full h-3 bg-neutral-700 rounded-full"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
