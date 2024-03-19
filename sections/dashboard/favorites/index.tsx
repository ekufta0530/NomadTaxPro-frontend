"use client";

import React, { useState } from "react";
import { Icon } from "common/media/icon";
import { ScheduleList } from "components/lists/scheduleList";
import { useCountry } from "context/CountryContext";
import { countryCardData } from "data/static/cardData";
import { Map } from "components/map";

export function Favorites() {
  const { favoriteCountryIds } = useCountry();

  const favoriteCountries = countryCardData?.filter((country) =>
    favoriteCountryIds.includes(country?.id as never)
  );

  const [favoriteCountryListClickId, setFavoriteCountryListClickId] = useState(
    favoriteCountries[0]?.id
  );

  const handleFavoriteCountryListClick = (id: number) => {
    setFavoriteCountryListClickId(id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2rem,calc(65%-2rem),35%] lg:grid-cols-[19rem,calc(75%-20rem),25%] gap-5 mt-10">
      <Icon icon="MenuBlack" size="sm" className="block lg:hidden" />
      <div className="hidden lg:block min-h-[82vh] max-h-[82vh] overflow-y-scroll bg-white shadow-grey-xxs w-full rounded-2xl  py-4 px-2">
        <Map
          type="FavoriteCountryList"
          data={favoriteCountries}
          variant="columnCenterCenter"
          className="gap-1"
          onFavoriteCountryListClick={handleFavoriteCountryListClick}
          favoriteCountryListClickId={favoriteCountryListClickId}
        />
      </div>

      <Map
        type="FavoriteCountryCollapse"
        data={favoriteCountries}
        variant="columnStartCenter"
      />

      <div className="shadow-grey-xs rounded-xl">
        <div className="p-4 shadow-grey-xxs rounded-xl">
          <ScheduleList />
        </div>
      </div>
    </div>
  );
}
