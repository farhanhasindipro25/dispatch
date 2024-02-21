import { onTheWeb } from "../../common/staticData/onTheWeb";
import React from "react";
import OnTheWebCard from "./components/OnTheWebCard";

export default function OnTheWebPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-base text-neutral-300 font-semibold">_onTheWeb</h2>

      <div className="space-y-6">
        {onTheWeb.map((social) => (
          <OnTheWebCard key={social.linkedin} social={social} />
        ))}
      </div>
    </div>
  );
}
