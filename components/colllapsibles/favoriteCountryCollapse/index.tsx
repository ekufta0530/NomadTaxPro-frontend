"use client";

import React, { useState } from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import Image from "next/image";
import { FavoriteCountryCollapseProps } from "types/collapsibles";
import Link from "next/link";
import { formatDateRange } from "utils/helpers/date";
import { Button } from "common/widgets/basic/button";
import { useCountry } from "context/CountryContext";

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
  const {
    getEditId,
    getEditCountryName,
    getEditCountryEndDate,
    getEditCountryStartDate,
  } = useCountry();

  const handleCollapse = (id: number) => {
    setExpanded(listId === id && expanded ? false : true);
    setListId(id);
  };

  const handleEditClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (getEditId) {
      getEditId(id as number);
    }
    if (getEditCountryName) {
      getEditCountryName(country_name);
    }
    if (getEditCountryStartDate) {
      getEditCountryStartDate(dateFrom);
    }
    if (getEditCountryEndDate) {
      getEditCountryEndDate(dateTo);
    }
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
            <Flex variant="rowStartStart">
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
                  className="mt-0 pt-0"
                />
              </Link>
              <Link
                href={"/dashboard/tracker#stay-modal"}
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                  handleEditClick(e)
                }
              >
                <Button
                  variant="rounded-dark-blue"
                  size="xs"
                  text="Edit"
                  className="mt-0 text-[.7rem] px-3 py-[.1rem] rounded-xl"
                />
              </Link>
            </Flex>
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
