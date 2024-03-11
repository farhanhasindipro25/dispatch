import React from "react";
import PublicNavbar from "./components/ui/PublicNavbar";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import IntroAndBio from "./components/IntroAndBio/IntroAndBio";
import Footer from "./components/ui/Footer";

export default function PublicPageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <PublicNavbar />
      <IntroAndBio />
      <div className="min-h-screen mt-6 max-w-2xl mx-auto px-4">{children}</div>
      <Footer />
    </div>
  );
}
