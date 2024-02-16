import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div className="flex justify-around items-center pt-12">
      <div>
        <XMarkIcon className="w-7 h-7 text-white" />
      </div>
      <div className="flex flex-col gap-4 text-white">
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Github
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Linkedin
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Portfolio
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Resume
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Behance
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Dribble
        </Link>
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Facebook
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <Link
          href="/"
          className="font-medium text-neutral-400 hover:underline hover:text-white"
        >
          Dhaka, Bangladesh
        </Link>
        <Link
          href="/"
          className="font-normal text-neutral-400 hover:underline hover:text-white"
        >
          farhan.hasin.25@gmail.com
        </Link>
        <Link
          href="/"
          className="font-normal text-neutral-400 hover:underline hover:text-white"
        >
          +8801731441024
        </Link>
      </div>
    </div>
  );
}
