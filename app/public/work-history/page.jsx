import React from "react";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import { works } from "@/app/common/staticData/works";
import WorkCard from "./components/WorkCard";

export default function WorkHistoryPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Breadcrumb
          base_page="_farhanHasinDipro"
          base_href="/public"
          current_page="_workHistory"
          current_href={"/public/work-history"}
        />
        <h2 className="text-base text-white font-semibold">_workHistory</h2>
      </div>
      <div className="space-y-6">
        {works.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </div>
    </div>
  );
}
