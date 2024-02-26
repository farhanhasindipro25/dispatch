"use client";
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
                {log.tags.map(tag => <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{tag?.name}</span>)}
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
        
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => loadMore(5)} disabled={status !== "CanLoadMore"}>
          Load More
        </button>
      </div>
    </>
  );
}
