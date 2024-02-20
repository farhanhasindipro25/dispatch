import React from "react";

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base text-neutral-300 font-semibold">_blogs</h2>
        <h2 className="text-base text-neutral-400 font-medium">
          _blogs.length = 3
        </h2>
      </div>
      <div className="space-y-6">
        {/* {educations.map((education) => (
          <EducationCard key={education.institution} education={education} />
        ))} */}
      </div>
    </div>
  );
}
