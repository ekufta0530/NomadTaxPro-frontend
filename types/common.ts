export type Icons =
  | "Users"
  | "Apps"
  | "ChevronDownWhite"
  | "ChevronDownBlue"
  | "ChevronLeftWhite"
  | "ChevronRightWhite"
  | "ChevronUpWhite"
  | "Communication"
  | "CostEffective"
  | "Dashboard"
  | "HeartOutline"
  | "HeartFilled"
  | "Info"
  | "KeyboardRightBlue"
  | "Landscape"
  | "Notification"
  | "Stars"
  | "Search"
  | "Sun"
  | "Technology";

export type SelectMenu = {
  id: number;
  value: string;
  option: string;
};

export type SelectProps = {
  data: SelectMenu[];
  label: string;
  hideOption: boolean;
  onSelectChange: (e: any) => void;
};
