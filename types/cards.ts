import { StaticImageData } from "next/image";
import { Icons } from "./common";

export type CountryCardProps = {
  id: number;
  img: StaticImageData;
  country: string;
  credits: string;
};

export type BenefitCardProps = {
  icon: Icons;
  title: string;
  detail: string;
};
