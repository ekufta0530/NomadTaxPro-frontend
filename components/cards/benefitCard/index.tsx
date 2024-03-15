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
import { BenefitCardProps } from "types/cards";

export function BenefitCard({
  icon,
  point,
  benefit,
  description,
}: BenefitCardProps) {
  return (
    <Flex
      variant="columnStartCenter"
      className="w-[23.188rem]  shadow-grey rounded-[1.25rem] px-5 py-10 min-h-[20rem]"
    >
      <Icon icon={icon} size="sm" />
      <Text
        as="h1"
        text={point || benefit}
        size="lg"
        weight="semiBold"
        color="nile-blue"
        className="text-center"
      />
      <Text
        as="p"
        text={description}
        size="xs"
        weight="regular"
        color="cold-purple"
        className="text-center leading-5"
      />
    </Flex>
  );
}
