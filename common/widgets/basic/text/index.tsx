import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode } from "react";
import { cn } from "utils/helpers/cn";

const textElementData = [
  { id: 1, Element: "p" },
  { id: 2, Element: "h1" },
  { id: 3, Element: "h2" },
  { id: 4, Element: "h3" },
  { id: 5, Element: "h4" },
  { id: 6, Element: "h5" },
  { id: 7, Element: "h6" },
];

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Text({
  as,
  text,
  children,
  className,
  variant,
  color,
  onClick,
  ...props
}: TextProps) {
  let TextElement: JSX.Element | null = null;

  textElementData?.forEach(({ Element }) => {
    if (Element === as) {
      TextElement = (
        <Element
          onClick={onClick}
          className={cn(textVariants({ variant, color, className }))}
          {...props}
        >
          {text && text}
          {children && children}
        </Element>
      );
    }
  });

  return TextElement;
}

const textVariants = cva("", {
  variants: {
    variant: {
      leading: "sm:text-5xl font-dmSans font-bold text-black sm:leading-tight",
      heading: "text-3xl font-bold font-dmSans",
      detail: "text-lg font-normal font-dmSans",
      base: "text-md font-normal font-dmSans",
      caption: "text-sm font-normal font-dmSans",
    },
    color: {
      black: "text-black",
      "dark-purple": "text-dark-purple",
    },
  },
  defaultVariants: {
    color: "black",
    variant: "leading",
  },
});
