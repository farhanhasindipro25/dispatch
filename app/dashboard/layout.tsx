import React from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import LeftSideNavigation from "../components/ui/LeftSideNavigation";
import AuthedNavbar from "../components/ui/AuthedNavbar";

export default function DashboardLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <AuthedNavbar />
      <div className="flex">
        <LeftSideNavigation />
        <div className="bg-neutral-950 w-full min-h-screen">{children}</div>
      </div>
    </div>
  );
}
