import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="animate-bounce flex items-center justify-center min-h-screen">
      <Image
        src="/logo/alt logo.svg"
        width={2160}
        height={1080}
        alt="Dispatch Logo"
        className="cursor-pointer h-1/12 w-1/12 animate-pulse"
      />
    </div>
  );
}
