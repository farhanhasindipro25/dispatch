import React from "react";
import IntroAndBio from "./components/IntroAndBio";
import FindMeOn from "./components/FindMeOn";
import ByteSizeVictories from "./components/ByteSizeVictories";
import Skills from "./components/Skills";

export default function PublicPage() {
  return (
    <div className="space-y-12 divide-y divide-neutral-800">
      <IntroAndBio />
      <ByteSizeVictories />
      <Skills />
      <FindMeOn />
    </div>
  );
}
