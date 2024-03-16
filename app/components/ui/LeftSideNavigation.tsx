"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/app/common/helpers/UtilsKit";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const DEFAULT_NAV_STYLES = "flex w-full items-center gap-3 p-4 cursor-pointer";
const DEFAULT_NAV_BACKGROUND_STYLES = "hover:bg-black";
const ACTIVE_NAV_BACKGROUND_STYLES = "bg-neutral-900";
const DEFAULT_ICON_STYLES = "h-5 w-5";
const DEFAULT_NAV_ICON_STYLES = "text-neutral-500 font-normal";
const ACTIVE_NAV_ICON_STYLES = "text-neutral-300 font-medium";
const DEFAULT_TEXT_STYLES = "text-sm truncate";
const DEFAULT_NAV_TEXT_STYLES = "text-neutral-500 font-medium";
const ACTIVE_NAV_TEXT_STYLES = "text-neutral-300 font-semibold";

const tabs = [
  {
    name: "Dashboard",
    icon: Squares2X2Icon,
    href: "/dashboard",
    current: true,
  },
  {
    name: "Timeline",
    icon: PresentationChartLineIcon,
    href: "/timeline",
    current: false,
  },
  {
    name: "Accomplishments",
    icon: CheckBadgeIcon,
    href: "/accomplishments",
    current: false,
  },
  { name: "Work", icon: BriefcaseIcon, href: "/work", current: false },
  {
    name: "Projects",
    icon: RectangleStackIcon,
    href: "/projects",
    current: false,
  },
  { name: "Blogs", icon: DocumentTextIcon, href: "/blogs", current: false },
  {
    name: "Education",
    icon: AcademicCapIcon,
    href: "/education",
    current: false,
  },
  {
    name: "On The Web",
    icon: GlobeAltIcon,
    href: "/on-the-web",
    current: false,
  },
];

export default function LeftSideNavigation() {
  const pathname = usePathname();
  return (
    <div className="pb-auto min-h-screen w-1/6 border-r border-neutral-800 bg-neutral-950">
      <nav>
        {tabs?.map((option: any, index: number) => (
          <Link
            href={option.href}
            key={index + 1}
            className={cn(
              pathname === option.href
                ? ACTIVE_NAV_BACKGROUND_STYLES
                : DEFAULT_NAV_BACKGROUND_STYLES,
              DEFAULT_NAV_STYLES
            )}
          >
            <option.icon
              className={cn(
                pathname === option.href
                  ? ACTIVE_NAV_ICON_STYLES
                  : DEFAULT_NAV_ICON_STYLES,
                DEFAULT_ICON_STYLES
              )}
            />
            <h2
              className={cn(
                pathname === option.href
                  ? ACTIVE_NAV_TEXT_STYLES
                  : DEFAULT_NAV_TEXT_STYLES,
                DEFAULT_TEXT_STYLES
              )}
            >
              {option.name}
            </h2>
          </Link>
        ))}
      </nav>
    </div>
  );
}
