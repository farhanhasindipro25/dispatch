import { skills } from "@/app/common/staticData/skills";
import React from "react";

export default function Skills() {
  return (
    <div className="pt-12 space-y-6">
      <h2 className="text-base text-white font-semibold">_skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-neutral-900 w-fit flex items-start gap-2 px-3 py-2 rounded-md"
          >
            <p className="text-neutral-400 text-xs font-normal">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
