"use client";

import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { imgs } from "data/static/imgData";
import Image from "next/image";
import { FavoriteCountryList } from "components/lists/favoriteCountryList";
import { ScheduleList } from "components/lists/scheduleList";
import { useCountry } from "context/CountryContext";
import { countryCardData } from "data/static/cardData";
import { Map } from "components/map";

const { albania } = imgs;

export function Favorites() {
  const { favoriteCountryIds } = useCountry();

  const favoriteCountries = countryCardData?.filter((country) =>
    favoriteCountryIds.includes(country?.id as never)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2rem,calc(65%-2rem),35%] lg:grid-cols-[19rem,calc(75%-20rem),25%] gap-5 mt-10">
      <Icon icon="MenuBlack" size="sm" className="block lg:hidden" />
      <div className="hidden lg:block min-h-[82vh] max-h-[82vh] overflow-y-scroll bg-white shadow-grey-xxs w-full rounded-2xl  py-4 px-2">
        <Map
          type="FavoriteCountryList"
          data={favoriteCountries}
          variant="columnCenterCenter"
          className="gap-1"

        />
      </div>

      <Flex
        variant="rowCenterStart"
        className="shadow-grey-xxs  rounded-[1rem] p-5"
      >
        <div>
          <Flex variant="rowBetweenCenter">
            <div>
              <Text
                as="h1"
                text="Albania"
                size="lg"
                color="nile-blue"
                weight="bold"
              />
              <Text
                as="p"
                text="15 Jan 2024- 21 Feb 2024 "
                size="sm"
                color="cold-purple"
                weight="medium"
              />
            </div>
            <Icon
              icon="ChevronDownWhite"
              size="sm"
              className="bg-purple-blue rounded-lg px-2 py-2"
            />
          </Flex>
          <Image
            src={albania}
            alt="albania"
            className="w-[49.063rem]  max-h-[27rem] object-cover rounded-[1.875rem] my-10"
          />
          <Text
            as="p"
            text="key_consideration "
            size="sm"
            color="black"
            weight="regular"
          />
        </div>
      </Flex>

      <div className="shadow-grey-xs rounded-xl">
        <div className="p-4 shadow-grey-xxs rounded-xl">
          <ScheduleList />
        </div>
      </div>
    </div>
  );
}
