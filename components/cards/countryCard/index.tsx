import React from "react";
import { Input } from "common/widgets/basic/input";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { imgs } from "data/static/imgData";
import { Img } from "common/media/img";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { Select } from "common/widgets/basic/select";
import { anchorSelectData } from "data/static/selectData";
import { auxiliarySelectData } from "data/static/selectData";
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
        <Icon
          icon="HeartOutline"
          size="sm"
          variant="circle"
          className="w-[2.25rem] h-[2.25rem] bg-white px-2 py-2"
        />
        <Icon
          icon="HeartFilled"
          size="sm"
          variant="circle"
          className="w-[2.25rem] h-[2.25rem] bg-white px-2 py-2"
        />
      </div>
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
    </>
  );
}
