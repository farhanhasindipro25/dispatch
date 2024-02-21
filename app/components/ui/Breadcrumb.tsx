"use client";
import { BreadcrumbProps } from "@/app/interfaces/components/BreadcrumbProps";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function Breadcrumb({
  base_page,
  base_href,
  current_page,
  current_href,
}: BreadcrumbProps) {
  const router = useRouter();
  return (
    <>
      <div className="hidden sm:flex flex-col sm:flex-row items-start sm:items-center truncate gap-2">
        <Link
          href={base_href}
          className="font-medium text-neutral-500 hover:underline text-sm truncate hover:text-white"
        >
          {base_page}
        </Link>
        <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
        <Link
          href={current_href}
          className="font-medium text-neutral-300 hover:underline text-sm hover:text-white truncate"
        >
          {current_page}
        </Link>
      </div>
      <div className="block sm:hidden">
        <Button variant="TERTIARY" className="gap-1">
          <ChevronLeftIcon className="w-3 h-3 text-neutral-300" />
          Go Back
        </Button>
      </div>
    </>
  );
}
