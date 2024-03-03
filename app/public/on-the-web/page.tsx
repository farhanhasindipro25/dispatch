import { onTheWeb } from "../../common/staticData/onTheWeb";
import React from "react";
import OnTheWebCard from "./components/OnTheWebCard";
import StatsBadge from "@/app/components/ui/StatsBadge";

export default function OnTheWebPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-base text-neutral-300 font-semibold">_onTheWeb</h2>
      <div className="flex flex-wrap justify-start gap-4">
        <StatsBadge
          label="email"
          value="farhan.hasin.25@gmail.com"
          activeColor="green"
        />
        <StatsBadge label="phone" value="+8801731441024" activeColor="green" />
        <StatsBadge
          label="whatsapp"
          value="+8801627152820"
          activeColor="green"
        />
      </div>
      <div className="space-y-6">
        {onTheWeb.map((social) => (
          <OnTheWebCard key={social.linkedin} social={social} />
        ))}
      </div>
    </div>
  );
}
