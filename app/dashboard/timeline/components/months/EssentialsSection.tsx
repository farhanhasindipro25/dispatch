import StatsBadge from "@/app/components/ui/StatsBadge";
import React from "react";

export default function EssentialsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-neutral-300 font-medium">Essentials</h2>
      <div className="flex gap-4">
        <StatsBadge label="experience" value="Not Set" activeColor="green" />
        <StatsBadge label="openForWork" value="Not Set" activeColor="green" />
        <StatsBadge label="worked@" value="Not Set" activeColor="red" />
        <StatsBadge label="location" value="Not Set" activeColor="green" />
      </div>
    </div>
  );
}
