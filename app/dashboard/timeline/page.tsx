"use client";
import { months } from "@/app/common/staticData/months";
import RunningYearsCalendar from "@/app/components/ui/RunningYearsCalendar";
import { MonthProps } from "@/app/interfaces/components/HorizontalTabProps";
import React, { useState } from "react";

export default function DashboardTimelineManagementPage() {
  const tabs: MonthProps[] = months;
  const [currentTab, setCurrentTab] = useState(tabs[0].key);

  function SelectedComponent(props?: any) {
    const Component = tabs.find((tab) => tab.key === currentTab)!.component;
    return Component ? <Component {...props} /> : null;
  }
  return (
    <div className="py-6 w-full h-full">
      <RunningYearsCalendar
        tabs={tabs}
        current={currentTab}
        setTab={setCurrentTab}
      />
      <div className="my-8">{SelectedComponent()}</div>
    </div>
  );
}
