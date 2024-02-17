import HorizontalTabNavigation from "@/app/components/ui/HorizontalTabNavigation";
import Image from "next/image";

import React from "react";

export default function IntroAndBio() {
  return (
    <div className="space-y-12 bg-neutral-950 sticky top-[100px] pt-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/images/user.jpg"
            width={1000}
            height={1000}
            alt="user"
            className="w-1/2 md:w-1/4 h-full object-cover aspect-auto rounded-xl"
          />
          <div className="w-full space-y-2">
            <div>
              <h3 className="text-neutral-300 text-xl font-bold text-center md:text-left">
                _farhanHasinDipro
              </h3>
            </div>
            <h3 className="text-neutral-400 text-sm font-normal text-center md:text-left">
              A Software Engineer in Bangladesh currently working @ Read Global
              Consultants. I need to watch movies at Star Cineplex at least
              twice a month to get my systems to compile, so that I can build
              stunning user experiences with upbringing passion in the pursuit
              of solving problems.
            </h3>
          </div>
        </div>
        <div>
          <HorizontalTabNavigation />
        </div>
      </div>
    </div>
  );
}
