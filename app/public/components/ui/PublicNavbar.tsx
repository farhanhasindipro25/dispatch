import React from "react";

export default function PublicNavbar() {
  return (
    <div className="bg-neutral-950 sticky top-0">
      <div className="flex flex-col px-4 py-12 items-start justify-between max-w-2xl mx-auto">
        {/* <Image
          src="/images/user_logo.png"
          width={100}
          height={100}
          alt="user_logo"
          className="object-cover w-auto h-auto"
        /> */}
        <h2 className="text-neutral-400 italic font-semibold text-xs">
          <span className="font-normal">Powered by </span>DISPATCH
        </h2>
      </div>
    </div>
  );
}
