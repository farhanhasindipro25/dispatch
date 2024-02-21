import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant: "INFO" | "INFO_ALT" | "INFO_SKY" | "INFO_GREEN";
}
