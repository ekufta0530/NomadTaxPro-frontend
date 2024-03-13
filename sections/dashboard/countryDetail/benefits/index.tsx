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

export function Benefits() {
  return (
    <div>
      <Text
        size="xl"
        as="h1"
        weight="bold"
        color="nile-blue"
        className="mt-10 leading-tight"
      >
        Greece: A Premier Destination for Digital Nomads Remember: Consult a Tax
        <br /> Professional for Personalized Advice!
      </Text>
      <Text
        as="h3"
        text="Embark on Your Greek Odyssey: The Ideal Digital Nomad Destination"
        size="lg"
        weight="bold"
        color="dark-grey"
        className="mt-10 leading-tight"
      />
      <Text
        as="p"
        text="Discover Greece, not just as a country but as an idyllic lifestyle choice for digital nomads. Renowned as a perfect anchor country, Greece marries financial incentives with a lifestyle that's both enriching and relaxing, making it a top choice for remote workers from across the globe."
        size="sm"
        weight="regular"
        color="dark-grey"
        className="mt-10 leading-tight"
      />
      <Text
        as="p"
        text="Financial Benefits Tailored for Digital Nomads: Greece rolls out the red carpet for digital nomads with its distinct financial advantages:"
        size="sm"
        weight="regular"
        color="dark-grey"
        className="mt-10 leading-tight"
      />
      <Text
        as="h1"
        text="Financial Benefits"
        size="xl"
        weight="bold"
        color="nile-blue"
        className="mt-10 leading-tight"
      />
      <Flex
        variant="columnCenterCenter"
        className="w-[23.188rem] h-[17.375rem] shadow-grey rounded-[1.25rem]"
      >
        <Icon icon="Sun" size="sm" />
        <Text
          as="h1"
          text="Sun-Kissed Climate"
          size="lg"
          weight="bold"
          color="nile-blue"
        />
        <Text
          as="p"
          text="Greece's Mediterranean climate promises sunny days, ideal for both productivity and relaxation."
          size="xs"
          weight="medium"
          color="cold-purple"
          className="px-12 text-center"
        />
      </Flex>
    </div>
  );
}
