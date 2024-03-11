import React from "react";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { CountryCardProps } from "types/cards";

export function CountryCard({
  img,
  country,
  person,
  credits,
}: CountryCardProps) {
  return (
    <div className="py-5 px-5 w-[23.188rem] relative  shadow-grey rounded-[1.25rem]">
      <Image
        src={img}
        alt="anguilla"
        className="rounded-[1.125rem] h-[15.188rem] w-[20.563rem]"
      />
      <Text
        as="h1"
        className="text-left mt-10 "
        text={country}
        color="nile-blue"
        size="lg"
        weight="bold"
      />
      <Text
        as="p"
        className="text-left"
        text={person}
        color="cold-purple"
        size="sm"
        weight="regular"
      />
      <Flex variant="rowBetweenCenter" className="mt-10">
        <Text
          as="p"
          className="text-left"
          text={credits}
          color="purple-blue"
          size="sm"
          weight="bold"
        />
        <Button
          variant="solid-dark-blue"
          text="Learn More"
          size="sm"
          className="w-[6.625rem] h-[2.125rem] rounded-full text-sm"
        />
      </Flex>
      <Icon
        icon="HeartOutline"
        size="sm"
        variant="circle"
        className="w-[2.25rem] h-[2.25rem] bg-white px-2 py-2 absolute top-9 right-8"
      />
    </div>
  );
}
