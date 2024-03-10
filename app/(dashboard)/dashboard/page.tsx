import React from "react";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { imgs } from "data/static/imgData";
import { Img } from "common/media/img";
import { Icon } from "common/media/icon";

export default function Page() {
  const { logo, profilePicture } = imgs;
  return (
    <Flex variant="rowBetweenCenter">
      <Image src={logo} alt="logo" />
      <Flex
        variant="rowStartCenter"
        className="shadow-grey px-5 py-5 rounded-full "
      >
        <Input
          variant="rounded-light-grey"
          icon="Search"
          size="xs"
          className="h-10"
        />
        <Icon icon="Notification" size="xs" />
        <Icon icon="Info" size="xs" />

        <Img
          img={profilePicture}
          variant="circle"
          size="sm"
          className="rounded-full w-6 h-6"
        />
      </Flex>
    </Flex>
  );
}
