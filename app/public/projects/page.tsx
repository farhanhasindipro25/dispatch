import { projects } from "@/app/common/staticData/projects";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-base text-white font-semibold">_projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
