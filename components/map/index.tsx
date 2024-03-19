import { FlexProps } from "types/common";
import React, { ComponentType } from "react";
import { Flex } from "common/widgets/advance/flex";
import { BenefitCardProps, CountryCardProps } from "types/cards";
import { CountryCard } from "components/cards/countryCard";
import { BenefitCard } from "components/cards/benefitCard";
import { FavoriteCountryList } from "components/lists/favoriteCountryList";
import { FavoriteCountryListProps } from "types/lists";
import { FavoriteCountryCollapse } from "components/colllapsibles/favoriteCountryCollapse";
import { FavoriteCountryCollapseProps } from "types/collapsibles";

interface Items {
  [key: string]: ComponentType<any>;
}

const items: Items = {
  CountryCard,
  BenefitCard,
  FavoriteCountryList,
  FavoriteCountryCollapse,
};

export function Map({
  type,
  data,
  variant,
  className,
  favoriteCountryListClickId,
  onFavoriteCountryListClick,
}: {
  type:
    | "CountryCard"
    | "BenefitCard"
    | "FavoriteCountryList"
    | "FavoriteCountryCollapse";
  variant?: FlexProps;
  className?: string;
  data:
    | CountryCardProps[]
    | BenefitCardProps[]
    | FavoriteCountryListProps[]
    | FavoriteCountryCollapseProps[];
  favoriteCountryListClickId?: number;
  onFavoriteCountryListClick?: (id: number) => void;
}) {
  const Item = items[type];

  return (
    <Flex variant={variant} className={className}>
      {data?.map(
        (
          item:
            | CountryCardProps
            | BenefitCardProps
            | FavoriteCountryListProps
            | FavoriteCountryCollapseProps,
          index: number
        ) => (
          <Item
            key={index}
            {...item}
            onFavoriteCountryListClick={onFavoriteCountryListClick}
            favoriteCountryListClickId={favoriteCountryListClickId}
          />
        )
      )}
    </Flex>
  );
}
