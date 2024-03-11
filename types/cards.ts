import { StaticImageData } from "next/image";

export type CountryCardProps = {
  id: number;
  img: StaticImageData;
  country: string;
  person: string;
  credits: string;
};
