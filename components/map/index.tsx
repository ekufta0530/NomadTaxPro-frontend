import { FlexProps } from "types/common";
import React, { ComponentType } from "react";
import { Flex } from "common/widgets/advance/flex";
import { BenefitCardProps, CountryCardProps } from "types/cards";
import { CountryCard } from "components/cards/countryCard";
import { BenefitCard } from "components/cards/benefitCard";
import { FavoriteCountryList } from "components/lists/favoriteCountryList";
import { FavoriteCountryListProps, ScheduleListProps } from "types/lists";
import { FavoriteCountryCollapse } from "components/colllapsibles/favoriteCountryCollapse";
import { FavoriteCountryCollapseProps } from "types/collapsibles";
import { ScheduleList } from "components/lists/scheduleList";

interface Items {
  [key: string]: ComponentType<any>;
}

const items: Items = {
  CountryCard,
  BenefitCard,
  FavoriteCountryList,
  FavoriteCountryCollapse,
  ScheduleList,
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
    | "FavoriteCountryCollapse"
    | "ScheduleList";
  variant?: FlexProps;
  className?: string;
  data:
    | CountryCardProps[]
    | BenefitCardProps[]
    | FavoriteCountryListProps[]
    | FavoriteCountryCollapseProps[]
    | ScheduleListProps[];
  favoriteCountryListClickId?: number | string | null;
  onFavoriteCountryListClick?: (id: number | string | null) => void;
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
            | FavoriteCountryCollapseProps
            | ScheduleListProps,
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
