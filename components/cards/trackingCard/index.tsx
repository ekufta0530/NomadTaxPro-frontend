import React, { useState } from "react";
import { Flex } from "common/widgets/advance/flex";
import { Text } from "common/widgets/basic/text";
import { CircleChart } from "components/charts/circleChart";
import { Button } from "common/widgets/basic/button";
import { useAuth } from "context/AuthContext";
import moment from "moment";
import { UpdatePeriod } from "./updatePeriod";

export function TrackingCard({ graphData }: { graphData: number[] }) {
  const { currentUser } = useAuth();

  return (
    <div className="w-[100%-3rem] shadow-grey-xxs px-2 lg:px-5 py-10  mx-5 rounded-[1.875rem]">
      <Flex variant="columnCenterCenter" className="gap-2">
        <Text
          as="h1"
          size="lg"
          text="Foreign Days"
          color="nile-blue"
          weight="bold"
        />
        <Text
          as="p"
          size="sm"
          text="Discover your profit, and learn more about your business "
          color="cold-purple"
          weight="medium"
          className="text-center mt-0"
        />
      </Flex>
      <div className="mt-5">
        <CircleChart barData={graphData} />
        <Text
          as="p"
          text="Period Start Date"
          color="dark-blue"
          weight="semiBold"
          className="text-center mt-2"
        />
        {currentUser && (
          <Flex variant="rowCenterCenter" className="mt-2">
            <Text
              as="p"
              text={moment(currentUser?.periodStartDate).format("DD MMMM YYYY")}
              color="cold-purple"
              weight="medium"
              className="text-center"
            />
            <Button
              text="Edit"
              className="text-[.7rem] px-3 py-[.1rem] rounded-xl w-14"
              link="/dashboard/tracker#update-period-modal"
            />
          </Flex>
        )}
      </div>
      <UpdatePeriod />
    </div>
  );
}
