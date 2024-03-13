import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Select } from "common/widgets/basic/select";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { Img } from "common/media/img";
import { imgs } from "data/static/imgData";
import { Map } from "components/map";
import { Group } from "common/widgets/advance/group";
import Image from "next/image";
import { Benefits } from "./benefits";

export function CountryDetail() {
  const { greece1 } = imgs;
  return (
    <>
      <Flex
        variant="rowStartStart"
        className="mt-20 w-full flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start "
      >
        <div className="w-full lg:w-[calc(100%-25rem)] h-[20rem] sm:h-[30rem] lg:h-[40rem] ">
          <Image
            src={greece1}
            alt="greece1"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <Flex variant="columnStartStart" className="w-[25rem] h-full">
          <div className="w-full h-[23rem] rounded-[1.25rem] shadow-grey-xs  px-3">
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
              className="regular text-center px-4 mt-2"
              color="cold-purple"
            />
            <Flex variant="rowBetweenCenter" className="w-full mt-10">
              <Text
                as="p"
                text="Up to €10,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="9%"
                size="sm"
                className="bold "
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€10,001 - €20,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="22%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€20,001 - €30,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="28%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€30,001 - €40,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="36%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="Over €40,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="44%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
          </div>
          <div className="w-full h-[20rem] mt-10 rounded-[1.25rem] shadow-grey-xs px-3 ">
            <Text
              as="h1"
              text="With 50% Reduction"
              size="xl"
              className="bold text-center"
              color="nile-blue"
            />
            <Text
              as="h1"
              text="(Estimated)"
              size="xl"
              className="bold text-center"
              color="nile-blue"
            />
            <Flex variant="rowBetweenCenter" className="w-full mt-8">
              <Text
                as="p"
                text="Up to €10,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="4.5%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€10,001 - €20,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="11%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€20,001 - €30,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="14%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="€30,001 - €40,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="18%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
            <Flex variant="rowBetweenCenter" className="w-full">
              <Text
                as="p"
                text="Over €40,000"
                size="sm"
                className="bold"
                color="cold-purple"
              />
              <Text
                as="p"
                text="22%"
                size="sm"
                className="bold"
                color="nile-blue"
              />
            </Flex>
          </div>
        </Flex>
      </Flex>
      <Benefits />
    </>
  );
}
