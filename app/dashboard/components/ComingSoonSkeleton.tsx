import React from "react";

export default function ComingSoonSkeleton() {
  return (
    <div className="animate-pulse blur-md">
      {/* Large Screen Skeleton */}
      <div className="hidden lg:flex w-full min-h-screen gap-4">
        <div className="w-1/2 h-full space-y-4">
          <div className="w-full flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-4">
            <div className="rounded-lg w-1/3 h-10 bg-neutral-800" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full rounded-lg bg-neutral-900" />
        </div>
      </div>
      {/* small to medium screen skeleton */}
      <div className="block space-y-4 lg:hidden">
        <div className="w-full h-full space-y-4">
          <div className="w-full block space-y-4 md:space-y-0 md:flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full block space-y-4 md:space-y-0 md:flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full block space-y-4 md:space-y-0 md:flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full block space-y-4 md:space-y-0 md:flex items-center gap-4">
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
            <div className="w-full space-y-2">
              <div className="rounded-lg w-1/3 h-5 bg-neutral-800" />
              <div className="rounded-lg h-10 bg-neutral-900" />
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-4">
            <div className="rounded-lg w-1/3 h-10 bg-neutral-800" />
          </div>
        </div>
        <div className="min-h-screen w-full rounded-lg bg-neutral-900" />
      </div>
    </div>
  );
}
