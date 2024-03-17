import { FavoriteCountryList } from "components/lists/favoriteCountryList";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Select } from "common/widgets/basic/select";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { Img } from "common/media/img";
import { imgs } from "data/static/imgData";
import { Map } from "components/map";
import { Group } from "common/widgets/advance/group";
import Image from "next/image";

export default function Page() {
  const { albania } = imgs;
  return (
    <div>
      <FavoriteCountryList />
      <div className="shadow-grey-xs">
        <Flex variant="rowBetweenCenter" className="w-[49.063rem] ">
          <div>
            <Text
              as="h1"
              text="Albania"
              size="lg"
              color="nile-blue"
              weight="bold"
            />{" "}
            <Text
              as="p"
              text="15 Jan 2024- 21 Feb 2024 "
              size="sm"
              color="cold-purple"
              weight="medium"
            />
          </div>
          <Icon
            icon="ChevronDownWhite"
            size="sm"
            className="bg-purple-blue rounded-lg px-2 py-2"
          />
        </Flex>

        <Image
          src={albania}
          alt="albania"
          className="w-[49.063rem]  h-[27rem] object-cover rounded-[1.875rem] my-10"
        />
        <Text
          as="p"
          text="key_consideration "
          size="sm"
          color="black"
          weight="regular"
        />
      </div>
    </div>
  );
}
