import { Bars2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function PublicNavbar() {
  return (
    <div className="max-w-2xl mx-auto py-6 flex items-center justify-between sticky top-0 bg-neutral-950 border-b border-neutral-900">
      <div className="">
        <Image
          src="/images/user_logo.png"
          width={100}
          height={100}
          alt="user_logo"
          className="object-cover w-auto h-auto"
        />
        <h2 className="text-neutral-400 font-semibold text-xs">
          <span className="font-normal">Powered by </span>DISPATCH
        </h2>
      </div>
      <div>
        <Bars2Icon className="w-7 h-7 text-white cursor-pointer" />
      </div>
    </div>
  );
}
