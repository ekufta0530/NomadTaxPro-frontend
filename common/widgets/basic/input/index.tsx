import { VariantProps, cva } from "class-variance-authority";
import { Flex } from "common/widgets/advance/flex";
import React, { InputHTMLAttributes } from "react";
import { cn } from "utils/helpers/cn";
import { Icon } from "common/media/icon";
import { Icons } from "types/common";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | null;
  label?: string;
  icon?: Icons;
  containerClass?: string;
}

export function Input({
  className,
  variant,
  size,
  label,
  icon,
  containerClass,
  ...props
}: InputProps) {
  let container = "";
  if (icon) {
    if (variant === "solid-light-grey") {
      container = "bg-light-grey text-sm px-6";
    } else if (variant === "rounded-light-grey") {
      container = "bg-light-grey text-sm px-6  rounded-full";
    }
  }

  return (
    <Flex variant="columnStartStart" className={`gap-0 ${containerClass}`}>
      {label && (
        <label className="text-sm text-dark-grey font-dmSans font-normal">
          {label}
        </label>
      )}
      <Flex variant="rowStartCenter" className={`${container} gap-0 w-full`}>
        {icon && <Icon icon={icon} size="xs" />}
        <input
          {...props}
          className={cn(inputVariants({ variant, size, className }))}
        />
      </Flex>
    </Flex>
  );
}

const inputVariants = cva("", {
  variants: {
    variant: {
      "solid-light-grey":
        "font-dmSans bg-light-grey text-sm px-6 py-[.7rem] rounded-xs border-none text-dark-grey hover:opacity-80 focus:border-none focus:outline-none",
      "rounded-light-grey":
        "font-dmSans bg-light-grey text-sm px-6 py-[.7rem] rounded-full  border-none text-dark-grey hover:opacity-80 focus:border-none focus:outline-none",
      standard: "font-dmSans bg-white border-2 border-black",
      danger: "font-dmSans bg-white border-2 border-black",
      underline: "font-dmSans bg-white border-2 border-black",
    },
    size: {
      xs: "px-2 py-1",
      sm: "px-2 py-1",
      md: "px-6 py-2",
      lg: "px-6 py-3",
      xl: "px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "rounded-light-grey",
  },
});
