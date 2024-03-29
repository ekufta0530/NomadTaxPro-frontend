"use client";

import { Map } from "components/map";
import { countryCardData } from "data/static/cardData";
import { DashboardHeader } from "layout/headers/dashboardHeader";
import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Select } from "common/widgets/basic/select";
import {
  anchorAuxiliarySelectData,
  maxCostSelectData,
  minCostSelectData,
  sortSelectData,
} from "data/static/selectData";
import { Input } from "common/widgets/basic/input";
import { useState, ChangeEvent } from "react";
import { Text } from "common/widgets/basic/text";
import { Loader } from "common/loaders/loader";
import { Icon } from "common/media/icon";

export function Home() {
  const keyNotesNotNull = countryCardData.filter(
    (country) => country.key_consideration !== null
  );
  const keyNotesNull = countryCardData.filter(
    (country) => country.key_consideration === null
  );
  const keyNotes = [...keyNotesNotNull, ...keyNotesNull];

  const [countries, setCountries] = useState(keyNotes);
  const [search, setSearch] = useState<string>("");
  const [minCost, setMinCost] = useState<number | null>(null);
  const [maxCost, setMaxCost] = useState<number | null>(null);
  const [isFiltered, setIsFiltered] = useState<boolean>(true);
  const [hoverAnchor, setHoverAnchor] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredCountries = countryCardData.filter((country) =>
      country?.country_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  const handleMinCost = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsFiltered(false);
    const value = Number(e.target.value);
    const filterMinCostCountries = countryCardData.filter(
      (country) =>
        country.cost_of_living_single !== null &&
        country.cost_of_living_single !== undefined
    );
    const countries = filterMinCostCountries.filter((country: any) => {
      if (maxCost !== null) {
        return (
          country.cost_of_living_single >= value &&
          country.cost_of_living_single <= maxCost
        );
      } else {
        return country.cost_of_living_single >= value;
      }
    });
    setCountries(countries);
    setMinCost(value);
    setTimeout(() => {
      setIsFiltered(true);
    }, 500);
  };

  const handleMaxCost = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsFiltered(false);
    const value = Number(e.target.value);
    const filterMaxCostCountries = countryCardData.filter(
      (country) =>
        country.cost_of_living_single !== null &&
        country.cost_of_living_single !== undefined
    );
    const countries = filterMaxCostCountries.filter((country: any) => {
      if (minCost !== null) {
        return (
          country.cost_of_living_single >= minCost &&
          country.cost_of_living_single <= value
        );
      } else {
        return country.cost_of_living_single <= value;
      }
    });
    setCountries(countries);
    setMaxCost(value);
    setTimeout(() => {
      setIsFiltered(true);
    }, 500);
  };

  const handleSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const filterLivingCost = countryCardData.filter(
      (country) =>
        country.cost_of_living_single !== null &&
        country.cost_of_living_single !== undefined
    );
    if (value === "living-cost") {
      const sortedCountries = filterLivingCost.sort(
        (a: any, b: any) => a?.cost_of_living_single - b?.cost_of_living_single
      );
      setCountries(sortedCountries);
    }
    if (value === "a-z") {
      const sortedCountries = countryCardData.sort((a: any, b: any) =>
        a?.country_name.localeCompare(b?.country_name)
      );
      setCountries(sortedCountries);
    }
    if (value === "index-score") {
      const filterIndexScore = countryCardData.filter(
        (country) =>
          country.index_score !== null && country.index_score !== undefined
      );
      const sortedCountries = filterIndexScore.sort(
        (a: any, b: any) => a?.index_score - b?.index_score
      );
      setCountries(sortedCountries);
    }
  };

  const handleAnchorAuxiliary = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value === "anchor") {
      const filterAnchor = countryCardData.filter(
        (country) => country.type !== null && country.type !== undefined
      );
      const countries = filterAnchor.filter(
        (country: any) =>
          country.type === (value === "anchor" ? "Anchor" : false)
      );
      setCountries(countries);
    } else if (value === "auxiliary") {
      const filterAuxiliary = countryCardData.filter(
        (country) =>
          country.local_tax_on_foreign_income !== null &&
          country.local_tax_on_foreign_income !== undefined
      );
      const countries = filterAuxiliary.filter(
        (country) =>
          country.local_tax_on_foreign_income ===
          (value === "auxiliary" ? true : false)
      );
      setCountries(countries);
    } else {
      setCountries(keyNotes);
    }
  };

  const onMouseOverAnchor = () => {
    setHoverAnchor(true);
  };
  const onMouseLeaveAnchor = () => {
    setHoverAnchor(false);
  };

  return (
    <div>
      <DashboardHeader />
      <div className="mt-10 grid grid-cols-[100%] lg:grid-cols-[calc(35%-3rem),30%,35%] w-full gap-4">
        <Input
          variant="outline"
          icon="Search"
          containerClass="rounded-s-xl h-[3.5rem]"
          placeholder="Search country..."
          value={search}
          onChange={handleSearch}
        />
        <Flex className="flex-wrap sm:flex-nowrap">
          <Select
            data={minCostSelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleMinCost}
          />
          <Select
            data={maxCostSelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleMaxCost}
          />
        </Flex>
        <Flex className="flex-wrap sm:flex-nowrap">
          <Select
            data={anchorAuxiliarySelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleAnchorAuxiliary}
          />
          <Flex
            variant="rowStartCenter"
            className="gap-0 relative"
            onMouseOver={onMouseOverAnchor}
            onMouseLeave={onMouseLeaveAnchor}
          >
            <Text as="p" size="xs" text="Anchor?" className="mr-2" />
            <Icon icon="Info" size="xs" />
            {hoverAnchor && (
              <div className="absolute top-4 left-0 sm:left-auto sm:right-1 h-full z-10">
                <Text
                  as="p"
                  size="xs"
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                  className="text-white bg-dark-grey py-2 px-4 rounded-md"
                />
              </div>
            )}
          </Flex>
          <Select
            data={sortSelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleSortBy}
          />
        </Flex>
      </div>

      <Flex variant="rowCenterCenter" className="mt-6 min-h-8">
        <Loader type="BeatLoader" loading={!isFiltered} />
      </Flex>

      {countries.length > 0 ? (
        <Map
          type="CountryCard"
          data={countries}
          className="mb-40 flex-wrap justify-center"
        />
      ) : (
        <Text
          as="h2"
          size="xl"
          className="text-center text-red-600 mt-10"
          text="No country found"
        />
      )}
    </div>
  );
}
