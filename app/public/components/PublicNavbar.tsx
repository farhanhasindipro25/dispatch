import { Bars2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function PublicNavbar() {
  return (
    <div className="max-w-2xl mx-auto py-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/logo/alt logo.svg"
          width={500}
          height={500}
          alt="logo"
          className="w-7 h-7"
        />
        <h2 className="text-white font-bold text-base">DISPATCH</h2>
      </div>
      <div>
        <Bars2Icon className="w-7 h-7 text-white cursor-pointer" />
      </div>
    </div>
  );
}
