"use client";

import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode, ButtonHTMLAttributes, useState } from "react";
import { cn } from "utils/helpers/cn";
import Link from "next/link";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  text?: string;
  link?: string;
  iconWidth?: number;
  iconHeight?: number;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  children,
  className,
  variant,
  size,
  text,
  color,
  weight,
  link,
  iconWidth,
  iconHeight,
  title,
  id,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const flex =
    (leftIcon || rightIcon) &&
    "flex flex-row justify-center items-center gap-1";
  const buttonComponent = (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, size, color, weight, className }),
        flex
      )}
    >
      {leftIcon}
      {text && text}
      {children && children}
      {rightIcon}
    </button>
  );

  if (link) {
    return <Link href={link}>{buttonComponent}</Link>;
  } else return buttonComponent;
}

const buttonVariants = cva("", {
  variants: {
    variant: {
      "solid-dark-blue":
        "bg-dark-blue px-6 py-3 rounded-md text-sm font-medium font-dmSans text-white border-none hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer",
      outline:
        "text-medium-purple font-dmSans border-2 border-medium-purple hover:opacity-80 ease-out delay-75",
      standard:
        "bg-transparent font-dmSans text-sm font-medium border-none text-black hover:opacity-80",
      "rounded-dark-blue":
        "bg-dark-blue px-6 py-3 rounded-[2rem] text-sm font-medium font-dmSans text-white border-none hover:opacity-80",
      danger: "bg-white border-2 border-black font-dmSans text-black",
      underline: "bg-white border-2 border-black text-black font-dmSans",
    },
    size: {
      xs: "px-2 py-1",
      sm: "px-3 py-2",
      md: "px-4 py-3",
      lg: "px-5 py-3",
      xl: "px-6 py-4",
    },
    color: {
      black: "text-black",
      white: "text-white",
      "dark-blue": "text-dark-blue",
      "nile-blue": "text-nile-blue",
      "purple-blue": "text-purple-blue",
      "cold-purple": "text-cold-purple",
      "dark-grey": "text-dark-grey",
      "french-grey": "text-french-grey",
      "soft-peach": "text-soft-peach",
      "santa-grey": "text-santa-grey",
      transparent: "text-transparent",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "solid-dark-blue",
    weight: "medium",
  },
});
