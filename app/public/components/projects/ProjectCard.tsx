import Badge from "@/app/components/ui/Badge";
import { ProjectCardProps } from "@/app/interfaces/pages/publicPage/ProjectCardProps";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";

import React from "react";

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, live_link, associated_with, role, tech_stack } = project;
  return (
    <div className="w-full p-4 rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-4 divide-y divide-neutral-800 hover:divide-neutral-900 border border-neutral-800">
      <div>
        <h2 className="text-neutral-300 hover:text-white hover:underline cursor-pointer font-semibold">
          {name}
        </h2>
        <h2 className="text-neutral-400 font-medium">{role}</h2>
        <p className="text-sm text-neutral-500">
          Associated with {associated_with}
        </p>
      </div>
      <div className="space-y-2 flex justify-between pt-4">
        <a href={live_link} target="_blank" className="flex gap-2 items-center">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400" />
          <p className="text-neutral-400 text-sm font-semibold hover:underline">
            Live Site
          </p>
        </a>
        <a href={live_link} target="_blank" className="flex gap-2 items-center">
          <CodeBracketIcon className="w-5 h-5 text-neutral-400" />
          <p className="text-neutral-400 text-sm font-semibold hover:underline">
            Client Code
          </p>
        </a>
        <a href={live_link} target="_blank" className="flex gap-2 items-center">
          <CodeBracketIcon className="w-5 h-5 text-neutral-400" />
          <p className="text-neutral-400 text-sm font-semibold hover:underline">
            Server Code
          </p>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {tech_stack.map((tech) => (
          <Badge variant="INFO_ALT">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
