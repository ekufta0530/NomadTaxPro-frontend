"use client";

import React, { useState } from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import Image from "next/image";
import { FavoriteCountryCollapseProps } from "types/collapsibles";
import Link from "next/link";
import { formatDateRange } from "utils/helpers/date";

export function FavoriteCountryCollapse({
  id,
  dateFrom,
  dateTo,
  image,
  country_name,
  key_consideration,
}: FavoriteCountryCollapseProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [listId, setListId] = useState<number>(0);

  const handleCollapse = (id: number) => {
    setExpanded(listId === id && expanded ? false : true);
    setListId(id);
  };

  const expand = id === listId && expanded;

  return (
    <Flex
      variant="rowCenterStart"
      className="shadow-grey-xxs rounded-[1rem] p-5 w-full"
      onClick={() => handleCollapse(id as number)}
    >
      <div className="w-full">
        <Flex variant="rowBetweenCenter" className="w-full">
          <div>
            <Link
              href={`/dashboard/country-detail/${id}`}
              className="hover:underline"
            >
              <Text
                as="h1"
                text={country_name}
                size="lg"
                color="nile-blue"
                weight="bold"
              />
            </Link>
            <Text
              as="p"
              text={formatDateRange(dateFrom, dateTo)}
              size="sm"
              color="cold-purple"
              weight="medium"
            />
          </div>
          <Icon
            icon={expand ? "ChevronUpWhite" : "ChevronDownWhite"}
            size="sm"
            className="bg-purple-blue rounded-lg px-2 py-2"
          />
        </Flex>
        {expand && (
          <>
            <Image
              src={image}
              alt="albania"
              className="w-full max-h-[27rem] object-cover rounded-[1.875rem] my-10"
            />
            <Text
              as="p"
              text={key_consideration}
              size="sm"
              color="black"
              weight="regular"
            />
          </>
        )}
      </div>
    </Flex>
  );
}
