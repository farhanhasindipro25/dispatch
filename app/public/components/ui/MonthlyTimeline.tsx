"use client";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { generateActivityLogMsg } from "../../../common/helpers/UtilsKit";
import monthlyTimelineData from "../../../common/staticData/monthlyTimelineData";
import React from "react";

export default function MonthlyTimeline() {
  const logs = useQuery(api.logs.list);

  return (
    <>
      <h2 className="text-neutral-400 underline font-semibold text-sm">
        SO FAR THIS YEAR
      </h2>
      <div className="divide-y divide-neutral-700 space-y-6">
        {monthlyTimelineData?.map((log) => (
          <div key={log.month} className="pt-6 space-y-4">
            <h2 className="text-white font-semibold text-base">{log.month}</h2>
            <div className="space-y-4 divide-y divide-neutral-800">
              {log.activityLog?.map((activity) => (
                <div
                  key={activity.topic}
                  className="flex items-start gap-2 pt-4"
                >
                  <div>🚀</div>
                  <div className="space-y-2">
                    <p className="text-neutral-300 text-sm font-semibold">
                      {
                        generateActivityLogMsg(activity.kind, activity.topic)
                          .synonym
                      }{" "}
                      {
                        generateActivityLogMsg(activity.kind, activity.topic)
                          .topic
                      }
                      .
                    </p>
                    <p className="text-neutral-400 text-sm font-medium">
                      {activity.thoughts}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
