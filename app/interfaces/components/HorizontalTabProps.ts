import React from "react";

export interface HorizontalTabProps {
  label: string;
  href: string;
  key: number;
  current: boolean;
}
[];

export interface TabOptions {
  label: string;
  href: string;
  key?: number;
}

export interface MonthProps {
  label: string;
  href: string;
  current: boolean;
  key: string;
  component: React.ComponentType<any>;
}
