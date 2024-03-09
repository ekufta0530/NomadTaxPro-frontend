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
  { id: 8, Element: "label" },
  { id: 9, Element: "span" },
];

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "span";
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Text({
  as,
  text,
  children,
  className,
  color,
  onClick,
  size,
  weight,
  ...props
}: TextProps) {
  let TextElement: JSX.Element | null = null;

  textElementData?.forEach(({ Element }) => {
    if (Element === as) {
      TextElement = (
        <Element
          onClick={onClick}
          className={cn(textVariants({ color, size, weight, className }))}
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
    size: {
      xs: "text-xs", // 12px
      sm: "text-sm", // 14px
      md: "text-base", // 16px
      lg: "text-lg", // 18px
      xl: "text-xl", // 20px
      "2xl": "text-[1.625rem]", // 26px
      "3xl": "text-[1.875]", // 30px
      "4xl": "text-[3.75rem]", // 60px
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
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
  },
  defaultVariants: {},
});
