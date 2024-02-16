import { Bars2Icon } from "@heroicons/react/24/outline";
import React from "react";

export default function PublicNavbar() {
  return (
    <div className="max-w-3xl mx-auto py-10 flex items-center justify-between">
      <h2 className="text-white font-bold text-base">DISPATCH</h2>
      <div>
        <Bars2Icon className="w-7 h-7 text-white cursor-pointer" />
      </div>
    </div>
  );
}
