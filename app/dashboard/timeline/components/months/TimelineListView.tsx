import React from "react";
import EssentialsSection from "./EssentialsSection";
import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";

export default function TimelineListView() {
  return (
    <div className="space-y-8">
      <EssentialsSection />
      <MonthlyTimeline />
    </div>
  );
}
