import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "utils/helpers/cn";

interface TagProps extends VariantProps<typeof tagVariants> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Tag({
  text,
  children,
  className,
  variant,
  size,
  ...props
}: TagProps) {
  return (
    <div {...props} className={cn(tagVariants({ variant, size, className }))}>
      {children && children}
      {text && text}
    </div>
  );
}

const tagVariants = cva("text-center", {
  variants: {
    variant: {
      solid: "border-none text-vista-white font-inter",
      outline:
        "bg-ghost-white border-2 border-medium-purple text-dark-charcoal",
      standard: "bg-white border-2 border-black text-black",
      danger: "bg-white border-2 border-black text-black",
      underline: "bg-white border-2 border-black text-black",
    },
    size: {
      xs: "p-1 text-xs",
      sm: "p-2 text-sm",
      md: "py-1 px-3 text-base",
      lg: "p-4 text-lg",
      xl: "p-5 text-xl",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
