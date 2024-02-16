import React from "react";
import PublicNavbar from "./components/PublicNavbar";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <div className="max-w-3xl mx-auto py-14">{children}</div>
    </div>
  );
}
