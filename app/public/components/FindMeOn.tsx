import Link from "next/link";
import React from "react";

export default function FindMeOn() {
  return (
    <div className="flex justify-around text-white pt-12">
      <Link
        href="/"
        className="font-normal text-neutral-400 hover:underline hover:text-white"
      >
        Github
      </Link>
      <Link
        href="/"
        className="font-normal text-neutral-400 hover:underline hover:text-white"
      >
        Linkedin
      </Link>
      <Link
        href="/"
        className="font-normal text-neutral-400 hover:underline hover:text-white"
      >
        Blog
      </Link>
      <Link
        href="/"
        className="font-normal text-neutral-400 hover:underline hover:text-white"
      >
        Portfolio
      </Link>
    </div>
  );
}
