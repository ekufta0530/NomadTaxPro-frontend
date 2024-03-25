import { VariantProps, cva } from "class-variance-authority";
import { Flex } from "common/widgets/advance/flex";
import React, { SelectHTMLAttributes } from "react";
import { cn } from "utils/helpers/cn";
import { Icons } from "types/common";
import { SelectMenu } from "types/common";

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | null;
  label?: string;
  icon?: Icons;
  containerClass?: string;
  hideOption?: boolean;
  data: SelectMenu[];
}

export function Select({
  className,
  variant,
  size,
  label,
  icon,
  containerClass,
  hideOption,
  data,
  onChange,
  ...props
}: SelectProps) {
  return (
    <Flex
      variant="columnStartStart"
      className={`gap-0 border border-french-grey px-3 rounded-xl  ${containerClass}`}
    >
      {label && (
        <label className="text-sm text-dark-grey font-dmSans font-normal">
          {label}
        </label>
      )}
      <select
        {...props}
        className={cn(
          inputVariants({ variant, size, className }),
          "w-full h-full"
        )}
        onChange={onChange}
      >
        {data?.map(({ id, value, option }: SelectMenu) => (
          <option key={id} value={value} hidden={id === 1 && hideOption}>
            {option}
          </option>
        ))}
      </select>
    </Flex>
  );
}

const inputVariants = cva("", {
  variants: {
    variant: {
      outline:
        "font-dmSans bg-white py-3 w-full focus:outline-none focus:border-none",
      standard: "font-dmSans bg-white border-2 border-black",
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
    variant: "outline",
  },
});
