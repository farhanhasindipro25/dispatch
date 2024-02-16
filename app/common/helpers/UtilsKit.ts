import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames: (string | undefined)[]) {
  return twMerge(clsx(classnames));
}
