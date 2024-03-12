import { Map } from "components/map";
import { countryCardData } from "data/static/cardData";
import { DashboardHeader } from "layout/header/dashboardHeader";
import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Select } from "common/widgets/basic/select";
import { anchorSelectData } from "data/static/selectData";
import { auxiliarySelectData } from "data/static/selectData";
import { Input } from "common/widgets/basic/input";

export function Home() {
  return (
    <div>
      <DashboardHeader />
      <div className="mt-10 grid grid-cols-[100%]  md:grid-cols-[calc(50%-10rem),50%,7.5rem] w-full gap-4">
        <Input
          variant="outline"
          icon="Search"
          containerClass="rounded-s-xl h-[3.5rem]"
        />
        <Flex>
          <Select data={anchorSelectData} containerClass="w-full h-[3.5rem]" />
          <Select
            data={auxiliarySelectData}
            containerClass="w-full h-[3.5rem]"
          />
        </Flex>
        <Flex>
          <Icon
            icon="Dashboard"
            variant="outline"
            className="h-[3.5rem] w-[3.75rem] p-4"
          />
          <Icon
            icon="Apps"
            variant="outline"
            className="h-[3.5rem] w-[3.75rem] p-3  bg-white"
          />
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
