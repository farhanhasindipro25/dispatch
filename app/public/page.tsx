import React from "react";
import IntroAndBio from "./components/IntroAndBio";
import FindMeOn from "./components/FindMeOn";

export default function PublicPage() {
  return (
    <div className="space-y-12 divide-y divide-neutral-800">
      <IntroAndBio />
      <FindMeOn />
    </div>
  );
}
