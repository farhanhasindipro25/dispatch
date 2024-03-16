import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import React, { useState } from "react";
import TimelineListView from "./TimelineListView";
import Button from "@/app/components/ui/Button";

export default function FebruaryTimeline() {
  const [essentialsDrawerOpen, setEssentialsDrawerOpen] = useState(false);
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-neutral-300 font-semibold">
          Manage your February timeline
        </h2>
        <div className="flex items-center gap-4">
          {/* <Button
            variant="ACCENT"
            onClick={() => setEssentialsDrawerOpen(true)}
          >
            Add Essentials
          </Button>
          <Button
            variant="SECONDARY"
            onClick={() => setEssentialsDrawerOpen(true)}
          >
            Add Activity
          </Button> */}
        </div>
        <RightSideDrawer
          open={essentialsDrawerOpen}
          setOpen={setEssentialsDrawerOpen}
        >
          fd
        </RightSideDrawer>
        <RightSideDrawer
          open={activityDrawerOpen}
          setOpen={setActivityDrawerOpen}
        >
          fd
        </RightSideDrawer>
      </div>
      <div>
        <TimelineListView />
      </div>
    </div>
  );
}
