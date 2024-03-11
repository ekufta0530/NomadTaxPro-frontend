"use client";

import React, { useState, useEffect } from "react";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";
import { Toastify } from "common/loaders/toastify";
import { toast } from "react-toastify";
import { Loader } from "common/loaders/loader";
import { http } from "utils/http";
import { API } from "utils/api";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForgotPassword = async () => {
    setIsLoading(true);
    const { res, data } = await http.post(API.auth.resetPassword, { email });
    if (res.status === 201) {
      toast.info(data?.message);
      setIsLoading(false);
    } else {
      toast.error(data?.message);
      setIsLoading(false);
    }
  };

  return (
    <Flex variant="columnCenterCenter">
      <Toastify />
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
          text="Reset password"
          color="dark-blue"
          size="3xl"
          weight="semiBold"
        />
        <Input
          variant="solid-light-grey"
          label="Email"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Text
          as="p"
          className="text-start"
          text="Enter your email address and we will send you a link with instructions to change your password, please check spam if it does'nt appear in inbox"
          color="dark-blue"
          size="sm"
          weight="semiBold"
        />
        <Loader loading={isLoading} type="BarLoader" />
        <Button
          variant="solid-dark-blue"
          text="Reset"
          size="md"
          className="text-white w-full sm:w-96 mt-5"
          onClick={handleForgotPassword}
          disabled={isLoading}
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
