import React from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
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
