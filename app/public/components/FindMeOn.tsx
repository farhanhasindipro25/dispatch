import Link from "next/link";

export default function FindMeOn() {
  return (
    <div className="pt-12">
      <div className="flex justify-around items-center">
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
        </div>
        <div className="flex flex-col gap-4 text-white">
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
        </div>
        <div className="flex flex-col gap-4 text-white">
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
    </div>
  );
}
