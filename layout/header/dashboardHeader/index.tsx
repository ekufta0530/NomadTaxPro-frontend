import { imgs } from "data/static/imgData";
import React from "react";
const { header } = imgs;

export function DashboardHeader() {
  return (
    <div
      className={`bg-cover bg-center h-64  from-dark-blue to-nile-blue
            bg-[linear-gradient(to_right,rgba(134,139,255,.75),rgba(67,24,255,.75)),url("../public/assets/imgs/header.png")]`}
    >
      <div>The HR platform for global businesses!</div>
    </div>
  );
}
