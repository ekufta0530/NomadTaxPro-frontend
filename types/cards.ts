import { StaticImageData } from "next/image";
import { Icons } from "./common";

export type CountryCardProps = {
  id: number;
  image: StaticImageData | null;
  country_name: string;
  cost_of_living_single?: number | null;
  key_consideration: string | null;
  Tagline: string | null;
};

export type BenefitCardProps = {
  icon: Icons;
  point?: string;
  benefit?: string;
  description: string;
};
