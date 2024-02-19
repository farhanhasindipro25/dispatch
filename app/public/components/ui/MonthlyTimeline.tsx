import { generateActivityLogMsg } from "@/app/common/helpers/UtilsKit";
import monthlyTimelineData from "@/app/common/staticData/monthlyTimelineData";

export default function MonthlyTimeline() {
  return (
    <div>
      <h2 className="text-neutral-400 underline font-semibold text-sm">
        SO FAR THIS YEAR
      </h2>
      <div className="divide-y divide-neutral-700 space-y-6">
        {monthlyTimelineData.map((timeline) => (
          <div className="pt-6 space-y-4">
            <h2 className="text-white font-semibold text-base">
              {timeline.month}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
