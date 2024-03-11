import { DashboardNavbar } from "layout/navbars/dashboardNavbar";
import React, { ReactNode } from "react";

export function Dashboard({ children }: { children: ReactNode }) {
  return (
    <main className="px-5 py-3">
      <DashboardNavbar />
      {children}
    </main>
  );
}
