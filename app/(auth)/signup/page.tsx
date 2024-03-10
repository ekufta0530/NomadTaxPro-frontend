import React from "react";
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
            link="/signup"
          />
          <Button
            variant="standard"
            text="Sign In"
            size="sm"
            className="text-purple-blue"
            link="/login"
          />
        </Flex>
        <Text
          as="h1"
          className="text-center"
          text="Create your account!"
          color="dark-blue"
          size="2xl"
          weight="semiBold"
        />
        <Input
          variant="solid-light-grey"
          label="First Name"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />
        <Input
          variant="solid-light-grey"
          label="Last Name"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
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
        <Input
          variant="solid-light-grey"
          label=" Confirm Password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
        />
        <Button
          variant="solid-dark-blue"
          text="Sign Up"
          size="md"
          className="text-white w-full sm:w-96 mt-2"
        />
      </Flex>
    </Flex>
  );
}
