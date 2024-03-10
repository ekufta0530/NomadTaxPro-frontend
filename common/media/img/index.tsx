import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "utils/helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

interface IconProps extends VariantProps<typeof iconVariants> {
  img: string | StaticImageData;
  onClick?: () => void;
  className?: string;
  link?: string;
}

export function Img({
  img,
  variant,
  size,
  className,
  onClick,
  link,
}: IconProps) {
  const image = (
    <div className={cn(iconVariants({ variant, size, className }))}>
      <Image
        alt="icon"
        src={img}
        onClick={onClick}
        width={200}
        height={200}
        className="w-full h-full bg-no-repeat  object-fill"
      />
    </div>
  );

  if (link) {
    return <Link href={link}>{image}</Link>;
  } else {
    return image;
  }
}

const iconVariants = cva("", {
  variants: {
    variant: {
      solid: "bg-black",
      outline: "border-2 border-black",
      circle: "rounded-full object-contain",
      standard: "bg-transparent border-none",
    },
    size: {
      xs: "w-4 h-4",
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "min-w-16 min-h-16 w-16 h-16",
      xl: "min-w-20 min-w-20 max-w-20 max-h-20",
    },
  },
  defaultVariants: {
    variant: "standard",
    size: "md",
  },
});
