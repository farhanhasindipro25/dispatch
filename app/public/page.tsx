import React from "react";
import IntroAndBio from "./components/IntroAndBio/IntroAndBio";
import FindMeOn from "./components/findMeOn/FindMeOn";
import ByteSizeVictories from "./components/victories/ByteSizeVictories";
import Skills from "./components/skills/Skills";
import WorkHistory from "./components/workHistory/WorkHistory";
import Projects from "./components/projects/Projects";

export default function PublicPage() {
  return (
    <div className="space-y-12 divide-y divide-neutral-800">
      <IntroAndBio />
      <ByteSizeVictories />
      <Skills />
      <WorkHistory />
      <Projects />
      <FindMeOn />
    </div>
  );
}
