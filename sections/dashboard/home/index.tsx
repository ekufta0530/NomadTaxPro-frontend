import { Map } from "components/map";
import { countryCardData } from "data/static/cardData";
import { DashboardHeader } from "layout/header/dashboardHeader";
import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Select } from "common/widgets/basic/select";
import {
  anchorSelectData,
  maxCostSelectData,
  minCostSelectData,
  sortSelectData,
} from "data/static/selectData";
import { auxiliarySelectData } from "data/static/selectData";
import { Input } from "common/widgets/basic/input";

export function Home() {
  return (
    <div>
      <DashboardHeader />
      <div className="mt-10 grid grid-cols-[100%] lg:grid-cols-[calc(35%-3rem),30%,35%] w-full gap-4">
        <Input
          variant="outline"
          icon="Search"
          containerClass="rounded-s-xl h-[3.5rem]"
          placeholder="Search country..."
        />
        <Flex className="flex-wrap sm:flex-nowrap">
          <Select data={minCostSelectData} containerClass="w-full h-[3.5rem]" />
          <Select data={maxCostSelectData} containerClass="w-full h-[3.5rem]" />
        </Flex>
        <Flex className="flex-wrap sm:flex-nowrap">
          <Select data={anchorSelectData} containerClass="w-full h-[3.5rem]" />
          <Select
            data={auxiliarySelectData}
            containerClass="w-full h-[3.5rem]"
          />
          <Select data={sortSelectData} containerClass="w-full h-[3.5rem]" />
        </Flex>
      </div>
      <Map
        type="CountryCard"
        data={countryCardData}
        className="mt-5 mb-40 flex-wrap justify-center"
      />
    </div>
  );
}
