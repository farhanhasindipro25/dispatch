import React from "react";
import EssentialsSection from "./EssentialsSection";
import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";

export default function TimelineListView({ isPublic }) {
  return (
    <div className="space-y-8">
      {/* <EssentialsSection /> */}
      <MonthlyTimeline isPublic={false}/>
    </div>
  );
}
