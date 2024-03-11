import React from "react";
import ComingSoonSkeleton from "./components/ComingSoonSkeleton";

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-8 py-6 min-h-screen">
      <h2 className="text-neutral-400 font-normal text-center italic">
        Dashboard will release in <span className="font-bold">version 0.2</span>
      </h2>
      <ComingSoonSkeleton />
    </div>
  );
}
