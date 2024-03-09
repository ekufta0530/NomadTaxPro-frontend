import React from "react";
import { Icon } from "common/media/icon";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";

export default function SignUpPage() {
  return (
    <Flex variant="columnCenterCenter">
      <Flex
        variant="columnCenterCenter"
        className="p-5 sm:p-10 shadow-2xl w-[calc(100%-1rem)] mt-10  mx-2 sm:w-[30rem]  rounded-xl"
      >
        <Flex variant="rowStartCenter" className="gap-10">
          <Button
            variant="solid-dark-blue"
            text="Sign Up"
            size="md"
            className="text-white w-32"
          />
          <Button
            variant="standard"
            text="Sign In"
            size="sm"
            className="text-purple-blue"
          />
        </Flex>
        <Text
          as="h1"
          className="text-center"
          text="Welcome back!"
          color="dark-blue"
          size="2xl"
          weight="semiBold"
        />
        <Input
          variant="solid-light-grey"
          label="Email"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />
        <Input
          variant="solid-light-grey"
          label="Password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />
        <Flex
          variant="columnStartStart"
          className="mt-1 mb-8  gap-10 py-2 px-2"
        >
          <Text
            as="p"
            className="text-start"
            text="Forgot Password"
            color="dark-blue"
            size="sm"
            weight="semiBold"
          />
          <Button
            variant="solid-dark-blue"
            text="Sign Up"
            size="md"
            className="text-white w-full sm:w-96 mt-2"
          />
        </Flex>
        <Button
          variant="standard"
          text="Don't have an account? Sign Up"
          className="w-full sm:w-96 bg-light-grey text-left"
          size="md"
        />
      </Flex>
    </Flex>
  );
}
