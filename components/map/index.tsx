import { FlexProps } from "types/common";
import React, { ComponentType } from "react";
import { Flex } from "common/widgets/advance/flex";
import { BenefitCardProps, CountryCardProps } from "types/cards";
import { CountryCard } from "components/cards/countryCard";
import { BenefitCard } from "components/cards/benefitCard";
import { FavoriteCountryList } from "components/lists/favoriteCountryList";
import { FavoriteCountryListProps } from "types/lists";

interface Items {
  [key: string]: ComponentType<any>;
}

const items: Items = {
  CountryCard,
  BenefitCard,
  FavoriteCountryList,
};

export function Map({
  type,
  data,
  variant,
  className,
  // onIconClick,
}: {
  type: "CountryCard" | "BenefitCard" | "FavoriteCountryList";
  variant?: FlexProps;
  className?: string;
  data: CountryCardProps[] | BenefitCardProps[] | FavoriteCountryListProps[];
  // onIconClick?: (id: number | string) => void;
}) {
  const Item = items[type];

  return (
    <Flex variant={variant} className={className}>
      {data?.map(
        (
          item: CountryCardProps | BenefitCardProps | FavoriteCountryListProps,
          index: number
        ) => (
          <Item
            key={index}
            {...item}
            // onClick={() =>
            //   onIconClick && onIconClick((item as FavoriteCountryListProps).id)
            // }
          />
        )
      )}
    </Flex>
  );
}
