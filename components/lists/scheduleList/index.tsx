import React from "react";
import { Text } from "common/widgets/basic/text";

export function ScheduleList() {
  return (
    <div className="bg-light-grey rounded-[1.065rem] py-5 px-4 ">
      <div className=" border-l-4  border-purple-blue">
        <Text
          as="h1"
          size="md"
          text="United Arab Emirates"
          weight="semiBold"
          color="nile-blue"
          className="pl-3"
        />
        <Text
          as="p"
          size="xs"
          text="15 Jan 2024- 21 Feb 2024"
          weight="medium"
          color="cold-purple"
          className="pl-3"
        />
      </div>
    </div>
  );
}
