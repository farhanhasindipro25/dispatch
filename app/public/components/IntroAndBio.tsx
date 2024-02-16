import Image from "next/image";
import React from "react";

export default function IntroAndBio() {
  return (
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
          <h6 className="text-white text-base font-normal">
            Hello there! I am
          </h6>
          <h3 className="text-white text-xl font-bold">FARHAN HASIN DIPRO</h3>
        </div>
        <h3 className="text-neutral-300 text-left text-base font-normal">
          A Software Engineer in Bangladesh previously working @ REPLIQ Limited.
          I need to watch movies at Star Cineplex at least twice a month to get
          my systems to compile, so that I can build stunning user experiences
          with upbringing passion in the pursuit of solving problems.
        </h3>
      </div>
    </div>
  );
}
