"use client";

import React, { useState } from "react";
import TimelineListView from "@/app/dashboard/timeline/components/months/TimelineListView";
import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import Button from "@/app/components/ui/Button";
import EssentialsForm from "@/app/dashboard/timeline/components/months/EssentialsForm";
import ActivityForm from "@/app/dashboard/timeline/components/months/ActivityForm";
import { useUser } from "@clerk/nextjs";


export default function DashboardTimelineManagementPage() {
  const [essentialsDrawerOpen, setEssentialsDrawerOpen] = useState(false);
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  const { user } = useUser();
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-neutral-300 font-semibold">
          Manage your timeline
        </h2>
        <div className="flex items-center gap-4">
          {/* <Button
            variant="ACCENT"
            onClick={() => setEssentialsDrawerOpen(true)}
          >
            Add Essentials
          </Button> */}
          <Button
            variant="SECONDARY"
            onClick={() => setActivityDrawerOpen(true)}
          >
            Add Activity
          </Button>
        </div>
        <RightSideDrawer
          open={essentialsDrawerOpen}
          setOpen={setEssentialsDrawerOpen}
        >
          <EssentialsForm />
        </RightSideDrawer>
        <RightSideDrawer
          open={activityDrawerOpen}
          setOpen={setActivityDrawerOpen}
        >
          <ActivityForm onSubmit={() => setActivityDrawerOpen(false)}/>
        </RightSideDrawer>
      </div>
      <div>
        <TimelineListView isPublic={false}/>
      </div>
    </div>
  );
}
