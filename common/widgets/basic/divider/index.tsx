import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "utils/helpers/cn";

interface DividerProps extends VariantProps<typeof tagVariants> {
  className?: string;
}

export function Divider({ className, variant, size, ...props }: DividerProps) {
  return (
    <div {...props} className={cn(tagVariants({ variant, size, className }))} />
  );
}

const tagVariants = cva("", {
  variants: {
    variant: {
      solid: "bg-black rounded-none w-full",
      rounded: "rounded-full bg-black w-full",
    },
    size: {
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-2.5",
      xl: "h-3",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
