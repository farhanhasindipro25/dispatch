import React from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import PublicNavbar from "../public/components/ui/PublicNavbar";

import IntroWithTabs from "./components/IntroWithTabs";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <IntroWithTabs />
      <div className="min-h-screen mt-6 max-w-2xl mx-auto px-4">{children}</div>
    </div>
  );
}
