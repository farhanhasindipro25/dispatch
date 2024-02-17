import { BreadcrumbProps } from "@/app/interfaces/components/BreadcrumbProps";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({
  base_page,
  base_href,
  current_page,
  current_href,
}: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={base_href}
        className="font-normal text-neutral-500 hover:underline hover:text-white"
      >
        {base_page}
      </Link>
      <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
      <Link
        href={current_href}
        className="font-medium text-neutral-300 hover:underline hover:text-white"
      >
        {current_page}
      </Link>
    </div>
  );
}
