"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function MonthlyTimeline() {
  const logs = useQuery(api.logs.list);
  return (
    <div>
      <h2 className="text-neutral-400 underline font-semibold text-sm">
        SO FAR THIS YEAR
      </h2>
      <div className="divide-y divide-neutral-700 space-y-6">
        {logs?.map((log) => (
          <div className="pt-6 space-y-4">
            <h2 className="text-white font-semibold text-base">
              {new Date(log._creationTime).toLocaleDateString()}
            </h2>
            <div className="space-y-4 divide-y divide-neutral-800">

              {timeline.activityLog?.map((log) => (
                <div className="flex items-start gap-2 pt-4">
                  <div>🚀</div>
                  <div className="space-y-2">
                    <p className="text-neutral-300 text-sm font-semibold">
                      {generateActivityLogMsg(log.kind, log.topic).synonym}{" "}
                      {generateActivityLogMsg(log.kind, log.topic).topic}.
                    </p>
                    <p className="text-neutral-400 text-sm font-medium">
                      {log.thoughts}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
