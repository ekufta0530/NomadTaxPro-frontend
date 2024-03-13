"use client";

import React, { useState } from "react";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Flex } from "common/widgets/advance/flex";
import { http } from "utils/http";
import { API } from "utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Toastify } from "common/loaders/toastify";
import { Loader } from "common/loaders/loader";
import { useAuth } from "context/AuthContext";

export default function Page() {
  const { getCurrentUser } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    const { res, data } = await http.post(API.auth.login, {
      email,
      password,
    });
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      getCurrentUser(data);
      router.push("/dashboard");
      setIsLoading(false);
    } else {
      toast.error(data.message);
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
          text="Welcome back!"
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
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          variant="solid-light-grey"
          label="Password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="self-start w-full"
          text="Forgot Password?"
          color="dark-blue"
          size="sm"
          weight="semiBold"
          variant="standard"
          link="/forgot-password"
        />
        <Loader loading={isLoading} type="BarLoader" />
        <Button
          variant="solid-dark-blue"
          text="Login"
          size="md"
          className="text-white w-full sm:w-96 mt-5"
          onClick={handleLogin}
        />
        <Flex className="px-4  bg-light-grey w-full gap-0 mt-5">
          <Text as="p" text="Don't have an account?" size="sm" />
          <Button
            variant="standard"
            text="Sign Up"
            size="md"
            color="dark-blue"
            link="/signup"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
