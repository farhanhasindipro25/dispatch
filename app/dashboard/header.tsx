"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useConvexAuth, useQuery } from "convex/react";

export function Header() {
  const { isLoading, isAuthenticated } = useConvexAuth();


  return (
    <div className="border-b dark:bg-gray-900">

      <div className="h-16 container flex justify-between items-center">
        <div className="gap-4 hidden md:flex md:gap-8 text-xs md:text-base">
          {!isLoading && isAuthenticated && (
            <>
              <Link href="/dashboard" className="link">
                Dashboard
              </Link>
            </>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {!isLoading && (
            <>
              {isAuthenticated && (
                  <UserButton />
              )}
              {!isAuthenticated && <SignInButton />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}