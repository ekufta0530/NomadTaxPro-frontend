import React, { ComponentType, ReactNode } from "react";
import { Dashboard } from "./dashboard";

interface Layouts {
  [key: string]: ComponentType<any>;
}

const layouts: Layouts = {
  Dashboard,
};

export function Layout({
  type,
  children,
}: {
  type: "Dashboard";
  children: ReactNode;
}) {
  const LayoutComponent = layouts[type];

  return <LayoutComponent>{children}</LayoutComponent>;
}
