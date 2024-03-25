import React from "react";
import { Text } from "common/widgets/basic/text";
import { ScheduleListProps } from "types/lists";
import { formatDateRange } from "utils/helpers/date";

export function ScheduleList({
  country_name,
  dateFrom,
  dateTo,
  key_consideration,
}: ScheduleListProps) {
  return (
    <div className="bg-light-grey rounded-[1.065rem] py-5 px-4 w-full">
      <div className=" border-l-4  border-purple-blue">
        <Text
          as="h1"
          size="md"
          text={country_name}
          weight="semiBold"
          color="nile-blue"
          className="pl-3"
        />
        <Text
          as="p"
          size="xs"
          text={formatDateRange(dateFrom, dateTo)}
          weight="medium"
          color="cold-purple"
          className="pl-3"
        />
        <Text
          as="p"
          size="xs"
          text={key_consideration}
          weight="medium"
          color="dark-grey"
          className="pl-3"
        />
      </div>
    </div>
  );
}
