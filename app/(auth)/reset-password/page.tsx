import React from "react";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";

export default function Page() {
  return (
    <Flex variant="columnCenterCenter">
      <Flex
        variant="columnCenterStart"
        className="p-5 sm:p-10 shadow-2xl w-[calc(100%-1rem)] mt-10  mx-2 sm:w-[30rem]  rounded-xl"
      >
        <Flex variant="rowCenterCenter" className="gap-10 w-full">
          <Button
            variant="solid-dark-blue"
            text="Sign In"
            size="md"
            className="text-white w-32"
            link="/login"
            color="dark-blue"
          />
          <Button
            variant="standard"
            text="Sign Up"
            size="sm"
            link="/signup"
            className="text-purple-blue"
          />
        </Flex>
        <Text
          as="h1"
          className="text-center w-full"
          text="New password"
          color="dark-blue"
          size="3xl"
          weight="semiBold"
        />
        <Input
          variant="solid-light-grey"
          label="New password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />

        <Input
          variant="solid-light-grey"
          label="Confirm password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />

        <Button
          variant="solid-dark-blue"
          text="Set password"
          size="md"
          className="text-white w-full sm:w-96 mt-5"
        />
        <Flex className="px-4  bg-light-grey w-full gap-0 mt-5">
          <Text as="p" text="Login instead?" size="sm" />
          <Button
            variant="standard"
            text="Login"
            size="md"
            color="dark-blue"
            link="/signup"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
