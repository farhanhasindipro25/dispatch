import React from "react";
import EssentialsSection from "./EssentialsSection";
import ActivityList from "./ActivityList";

export default function TimelineListView() {
  return (
    <div className="space-y-4">
      <EssentialsSection />
      <ActivityList />
    </div>
  );
}
