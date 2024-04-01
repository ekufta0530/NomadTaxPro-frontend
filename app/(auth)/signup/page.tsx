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
import { validate } from "email-validator";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!validate(email)) {
      toast.error("Invalid email, please enter a valid email address");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      setIsLoading(true);
      const { res, data } = await http.post(API.auth.register, {
        firstName,
        lastName,
        email,
        password,
      });
      if (res.status === 201) {
        toast.info(data.message);
        setIsLoading(false);
      } else {
        toast.error(data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <Flex variant="columnCenterCenter">
      <Toastify />
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          variant="solid-light-grey"
          label="Last Name"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
        <Input
          variant="solid-light-grey"
          label=" Confirm Password"
          className="w-full sm:w-96"
          containerClass="w-full sm:w-96"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Loader loading={isLoading} type="BarLoader" />
        <Button
          variant="solid-dark-blue"
          text="Sign Up"
          size="md"
          className="text-white w-full sm:w-96 mt-2"
          onClick={handleSignUp}
          disabled={
            isLoading ||
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
          }
        />
      </Flex>
    </Flex>
  );
}
