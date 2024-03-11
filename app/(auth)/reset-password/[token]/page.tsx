"use client";

import React, { useState } from "react";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";
import { Toastify } from "common/loaders/toastify";
import { toast } from "react-toastify";
import { Loader } from "common/loaders/loader";
import { http } from "utils/http";
import { API } from "utils/api";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const { token } = useParams();
  const router = useRouter();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);
    const { res, data } = await http.post(API.auth.newPassword, {
      password,
      token,
    });
    if (res.status === 200) {
      toast.success(data?.message);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
      setIsLoading(true);
    } else {
      toast.error(data?.message);
      setIsLoading(true);
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          variant="solid-light-grey"
          label="Confirm password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Loader loading={isLoading} type="BarLoader" />
        <Button
          variant="solid-dark-blue"
          text="Reset Password"
          size="md"
          className="text-white w-full sm:w-96 mt-5"
          onClick={handleResetPassword}
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
