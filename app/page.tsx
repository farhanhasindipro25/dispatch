import Image from "next/image";
import React from "react";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="p-4 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-20 py-4">
          <Image
            src="/logo/alt logo.svg"
            width={2160}
            height={1080}
            alt="Dispatch Logo"
            className="cursor-pointer h-8 w-8"
          />
          <h3 className="text-neutral-200 italic font-semibold">
            DISPATCH<span className="text-sm text-white"> (v-MVP)</span>
          </h3>
        </div>
        <div className="min-h-screen flex-col gap-14 flex items-center justify-center">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <h2 className="text-4xl max-w-2xl text-center font-bold text-white">
              ORGANIZE YOUR LEARNINGS. DISPATCH THE TIMELINE
            </h2>
            <p className="text-base text-center font-medium text-neutral-300 max-w-4xl">
              A seamless user experience for maintaining and managing your
              software engineering journey through our unique timelines. Create
              your own now and use the public page to put a good impression on
              your recruiter.{" "}
              <span className="italic font-semibold text-neutral-500">
                DISPATCH Version 1.0 will dispatch soon - Courtesy of the
                dynamic duo
              </span>
            </p>
            <div className="flex justify-center">
              <Button variant="ALT_PRIMARY">GET STARTED</Button>
            </div>
          </div>
          <div className="space-y-4">
            <Image
              src="/images/public-page2.png"
              width={2160}
              height={1080}
              alt="Dispatch Logo"
              className="cursor-pointer w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
