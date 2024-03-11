import React from "react";
import { Input } from "common/widgets/basic/input";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { imgs } from "data/static/imgData";
import { Img } from "common/media/img";
import { Icon } from "common/media/icon";
const { logo, profilePicture } = imgs;

export function DashboardNavbar() {
  return (
    <Flex
      variant="rowBetweenCenter"
      className="flex-wrap justify-center sm:justify-between sm:flex-nowrap mt-5 sm:mt-0"
    >
      <Image src={logo} alt="logo" />
      <Flex
        variant="rowStartCenter"
        className="shadow-grey-xs px-5 py-2 rounded-full"
      >
        <Input
          variant="rounded-light-grey"
          icon="Search"
          size="xs"
          className="h-10 w-20 sm:w-44"
        />
        <Icon icon="Notification" size="xs" />
        <Icon icon="Info" size="xs" />
        <Img img={profilePicture} variant="circle" size="md" />
      </Flex>
    </Flex>
  );
}
