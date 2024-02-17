import { skills } from "@/app/common/staticData/skills";
import Badge from "@/app/components/ui/Badge";
import React from "react";

export default function Skills() {
  return (
    <div className="pt-12 space-y-6">
      <h2 className="text-base text-white font-semibold">_skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge variant="INFO">{skill.name}</Badge>
        ))}
      </div>
    </div>
  );
}
