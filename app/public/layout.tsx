import React from "react";
import PublicNavbar from "./components/ui/PublicNavbar";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import FindMeOn from "./components/findMeOn/FindMeOn";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <div className="max-w-2xl min-h-screen mx-auto py-14">{children}</div>
      <FindMeOn />
    </div>
  );
}
