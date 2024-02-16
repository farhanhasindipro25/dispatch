import { Bars2Icon } from "@heroicons/react/24/outline";
import React from "react";

export default function PublicNavbar() {
  return (
    <div className="max-w-2xl mx-auto py-6 flex items-center justify-between sticky top-0 bg-neutral-950 border-b border-neutral-900">
      <h2 className="text-white font-bold text-base">DISPATCH</h2>
      <div>
        <Bars2Icon className="w-7 h-7 text-white cursor-pointer" />
      </div>
    </div>
  );
}
