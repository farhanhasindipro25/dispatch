"use client";

import React, { useEffect, useState } from "react";
import TimelineListView from "@/app/dashboard/timeline/components/months/TimelineListView";
import RightSideDrawer from "@/app/components/ui/RightSideDrawer";
import Button from "@/app/components/ui/Button";
import EssentialsForm from "@/app/dashboard/timeline/components/months/EssentialsForm";
import ActivityForm from "@/app/dashboard/timeline/components/months/ActivityForm";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import AutoSizeTextAreaField from "../components/ui/AutoSizeTextAreaField";
import TextInputField from "../components/ui/TextInputField";

export default function DashboardTimelineManagementPage() {
  const [essentialsDrawerOpen, setEssentialsDrawerOpen] = useState(false);
  const [activityDrawerOpen, setActivityDrawerOpen] = useState(false);
  const [bioDrawerPen, setBioDrawerPen] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const user = useQuery(api.users.getMyUser);
  const updateUser  = useMutation(api.users.updateMyUser);
  useEffect(() => {
    setName(user?.name);
    setDescription(user?.description);
  }, [user])
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
      { user && <>
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
          <Link href={`/public/${user?._id}`} target="_blank">
            <Button variant="ACCENT">Preview Public Page</Button>
          </Link>
        </div>
        </>}
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
        <RightSideDrawer open={bioDrawerPen} setOpen={(a)=>{setBioDrawerPen(a);setActionLoading(null)} }>
          <div className="space-y-4">
            <TextInputField
              name="name"
              id="name"
              label="Name"
              placeholder="e.g. _farhanHasinDipro. Make it look cool ;)"
              onInput={(e) => e.target.value && setName(e.target.value)}
              onBlur={()=> {
                setActionLoading(true)
                updateUser({name}).finally(() => {
                  setActionLoading(false)
                })
              }}
            />
            <AutoSizeTextAreaField
              name="bio"
              id="bio"
              label="Bio"
              minRows={3}
              placeholder="Add a short bio about yourself"
              onInput={(e) => e.target.value && setDescription(e.target.value)}
              onBlur={()=> {
                setActionLoading(true)
                updateUser({description}).finally(() => {
                  setActionLoading(false)
                })
              }}
            />
            <div className="flex justify-center items-center space-x-2 text-white">
      {actionLoading !== null ? (actionLoading ? (<>
        <div className="h-3 w-3 align-bottom rounded-full bg-gray-200 animate-pulse mr-1" />
         Loading
        </>)
      : (
        <>
        <svg className="h-6 w-6 text-green-500 align-bottom mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg> Saved
        </>
      )) : <></>}
    </div>
          </div>
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
              { user ? <><h3 className="text-neutral-300 text-xl font-bold text-center md:text-left">
                { name || "Set name by clicking the edit icon" }
              </h3> <div className="flex items-center gap-2">
              <h3 className="text-neutral-400 text-sm font-normal text-center md:text-left">
                { description || "Click on edit to set name and bio"}
              </h3>
              <PencilSquareIcon
                className="w-4 h-4 cursor-pointer text-neutral-300"
                onClick={() => setBioDrawerPen(true)}
              /></div></> : (<>
              <div className="mb-2 h-5 bg-neutral-900 w-20" />
              <div className="h-5 bg-neutral-900 w-100" />
              </>)
              }
            </div>
          </div>
        </div>
        <TimelineListView isPublic={false} />
      </div>
    </div>
  );
}
