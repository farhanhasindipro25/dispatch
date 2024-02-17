"use client";
import Badge from "@/app/components/ui/Badge";
import { WorkCardProps } from "@/app/interfaces/pages/workHistoryPage/WorkCardProps";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function WorkCard({ work }: WorkCardProps) {
  const {
    position,
    company,
    start_date,
    end_date,
    company_description,
    roles,
    skills,
  } = work;

  const [showSkills, setShowSkills] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  return (
    <div className="w-full space-y-4 items-end justify-between gap-2 p-4 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 divide-y divide-neutral-800 hover:divide-neutral-900">
      <div className="flex flex-col">
        <h2 className="text-neutral-300 hover:text-white hover:underline cursor-pointer font-semibold">
          {company}
        </h2>
        <span className="font-normal text-neutral-400 truncate">
          {company_description}
        </span>
        <h2 className="text-neutral-400 font-medium">{position}</h2>
        <h2 className="text-neutral-500 font-normal">
          {start_date} - {end_date}
        </h2>
      </div>
      <div className="pt-4">
        {showSkills === true ? (
          <div className="flex items-center flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge variant="INFO_ALT" key={skill}>
                {skill}
              </Badge>
            ))}
            <XMarkIcon
              className="text-neutral-900 cursor-pointer bg-neutral-400 rounded-md w-7 h-7 p-1"
              onClick={() => setShowSkills(false)}
            />
          </div>
        ) : showRoles === true ? (
          <div className="flex items-center flex-wrap gap-2">
            {roles.map((role) => (
              <h2
                className="ml-4 text-neutral-400 text-sm list-item"
                key={role}
              >
                {role}
              </h2>
            ))}
            <div className="w-full flex justify-end">
              <div
                className="bg-neutral-950 text-neutral-400 px-4 flex items-center gap-1 py-2 rounded-md text-sm font-bold cursor-pointer w-fit"
                onClick={() => setShowRoles(false)}
              >
                <XMarkIcon className="w-4 h-4 text-neutral-400" />
                Hide Roles
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-2">
            <div
              className="bg-neutral-950 text-neutral-400 px-4 py-2 rounded-md text-sm font-bold cursor-pointer w-fit"
              onClick={() => setShowSkills(true)}
            >
              Show Skills
            </div>
            <div
              className="bg-neutral-950 text-neutral-400 px-4 py-2 rounded-md text-sm font-bold cursor-pointer w-fit"
              onClick={() => setShowRoles(true)}
            >
              Show Roles
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
