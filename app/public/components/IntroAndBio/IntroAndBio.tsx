
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
      <div className="space-y-4">
        <h2 className="text-sm text-neutral-400">FIND ME ON</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/farhan-hasin-dipro/"
            >
              <Image
                src="/icons/github.png"
                width={100}
                height={100}
                alt="Github logo"
                className="w-6 h-6 p-1 rounded-full object-cover bg-neutral-400 hover:bg-neutral-300 cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              />
            </a>
            <a target="_blank" href="https://github.com/farhanhasindipro25">
              <Image
                src="/icons/linkedin.png"
                width={100}
                height={100}
                alt="Linkedin logo"
                className="w-6 h-6 p-1 rounded-md object-cover bg-neutral-400 hover:bg-neutral-300 cursor-pointer hover:scale-110 transition-all ease-in-out duration-500"
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-neutral-400">+8801731441024,</h2>
            <h2 className="text-neutral-400">farhan.hasin.25@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
