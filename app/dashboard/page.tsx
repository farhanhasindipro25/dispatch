"use client";

import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { LogType } from "@/types";
import { useSignIn } from "@clerk/clerk-react";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import Button from "@/app/components/ui/Button";

export default function DashboardPage() {
  const createLogMutation = useMutation(api.logs.createLog);
  const tags = useQuery(api.logs.getTags);
  const [body] = useState('');
  const [title] = useState('');
  const [type] = useState<LogType>(LogType.Achievements);
  const types = Object.entries(LogType);
  const [selectedTags, setTags] = useState<number | undefined>();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return <div>
    DashboardPage
    {!isLoading &&
      (isAuthenticated ? (
        <>
        <Button variant="PRIMARY">
          <Link href="/">Create Log</Link>
        </Button>
        </>
      ) : (
        <SignInButton>
          <Button variant="SECONDARY">Sign In to Get Started</Button>
        </SignInButton>
      ))}

    {/* <form onSubmit={createLogMutation({user, body, title, type, tag_id_list: selectedTags})}>
    <p> Select Tag Type</p>
      <select>
        {tags?.map((tag) => {
          return <option value={tag.value} key={value}>{key}</option>
        })}
      </select>
      <p> Select Log Type</p>
      <select>
        {types.map(([key, value]) => {
          return <option value={value} key={value}>{key}</option>
        })}
      </select>
    </form> */}
    </div>;
}
