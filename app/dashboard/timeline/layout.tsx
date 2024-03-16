import { PageLayoutProps } from "@/app/interfaces/layouts/PageLayoutProps";
import React from "react";

export default function TimelineLayout({ children }: PageLayoutProps) {
  return <div className="max-w-7xl">{children}</div>;
}
