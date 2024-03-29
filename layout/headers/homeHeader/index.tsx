import React from "react";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";
import { Button } from "common/widgets/basic/button";

export function LandingHeader() {
  return (
    <Flex
      variant="columnCenterStart"
      className={` p-10 mt-10 bg-cover bg-center h-[80vh]  from-dark-blue to-nile-blue rounded-[1.875rem]
            bg-[linear-gradient(to_right,rgba(134,139,255,.75),rgba(67,24,255,.75)),url("../public/assets/imgs/header.png")]`}
    >
      <Text
        size="4xl"
        as="h1"
        weight="semiBold"
        color="white"
        className="leading-tight text-4xl md:text-6xl"
      >
        The HR platform for global <br className="hidden md:block" />{" "}
        businesses!
      </Text>
      <Text
        size="lg"
        as="h2"
        weight="regular"
        color="white"
        className="leading-tight"
        text="Create an account to get the benefits!"
      />

      <Button text="Get Started!" link="/signup" className="mt-5" />
    </Flex>
  );
}
