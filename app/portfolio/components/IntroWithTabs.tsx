"use client";
import { publicPageTabs } from "@/app/common/staticData/publicPageTabs";
import HorizontalTabNavigation from "@/app/components/ui/HorizontalTabNavigation";
import { HorizontalTabProps } from "@/app/interfaces/components/HorizontalTabProps";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

import React, { useState } from "react";

export default function IntroWithTabs() {
  const tabs: HorizontalTabProps[] = publicPageTabs;
  const [currentTab] = useState(1);
  const user = useQuery(api.users.getMyUser);

  console.log(user);
  return (
    <div className="space-y-12 bg-neutral-950 sticky md:top-0 pt-6">
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/6">
            <div>
              <Image
                src={user?.avatar || ""}
                width={1000}
                height={1000}
                alt="user"
                className="w-1/5 md:w-full object-cover aspect-square rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-5/6">
            <div className="space-y-2 w-full">
              <h3 className="text-neutral-300 text-xl font-bold">
                _farhanHasinDipro
              </h3>
              <p className="text-neutral-400 text-sm font-normal overflow-hidden break-words">
                A Software Engineer in Bangladesh currently working @ Read
                Global Consultants. I need to watch movies at Star Cineplex at
                least twice a month to get my systems to compile, so that I can
                build stunning user experiences with upbringing passion in the
                pursuit of solving problems.
              </p>
            </div>
          </div>
        </div>
        <div>
          <HorizontalTabNavigation tabs={tabs} current={currentTab} />
        </div>
      </div>
    </div>
  );
}
