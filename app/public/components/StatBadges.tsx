import React from "react";

export default function StatBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
      <div className="bg-neutral-900 w-fit gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <p className="text-neutral-400 text-xs font-normal">experience</p>
        </div>
        <h1 className="text-neutral-300 text-xs md:text-sm pl-5 font-medium">
          02 years
        </h1>
      </div>
      <div className="bg-neutral-900 w-fit gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <p className="text-neutral-400 text-xs font-normal">openForWork</p>
        </div>
        <h1 className="text-neutral-300 text-xs md:text-sm pl-5 font-medium">
          Truthy McTruthFace
        </h1>
      </div>

      <div className="bg-neutral-900 w-fit gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 mt-1 rounded-full" />
          <p className="text-neutral-400 text-xs font-normal">worked@</p>
        </div>
        <h1 className="text-neutral-300 text-xs md:text-sm pl-5 font-medium">
          REPLIQ Limited
        </h1>
      </div>
      <div className="bg-neutral-900 w-fit gap-2 px-3 py-2 rounded-md hover:bg-neutral-800 border border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <p className="text-neutral-400 text-xs font-normal">location</p>
        </div>
        <h1 className="text-neutral-300 text-xs md:text-sm pl-5 font-medium">
          Bangladesh
        </h1>
      </div>
    </div>
  );
}
