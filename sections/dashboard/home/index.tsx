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
      <Flex variant="rowStartCenter" className=" py-5">
        <Input
          variant="outline"
          icon="Search"
          containerClass="rounded-s-xl mt-20 w-[53.75rem]  h-[3.75rem]"
        />
        <Select
          data={anchorSelectData}
          containerClass="mt-20 w-[15.313rem] h-[3.75rem]"
        />
        <Select
          data={auxiliarySelectData}
          containerClass="mt-20 w-[15.313rem] h-[3.75rem]"
        />

        <Icon
          icon="Dashboard"
          variant="outline"
          className="h-[3.75rem] w-[3.75rem] p-5 mt-20 "
        />
        <Icon
          icon="Apps"
          variant="outline"
          className="h-[3.75rem] w-[3.75rem] p-5 mt-20 bg-white"
        />
      </Flex>
      <Map type="CountryCard" data={countryCardData} />
    </div>
  );
}
