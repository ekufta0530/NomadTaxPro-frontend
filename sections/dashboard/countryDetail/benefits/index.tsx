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
import { BenefitCard } from "components/cards/benefitCard";

export function Benefits({ financial_benefits, lifestyle_points }: any) {
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
      <Map type="BenefitCard" data={financial_benefits} className="flex-wrap" />
      <Text
        as="h1"
        text="A Lifestyle That Inspires:"
        size="xl"
        weight="bold"
        color="nile-blue"
        className="mt-10 leading-tight"
      />
      <Map type="BenefitCard" data={lifestyle_points} className="flex-wrap" />
    </div>
  );
}
