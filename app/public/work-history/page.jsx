import React from "react";
import Breadcrumb from "@/app/components/ui/Breadcrumb";

export default function WorkHistoryPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        base_page="_farhanHasinDipro"
        base_href="/public"
        current_page="_workHistory"
        current_href={"/public/work-history"}
      />
      <h2 className="text-base text-white font-semibold">_workHistory</h2>
    </div>
  );
}
