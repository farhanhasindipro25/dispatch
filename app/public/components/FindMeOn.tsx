"use client";

import { useState } from "react";
import Socials from "./Socials";

export default function FindMeOn() {
  const [expandSocials, setExpandSocials] = useState(false);

  return (
    <div className="pt-12">
      <h2 className="text-white">FIND ME ON</h2>
      <Socials/>
    </div>
  );
}
