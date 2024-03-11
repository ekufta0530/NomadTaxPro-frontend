import React from "react";
import { Input } from "common/widgets/basic/input";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { imgs } from "data/static/imgData";
import { Img } from "common/media/img";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
const { profilePicture } = imgs;
export function CountryCard() {
  return (
    <>
      <div className="py-5 px-5 w-[23.188rem]  shadow-grey rounded-[1.25rem]">
        <Image
          src={profilePicture}
          alt="anguilla"
          className="rounded-[1.125rem] h-[15.188rem] w-[20.563rem]"
        />
        <Text
          as="h1"
          className="text-left mt-10 "
          text="Albania"
          color="nile-blue"
          size="lg"
          weight="bold"
        />
        <Text
          as="p"
          className="text-left"
          text="By Peter Will "
          color="cold-purple"
          size="sm"
          weight="regular"
        />
        <Flex variant="rowBetweenCenter" className="mt-10">
          <Text
            as="p"
            className="text-left"
            text="Tax Credits:$ 15.5k "
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
      </div>
    </>
  );
}
