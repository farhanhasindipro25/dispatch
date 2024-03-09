import React from "react";
import { PageLayoutProps } from "../interfaces/layouts/PageLayoutProps";
import { Header } from "./header";

export default function DashboardLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
}
