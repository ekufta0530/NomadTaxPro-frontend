import { StaticImageData } from "next/image";
import { Icons } from "./common";

export type CountryCardProps = {
  id: number;
  image: StaticImageData | null;
  country_name: string;
  cost_of_living_single?: number | null;
};

export type BenefitCardProps = {
  icon: Icons;
  title: string;
  detail: string;
};
