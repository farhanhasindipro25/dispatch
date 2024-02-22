import React from "react";
import { OnTheWebCardProps } from "../../../interfaces/pages/publicPage/OnTheWebCardProps";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function OnTheWebCard({ social }: OnTheWebCardProps) {
  const {
    resume,
    linkedin,
    github,
    facebook,
    twitter,
    hashnode,
    medium,
    personal_portfolio,
    behance,
    dribble,
    hackerRank,
    leetCode,
    codePen,
  } = social;
  return (
    <div className="p-4 w-full rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-4 divide-y divide-neutral-700">
      <div className="flex items-start justify-between">
        <div className="truncate">
          <h2 className="text-neutral-300 text-sm font-medium">Resume</h2>
          <a
            target="_blank"
            href={resume}
            className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
          >
            {resume}
          </a>
        </div>
        <a target="_blank" href={resume}>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
        </a>
      </div>
      <div className="flex items-start justify-between pt-4">
        <div className="truncate">
          <h2 className="text-neutral-300 text-sm font-medium">Linkedin</h2>
          <a
            target="_blank"
            href={linkedin}
            className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
          >
            {linkedin}
          </a>
        </div>
        <a target="_blank" href={linkedin}>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
        </a>
      </div>
      <div className="flex items-start justify-between pt-4">
        <div className="truncate">
          <h2 className="text-neutral-300 text-sm font-medium">Github</h2>
          <a
            target="_blank"
            href={github}
            className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
          >
            {github}
          </a>
        </div>
        <a target="_blank" href={github}>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
        </a>
      </div>
      {facebook && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Facebook</h2>
            <a
              target="_blank"
              href={facebook}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {facebook}
            </a>
          </div>
          <a target="_blank" href={facebook}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {twitter && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Twitter</h2>
            <a
              target="_blank"
              href={twitter}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {twitter}
            </a>
          </div>
          <a target="_blank" href={twitter}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {hashnode && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Hashnode</h2>
            <a
              target="_blank"
              href={hashnode}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {hashnode}
            </a>
          </div>
          <a target="_blank" href={hashnode}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {medium && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Medium</h2>
            <a
              target="_blank"
              href={medium}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {medium}
            </a>
          </div>
          <a target="_blank" href={medium}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {personal_portfolio && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">
              Personal portfolio
            </h2>
            <a
              target="_blank"
              href={personal_portfolio}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {personal_portfolio}
            </a>
          </div>
          <a target="_blank" href={personal_portfolio}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {behance && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Behance</h2>
            <a
              target="_blank"
              href={behance}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {behance}
            </a>
          </div>
          <a target="_blank" href={behance}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {dribble && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Dribble</h2>
            <a
              target="_blank"
              href={dribble}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {dribble}
            </a>
          </div>
          <a target="_blank" href={dribble}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {hackerRank && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">HackerRank</h2>
            <a
              target="_blank"
              href={hackerRank}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {hackerRank}
            </a>
          </div>
          <a target="_blank" href={hackerRank}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {leetCode && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">LeetCode</h2>
            <a
              target="_blank"
              href={leetCode}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {leetCode}
            </a>
          </div>
          <a target="_blank" href={leetCode}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
      {codePen && (
        <div className="flex items-start justify-between pt-4">
          <div className="truncate">
            <h2 className="text-neutral-300 text-sm font-medium">Codepen</h2>
            <a
              target="_blank"
              href={codePen}
              className="text-sky-600 text-sm font-semibold hover:text-sky-500 hover:underline cursor-pointer"
            >
              {codePen}
            </a>
          </div>
          <a target="_blank" href={codePen}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300 cursor-pointer" />
          </a>
        </div>
      )}
    </div>
  );
}
