import React, { ComponentType, ReactNode } from "react";
import { Dashboard } from "./dashboard";
import { Landing } from "./landing";

interface Layouts {
  [key: string]: ComponentType<any>;
}

const layouts: Layouts = {
  Dashboard,
  Landing,
};

export function Layout({
  type,
  children,
}: {
  type: "Dashboard" | "Landing";
  children: ReactNode;
}) {
  const LayoutComponent = layouts[type];

  return <LayoutComponent>{children}</LayoutComponent>;
}
