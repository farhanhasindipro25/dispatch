import { byteSizeVictories } from "@/app/common/staticData/byteSizeVitories";
import React from "react";

export default function ByteSizeVictories() {
  return (
    <div className="pt-12 space-y-6">
      <h2 className="text-base text-neutral-300 font-semibold">
        byteSizeVictories
      </h2>
      <div className="pl-6">
        {byteSizeVictories?.map((item) => (
          <h2
            className="list-item text-neutral-400 font-normal"
            key={item.item}
          >
            {item.item}
          </h2>
        ))}
      </div>
    </div>
  );
}
