"use client";
import { months } from "@/app/common/staticData/months";
import { MonthProps } from "@/app/interfaces/components/HorizontalTabProps";
import React, { useState } from "react";
import TimelineListView from "./components/months/TimelineListView";
import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import Button from "@/app/components/ui/Button";
import EssentialsForm from "./components/months/EssentialsForm";
import ActivityForm from "./components/months/ActivityForm";

export default function DashboardTimelineManagementPage() {
  // const tabs: MonthProps[] = months;
  // const [currentTab, setCurrentTab] = useState(tabs[0].key);

  // function SelectedComponent(props?: any) {
  //   const Component = tabs.find((tab) => tab.key === currentTab)!.component;
  //   return Component ? <Component {...props} /> : null;
  // }
  const [essentialsDrawerOpen, setEssentialsDrawerOpen] = useState(false);
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-neutral-300 font-semibold">
          Manage your timeline
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant="ACCENT"
            onClick={() => setEssentialsDrawerOpen(true)}
          >
            Add Essentials
          </Button>
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
          <ActivityForm />
        </RightSideDrawer>
      </div>
      <div>
        <TimelineListView />
      </div>
    </div>
  );
}
