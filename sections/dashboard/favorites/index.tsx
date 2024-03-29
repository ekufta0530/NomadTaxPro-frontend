"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "common/media/icon";
import { useCountry } from "context/CountryContext";
import { countryCardData } from "data/static/cardData";
import { Map } from "components/map";
import { TrackingCard } from "components/cards/trackingCard";
import { Flex } from "common/widgets/advance/flex";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { Stays } from "./stays";
import { Loader } from "common/loaders/loader";

export function Favorites() {
  const {
    favoriteCountryIds,
    isFetchedIds,
    stays,
    getEditCountryEndDate,
    getEditCountryStartDate,
    getEditId,
    getEditCountryName,
    isFetchedStay,
  } = useCountry();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [matchedFavoriteCountries, setMatchedFavoriteCountries] = useState<
    any[]
  >([]);
  const [scheduleList, setScheduleList] = useState<any[]>([]);
  const [completedDays, setCompletedDays] = useState<number>(0);
  const [remainingDays, setRemainingDays] = useState<number>(0);

  useEffect(() => {
    const favoriteCountries = countryCardData?.filter((country) =>
      favoriteCountryIds.includes(country?.id as never)
    );
    const matchedCountries = favoriteCountries.map((favCountry: any) => {
      const matchedCountry = stays.find(
        (stay) => stay.countryId === favCountry.id
      );
      if (matchedCountry) {
        return {
          ...favCountry,
          dateFrom: matchedCountry.dateFrom,
          dateTo: matchedCountry.dateTo,
        };
      }
      return favCountry;
    });
    const scheduleListData = countryCardData?.map((country: any) => {
      const matchedCountry = stays.find(
        (stay) => stay.countryId === country.id
      );
      if (matchedCountry) {
        return {
          ...country,
          dateFrom: matchedCountry.dateFrom,
          dateTo: matchedCountry.dateTo,
        };
      }
      return null;
    });
    const filteredCountriesList = scheduleListData?.filter(
      (item) => item !== null
    );
    const totalDaysCompleted = stays.reduce(
      (total, stay) => total + stay.daysCompleted,
      0
    );
    setCompletedDays(totalDaysCompleted);
    setRemainingDays(
      330 - totalDaysCompleted < -1 ? 0 : 330 - totalDaysCompleted
    );
    setScheduleList(filteredCountriesList);
    setMatchedFavoriteCountries(matchedCountries);
  }, [stays, favoriteCountryIds]);

  const [favoriteCountryListClickId, setFavoriteCountryListClickId] = useState<
    number | null
  >(null);

  const handleFavoriteCountryListClick = (id: number | string | null) => {
    setFavoriteCountryListClickId(id as number);
  };

  const handleCloseSidebar = () => {
    if (sidebarRef?.current) {
      sidebarRef?.current?.classList.remove("translate-x-0");
      sidebarRef?.current?.classList.add("translate-x-[120%]");
    }
  };
  const handleOpenSidebar = () => {
    if (sidebarRef?.current) {
      sidebarRef?.current?.classList.remove("translate-x-[120%]");
      sidebarRef?.current?.classList.add("translate-x-0");
    }
  };

  const handleAddStayClick = () => {
    setFavoriteCountryListClickId(null);
    if (getEditId) {
      getEditId(null);
    }
    if (getEditCountryName) {
      getEditCountryName("");
    }
    if (getEditCountryStartDate) {
      getEditCountryStartDate(new Date());
    }
    if (getEditCountryEndDate) {
      getEditCountryEndDate(new Date());
    }
  };

  const isFavorite = matchedFavoriteCountries.length > 0;
  const isSchedule = scheduleList.length > 0;
  const keyNotes = countryCardData.filter(
    (country) => country.key_consideration !== null
  );

  return (
    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-[19rem,calc(72%-19rem),28%] gap-5 mt-10">
      <Icon
        icon="MenuBlack"
        size="sm"
        className="block lg:hidden"
        onClick={handleOpenSidebar}
      />
      <div
        ref={sidebarRef}
        className={`translate-x-[120%] bg-white block xl:hidden w-full h-full max-h-full  fixed z-[999] shadow-grey transition-transform duration-[0.5s] ease-[ease-in-out] overflow-y-auto left-0 top-0 p-4`}
      >
        <Flex variant="rowEndStart" className="w-full">
          <Icon icon="Cross" onClick={handleCloseSidebar} size="xs" />
        </Flex>
        <Flex variant="rowCenterCenter" className="mt-10">
          <Flex variant="columnCenterCenter">
            <ul className="ml-4 flex-col xl:hidden  text-md  font-normal">
              <Map
                type="FavoriteCountryList"
                data={matchedFavoriteCountries}
                variant="columnCenterCenter"
                className="gap-1"
                onFavoriteCountryListClick={handleFavoriteCountryListClick}
                favoriteCountryListClickId={favoriteCountryListClickId}
              />
            </ul>
          </Flex>
        </Flex>
      </div>

      <div className="hidden lg:block min-h-[82vh] max-h-[82vh] overflow-y-scroll bg-white shadow-grey-xxs w-full rounded-2xl  py-4 px-2">
        <Button
          onClick={handleAddStayClick}
          link="/dashboard/tracker#stay-modal"
          text="+ADD STAY"
          size="md"
          variant="rounded-dark-blue"
          className="w-full block m-auto mb-2 bg-light-grey text-nile-blue font-bold"
        />
        <Map
          type="FavoriteCountryList"
          data={matchedFavoriteCountries}
          variant="columnCenterCenter"
          className="gap-1"
          onFavoriteCountryListClick={handleFavoriteCountryListClick}
          favoriteCountryListClickId={favoriteCountryListClickId}
        />
      </div>

      {!isSchedule ? (
        <Flex variant="columnStartCenter" className="gap-2">
          {isFetchedStay ? (
            <>
              <Text
                as="h1"
                text="No stays added"
                className="text-center mt-2"
              />
              <Button
                text="Add One"
                link="/dashboard/tracker#stay-modal"
                className="w-32"
              />
            </>
          ) : (
            <Loader type="BeatLoader" loading={true} />
          )}
        </Flex>
      ) : (
        <div className="min-h-[82vh] max-h-[82vh] overflow-y-scroll p-4">
          <Map
            type="FavoriteCountryCollapse"
            data={scheduleList}
            variant="columnStartCenter"
          />
        </div>
      )}

      <div className="shadow-grey-xxs rounded-xl min-h-[82vh] max-h-[82vh] overflow-y-scroll">
        <div className="p-4 shadow-grey-xxs rounded-xl">
          <TrackingCard graphData={[remainingDays, completedDays]} />

          <div className="mt-10">
            <Text
              as="h1"
              size="lg"
              text="Key Notes"
              color="purple-blue"
              weight="semiBold"
            />
            <div className="max-h-[20rem] overflow-y-auto mt-2">
              <Map
                type="ScheduleList"
                data={keyNotes}
                variant="columnStartCenter"
                className="gap-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Stays favoriteCountryListClickId={favoriteCountryListClickId} />
    </div>
  );
}
