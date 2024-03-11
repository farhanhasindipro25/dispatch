import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ComingSoonSkeleton() {
  return (
    <div className="flex w-full min-h-screen gap-4 animate-pulse">
      <div className="w-1/2 flex items-center h-full gap-4">
        
      </div>
      <div className="w-1/2 flex items-center gap-4 relative">
        <EyeIcon className="text-neutral-800 w-8 h-8 absolute right-72" />
        <div className="w-full h-full rounded-lg bg-neutral-900" />
      </div>
    </div>
  );
}
