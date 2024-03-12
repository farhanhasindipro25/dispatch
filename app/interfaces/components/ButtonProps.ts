import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant: "PRIMARY" | "SECONDARY" | "TERTIARY" | "ACCENT";
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
