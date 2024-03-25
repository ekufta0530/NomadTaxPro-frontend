import { Flex } from "common/widgets/advance/flex";
import React from "react";
import { imgs } from "data/static/imgData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "common/widgets/basic/button";

const { logo } = imgs;

export function LandingNavbar() {
  return (
    <Flex variant="rowBetweenCenter" className="px-0 sm:px-4 mt-4">
      <Link href="/dashboard">
        <Image src={logo} alt="logo" />
      </Link>
      <Flex variant="rowStartCenter" className="gap-1 sm:gap-4">
        <Button text="Signin" link="/login" />
        <Button text="Signup" link="/signup" />
      </Flex>
    </Flex>
  );
}
