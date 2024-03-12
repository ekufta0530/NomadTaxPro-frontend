import { DashboardNavbar } from "layout/navbars/dashboardNavbar";
import React, { ReactNode } from "react";

export function Dashboard({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 sm:px-10 py-3  flex flex-row justify-center items-center">
      <div className="w-full 2xl:w-[200rem]">
        <DashboardNavbar />
        {children}
      </div>
    </main>
  );
}
