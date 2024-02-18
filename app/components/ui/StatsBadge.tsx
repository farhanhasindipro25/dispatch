import cn from "@/app/common/helpers/UtilsKit";
import { StatsBadgeProps } from "@/app/interfaces/components/StatsBadgeProps";
import React from "react";

export default function StatsBadge({
  label,
  value,
  activeColor,
}: StatsBadgeProps) {
  const ACTIVE_COLOR = cn(
    activeColor === "green"
      ? "bg-green-500"
      : activeColor === "red"
      ? "bg-red-500"
      : ""
  );
  return (
    <div className="bg-neutral-900 w-fit gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
      <div className="flex items-center gap-2">
        <div className={cn(`w-3 h-3 ${ACTIVE_COLOR} rounded-full`)} />
        <p className="text-neutral-400 text-xs font-normal">{label}</p>
      </div>
      <h1 className="text-neutral-300 text-xs md:text-sm pl-5 font-medium">
        {value}
      </h1>
    </div>
  );
}
