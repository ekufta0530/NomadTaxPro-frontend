import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Text } from "common/widgets/basic/text";
import Image from "next/image";
import { Benefits } from "./benefits";

export function CountryDetail({ detail }: { detail: any }) {
  const {
    image,
    Tax_rates,
    reduction_rate,
    Reduced_rate,
    financial_benefits,
    lifestyle_points,
  } = detail;

  return (
    <>
      <Flex
        variant="rowStartStart"
        className="mt-20 w-full flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start "
      >
        <div className="w-full lg:w-[calc(100%-23rem)] h-[20rem] sm:h-[30rem] lg:h-[35rem] ">
          <Image
            src={image}
            alt="greece1"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <Flex variant="columnStartStart" className="w-[23rem] h-full">
          <div className="w-full  rounded-[1.25rem] shadow-grey-xs  px-8 py-5">
            <Text
              as="h1"
              text="Standard Rates"
              size="xl"
              weight="medium"
              color="nile-blue"
              className="text-center mt-5"
            />
            <Text
              as="p"
              text="These tax rates are indicative and subject to change. Consulting a tax professional is crucial for accurate and personalized advice."
              size="sm"
              className="regular text-center mt-4 mb-5"
              color="cold-purple"
            />
            {Tax_rates?.map(
              (
                {
                  Standard_rate_range_min,
                  Standard_rate_range_max,
                  Standard_rate_percentage,
                }: any,
                index: number
              ) => (
                <Flex
                  variant="rowBetweenCenter"
                  className="w-full my-5"
                  key={index}
                >
                  <Text
                    as="p"
                    text={`${Standard_rate_range_min} - ${Standard_rate_range_max}`}
                    size="sm"
                    className="bold"
                    color="cold-purple"
                  />
                  <Text
                    as="p"
                    text={`${Standard_rate_percentage}%`}
                    size="sm"
                    className="bold "
                    color="nile-blue"
                  />
                </Flex>
              )
            )}
          </div>
          <div className="w-full  mt-10 rounded-[1.25rem] shadow-grey-xs px-8 py-5">
            <Text
              as="h1"
              text={`With ${reduction_rate}% Reduction`}
              size="xl"
              className="bold text-center"
              color="nile-blue"
            />
            <Text
              as="h1"
              text="(Estimated)"
              size="xl"
              className="bold text-center mb-10"
              color="nile-blue"
            />
            {Reduced_rate?.map(
              (
                {
                  Reduced_rate_range_min,
                  Reduced_rate_range_max,
                  Reduced_rate_percentage,
                }: any,
                index: number
              ) => (
                <Flex
                  variant="rowBetweenCenter"
                  className="w-full my-5"
                  key={index}
                >
                  <Text
                    as="p"
                    text={`${Reduced_rate_range_min} - ${Reduced_rate_range_max}`}
                    size="sm"
                    className="bold"
                    color="cold-purple"
                  />
                  <Text
                    as="p"
                    text={`${Reduced_rate_percentage}%`}
                    size="sm"
                    className="bold "
                    color="nile-blue"
                  />
                </Flex>
              )
            )}
          </div>
        </Flex>
      </Flex>
      <Benefits detail={detail} />
    </>
  );
}
