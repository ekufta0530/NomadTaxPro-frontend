import React from "react";
import Image from "next/image";
import { cn } from "utils/helpers/cn";
import { Icons } from "types/common";
import { VariantProps, cva } from "class-variance-authority";
import { icons } from "data/static/iconData";
import Link from "next/link";

interface IconProps extends VariantProps<typeof iconVariants> {
  icon: Icons;
  onClick?: () => void;
  className?: string;
  link?: string;
}

export function Icon({
  icon,
  variant,
  size,
  className,
  onClick,
  link,
}: IconProps) {
  const iconImage = (
    <Image
      alt="icon"
      src={icons[icon]}
      onClick={onClick}
      className={cn(iconVariants({ variant, size, className }))}
    />
  );

  if (link) {
    return <Link href={link}>{iconImage}</Link>;
  } else {
    return iconImage;
  }
}

const iconVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      solid: "bg-black border-2 py-10",
      outline:
        "bg-light-grey border border-french-grey p-2 rounded-xl w-full h-full",
      circle: "rounded-full	border-2 border-medium-purple",
      standard: "bg-transparent border-none",
    },
    size: {
      xs: "w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4",
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
      xl: "min-w-20 min-w-20 max-w-20 max-h-20 w-20 h-20",
    },
  },
  defaultVariants: {
    variant: "standard",
    size: "md",
  },
});
