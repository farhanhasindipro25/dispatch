import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { ProjectCardProps } from "@/app/interfaces/pages/publicPage/ProjectCardProps";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

import React from "react";

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    slug,
    name,
    live_link,
    featured,
    learning,
    client_code_link,
    server_code_link,
    doc_link,
    associated_with,
    role,
    tech_stack,
  } = project;
  console.log(associated_with);
  return (
    <div className="w-full p-4 rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-4 divide-y divide-neutral-800 hover:divide-neutral-900 border border-neutral-800">
      <div className="flex w-full sm:items-start justify-between flex-col gap-4 sm:gap-0 sm:flex-row">
        <div className="space-y-2">
          <Badge variant={featured === true ? "INFO_GREEN" : "INFO_SKY"}>
            {featured === true ? "FEATURED" : "LEARNING"}
          </Badge>
          <h2 className="text-neutral-300 hover:text-white hover:underline cursor-pointer font-semibold text-sm md:text-base">
            {name}
          </h2>
          <h2 className="text-neutral-400 font-medium text-sm md:text-base">
            {role}
          </h2>
          {associated_with === "none" ? (
            <p className="text-xs md:text-sm text-neutral-500 font-medium">
              Personal Project
            </p>
          ) : (
            <p className="text-xs md:text-sm text-neutral-500 font-medium">
              Associated with {associated_with}
            </p>
          )}
        </div>
        <Link href={`/public/projects/${slug}`}>
          <Button variant="TERTIARY">View Details</Button>
        </Link>
      </div>
      <div className="flex flex-col md:space-y-0 sm:flex-row justify-start gap-6 pt-4">
        {live_link ? (
          <a
            href={live_link}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400" />
            <p className="text-neutral-400 hover:text-white text-sm font-semibold hover:underline">
              Live Site
            </p>
          </a>
        ) : null}
        {client_code_link ? (
          <a
            href={client_code_link}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <CodeBracketIcon className="w-5 h-5 text-neutral-400" />
            <p className="text-neutral-400 hover:text-white text-sm font-semibold hover:underline">
              Client Code
            </p>
          </a>
        ) : null}
        {server_code_link ? (
          <a
            href={server_code_link}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <CodeBracketIcon className="w-5 h-5 text-neutral-400" />
            <p className="text-neutral-400 hover:text-white text-sm font-semibold hover:underline">
              Server Code
            </p>
          </a>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {tech_stack.map((tech) => (
          <Badge variant="INFO_ALT">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
