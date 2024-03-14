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
  value: string | number;
  option: string;
};

export type SelectProps = {
  data: SelectMenu[];
  label: string;
  hideOption: boolean;
  onSelectChange: (e: any) => void;
};

export type FlexProps =
  | "rowStartCenter"
  | "rowStartCenter"
  | "rowCenterStart"
  | "rowCenterCenter"
  | "rowBetweenStart"
  | "rowBetweenCenter"
  | "rowEndCenter"
  | "rowEndStart"
  | "columnStartCenter"
  | "columnCenterCenter"
  | "columnCenterStart"
  | "columnStartStart"
  | "columnBetweenCenter"
  | "columnBetweenStart";

// Menu Props
export type MenuTypes = {
  id: number;
  link?: string;
  menu: string;
};
