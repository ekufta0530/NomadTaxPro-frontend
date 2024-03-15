import { FlexProps } from "types/common";
import React, { ComponentType } from "react";
import { Flex } from "common/widgets/advance/flex";
import { BenefitCardProps, CountryCardProps } from "types/cards";
import { CountryCard } from "components/cards/countryCard";
import { BenefitCard } from "components/cards/benefitCard";

interface Items {
  [key: string]: ComponentType<any>;
}

const items: Items = {
  CountryCard,
  BenefitCard,
};

export function Map({
  type,
  data,
  variant,
  className,
}: {
  type: "CountryCard" | "BenefitCard";
  variant?: FlexProps;
  className?: string;
  data: CountryCardProps[] | BenefitCardProps[];
}) {
  const Item = items[type];

  return (
    <Flex variant={variant} className={className}>
      {data?.map((item: CountryCardProps | BenefitCardProps, index: number) => (
        <Item key={index} {...item} />
      ))}
    </Flex>
  );
}
