"use client";

import React, { useEffect, useState } from "react";
import TimelineListView from "@/app/dashboard/timeline/components/months/TimelineListView";
import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import Button from "@/app/components/ui/Button";
import ActivityForm from "@/app/dashboard/timeline/components/months/ActivityForm";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import AutoSizeTextAreaField from "../components/ui/AutoSizeTextAreaField";
import TextInputField from "../components/ui/TextInputField";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function DashboardTimelineManagementPage() {
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  const [bioDrawerPen, setBioDrawerPen] = useState(false);
  const [actionLoading, setActionLoading] = useState<boolean | null>(null);
  const [name, setName] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const user = useQuery(api.users.getMyUser);
  const updateUser = useMutation(api.users.updateMyUser);
  useEffect(() => {
    setName(user?.name);
    setDescription(user?.description);
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between">
        <h2 className="text-sm md:text-base lg:text-lg text-neutral-300 font-semibold">
          Manage your timeline
        </h2>
        <div className="flex items-center flex-wrap gap-2 md:gap-4">
          <Button
            variant="SECONDARY"
            onClick={() => setActivityDrawerOpen(true)}
          >
            Add Activity
          </Button>
          <Link href={`/public/${user?._id}`} target="_blank">
            <Button variant="ACCENT">Preview Public Page</Button>
          </Link>
        </div>
      </div>

      <div>
        <RightSideDrawer
          open={activityDrawerOpen}
          setOpen={setActivityDrawerOpen}
        >
          <ActivityForm onSubmit={() => setActivityDrawerOpen(false)} />
        </RightSideDrawer>
        <RightSideDrawer
          open={bioDrawerPen}
          setOpen={(a: boolean) => {
            setBioDrawerPen(a);
            setActionLoading(null);
          }}
        >
          <div className="space-y-4">
            <TextInputField
              name="name"
              id="name"
              label="Name"
              placeholder="e.g. _farhanHasinDipro. Make it look cool ;)"
              onInput={(e) => e.target.value && setName(e.target.value)}
              onBlur={() => {
                setActionLoading(true);
                updateUser({ name }).finally(() => {
                  setActionLoading(false);
                });
              }}
              value={name}
            />
            <AutoSizeTextAreaField
              name="bio"
              id="bio"
              label="Bio"
              minRows={3}
              placeholder="Add a short bio about yourself"
              onInput={(e) => e.target.value && setDescription(e.target.value)}
              onBlur={() => {
                setActionLoading(true);
                updateUser({ description }).finally(() => {
                  setActionLoading(false);
                });
              }}
              value={description}
            />
            <div className="flex justify-center items-center space-x-2 text-white">
              {actionLoading !== null ? (
                actionLoading ? (
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-neutral-500 text-neutral-800 rounded-full animate-pulse">
                      {" "}
                    </div>
                    <p className="font-medium text-neutral-500">Updating</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <p className="font-medium text-green-500">Updated</p>
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </RightSideDrawer>
      </div>
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
              <div className="flex items-center justify-between">
                <h3 className="text-neutral-300 text-xl font-bold text-center md:text-left">
                  {name}
                </h3>
                <PencilSquareIcon
                  className="w-5 h-5 cursor-pointer text-neutral-300"
                  onClick={() => setBioDrawerPen(true)}
                />
              </div>
              <p className="text-neutral-400 text-sm font-normal overflow-hidden break-words">
                {description ||
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
      <TimelineListView isPublic={false} />
    </div>
  );
}
