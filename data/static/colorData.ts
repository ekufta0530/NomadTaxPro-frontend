import tailwindConfig from "tailwind.config";

const tailwindColors: any = tailwindConfig?.theme?.colors;

export const colors = {
  darkBlue: tailwindColors?.["dark-blue"],
  nileBlue: tailwindColors?.["nile-blue"],
};
