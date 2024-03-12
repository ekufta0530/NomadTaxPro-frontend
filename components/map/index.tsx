import { FlexProps } from "types/common";
import React, { ComponentType } from "react";
import { Flex } from "common/widgets/advance/flex";
import { CountryCardProps } from "types/cards";
import { CountryCard } from "components/cards/countryCard";

interface Items {
  [key: string]: ComponentType<any>;
}

const items: Items = {
  CountryCard,
};

export function Map({
  type,
  data,
  variant,
  className,
}: {
  type: "CountryCard";
  variant?: FlexProps;
  className?: string;
  data: CountryCardProps[];
}) {
  const Item = items[type];

  return (
    <Flex variant={variant} className={className}>
      {data?.map((item: CountryCardProps, index: number) => (
        <Item key={index} {...item} />
      ))}
    </Flex>
  );
}
