import Image from "next/image";
import React from "react";

export default function IntroAndBio() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <Image
          src="/user.jpg"
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
      <div className="flex justify-between flex-wrap">
        <div className="bg-neutral-900 w-fit flex items-start gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div>🟢</div>
          <div>
            <p className="text-neutral-400 text-xs font-normal">experience</p>
            <h1 className="text-neutral-300 text-sm font-medium">02 years</h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-start gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div>🔴</div>
          <div>
            <p className="text-neutral-400 text-xs font-normal">openForWork</p>
            <h1 className="text-neutral-300 text-sm font-medium">
              Falsy McFalseface
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-start gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
          <div>🟢</div>
          <div>
            <p className="text-neutral-400 text-xs font-normal">working@</p>
            <h1 className="text-neutral-300 text-sm font-medium">
              Read Global Consultants
            </h1>
          </div>
        </div>
        <div className="bg-neutral-900 w-fit flex items-start gap-2 px-3 py-2 rounded-md hover:bg-neutral-800">
          <div>🟢</div>
          <div>
            <p className="text-neutral-400 text-xs font-normal">location</p>
            <h1 className="text-white text-sm font-medium">Bangladesh</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
