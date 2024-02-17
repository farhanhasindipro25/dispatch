import Link from "next/link";

export default function FindMeOn() {
  return (
    <div className="max-w-2xl border-t border-neutral-800 mx-auto px-4 ">
      <div className="p-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 text-white">
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Github
            </Link>
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Linkedin
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Resume
            </Link>
            <Link
              href="/"
              className="font-medium text-neutral-400 hover:underline hover:text-white text-sm"
            >
              Behance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}