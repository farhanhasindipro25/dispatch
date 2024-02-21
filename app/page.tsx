import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <div className="flex items-center justify-center min-h-screen max-w-2xl mx-auto px-4 flex-col">
        <h2 className="text-neutral-400 text-center font-medium text-lg">
          <span className="italic font-semibold">DISPATCH</span> is an
          innovative project being done for a hackathon. It's{" "}
          <span className="italic font-semibold">GAMECHANGING</span> version
          will be coming to life soon. Meanwhile, take a look at my{" "}
          <Link
            href="/public"
            className="text-neutral-300 hover:text-white hover:underline"
          >
            Portfolio.{" "}
          </Link>
          (It won't make sense now, but I really needed a new portfolio! 😔)
        </h2>
      </div>
    </div>
  );
}
