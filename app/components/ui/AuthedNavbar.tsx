import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthedNavbar() {
  return (
    <div className="bg-neutral-950">
      <div className="p-4 max-w-9xl mx-auto flex justify-between items-center gap-4">
        <Link className="flex items-center gap-2" href="/dashboard">
          <Image
            src="/logo/alt logo.svg"
            width={2160}
            height={1080}
            alt="Dispatch Logo"
            className="cursor-pointer h-5 w-5"
          />
          <h2 className="font-semibold italic text-sm text-gray-300">
            DISPATCH
          </h2>
        </Link>
        <Image
          src="/images/user.jpg"
          width={2160}
          height={1080}
          alt="Dispatch Logo"
          className="cursor-pointer aspect-auto object-cover rounded-full h-10 w-10"
        />
      </div>
    </div>
  );
}
