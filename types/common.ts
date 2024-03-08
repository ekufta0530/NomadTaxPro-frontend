export type Icons = "Users" | "SearchListPurple";

// Menu Props
export type Menu = {
  id: number;
  link?: string;
  menu: string;
};

// Button
export type ButtonProps = {
  id: number | string;
  text?: string;
  link?: string;
  icon?: Icons;
  position?: "left" | "right";
  variant?: "solid" | "outline" | "standard" | "rounded";
  classes?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  iconWidth?: number;
  iconHeight?: number;
  title?: string;
};
