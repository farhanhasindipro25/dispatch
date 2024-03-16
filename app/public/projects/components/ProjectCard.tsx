import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { ProjectCardProps } from "@/app/interfaces/pages/publicPage/ProjectCardProps";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
    category,
    cover,
    associated_with,
    role,
    tech_stack,
  } = project;
  return (
    <div className="w-full p-4 rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-4 divide-y divide-neutral-800 hover:divide-neutral-900 border border-neutral-800">
      <div className="flex w-full sm:items-start justify-between flex-col gap-4 sm:gap-0 sm:flex-row">
        <div className="space-y-2">
          <Image
            src={cover}
            alt="project-cover"
            width={1000}
            height={1000}
            priority
            className="object-cover aspect-auto rounded-lg"
          />
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-neutral-300 font-semibold text-sm md:text-base">
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
              <div className="flex items-center gap-2">
                {featured === true ? (
                  <Badge variant="INFO_SKY">FEATURED</Badge>
                ) : null}
                <Badge variant="INFO_GREEN">{category}</Badge>
              </div>
            </div>
            <Link href={`/portfolio/projects/${slug}`}>
              <Button variant="TERTIARY">
                View Details
                <ChevronRightIcon className="w-4 h-4 text-neutral-300 hover:translate-x-1 duration-300 ease-in-out" />
              </Button>
            </Link>
          </div>
        </div>
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
