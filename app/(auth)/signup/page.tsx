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
        className=" px-10 py-10 shadow-2xl w-96 bottom-4 rounded-xl"
      >
        <Flex variant="rowStartCenter" className="gap-6">
          <Button
            variant="standard"
            text="Sign In"
            size="sm"
            className="text-purple-blue  w-40"
          />
          <Button
            variant="solid-dark-blue"
            text="Sign Up"
            size="sm"
            className="text-white w-40"
          />
        </Flex>
        <Input variant="solid-light-grey" label="First Name" className="w-80" />
        <Input variant="solid-light-grey" label="Last Name" className="w-80" />
        <Input variant="solid-light-grey" label="Email" className="w-80" />
        <Input variant="solid-light-grey" label="Password" className="w-80" />
        <Input
          variant="solid-light-grey"
          label=" Confirm Password"
          className="w-80"
        />{" "}
        <Button
          variant="solid-dark-blue"
          text="Sign Up"
          size="sm"
          className="text-white w-[100%] mt-16"
        />
      </Flex>
    </Flex>
  );
}
