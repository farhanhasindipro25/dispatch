import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/common/staticData/projects";

export default function Projects() {
  return (
    <div className="pt-12 space-y-6">
      <h2 className="text-base text-white font-semibold">_featuredProjects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
