import { ActivityKind } from "@/app/interfaces/pages/publicPage/activityKindSynonyms";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames: (string | undefined)[]) {
  return twMerge(clsx(classnames));
}
function generateRandomSynonym(kind: ActivityKind, seed: number): string {
  const synonyms: Record<ActivityKind, string[]> = {
    LEARNING: [
      "Studied",
      "Acquired knowledge on",
      "Educated myself on",
      "Enlightened myself upon",
      "Learned",
      "Enhanced skills on",
    ],
    EXPLORING: [
      "Investigated",
      "Discovered",
      "Examined",
      "Researched",
      "Surveyed",
      "Explored",
    ],
    DOCUMENTING: [
      "Wrote down essentials of",
      "Noted down essentials of",
      "Documented features and codebase of",
    ],
    WORKING: ["Worked on a", "Executed tasks on a", "Engaged on a"],
    DEBUGGING: [
      "Fixed issues of",
      "Troubleshooted problems of",
      "Resolved bugs of",
      "Solved Problems of",
      "Debugged issues of",
    ],
    REVISITING: ["Reviewed", "Reexamined", "Went back to", "Revisited"],
  };
  const possibleSynonyms = synonyms[kind];
  if (!possibleSynonyms || possibleSynonyms.length === 0) {
    return kind;
  }
  const random = seed % possibleSynonyms.length;
  return possibleSynonyms[random];
}

export function generateActivityLogMsg(kind: ActivityKind, topic: string) {
  const synonym = generateRandomSynonym(kind, 42);
  return { synonym, topic };
}

export function formatDate(utcDate: Date) {
  const date = new Date(utcDate);

  // Get year, month (0-indexed), and day
  const year = date.getFullYear();
  const month = date.getMonth(); // Adjust for 0-based month indexing

  const monthNamesReversed = [ "January", "February","March", "April", "May", "July", "June","August","September",  
  "October", "November","December", 
                              ];

  // Use the month index to access the corresponding month name from the array
  const monthName = monthNamesReversed[month];

  // Format the date string (add leading zeros if needed)
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${day} ${monthName} ${year}`;

  return formattedDate;
}
