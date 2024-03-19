import React from "react";
import { Text } from "common/widgets/basic/text";
import { Map } from "components/map";

export function Benefits({ detail }: any) {
  const {
    financial_benefits,
    lifestyle_points,
    key_consideration,
    Tagline,
    action_comment,
    country_name,
  } = detail;

  const financial_benefits_filtered = financial_benefits?.filter(
    (item: { benefit: null | string; description: null | string }) => {
      return item.benefit !== null || item.description !== null;
    }
  );
  const lifestyle_points_filtered = lifestyle_points?.filter(
    (item: { point: null | string; description: null | string }) => {
      return item.point !== null || item.description !== null;
    }
  );

  console.log("financial_benefits_filtered", financial_benefits_filtered);

  return (
    <div>
      <Text
        size="xl"
        as="h1"
        weight="bold"
        color="nile-blue"
        className="mt-10 leading-tight"
      >
        {country_name}: {Tagline}
      </Text>
      <Text
        as="h3"
        text={action_comment}
        size="lg"
        weight="bold"
        color="dark-grey"
        className="mt-10 leading-tight"
      />
      <Text
        as="p"
        text={key_consideration}
        size="sm"
        weight="regular"
        color="dark-grey"
        className="mt-10 leading-tight"
      />
      {financial_benefits_filtered?.length > 0 ||
        (lifestyle_points_filtered?.length > 0 && (
          <Text
            as="p"
            text="Financial Benefits Tailored for Digital Nomads: Greece rolls out the red carpet for digital nomads with its distinct financial advantages:"
            size="sm"
            weight="regular"
            color="dark-grey"
            className="mt-10 leading-tight"
          />
        ))}

      {financial_benefits_filtered?.length > 0 && (
        <>
          <Text
            as="h1"
            text="Financial Benefits"
            size="xl"
            weight="bold"
            color="nile-blue"
            className="mt-10 mb-5 leading-tight"
          />
          <Map
            type="BenefitCard"
            data={financial_benefits}
            className="flex-wrap"
          />
        </>
      )}
      {lifestyle_points_filtered?.length > 0 && (
        <>
          <Text
            as="h1"
            text="A Lifestyle That Inspires:"
            size="xl"
            weight="bold"
            color="nile-blue"
            className="mt-10 leading-tight mb-5"
          />
          <Map
            type="BenefitCard"
            data={lifestyle_points}
            className="flex-wrap"
          />
        </>
      )}
    </div>
  );
}
