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

export default function page() {
  return (
    <div className="w-[21.875rem] shadow-grey rounded-[1.875rem]">
      <Flex variant="rowBetweenCenter" className="px-4 py-4 ">
        <Text
          as="h1"
          size="lg"
          text="Schedule"
          color="nile-blue"
          weight="bold"
        />
        <Flex variant="rowStartCenter" className="gap-2">
          <Text
            as="p"
            size="sm"
            text="View all "
            color="purple-blue"
            weight="medium"
          />
          <Icon icon="KeyboardRightBlue" size="xs" />
        </Flex>
      </Flex>
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
          className="w-[15rem] text-center mt-0"
        />
      </Flex>
      <Flex variant="rowStartCenter" className=" mt-10 px-5 py-5   ">
        <Flex variant="columnStartStart" className="gap-1">
          <Text
            as="p"
            size="sm"
            text="Est. Total"
            color="cold-purple"
            weight="medium"
          />
          <Text as="h1" size="lg" text="1540" color="nile-blue" weight="bold" />
        </Flex>
        <Flex
          variant="columnStartStart"
          className="gap-1 border-l border-light-grey ml-7"
        >
          <Text
            as="p"
            size="sm"
            text="Est. Tax"
            color="cold-purple"
            weight="medium"
            className="ml-5"
          />
          <Text
            as="h1"
            size="lg"
            text="$3.984"
            color="nile-blue"
            weight="bold"
            className="ml-5"
          />
        </Flex>
      </Flex>
    </div>
  );
}
