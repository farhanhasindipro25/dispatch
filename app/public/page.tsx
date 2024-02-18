"use client";
import StatBadges from "./components/StatBadges";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function PublicPage() {
  const logs = useQuery(api.logs.list);

  return (
    <div className="space-y-6">
      <StatBadges />
      <div>
        <h2 className="text-white">{logs?.map((log) => (
          <div key={log._id}>
            <div>
              {log.title}
            </div>
            <div>
              {log.body}
            </div>
          </div>
        ))}</h2>
      </div>
    </div>
  );
}
