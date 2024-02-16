import { works } from "@/app/common/staticData/works";
import React from "react";
import WorkCard from "./WorkCard";

export default function WorkHistory() {
  return (
    <div className="pt-12 space-y-6">
      <h2 className="text-base text-white font-semibold">_workHistory</h2>
      <div className="space-y-6">
        {works.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </div>
    </div>
  );
}
