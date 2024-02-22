import { projects } from "@/app/common/staticData/projects";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base text-neutral-300 font-semibold">_projects</h2>
        <h2 className="text-sm md:text-base text-neutral-400 font-medium">
          _projects.length = 5
        </h2>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
