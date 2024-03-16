"use client";
import Button from "@/app/components/ui/Button";
import { api } from "../../../../convex/_generated/api";
import { useMutation, usePaginatedQuery } from "convex/react";
import React from "react";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/app/common/helpers/UtilsKit";
import Badge from "@/app/components/ui/Badge";
import toast from "react-hot-toast";

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
          <div className="pt-6 flex flex-wrap" key={index + 1}>
            <div className="flex justify-between w-full">
              <h2 className="text-white font-semibold text-base basis-1/2">
                {formatDate(new Date(log._creationTime))}
              </h2>
              {isPublic || (
                <XMarkIcon
                  className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-red-500"
                  onClick={() => {
                    deleteLog({ id: log._id });
                    toast("Activity deleted");
                  }}
                />
              )}
            </div>
            <div className="space-y-4 divide-y divide-neutral-800 basis-full">
              <div className="flex flex-wrap items-start gap-2 pt-4">
                <div className="basis-full">
                  {log.tags.map((tag) => (
                    <Badge variant="INFO">{tag?.name}</Badge>
                  ))}
                </div>

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
