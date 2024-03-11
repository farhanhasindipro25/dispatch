import React from "react";
import ComingSoonSkeleton from "../components/ComingSoonSkeleton";

export default function DashboardAccomplishmentManagementPage() {
  return (
    <div className="flex flex-col space-y-8 py-6 min-h-screen">
      <h2 className="text-neutral-400 font-medium text-center italic">
        Accomplishment Management Coming Soon
      </h2>
      <ComingSoonSkeleton />
    </div>
  );
}
