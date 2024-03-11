"use client";
import React, { useState } from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import AuthedNavbar from "../components/ui/AuthedNavbar";
import { HorizontalTabProps } from "../interfaces/components/HorizontalTabProps";
import { dashboardTabs } from "../common/staticData/dashboardTabs";
import HorizontalTabNavigation from "../components/ui/HorizontalTabNavigation";

export default function DashboardLayout({ children }: PageLayoutProps) {
  const tabs: HorizontalTabProps[] = dashboardTabs;
  const [currentTab] = useState(1);
  return (
    <div className="space-y-4 bg-neutral-950">
      <AuthedNavbar />
      <div className="max-w-9xl px-4">
        <HorizontalTabNavigation tabs={tabs} current={currentTab} />
        <div className="min-h-screen max-w-7xl mx-auto px-4">{children}</div>
      </div>
    </div>
  );
}
