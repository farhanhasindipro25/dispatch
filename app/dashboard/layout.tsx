import React from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";

export default function DashboardLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <div>{children}</div>
    </div>
  );
}
