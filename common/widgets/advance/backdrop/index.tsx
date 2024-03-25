import React, { ReactNode } from "react";
import { Flex } from "../flex";

export function Backdrop({ children }: { children: ReactNode }) {
  return (
    <Flex
      variant="columnCenterCenter"
      className="fixed top-0 left-0 w-full h-full bg-soft-peach z-[999] opacity-50"
    >
      {children}
    </Flex>
  );
}
