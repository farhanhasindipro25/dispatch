import React from "react";

const works = [
  {
    position: "Junior Frontend Developer",
    company: "REPLIQ Limited",
    start_date: "February 2023",
    end_date: "January 2024",
  },
];

export default function WorkHistory() {
  return (
    <div className="pt-12">
      <h2 className="text-base text-white font-semibold">_workHistory</h2>
      <div className="flex flex-wrap gap-4"></div>
    </div>
  );
}
