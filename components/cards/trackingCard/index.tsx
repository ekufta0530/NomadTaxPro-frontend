import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Text } from "common/widgets/basic/text";
import { CircleChart } from "components/charts/circleChart";

export function TrackingCard({ graphData }: { graphData: number[] }) {
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
      </div>
    </div>
  );
}
