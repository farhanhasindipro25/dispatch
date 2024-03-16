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

  console.log(user);
  return (
    <div className="space-y-12 bg-neutral-950 md:top-[100px] pt-6">
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/6">
            {user?.avatar ? (
              <div>
                <Image
                  src={user?.avatar || ""}
                  width={1000}
                  height={1000}
                  alt="user"
                  className="w-1/5 md:w-full object-cover aspect-square rounded-xl"
                />
              </div>
            ) : (
              <Image
                src="/images/no-image.jpg"
                width={1000}
                height={1000}
                alt="user"
                className="w-1/5 md:w-full object-cover animate-pulse aspect-square rounded-xl"
              />
            )}
          </div>
          <div className="w-full md:w-5/6">
            {user ? (
              <div className="space-y-2 w-full">
                <h3 className="text-neutral-300 text-xl font-bold">
                  {user?.name}
                </h3>
                <p className="text-neutral-400 text-sm font-normal overflow-hidden break-words">
                  {user?.description ||
                    "Click on the edit icon to set your name and bio. Make your name look cooler, like a private variable. e.g. _farhanHasinDipro"}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="h-5 bg-neutral-900 w-1/6 rounded-full" />
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-900 w-full rounded-full" />
                  <div className="h-3 bg-neutral-900 w-full rounded-full" />
                  <div className="h-3 bg-neutral-900 w-full rounded-full" />
                  <div className="h-3 bg-neutral-900 w-full rounded-full" />
                  <div className="h-3 bg-neutral-900 w-full rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div>
          <HorizontalTabNavigation tabs={tabs} current={currentTab} />
        </div> */}
      </div>
    </div>
  );
}
