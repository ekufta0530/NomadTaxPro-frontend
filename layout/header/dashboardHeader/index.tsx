import React from "react";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";

export function DashboardHeader() {
  return (
    <Flex
      variant="columnCenterStart"
      className={` mt-10 bg-cover bg-center h-80  from-dark-blue to-nile-blue rounded-[1.875rem]
            bg-[linear-gradient(to_right,rgba(134,139,255,.75),rgba(67,24,255,.75)),url("../public/assets/imgs/header.png")]`}
    >
      <Text
        size="4xl"
        as="h1"
        weight="semiBold"
        color="white"
        className="leading-tight ml-10"
      >
        The HR platform for global <br className="hidden md:block" />{" "}
        businesses!
      </Text>
    </Flex>
  );
}
