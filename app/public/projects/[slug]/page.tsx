"use client";
import { projects } from "@/app/common/staticData/projects";
import Badge from "@/app/components/ui/Badge";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import { ProjectCardProps } from "@/app/interfaces/pages/publicPage/ProjectCardProps";
import { ProjectDetailProps } from "@/app/interfaces/pages/publicPage/ProjectDetailProps";
import Image from "next/image";

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const data: ProjectCardProps["project"] | undefined = projects.find(
    (project) => project.slug === params.slug
  );

  return (
    <>
      {data ? (
        <div className="space-y-8">
          <Breadcrumb
            base_page="_projects"
            base_href="/public/projects"
            current_page={data.slug}
            current_href={`/public/projects/${data.slug}`}
          />
          <div className="space-y-2">
            <Image
              src={data.cover}
              alt="project-cover"
              width={1000}
              height={1000}
              priority
              className="object-cover aspect-auto rounded-lg"
            />
            <h2 className="text-neutral-300 text-base font-semibold">
              {data.name}
            </h2>
            <div className="space-y-2">
              <div>
                {data.associated_with === "none" ? (
                  <p className="text-xs md:text-sm text-neutral-300 font-medium">
                    Personal Project
                  </p>
                ) : (
                  <p className="text-xs md:text-sm text-neutral-300 font-medium">
                    Associated with {data.associated_with}
                  </p>
                )}
                {data.role ? (
                  <p className="text-xs md:text-sm text-neutral-300 font-medium">
                    Role: {data.role}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                {data.featured === true ? (
                  <Badge variant="INFO_SKY">FEATURED</Badge>
                ) : null}
                <Badge variant="INFO_GREEN">{data.category}</Badge>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-neutral-300 text-base font-medium pt-2">
              Features
            </h2>
            <p className="text-neutral-400 text-sm font-medium">
              {data.details.project_description}
            </p>
            {data.details.features.map((feature) => (
              <h2
                key={feature}
                className="ml-4 list-item text-neutral-400 text-sm font-medium"
              >
                {feature}
              </h2>
            ))}
          </div>
          <div className="space-y-1">
            <h2 className="text-neutral-300 text-base font-semibold">Links</h2>
            {data.live_link ? (
              <p className="text-neutral-400 text-sm font-semibold">
                Live Link:
                <a
                  href={data.live_link}
                  target="_blank"
                  className="font-semibold text-sky-600 hover:text-sky-500 hover:underline"
                >
                  {" "}
                  {data.live_link}
                </a>
              </p>
            ) : null}
            {data.client_code_link ? (
              <p className="text-neutral-400 text-sm font-semibold">
                Client Code Link:
                <a
                  href={data.client_code_link}
                  target="_blank"
                  className="font-semibold text-sky-600 hover:text-sky-500 hover:underline"
                >
                  {" "}
                  {data.client_code_link}
                </a>
              </p>
            ) : null}
            {data.server_code_link ? (
              <p className="text-neutral-400 text-sm font-semibold">
                Server Code Link:
                <a
                  href={data.server_code_link}
                  target="_blank"
                  className="font-semibold text-sky-600 hover:text-sky-500 hover:underline"
                >
                  {" "}
                  {data.server_code_link}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
