import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode } from "react";
import { cn } from "utils/helpers/cn";

interface FlexProps extends VariantProps<typeof flexVariants> {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function Flex({
  children,
  className,
  variant,
  onClick,
  ...props
}: FlexProps) {
  return (
    <div
      onClick={onClick}
      {...props}
      className={cn(flexVariants({ variant, className }))}
    >
      {children}
    </div>
  );
}

const flexVariants = cva("flex", {
  variants: {
    variant: {
      rowStartStart: "flex-row justify-start items-start gap-4",
      rowStartCenter: "flex-row justify-start items-center gap-4",
      rowCenterStart: "flex-row justify-center items-start gap-4",
      rowCenterCenter: "flex-row justify-center items-center gap-4",
      rowBetweenStart: "flex-row justify-between items-start gap-4",
      rowBetweenCenter: "flex-row justify-between items-center gap-4",
      rowEndCenter: "flex-row justify-end items-center gap-4",
      rowEndStart: "flex-row justify-end items-start gap-4",
      columnStartCenter: "flex-col justify-start items-center gap-4",
      columnCenterCenter: "flex-col justify-center items-center gap-4",
      columnCenterStart: "flex-col justify-center items-start gap-4",
      columnStartStart: "flex-col justify-start items-start gap-4",
      columnBetweenCenter: "flex-col justify-between items-center gap-4",
      columnBetweenStart: "flex-col justify-between items-start gap-4",
    },
  },
  defaultVariants: {
    variant: "rowStartCenter",
  },
});
