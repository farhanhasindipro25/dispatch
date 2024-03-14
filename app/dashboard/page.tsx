"use client";

import React, { useState } from "react";
import TimelineListView from "@/app/dashboard/timeline/components/months/TimelineListView";
import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import Button from "@/app/components/ui/Button";
import EssentialsForm from "@/app/dashboard/timeline/components/months/EssentialsForm";
import ActivityForm from "@/app/dashboard/timeline/components/months/ActivityForm";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import AutoSizeTextAreaField from "../components/ui/AutoSizeTextAreaField";

export default function DashboardTimelineManagementPage() {
  const [essentialsDrawerOpen, setEssentialsDrawerOpen] = useState(false);
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  const [bioDrawerPen, setBioDrawerPen] = useState(false);
  const user = useQuery(api.users.getMyUser);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-neutral-300 font-semibold">
          Manage your timeline
        </h2>
        <div className="flex items-center gap-4">
          {/* <Button
            variant="ACCENT"
            onClick={() => setEssentialsDrawerOpen(true)}
            >
            Add Essentials
          </Button> */}
          <Button
            variant="SECONDARY"
            onClick={() => setActivityDrawerOpen(true)}
          >
            Add Activity
          </Button>
          <Link href={`/public/${user?._id}`}>
            <Button variant="ACCENT">Preview Public Page</Button>
          </Link>
        </div>
        {/* <RightSideDrawer
          open={essentialsDrawerOpen}
          setOpen={setEssentialsDrawerOpen}
        >
          <EssentialsForm />
        </RightSideDrawer> */}
        <RightSideDrawer
          open={activityDrawerOpen}
          setOpen={setActivityDrawerOpen}
        >
          <ActivityForm onSubmit={() => setActivityDrawerOpen(false)} />
        </RightSideDrawer>
        <RightSideDrawer open={bioDrawerPen} setOpen={setBioDrawerPen}>
          <AutoSizeTextAreaField
            name="bio"
            id="bio"
            label="Bio"
            minRows={3}
            placeholder="Add a short bio about yourself"
          />
        </RightSideDrawer>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {user?.avatar ? (
            <Image
              src={user?.avatar || ""}
              width={1000}
              height={1000}
              alt="user"
              className="w-1/2 md:w-1/6 h-1/2 md:h-1/4 object-cover aspect-auto rounded-xl"
            />
          ) : (
            <Image
              src="/images/no-image.jpg"
              width={1000}
              height={1000}
              alt="user"
              className="w-1/2 animate-pulse md:w-1/6 h-1/2 md:h-1/4 object-cover aspect-auto rounded-xl"
            />
          )}
          <div className="w-full space-y-2">
            <div>
              <h3 className="text-neutral-300 text-xl font-bold text-center md:text-left">
                _farhanHasinDipro
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-neutral-400 text-sm font-normal text-center md:text-left">
                Add a short bio about yourself
              </h3>
              <PencilSquareIcon
                className="w-4 h-4 cursor-pointer text-neutral-300"
                onClick={() => setBioDrawerPen(true)}
              />
            </div>
          </div>
        </div>
        <TimelineListView isPublic={false} />
      </div>
    </div>
  );
}
