import React from "react";
import EssentialsSection from "./EssentialsSection";
import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";

export default function TimelineListView({ userId }) {
  return (
    <div className="space-y-8">
      {/* <EssentialsSection /> */}
      <MonthlyTimeline userId={userId}/>
    </div>
  );
}
