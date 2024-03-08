import { VariantProps, cva } from "class-variance-authority";
import React, { InputHTMLAttributes } from "react";
import { cn } from "utils/helpers/cn";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | null;
  label?: string;
}

export function Input({
  className,
  variant,
  size,
  label,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      {label && (
        <label className="text-white opacity-80 text-base font-dmSans">
          {label}
        </label>
      )}
      <input
        {...props}
        className={cn(inputVariants({ variant, size, className }))}
      />
    </div>
  );
}

const inputVariants = cva("", {
  variants: {
    variant: {
      solid: "border-none text-vista-white font-dmSans",
      outlineMediumPurple:
        "font-dmSans bg-black border-2 border-medium-purple text-white",
      rounded:
        "font-dmSans bg-transparent border-2 border-dark-purple text-white rounded-full",
      standard: "font-dmSans bg-white border-2 border-black",
      danger: "font-dmSans bg-white border-2 border-black",
      underline: "font-dmSans bg-white border-2 border-black",
    },
    size: {
      xs: "px-2 py-1 text-sm",
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
