"use client";
import React, { ComponentType } from "react";
import { Btn, BtnProps } from "./btn";

interface Groups {
  [key: string]: ComponentType<any>;
}

const groups: Groups = {
  Btn,
};

export function Group({ type, ...props }: { type: "Btn" } & BtnProps) {
  const GroupComponent = groups[type];

  return <GroupComponent {...props} />;
}
