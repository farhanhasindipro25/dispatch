import React from "react";
import PublicNavbar from "./components/ui/PublicNavbar";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import FindMeOn from "./components/findMeOn/FindMeOn";
import IntroAndBio from "./components/IntroAndBio/IntroAndBio";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <IntroAndBio />
      <div className="min-h-screen max-w-2xl mx-auto">{children}</div>
      <FindMeOn />
    </div>
  );
}
