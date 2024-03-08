"use client";

import { VariantProps, cva } from "class-variance-authority";
import { icons } from "data/static/iconData";
import { Icons } from "types/common";
import React, { ReactNode, ButtonHTMLAttributes, useState } from "react";
import { cn } from "utils/helpers/cn";
import Image from "next/image";
import Link from "next/link";
import { Icon as CustomIcon } from "common/media/icon";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  text?: string;
  icon?: Icons;
  position?: "left" | "right";
  color?: "darkPurple" | "mediumPurple" | "black";
  link?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export function Button({
  children,
  className,
  variant,
  size,
  text,
  icon,
  position,
  color,
  link,
  iconWidth,
  iconHeight,
  title,
  id,
  ...props
}: ButtonProps) {
  const [btnId, setBtnId] = useState<string | number | null>(null);

  const Icon = icon && (
    <Image
      src={icons[icon]}
      alt="icon"
      width={iconWidth || 25}
      height={iconHeight || 25}
    />
  );
  const flex = icon && "flex flex-row justify-center items-center gap-1";
  const buttonComponent = (
    <button
      onMouseOver={() => setBtnId(id as string | number)}
      onMouseOut={() => setBtnId(null)}
      {...props}
      className={cn(buttonVariants({ variant, size, className, color }), flex)}
    >
      {position === "left" && Icon}
      {text && text}
      {children && children}
      {position === "right" && Icon}
    </button>
  );

  if (link) {
    return <Link href={link}>{buttonComponent}</Link>;
  } else if (title) {
    return (
      <div className="relative">
        {buttonComponent}
        {btnId === id && (
          <div className="absolute right-0 mt-2 w-24">
            <div className="relative  border-4 rounded-xl bg-black text-white p-1 text-[.6rem]  z-50 text-center">
              <div className="absolute right-[-1rem] top-[-1rem] bg-white  p-[.2rem] rounded-full">
                <CustomIcon icon="KeyboardUp" size="xs" variant="circle" />
              </div>
              {title}
            </div>
          </div>
        )}
      </div>
    );
  } else return buttonComponent;
}

const buttonVariants = cva("", {
  variants: {
    variant: {
      solid:
        "border-none bg-white text-black font-dmSans font-medium  hover:opacity-80 rounded-sm",
      outline:
        "text-medium-purple font-dmSans border-2 border-medium-purple hover:opacity-80 ease-out delay-75",
      standard:
        "bg-transparent font-dmSans border-none text-black hover:opacity-80",
      rounded:
        "bg-black rounded-full font-dmSans text-white border-none hover:opacity-80",
      danger: "bg-white border-2 border-black font-dmSans text-black",
      underline: "bg-white border-2 border-black text-black font-dmSans",
    },
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-4 text-sm font-bold",
      lg: "px-5 py-3 text-lg",
      xl: "px-6 py-3 text-xl",
    },
    color: {
      transparent: "transparent",
      black: "bg-black text-white",
      darkPurple: "bg-dark-purple text-white",
      mediumPurple: "bg-medium-purple text-white",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    color: "transparent",
  },
});
