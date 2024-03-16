"use client";
import Button from "@/app/components/ui/Button";
import { api } from "../../../../convex/_generated/api";
import { useMutation, usePaginatedQuery } from "convex/react";
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/app/common/helpers/UtilsKit";

export default function MonthlyTimeline({
  userId,
  isPublic,
}: {
  userId: string;
  isPublic: boolean;
}) {
  const args = isPublic ? { userId } : {};
  const query = isPublic ? api.logs.getLogs : api.logs.getMyLogs;
  const { results, status, loadMore } = usePaginatedQuery(query, args, {
    initialNumItems: 5,
  });
  const deleteLog = useMutation(api.logs.deleteLog);
  return (
    <>
      <div className="divide-y divide-neutral-700 space-y-6">
        {results.length === 0 && status !== "LoadingFirstPage" && (
          <div className="flex items-center justify-center mt-40 h-1/2 gap-2">
            <InformationCircleIcon className="w-6 h-6 text-neutral-400" />
            <h2 className="text-neutral-400">
              You have not added any activities yet!
            </h2>
          </div>
        )}
        {results?.map((log, index) => (
          <div className="pt-6 flex flex-wrap justify-center" key={index + 1}>
            <h2 className="text-white font-semibold text-base basis-1/2">
              {formatDate(new Date(log._creationTime))}
            </h2>{
              isPublic && <div className="basis-1/2">
                <Button className="bg-red-500 text-white ml-auto block" variant="ALT_PRIMARY" onClick={() => deleteLog({ id: log._id })}>
                  DELETE
                </Button>
              </div>
            }
            <div className="space-y-4 divide-y divide-neutral-800 basis-full">
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
          <Button
            className="block m-auto mt-6"
            variant="SECONDARY"
            onClick={() => loadMore(5)}
          >
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
