import Image from "next/image";

import React from "react";

export default function IntroAndBio() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <Image
          src="/images/user.jpg"
          width={1000}
          height={1000}
          alt="user"
          className="w-1/4 h-full object-cover aspect-auto rounded-xl"
        />
        <div className="w-full space-y-2">
          <div>
            <h3 className="text-neutral-300 text-xl font-bold">
              _farhanHasinDipro
            </h3>
          </div>
          <h3 className="text-neutral-400 text-left text-sm font-normal">
            A Software Engineer in Bangladesh currently working @ Read Global
            Consultants. I need to watch movies at Star Cineplex at least twice
            a month to get my systems to compile, so that I can build stunning
            user experiences with upbringing passion in the pursuit of solving
            problems.
          </h3>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">experience</p>
            <h1 className="text-neutral-300 text-sm font-medium">02 years</h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">openForWork</p>
            <h1 className="text-neutral-300 text-sm font-medium">
              Truthy McTruthFace
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">worked@</p>
            <h1 className="text-neutral-300 text-sm font-medium">
              REPLIQ Limited
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">email</p>
            <h1 className="text-white text-sm font-medium">
              farhan.hasin.25@gmail.com
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">phone</p>
            <h1 className="text-white text-sm font-medium">+8801731441024</h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="text-neutral-400 text-xs font-normal">location</p>
            <h1 className="text-white text-sm font-medium">Bangladesh</h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-[45%] flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="truncate">
            <p className="text-neutral-400 text-xs font-normal">github</p>
            <h1 className="text-white truncate text-sm font-medium">
              linkedin.com/in/farhan-hasin-dipro/
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-[47%] flex items-baseline gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="truncate">
            <p className="text-neutral-400 text-xs font-normal">linkedin</p>
            <h1 className="text-white truncate text-sm font-medium">
              github.com/farhanhasindipro25
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
