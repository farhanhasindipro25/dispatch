"use client";
import { publicPageTabs } from "@/app/common/staticData/publicPageTabs";
import HorizontalTabNavigation from "@/app/components/ui/HorizontalTabNavigation";
import { HorizontalTabProps } from "@/app/interfaces/components/HorizontalTabProps";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

import React, { useState } from "react";

export default function IntroAndBio() {
  const tabs: HorizontalTabProps[] = publicPageTabs;
  const [currentTab] = useState(1);
  const user = useQuery(api.users.getMyUser);
  return (
    <div className="space-y-12 bg-neutral-950 md:top-[100px] pt-6">
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={user?.avatar || ""}
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
        {/* <div>
          <HorizontalTabNavigation tabs={tabs} current={currentTab} />
        </div> */}
      </div>
    </div>
  );
}
