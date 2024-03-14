import React from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import PublicNavbar from "../public/components/ui/PublicNavbar";
import IntroAndBio from "../public/components/IntroAndBio/IntroAndBio";
import Footer from "../public/components/ui/Footer";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <IntroAndBio />
      <div className="min-h-screen max-w-2xl mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
}
