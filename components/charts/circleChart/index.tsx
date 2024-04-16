import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CircleChart({ barData }: { barData: any[] }) {
  const completed = barData[1];
  const total = barData.reduce((acc, curr) => acc + curr, 0);
  const completionPercentage = ((completed / total) * 100).toFixed(2);

  const totalNumber = 330;

  const percentage = (barData[1] / totalNumber) * 100;
  const formattedPercentage = percentage.toFixed(2);

  const data = {
    labels: ["UnTracked", "Tracked", "United States"],
    datasets: [
      {
        label: "",
        data: barData,
        backgroundColor: ["#E9EDF7", "#4318FF", "#B0BBD5"],
        borderColor: ["#E9EDF7", "#4318FF", "#B0BBD5"],
        borderWidth: 0.1,
      },
    ],
    text: "Total: 9000+",
  };

  return (
    <div className="relative">
      <Doughnut
        id="myChart"
        data={data}
        options={{
          cutout: 60,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            arc: {
              borderRadius: 10,
            },
          },
        }}
      />
      <Flex
        variant="columnCenterCenter"
        className="absolute top-[35%] right-[50%] translate-x-[50%] gap-0 z-[-1]"
      >
        <Text
          as="p"
          size="sm"
          color="cold-purple"
          className="text-center"
          text="Conversion"
        />
        <Text
          as="p"
          size="xl"
          color="nile-blue"
          className="text-center"
          text={`${formattedPercentage}%`}
          weight="bold"
        />
      </Flex>
    </div>
  );
}
