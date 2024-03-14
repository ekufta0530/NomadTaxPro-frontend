"use client";

import React from "react";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { CountryCardProps } from "types/cards";
import { API } from "utils/api";
import { http } from "utils/http";
import { toast } from "react-toastify";
import { Toastify } from "common/loaders/toastify";
import { useAuth } from "context/AuthContext";
import { useCountry } from "context/CountryContext";

export function CountryCard({
  id,
  image,
  country_name,
  cost_of_living_single,
}: CountryCardProps) {
  const { currentUser } = useAuth();
  const { favoriteCountryIds, getFavoriteCountries } = useCountry();

  const handleFavoriteCountry = async () => {
    const alreadyFav = favoriteCountryIds.includes(id as never);
    const endpoint = alreadyFav ? "remove" : "add";
    const { res, data } = await http.post(
      API.country.favorite[endpoint],
      {
        userId: currentUser?._id,
        countryId: id,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 201) {
      toast.success(data?.message);
      if (currentUser) {
        getFavoriteCountries(currentUser?._id);
      }
    } else {
      toast.error(data?.message);
    }
  };

  return (
    <div className="py-5 px-5 w-[21.5rem] relative shadow-grey rounded-[1.25rem]">
      {image && (
        <Image
          src={image}
          alt="anguilla"
          className="rounded-[1.5rem] h-[15.188rem] w-[20.563rem] object-cover"
        />
      )}
      <Text
        as="h1"
        className="text-left mt-5"
        text={country_name}
        color="nile-blue"
        size="lg"
        weight="bold"
      />
      {/* <Text
        as="p"
        className="text-left mt-1"
        text={person}
        color="cold-purple"
        size="sm"
        weight="regular"
      /> */}
      <Flex variant="rowBetweenCenter" className="mt-5 mb-2">
        {cost_of_living_single && (
          <Text
            as="p"
            className="text-left"
            text={`Cost of living: $${cost_of_living_single}`}
            color="purple-blue"
            size="sm"
            weight="bold"
          />
        )}
        <Button
          variant="solid-dark-blue"
          text="Details"
          size="md"
          className="rounded-full text-sm"
          link={`/dashboard/country-detail/${id}`}
        />
      </Flex>
      <Icon
        icon={
          favoriteCountryIds?.some((countryId: number) => countryId === id)
            ? "HeartFilled"
            : "HeartOutline"
        }
        size="sm"
        variant="circle"
        className="border-none w-[2.25rem] h-[2.25rem] bg-white p-[.6rem] absolute top-9 right-8"
        onClick={handleFavoriteCountry}
      />
    </div>
  );
}
