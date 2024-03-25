"use client";

import { Map } from "components/map";
import { countryCardData } from "data/static/cardData";
import { DashboardHeader } from "layout/header/dashboardHeader";
import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Select } from "common/widgets/basic/select";
import {
  anchorSelectData,
  maxCostSelectData,
  minCostSelectData,
  sortSelectData,
} from "data/static/selectData";
import { auxiliarySelectData } from "data/static/selectData";
import { Input } from "common/widgets/basic/input";
import { useState, ChangeEvent } from "react";
import { Text } from "common/widgets/basic/text";
import { Loader } from "common/loaders/loader";

export function Home() {
  const [countries, setCountries] = useState(countryCardData);
  const [search, setSearch] = useState<string>("");
  const [minCost, setMinCost] = useState<number | null>(null);
  const [maxCost, setMaxCost] = useState<number | null>(null);
  const [isFiltered, setIsFiltered] = useState<boolean>(true);

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

  const handleAnchor = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const filterAnchor = countryCardData.filter(
      (country) => country.type !== null && country.type !== undefined
    );
    const countries = filterAnchor.filter(
      (country: any) => country.type === (value === "yes" ? "Anchor" : false)
    );
    setCountries(countries);
  };
  const handleAuxiliary = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const filterAuxiliary = countryCardData.filter(
      (country) =>
        country.local_tax_on_foreign_income !== null &&
        country.local_tax_on_foreign_income !== undefined
    );
    const countries = filterAuxiliary.filter(
      (country) =>
        country.local_tax_on_foreign_income === (value === "yes" ? true : false)
    );
    setCountries(countries);
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
            data={anchorSelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleAnchor}
          />
          <Select
            data={auxiliarySelectData}
            containerClass="w-full h-[3.5rem]"
            onChange={handleAuxiliary}
          />
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
